import { render, screen } from '@testing-library/react';
import Location from './Location';

const address = 'plot no 54';
const miles = '450';

describe('Location', () => {
  test('should have the heading of location', () => {
    render(<Location address={address} miles={miles} />);

    const heading = screen.getByText('Location');
    expect(heading).toBeInTheDocument();
  });

  test('should render the data about the location of th job', () => {
    render(<Location address={address} miles={miles} />);

    const addressElemet = screen.getByText(address);
    const milesData = screen.getByText(`${miles} miles from your job search location`);

    expect(addressElemet).toBeInTheDocument();
    expect(milesData).toBeInTheDocument();
  });

  test('should have the classnames accordingly', () => {
    const { container } = render(<Location address={address} miles={miles} />);

    expect(container.getElementsByClassName('locationContainer').length).toBe(1);
    expect(container.getElementsByClassName('location').length).toBe(1);
    expect(container.getElementsByClassName('miles').length).toBe(1);
    expect(container.getElementsByClassName('fa-map-marker-alt').length).toBe(1);
  });
});
