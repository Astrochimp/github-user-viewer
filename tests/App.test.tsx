import React from 'react';
import { render, screen } from '@testing-library/react';
import App from "../src/App";

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    const wrapper = screen.getByTestId('app-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});
