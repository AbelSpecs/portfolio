import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Triangle from './Triangle';

describe('<Triangle />', () => {
  test('it should mount', () => {
    render(<Triangle />);
    
    const triangle = screen.getByTestId('Triangle');

    expect(triangle).toBeInTheDocument();
  });
});