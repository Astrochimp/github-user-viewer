import React from 'react';
import { Followers } from "../src/components/Followers";
import { afterEach, describe, expect, it, vi } from 'vitest';
import { act, render, screen, userEvent } from '../src/utils/test-utils';
import { GHUser } from '../src/types/github';
import { BrowserRouter } from 'react-router-dom';

const mockUsers: GHUser[] = [{
  id: '123',
  name: 'ghuser',
  company: 'general electric',
  location: 'New York',
  avatar_url: '/img.png',
  login: 'ghuser',
  followers: '23'
}];

vi.mock('../src/lib/services.ts', () => ({
  getUserFollowers: () => Promise.resolve(mockUsers),
}));


describe('Followers', () => {

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders followers wrapper', () => {
    render(<BrowserRouter><Followers userId="One" total="123" /></BrowserRouter>);
    const wrapper = screen.getByTestId('follower-wrapper');
    expect(wrapper).toBeInTheDocument();
  });

  it('renders followers', async () => {
    render(<BrowserRouter><Followers userId="One" total="123" /></BrowserRouter>);
    expect(await screen.findByText("Followers")).toBeInTheDocument();
    expect(await screen.findByText("123")).toBeInTheDocument();
    expect(await screen.getByTestId("follower-wrapper")).toBeInTheDocument();
    expect(await screen.getByTestId("follower-image")).toBeInTheDocument();
  });
});
