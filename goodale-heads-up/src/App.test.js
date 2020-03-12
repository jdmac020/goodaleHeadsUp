import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
    });
    // it('renders Navbar Component', () => {
    //     const div = document.createElement('div');
    //     ReactDOM.render(<App/>, div);
    // });
    it('renders the Count component', () => {
        const { getByText } = render(<App />);
        expect(getByText('Current Spaces')).toBeInTheDocument();
    });
    // it('renders the Footer component', () => {
    //     const { getByText } = render(<App />);
    //     expect(getByText('© 2020')).toBeInTheDocument();
    // });
});