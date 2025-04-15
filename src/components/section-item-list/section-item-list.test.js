import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionItemList from './index';


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
  it('Verify render and Single list option', () => {

    const itemSingle = {
      singleList: true,
      itens: [{
      idItem: 1,
      name: 'Teste name',
      img: 'Teste img',
      text: 'Teste text',
      }]
    };


    render(<SectionItemList list={itemSingle}/>);
    const component = screen.getByTestId('section-item-list');
    expect(component).toBeInTheDocument();
  });
  it('Verify render and slider list option', () => {

    const itemSingle = {
      singleList: false,
      item: [{
        idItem: 1,
        name: 'Teste name',
        img: 'Teste img',
        text: 'Teste text',
      }]
    };

    render(<SectionItemList list={itemSingle}/>);
    const component = screen.getByTestId('section-item-list');
    expect(component).toBeInTheDocument();
  });
  
});



