import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './index';


describe('Footer', () => {
  test('renders footer component', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });
});
