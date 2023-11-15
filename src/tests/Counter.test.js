// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test('renders counter message', () => {
  // Check if the counter message is rendered
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Check if the initial count is rendered with the value of 0
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Click the + button and check if the count is incremented
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);

  const incrementedCount = screen.getByTestId('count');
  expect(incrementedCount).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Click the - button and check if the count is decremented
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);

  const decrementedCount = screen.getByTestId('count');
  expect(decrementedCount).toHaveTextContent('-1');
});
