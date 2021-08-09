import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Nav from './Nav';

describe('Nav', () => {
  test('should have the title of swipe jobs', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>,
    );

    const heading = screen.getByText('Swipe Jobs');

    expect(heading).toBeInTheDocument();
  });

  test('should have the classnames accordingly', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>,
    );

    expect(container.getElementsByClassName('navBar').length).toBe(1);
    expect(container.getElementsByClassName('navSection').length).toBe(1);
    expect(container.getElementsByClassName('navSectionItem').length).toBe(2);
    expect(container.getElementsByClassName('linkNoStyle').length).toBe(2);
    expect(container.getElementsByClassName('navIcon').length).toBe(1);
    expect(container.getElementsByClassName('title').length).toBe(1);
  });
});
