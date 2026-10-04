import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('shows the exam date and registration deadline', () => {
  render(<App />);
  expect(screen.getByText('Saturday, 31 October 2026')).toBeInTheDocument();
  expect(screen.getByText('Thursday, 15 October 2026')).toBeInTheDocument();
});

test('shows the two-section pattern and no individual registration', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: '90 questions. Three hours. Two sections.' })).toBeInTheDocument();
  expect(screen.queryByText('Rs 99')).not.toBeInTheDocument();
});

test('sample paper opens a coming-soon popup', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /Class 9.*Sample paper/ }));
  expect(screen.getByRole('dialog', { name: 'Class 9 sample paper' })).toBeInTheDocument();
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('does not advertise individual or free registration', () => {
  render(<App />);
  expect(screen.queryByText(/individual/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/government school/i)).not.toBeInTheDocument();
});

test('register buttons open the Google Form', () => {
  render(<App />);
  const links = screen.getAllByRole('link', { name: /^Register/ });
  expect(links.length).toBeGreaterThan(0);
  links.forEach((a) => {
    expect(a).toHaveAttribute('href', expect.stringContaining('docs.google.com/forms/'));
    expect(a).toHaveAttribute('target', '_blank');
  });
});
