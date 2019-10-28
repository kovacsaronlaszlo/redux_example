import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AsyncApp from './containers/AsyncApp';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AsyncApp />
  </Provider>
)


export default App;
