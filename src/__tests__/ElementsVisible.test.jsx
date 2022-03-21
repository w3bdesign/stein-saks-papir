import React from 'react';

import { render } from '@testing-library/react';

import App from '../App';

/**
 * Her tester vi at alle de nødvendige elementene i applikasjonen er synlige
 * som knapper, navbar osv
 */

describe('Sjekk at alle nødvendige elementer er synlige', () => {
  test('Sjekk at saks er synlig', () => {
    const { getByRole } = render(<App />);
    const Saks = getByRole('button', { name: /saks/i });
    expect(Saks).toBeVisible();
  });

  test('Sjekk at stein er synlig', () => {
    const { getByRole } = render(<App />);
    const Stein = getByRole('button', { name: /stein/i });
    expect(Stein).toBeVisible();
  });

  test('Sjekk at papir er synlig', () => {
    const { getByRole } = render(<App />);
    const Papir = getByRole('button', { name: /papir/i });
    expect(Papir).toBeVisible();
  });
});
