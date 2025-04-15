import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionItem from './index';

jest.mock("react-slick", () => {
  return jest.fn(() => null)
});
jest.mock("../section-item-list-dot/index", () => {
  return jest.fn(() => null)
} );
jest.mock("../slider/index", () => {
  return jest.fn(() => null)
} );

describe('SectionItemListDot', () => {
  it('Verify render and object', () => {
    const section = {    
      id: 1,
      title: 'title 1',
      text: 'text 1',
      imageUrl: 'img.png',
      bgClass: 'bg-1',
      showLinks: true
    };

    render(<SectionItem section={section}/>);
    const component = screen.getByTestId('section-item');
    expect(component).toBeInTheDocument();
  });

  // Add more tests here as needed
});
