import { render, screen,fireEvent } from '@testing-library/react';
import Sum from './Sum';
import { Multiply } from './Sum';

// test('renders learn react link', () => {
//     render(<Sum />);
    
//     expect(Sum(4,5)).toBe(9);
// })
// test('renders learn react link', () => {
//     render(<Sum />);
    
//     expect(Sum(5,5)).toBe(10);
// })
// test('Multiply learn ',()=>{
//     render(<Multiply/>);

//     expect(Multiply(4,5)).toBe(30);

// })
import React from 'react';
import { shallow } from 'enzyme';


describe('Filter component', () => {
  test('Changes productsOption state when dropdown selection changes', () => {
    // const wrapper = render(<Sum />);
    const container = render(<Sum />);
    const button = screen.getByRole("button",{name:"Click Me for Bye"})
    fireEvent.click(button);
    // Access the state directly
    

 }
)})
