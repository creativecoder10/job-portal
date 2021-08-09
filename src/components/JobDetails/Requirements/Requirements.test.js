import { render, screen } from '@testing-library/react';
import Requirements from './Requirements';

const requirementsArr = ['Safety Vest', 'Hart Hat'];

describe('Requirements', () => {
  test('should have the heading of requirements', () => {
    render(<Requirements requirements={requirementsArr} />);

    const heading = screen.getByText('Requirements');
    expect(heading).toBeInTheDocument();
  });

  test('should render the list of requirements', () => {
    render(<Requirements requirements={requirementsArr} />);

    const requirement1Element = screen.getByText('- Safety Vest');
    const requirement2Element = screen.getByText('- Hart Hat');

    expect(requirement1Element).toBeInTheDocument();
    expect(requirement2Element).toBeInTheDocument();
  });
});
