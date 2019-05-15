import React from 'react';
import { App } from '../App';
import renderer from 'react-test-renderer';

import actions from '../actions';

const spyOne = jest.spyOn(actions, 'funcOne');
const spyTwo = jest.spyOn(actions, 'funcTwo');

describe('App ', async () => {
  test('does async stuff in expected order', async () => {
    console.log('Starting test');
    const tree = await renderer.create(<App />);
    // await (() => new Promise(setImmediate))();

    console.log('About to expect');
    expect(spyOne).toHaveBeenCalled();
    console.log('Expect one to have been called');
    expect(spyTwo).toHaveBeenCalled();
    console.log('Expect two to have been called');
    expect(tree).toMatchSnapshot();
  });
});
