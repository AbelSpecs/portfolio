import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hoc from './Hoc';

describe('<Hoc />', () => {
  test('it should mount', () => {
    render(<Hoc />);
    
    const hoc = screen.getByTestId('Hoc');

    expect(hoc).toBeInTheDocument();
  });
});