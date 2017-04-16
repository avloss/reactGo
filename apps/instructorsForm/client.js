import React from 'react';
import { Provider } from 'react-redux';
import { InstructorsForm } from './containers'

import { render } from 'react-dom';

import configureStore from './store'

const store = configureStore()

const props = {}

render(
  <Provider store={store}>
    <InstructorsForm {...props} />
  </Provider>, document.getElementById('app'));
