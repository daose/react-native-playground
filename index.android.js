'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './src/reducers';
import App from './src'

let store = createStore(reducer);

export default class performance extends Component {
  render() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
  }
}

AppRegistry.registerComponent('performance', () => performance);
