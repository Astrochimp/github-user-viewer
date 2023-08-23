import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserDetail } from "../src/components/UserDetail";
import { GHUser } from '../src/types/github';

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
    render(<UserDetail user={user} />);
    const wrapper = screen.getByTestId('user-detail-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});
