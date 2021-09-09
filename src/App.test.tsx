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

/*
describe('UserInput data validation', () => {
  
  it('throws an error for non numerical inputs', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
 jest.setTimeout(30000);
    const inputElement: any = screen.getByPlaceholderText(/enter the deck id/i);
    await fireEvent.change(inputElement, { target: { value: "apples" } });
    await fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter", keyCode:13,
      charCode: 13
    });
   
    const titleElement = await screen.findByText(/try/i);
    expect(titleElement).toBeInTheDocument();
  });

});
*/
