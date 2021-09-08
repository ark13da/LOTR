import React from 'react';
import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { Search } from './Search';

describe('Test search component loading', () => {

    it('renders search components lable and input place holder', () => {
        const { getByText, getByRole } = render(
            <Provider store={store}>
                <Search />
            </Provider>
        );
        expect(getByText(/search/i)).toBeInTheDocument();
        expect(getByRole("lable", { name: "Search for a decklist here"})).toBeInTheDocument();

    });
});
