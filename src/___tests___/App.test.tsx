/* eslint-disable no-undef */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { render, screen } from '@testing-library/react';

import App from '../App';
import Header from '../components/Header/Header.component';

describe('Sjekk at alle nødvendige elementer er på plass i dokumentet', () => {
  test('Sjekk at navbar er på plass', () => {
    const { getByRole } = render(<Header />);
    const Navbar = getByRole('heading', { name: /Stein Saks Papir/i });
    expect(Navbar).toBeInTheDocument();
  });

  test('Sjekk at saks er på plass', () => {
    const { getByTestId } = render(<App />);
    const Saks = getByTestId('saks');
    expect(Saks).toBeInTheDocument();
  });

  test('Sjekk at stein er på plass', () => {
    const { getByTestId } = render(<App />);
    const Stein = getByTestId('stein');
    expect(Stein).toBeInTheDocument();
  });

  test('Sjekk at papir er på plass', () => {
    const { getByTestId } = render(<App />);
    const Papir = getByTestId('stein');
    expect(Papir).toBeInTheDocument();
  });

  test('Sjekk at poengtavle er på plass', () => {
    const { getByRole } = render(<App />);
    const Poengtavle = getByRole('heading', { name: /poengtavle/i });
    expect(Poengtavle).toBeInTheDocument();
  });
});
