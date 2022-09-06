import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/redux-store';
import SamuraiJSApp from './App';

test('renders learn react link', () => {
  render(
    
          <SamuraiJSApp />)
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
