import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';

import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from '../App';

import ShowWinner from './ShowWinner';

/**
 * Her tester vi at modal som dukker opp når vi har valgt et våpen fungerer som det skal
 * Vi klikker på hver enkelt knapp (stein, saks og papir) og kjører en test
 */

describe('Sjekk at "Motstander valgte" er synlig når vi velger et våpen', () => {
  test('Sjekk at "Motstander valgte" ikke er synlig hvis vi ikke har klikket noen knapp', () => {
    render(<App />);

    expect(screen.queryByRole('heading', { name: /motstander valgte:/i })).toBeNull();
  });

  test('Sjekk at "Motstander valgte" er synlig hvis vi klikker saks', async () => {
    render(<App />);

    await userEvent.click(screen.getByRole('button', { name: /saks/i }));
    expect(screen.getByRole('heading', { name: /motstander valgte:/i })).toBeVisible();
  });

  test('Sjekk at "Motstander valgte" er synlig hvis vi klikker stein', async () => {
    render(<App />);

    await userEvent.click(screen.getByRole('button', { name: /stein/i }));
    expect(screen.getByRole('heading', { name: /motstander valgte:/i })).toBeVisible();
  });

  test('Sjekk at "Motstander valgte" er synlig hvis vi klikker papir', async () => {
    render(<App />);

    await userEvent.click(screen.getByRole('button', { name: /papir/i }));
    expect(screen.getByRole('heading', { name: /motstander valgte:/i })).toBeVisible();
  });

  test('Sjekk at lukkeknappen er synlig i vinnermodalen', async () => {
    render(<App />);

    await userEvent.click(screen.getByRole('button', { name: /papir/i }));

    expect(screen.getByRole('button', { name: /close/i }).toBeVisible);
  });

  test('Trykk lukkeknappen og sjekk at den ikke lenger eksisterer', async () => {
    render(<App />);

    await userEvent.click(screen.getByRole('button', { name: /papir/i }));

    expect(screen.queryByRole('button', { name: /close/i }).toBeNull);
  });

  test('Kaller setShowWinnerModal med false når modal er trykket på', () => {
    const setShowWinnerModalMock = jest.fn();
    const { getByTestId } = render(
      <ShowWinner
        showWinnerModal={true}
        setShowWinnerModal={setShowWinnerModalMock}
        computerSelected="Stein"
        winner="Player"
      />
    );

    const modal = getByTestId('modalId');
    fireEvent.click(modal);

    expect(setShowWinnerModalMock).toHaveBeenCalledWith(false);
  });
});
