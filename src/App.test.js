import { render, screen } from '@testing-library/react';
import HomePage from './Components/Home';

test('renders header section', () => {
  render(<HomePage />);
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();
});

test('renders hero section', () => {
  render(<HomePage />);
  const heroElement = screen.getByTestId('hero');
  expect(heroElement).toBeInTheDocument();
});

test('renders services section', () => {
  render(<HomePage />);
  const headerElement = screen.getByTestId('service');
  expect(headerElement).toBeInTheDocument();
});

test('renders testimonials section', () => {
  render(<HomePage />);
  const heroElement = screen.getByTestId('testimonials');
  expect(heroElement).toBeInTheDocument();
});

test('renders about section', () => {
  render(<HomePage />);
  const headerElement = screen.getByTestId('about');
  expect(headerElement).toBeInTheDocument();
});

test('renders contact section', () => {
  render(<HomePage />);
  const headerElement = screen.getByTestId('contact');
  expect(headerElement).toBeInTheDocument();
});

test('renders footer section', () => {
  render(<HomePage />);
  const headerElement = screen.getByTestId('footer');
  expect(headerElement).toBeInTheDocument();
});
