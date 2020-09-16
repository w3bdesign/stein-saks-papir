import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Stein Saks Papir', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Stein Saks Papir/i);
  expect(linkElement).toBeInTheDocument();
});
