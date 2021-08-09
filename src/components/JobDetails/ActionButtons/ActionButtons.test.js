import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../store';

import ActionButtons from './ActionButtons';

describe('Action Buttons', () => {
  test('should have the buttons', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ActionButtons />
        </BrowserRouter>
      </Provider>,
    );

    const rejectBtnElemet = screen.getByText('No Thanks');
    const acceptBtnElement = screen.getByText('I\'ll take it');

    expect(rejectBtnElemet).toBeInTheDocument();
    expect(acceptBtnElement).toBeInTheDocument();
  });

  test('should have the classnames accordingly', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ActionButtons />
        </BrowserRouter>
      </Provider>,
    );

    expect(container.getElementsByClassName('buttonsContainer').length).toBe(1);
    expect(container.getElementsByClassName('rejectBtn').length).toBe(1);
    expect(container.getElementsByClassName('acceptBtn').length).toBe(1);
  });
});
