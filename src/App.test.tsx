import { render,screen,fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe('Test App component rendering', () => {
  
  it('renders App components title', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText(/Lord/i)).toBeInTheDocument();
  });

});
