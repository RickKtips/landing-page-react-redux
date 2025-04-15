import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionItemListDot from './index';


describe('SectionItemListDot', () => {
  it('Verify render and object', () => {
    const item = {
      name: 'Teste name',
      img: 'Teste img',
      text: 'Teste text',
    };
    render(<SectionItemListDot item={item}/>);
    const component = screen.getByTestId('section-item-list-dot');
    expect(component).toBeInTheDocument();
  });

  // Add more tests here as needed
});
