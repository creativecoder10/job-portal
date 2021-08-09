import { render, screen } from '@testing-library/react';
import ShiftDates from './ShiftDates';

const shifts = [{
  startDate: '2019-09-04T21:00:00Z',
  endDate: '2019-09-05T05:00:00Z',
}];

describe('Shift Dates', () => {
  test('should have the heading of Shifts', () => {
    render(<ShiftDates shifts={shifts} />);

    const heading = screen.getByText('Shift Date');
    expect(heading).toBeInTheDocument();
  });

  test('should render the shufts', () => {
    render(<ShiftDates shifts={shifts} />);

    const { startDate, endDate } = shifts[0];

    const shift1 = `${new Date(startDate).toUTCString()} - ${new Date(endDate).toUTCString()}`;
    const shiftDate = screen.getByText(shift1);

    expect(shiftDate).toBeInTheDocument();
  });

  test('should have the classnames accordingly', () => {
    const { container } = render(<ShiftDates shifts={shifts} />);

    expect(container.getElementsByClassName('shiftsContainer').length).toBe(1);
    expect(container.getElementsByClassName('shifts').length).toBe(1);
    expect(container.getElementsByClassName('fa-calendar-alt').length).toBe(1);
  });
});
