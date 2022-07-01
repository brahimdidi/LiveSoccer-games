import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../reduxFeatures/store';
import Competition from '../Competition';

describe('Competition Test', () => {
  it('renders correctly', () => {
    const CompetitionTest = renderer.create(
      <Provider store={store}>
        <Router>
          <Competition />
        </Router>
      </Provider>,
    ).toJSON();
    expect(CompetitionTest).toMatchSnapshot();
  });
});
