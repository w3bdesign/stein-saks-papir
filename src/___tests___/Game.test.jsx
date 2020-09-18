/* eslint-disable no-undef */
import React from 'react';

import { render, screen } from '@testing-library/react';

import ListWeapons from '../components/Pages/Index/ListWeapons.component';

describe('Velg et våpen og se at spillet fungerer', () => {

  test('Sjekk at navbar er på plass', () => {
    const { getByRole } = render(<ListWeapons />);
    screen.debug();
    //const Navbar = getByRole('heading', { name: /Stein Saks Papir/i });
    //expect(Navbar).toBeInTheDocument();
  });

});
