import { render, screen,fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux';
import { store } from '../../app/store/store';
import { Search } from '.';

const MockSearch = () => {
    return (
        <Provider store={store}>
            <Search />
        </Provider>
    );
};

describe('Test elements of search component have rendered', () => {

    it('renders the lable element', () => {
        render(
            <MockSearch/>
        );
        expect(screen.getByText(/search for a decklist/i)).toBeInTheDocument();
    });

    it('renders the input element', () => {
        render(
            <MockSearch />
        );
        expect(screen.getByPlaceholderText(/enter the deck id/i)).toBeInTheDocument();
    });
});

describe('Test input element functionality', () => {

    it('takes user input as its value', () => {
        render(
            <MockSearch />
        );
        const inputElement: any  = screen.getByPlaceholderText(/enter the deck id/i);
        fireEvent.change(inputElement, { target: { value: "apples" } });
        expect(inputElement.value).toEqual("apples");
    });
    
});