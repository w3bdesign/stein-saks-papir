import React from 'react';
import ReactDOM from 'react-dom';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {
  beforeAll, describe, expect, jest, test,
} from '@jest/globals';

import App from '../App';

/**
 * Her tester vi at ved å velge et våpen 10 ganger vil komponenten (Alert)
 * som viser at vi har vunnet være synlig
 * Det betyr at vi har vunnet
 */

describe('Velg et våpen og se at noen vinner til slutt', () => {
  // Vi må bruke jest.fn for createPortal pga at vi bruker en modal
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => element);
  });

  test('Velg et våpen flere ganger og se at knappene skjules', async () => {
    render(<App />);

    await userEvent.pointer(
      Array(10).fill({
        keys: '[MouseLeft]',
        target: screen.getByRole('button', { name: /stein/i }),
      }),
    );

    const steinDiv = screen.getByTestId('SteinDiv');

    expect(steinDiv).toHaveClass('d-none');
  });

  test('Velg et våpen flere ganger og se at vinner-boksen vises', async () => {
    // Vi bruker en array og forEach for å klikke 10 ganger
    const repeatClickTenTimes = Array.from({ length: 10 }, (_v, i) => i);

    render(<App />);

    await waitFor(() => {
      repeatClickTenTimes.forEach(() => userEvent.click(screen.queryByRole('button', { name: /stein/i })));
      expect(screen.getByRole('alert', { name: /gamewinner/i })).toBeVisible();
    });
  });
});
