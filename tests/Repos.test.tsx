import React from 'react';
import { Repos } from "../src/components/Repos";
import { afterEach, describe, expect, it, vi } from 'vitest';
import { act, render, screen, userEvent } from '../src/utils/test-utils';
import { GHRepo } from '../src/types/github';

const mockRepos: GHRepo[] = [{
  full_name: 'jquery-revenge',
  html_url: 'https://github.com/jquery/revenge',
  stargazers_count: '100000000',
  language: 'zig',
}];

vi.mock('../src/lib/services.ts', () => ({
  getUserRepos: () => Promise.resolve(mockRepos),
}));


describe('Followers', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders followers wrapper', () => {
    render(<Repos userId="One" />);
    const wrapper = screen.getByTestId('repo-wrapper');
    expect(wrapper).toBeInTheDocument();
  });

  it('renders followers', async () => {
    render(<Repos userId="One" />);
    expect(await screen.findByText("Repos")).toBeInTheDocument();
    expect(await screen.getByTestId("repo-wrapper")).toBeInTheDocument();
    expect(await screen.findByText("zig")).toBeInTheDocument();
    expect(await screen.findByText("jquery-revenge")).toBeInTheDocument();
  });
});
