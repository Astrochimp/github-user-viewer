import React from 'react';
import { render, screen } from '@testing-library/react';
import { Orgs } from "../src/components/Orgs";

describe('Orgs', () => {
  it('renders organizations', () => {
    render(<Orgs userId="One" />);
    const wrapper = screen.getByTestId('orgs-wrapper-no-results');
    expect(wrapper).toBeInTheDocument();
  });
});
