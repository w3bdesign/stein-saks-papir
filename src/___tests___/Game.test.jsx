/* eslint-disable no-undef */
import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

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

describe('Klikk reset knappen og se at spillet resettes', () => {
  test('Klikk "Resett spill" og se at score for spiller 1 er 0', () => {
    render(<App />);

    userEvent.click(screen.getByRole('button', { name: /restart spill/i }));
    expect(screen.getByTestId('score-p0')).toHaveTextContent('0');
  });

  test('Klikk "Resett spill" og se at score for spiller 2 er 0', () => {
    render(<App />);

    userEvent.click(screen.getByRole('button', { name: /restart spill/i }));
    expect(screen.getByTestId('score-p1')).toHaveTextContent('0');
  });
});
