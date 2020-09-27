/* eslint-disable no-undef */
import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from '../App';

/**
 * Her tester vi at reset knappen nullstiller score til 0 på spillerne
 */

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
