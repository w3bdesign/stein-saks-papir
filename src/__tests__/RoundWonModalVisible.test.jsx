import '@testing-library/jest-dom';

import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import App from '../App';

/**
 * Her tester vi at modal som dukker opp når vi har valgt et våpen fungerer som det skal
 * Vi klikker på hver enkelt knapp (stein, saks og papir) og kjører en test
 */

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
