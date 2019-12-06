import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { increment, decrement } from './components/Navbar';


test('renders without crashing', () => {
  render(<App />);
});

test('renders Player', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Players/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.textContent).toBe('Players');
});

test('test increment', () => {
  expect(increment(0)).toBe(1);
  expect(increment(5)).toBe(6);
});

test('test decrement', () => {
  expect(decrement(1)).toBe(0);
  expect(decrement(5)).toBe(4);
});

test('test class', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Increment/i);
  expect(linkElement).toHaveClass('incrementButton');
});
