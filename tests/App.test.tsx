import React from 'react';
import { render, screen } from '@testing-library/react';
import App from "../src/App";
import { BrowserRouter } from "react-router-dom";

describe('App', () => {
  it('renders headline', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const wrapper = screen.getByTestId('app-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});
