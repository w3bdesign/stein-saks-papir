import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';
import Header from './components/Header/Header.component';

describe('Sjekk at alle nødvendige elementer er på plass i dokumentet', () => {
  test('Sjekk at navbar er på plass', () => {
    const { getByRole } = render(<Header />);
    const Navbar = getByRole('heading', { name: /Stein Saks Papir/i });
    expect(Navbar).toBeInTheDocument();
  });

  test('Sjekk at introtekst er på plass', () => {
    const { getByRole } = render(<App />);
    const Introtekst = getByRole('heading', {
      name: /velkommen til stein, saks og papir/i,
    });
    expect(Introtekst).toBeInTheDocument();
  });
});
