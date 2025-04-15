import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuSite from './index';

describe('Menu', () => {
  test('renders the menu component', () => {
    render(<MenuSite />);
    const menuElement = screen.getByTestId('menu');
    expect(menuElement).toBeInTheDocument();
  });
});
