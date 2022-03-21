/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from '../App';

describe('Sjekk at "Motstander valgte" er synlig når vi velger et våpen', () => {
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

  test('Sjekk at "Motstander valgte" er synlig hvis vi klikker stein', () => {
    render(<App />);

    userEvent.click(screen.getByRole('button', { name: /stein/i }));
    expect(
      screen.getByRole('heading', { name: /motstander valgte:/i }),
    ).toBeVisible();
  });

  test('Sjekk at "Motstander valgte" er synlig hvis vi klikker papir', () => {
    render(<App />);

    userEvent.click(screen.getByRole('button', { name: /papir/i }));
    expect(
      screen.getByRole('heading', { name: /motstander valgte:/i }),
    ).toBeVisible();
  });
});
