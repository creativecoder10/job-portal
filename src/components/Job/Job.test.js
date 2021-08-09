import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Job from './Job';

const jobDetails = {
  jobId: '5775d8e18a488e6c5bb08333',
  jobTitle: {
    name: 'Construction General Helper',
    imageUrl: 'https://imgs.swipejobs.com/js/job-category/construction-1.jpg',
  },
  company: {
    name: 'Steve Smith Construction',
    address: {
      formattedAddress: '430 Smith St, Chicago, IL 60654, USA',
      zoneId: 'America/Chicago',
    },
    reportTo: {
      name: 'Judy Smith',
      phone: '2130010012',
    },
  },
  wagePerHourInCents: 950,
  milesToTravel: 3.4,
  shifts: [
    {
      startDate: '2019-09-04T21:00:00Z',
      endDate: '2019-09-05T05:00:00Z',
    },
  ],
  branch: 'Downtown',
  branchPhoneNumber: '2531233322',
};

describe('Job', () => {
  test('Job should have a valid image and alt', () => {
    render(<BrowserRouter><Job jobDetails={jobDetails} /></BrowserRouter>);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://imgs.swipejobs.com/js/job-category/construction-1.jpg');
    expect(image).toHaveAttribute('alt', 'Construction General Helper');
  });

  test('should have a valid job title', () => {
    render(<BrowserRouter><Job jobDetails={jobDetails} /></BrowserRouter>);

    const titleElement = screen.getByText('Construction General Helper');
    expect(titleElement).toBeInTheDocument();
  });

  test('should have a valid company name and pay per hour', () => {
    render(<BrowserRouter><Job jobDetails={jobDetails} /></BrowserRouter>);

    const price = (950 / 100).toFixed(2);
    const priceText = `$${price} per hour`;

    const companyTitle = screen.getByText('Steve Smith Construction');
    const priceValue = screen.getByText(priceText);

    expect(companyTitle).toBeInTheDocument();
    expect(priceValue).toBeInTheDocument();
  });

  test('should have the classnames accordingly', () => {
    const { container } = render(<BrowserRouter><Job jobDetails={jobDetails} /></BrowserRouter>);

    expect(container.getElementsByClassName('container').length).toBe(1);
    expect(container.getElementsByClassName('imgContainer').length).toBe(1);
    expect(container.getElementsByClassName('nameOfJob').length).toBe(1);
    expect(container.getElementsByClassName('jobDescription').length).toBe(1);
    expect(container.getElementsByClassName('hourlyRate').length).toBe(1);
  });
});
