import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders welcome message', () => {
  render(<App />);
  const challengeTitle = screen.getByText('Tandem Challenge');
  expect(challengeTitle).toBeInTheDocument();
  const meanCardTitle = screen.getByText('Mean');
  expect(meanCardTitle).toBeInTheDocument();
});
