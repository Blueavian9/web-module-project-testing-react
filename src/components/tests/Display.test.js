import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Display from './../Display';

import mockFetchShow from './../../api/fetchShow';
jest.mock('./../../api/fetchSHow');

const testShow = {
    name: "test show",
    summary: "test summary",
    seasons: [
        {
            id: 0,
            name: "Season 1",
            episodes: []
        }, 
        {
            id: 1,
            name: "Season 2",
            episodes: []
        }
    ]
};

test("renders without errors", ()=>{
    render(<Display />);
});

test('renders Show component when the button is clicked ', () => { 
    mockFetchShow.mockResolvedValueOnce(testShow);
    
    render(<Display/>);
    const button = screen.getByRole('button');
    userEvent.click(button);

    const show = await screen.findByTestId('show-container');
    expect(show).toBeInTheDocument();
});
    
test('renders show season options matching your data when the button is clicked', () => { });
    mockFetchShow.mockResolvedValueOnce(testShow);

    render(<Display/>);
    const button = screen.getByRole('button');
    userEvent.click(button);

    await waitFor(()=>{
        const seasonOptions = screen.findAllByTestId('season-option');
        expect(seasonOptions).toHaveLength(2);
    });
});

test('displayFUnc is called when the fetch button is pressed', async ()=> {
    mockFetchShow.mockResolvedValueOnce(testShow);
    const displayFunc = jest.fn();

    render(<Display displayFunc={displayFunct}/>);
    const button = screen.getByRole('button');
    userEvent.click(button);

    await waitFor(()=>{
        expect(displayFunc).toHaveBeenCalled();
    });
});

// 1. Add your necessary imports and values to establish the testing suite. 
// 2. Test that the Display component renders without any passed in props.
// 3. Rebuild or copy a show test data element as used in the previous set of tests.
// 4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
// 5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
// 6. Notice the optional functional prop passed in to the Display component client code, Test that when the fetch button is pressed, this function is called.