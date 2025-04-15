import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';


describe('Header', () => {
  test('renders the header component', () => {
    render(<Header />);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });
});
