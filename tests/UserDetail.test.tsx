import React from 'react';
import { UserDetail } from "../src/components/UserDetail";
import { BrowserRouter } from 'react-router-dom';
import { GHRepo, GHUser } from '../src/types/github';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { act, render, screen, userEvent } from '../src/utils/test-utils';

const user: GHUser = {
  id: '123',
  company: 'company',
  location: "New York",
  avatar_url: "https://www.google.com",
  login: 'One',
  followers: '23',
  name: 'One',
};


describe('UserDetail', () => {
  it('renders UserDetail', () => {
    render(<BrowserRouter><UserDetail user={user} /></BrowserRouter>);
    const wrapper = screen.getByTestId('user-detail-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});
