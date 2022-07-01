import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../reduxFeatures/store';
import AllGames from '../AllGames';

describe('AllGames Test', () => {
  it('renders correctly', () => {
    const AllGamesTest = renderer.create(
      <Provider store={store}>
        <Router>
          <AllGames />
        </Router>
      </Provider>,
    ).toJSON();
    expect(AllGamesTest).toMatchSnapshot();
  });
});
