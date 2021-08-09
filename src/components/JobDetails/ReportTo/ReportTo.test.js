import { render, screen } from '@testing-library/react';
import ReportTo from './ReportTo';

const reportTo = 'Sumit';
const phone = '123456789';

describe('Report To', () => {
  test('should have the heading of report to', () => {
    render(<ReportTo reportTo={reportTo} phone={phone} />);

    const heading = screen.getByText('Report To');
    expect(heading).toBeInTheDocument();
  });

  test('should render the data about the reporting person', () => {
    render(<ReportTo reportTo={reportTo} phone={phone} />);

    const reportingPersonElement = screen.getByText('Sumit 123456789');

    expect(reportingPersonElement).toBeInTheDocument();
  });
});
