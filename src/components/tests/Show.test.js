import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';

test('renders without errors', () => { });

test('renders Loading component when prop show is null', () => { });

test('renders same number of options seasons are passed in', () => { });

test('handleSelect is called when an season is selected', () => { });

test('component renders when no seasons are selected and when rerenders with a season passed in', () => { });


//Tasks:
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to verify the structutre of the show data.
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in 
//3. Test that the loading component displays when null is passed into the show prop (look at the loading component)
//4. Test that when your test data is passed through the show prop, the same number of season select options append to 
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get 
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the 