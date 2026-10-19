import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { getBotReply } from './bot';

test('bot replies to greeting', () => {
  expect(getBotReply('hello')).toMatch(/Hello/);
});

test('bot has a fallback reply', () => {
  expect(getBotReply('xyz')).toMatch(/didn't understand/);
});

test('user can send a message and get a reply', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('message'), { target: { value: 'hi' } });
  fireEvent.click(screen.getByText('Send'));
  expect(screen.getByText('hi')).toBeInTheDocument();
  expect(screen.getByText('Hello! How can I help you today?')).toBeInTheDocument();
});
