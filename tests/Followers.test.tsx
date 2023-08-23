import React from 'react';
import { render, screen } from '@testing-library/react';
import { Followers } from "../src/components/Followers";

describe('Followers', () => {
  it('renders followers', () => {
    render(<Followers userId="One" total="123" />);
    const wrapper = screen.getByTestId('follower-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});
