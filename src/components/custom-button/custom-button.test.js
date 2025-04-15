import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomButton from './index';


describe('Header', () => {
  test('renders the button component', () => {
    render(<CustomButton />);
    const headerElement = screen.getByTestId('button');
    expect(headerElement).toBeInTheDocument();
  });
});
