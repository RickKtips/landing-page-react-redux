import React from 'react';
import { render, screen } from '@testing-library/react';
import Sections from './index';


jest.mock("react-slick", () => {
  return jest.fn(() => null)
});
jest.mock("../section-item-list-dot/index", () => {
  return jest.fn(() => null)
} );
jest.mock("../slider/index", () => {
  return jest.fn(() => null)
} );
jest.mock("../section-item/index", () => {
  return jest.fn(() => null)
} );
jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  const totalSections = 1;
  return {
      ...ActualReactRedux,
      useSelector: jest.fn().mockImplementation(() => {
          return totalSections;
      }),
  };
});
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

const observe = jest.fn();
const unobserve = jest.fn();
window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}))

describe('Sections', () => {
  it('Verify section render', () => {
    const atualSection = [{    
      id: 1,
      title: 'title 1',
      text: 'text 1',
      imageUrl: 'img.png',
      bgClass: 'bg-1',
      showLinks: true
    },
    {    
      id: 2,
      title: 'title 2',
      text: 'text 2',
      imageUrl: 'img.png',
      bgClass: 'bg-2',
      showLinks: true
    }]

    render(<Sections section={atualSection}/>);
    const component = screen.getByTestId('section');
    expect(component).toBeInTheDocument();
  });
});