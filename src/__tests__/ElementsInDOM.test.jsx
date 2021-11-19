import React from 'react';

import { render } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';

import App from '../App';
import Header from '../components/Layout/Header/Header.component';

describe('Sjekk at alle nødvendige elementer er på plass i dokumentet', () => {
  test('Sjekk at navbar er på plass', () => {
    const { getByRole } = render(<Header />);
    const Navbar = getByRole('heading', { name: /Stein Saks Papir/i });
    expect(Navbar).toBeInTheDocument();
  });

  test('Sjekk at saks er på plass', () => {
    const { getByRole } = render(<App />);
    const Saks = getByRole('button', { name: /saks/i });
    expect(Saks).toBeInTheDocument();
  });

  test('Sjekk at saksDiv er på plass', () => {
    const { getByTestId } = render(<App />);
    const SaksDiv = getByTestId('SaksDiv');
    expect(SaksDiv).toBeInTheDocument();
  });

  test('Sjekk at stein er på plass', () => {
    const { getByRole } = render(<App />);
    const Stein = getByRole('button', { name: /stein/i });
    expect(Stein).toBeInTheDocument();
  });

  test('Sjekk at steinDiv er på plass', () => {
    const { getByTestId } = render(<App />);
    const SteinDiv = getByTestId('SteinDiv');
    expect(SteinDiv).toBeInTheDocument();
  });

  test('Sjekk at papir er på plass', () => {
    const { getByRole } = render(<App />);
    const Papir = getByRole('button', { name: /papir/i });
    expect(Papir).toBeInTheDocument();
  });

  test('Sjekk at papirDiv er på plass', () => {
    const { getByTestId } = render(<App />);
    const PapirDiv = getByTestId('PapirDiv');
    expect(PapirDiv).toBeInTheDocument();
  });

  test('Sjekk at poengtavle er på plass', () => {
    const { getByRole } = render(<App />);
    const Poengtavle = getByRole('heading', { name: /poengtavle/i });
    expect(Poengtavle).toBeInTheDocument();
  });

  test('Sjekk at poengoversikt er på plass', () => {
    const { getByRole } = render(<App />);
    const Poengoversikt = getByRole('heading', { name: /poengoversikt/i });
    expect(Poengoversikt).toBeInTheDocument();
  });
});
