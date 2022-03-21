/* eslint-disable no-undef */
import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('Velg et våpen og se at spillet fungerer', () => {
  test('Sjekk at "Motstander valgte" ikke er synlig hvis vi ikke har klikket noen knapp', () => {
    render(<App />);

    expect(
      screen.queryByRole('heading', { name: /motstander valgte:/i }),
    ).toBeNull();
  });

  test('Sjekk at "Motstander valgte" er synlig hvis vi klikker saks', () => {
    render(<App />);

    userEvent.click(screen.getByRole('button', { name: /saks/i }));
    expect(
      screen.getByRole('heading', { name: /motstander valgte:/i }),
    ).toBeVisible();
  });
});
