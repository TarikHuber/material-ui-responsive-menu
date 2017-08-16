import {render} from 'react-dom'
import React  from 'react';
import App from './App.js'
import { Provider } from 'react-redux';
import reducers from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, compose } from 'redux';
const store = createStore(reducers);

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('#demo'))
