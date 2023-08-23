import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFound } from "../src/components/NotFound";
import { BrowserRouter } from 'react-router-dom';

describe('Not Found', () => {
  it('renders NotFound', () => {
    render(<BrowserRouter><NotFound /></BrowserRouter>);
    const wrapper = screen.getByTestId('notfound-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});
