import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionItemLinks from './index';


describe('SectionItemLinks', () => {
  test('renders links component', () => {
    render(<SectionItemLinks />);
    const sectionItemLinksElement = screen.getByTestId('section-item-links');
    expect(sectionItemLinksElement).toBeInTheDocument();
  });
});
