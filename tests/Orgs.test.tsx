import React from 'react';
import { Orgs } from "../src/components/Orgs";
import { act, render, screen, userEvent } from '../src/utils/test-utils';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { GHOrgs } from '../src/types/github';

const mockOrgs: GHOrgs[] = [{
  id: '123',
  avatar_url: '/image.png',
  url: 'https://www.google.com',
  login: 'hello123',
  repos_url: 'https://github.com/1234',
}];

vi.mock('../src/lib/services.ts', () => ({
  getUserOrgs: () => Promise.resolve(mockOrgs),
}));

describe('Orgs', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders blank organizations', async () => {
    render(<Orgs userId="One" />);
    const wrapper = screen.getByTestId('orgs-wrapper-no-results');
    expect(wrapper).toBeInTheDocument();
  });

  it('renders organizations', async () => {
    render(<Orgs userId="One" />);
    expect(await screen.findByText("Organizations")).toBeInTheDocument();
    expect(await screen.getByTestId("orgs-wrapper")).toBeInTheDocument();
    expect(await screen.getByTestId("org-image")).toBeInTheDocument();
  });
});
