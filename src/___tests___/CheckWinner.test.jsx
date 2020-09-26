/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from '../App';

describe('Velg et våpen og se at noen vinner til slutt', () => {
  // Vi må bruke jest.fn for createPortal pga at vi bruker en modal
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => element);
  });

  test('Velg et våpen flere ganger og se at noen vinner til slutt', async () => {
    render(<App />);

    await waitFor(() => {
      userEvent.click(screen.queryByRole('button', { name: /stein/i }));
      userEvent.click(screen.queryByRole('button', { name: /saks/i }));
      userEvent.click(screen.queryByRole('button', { name: /saks/i }));
      userEvent.click(screen.queryByRole('button', { name: /saks/i }));
      userEvent.click(screen.queryByRole('button', { name: /saks/i }));
      userEvent.click(screen.queryByRole('button', { name: /saks/i }));
      userEvent.click(screen.queryByRole('button', { name: /saks/i }));
      userEvent.click(screen.queryByRole('button', { name: /saks/i }));
      userEvent.click(screen.queryByRole('button', { name: /saks/i }));
    });

    expect(screen.queryByRole('button', { name: /stein/i })).toBeNull();
  });
});
