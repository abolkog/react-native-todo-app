import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import RootNavigator from './RootNavigator'


export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <RootNavigator />
      </Provider>
    );
  }
}
