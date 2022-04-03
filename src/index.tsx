import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRouterDom from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import 'antd/dist/antd.css';
import './Global.css';

const isDev = process.env.NODE_ENV !== 'production';
const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    ['common-lib']: any;
  }
}

window['common-lib'] = {
  React,
  ReactRouterDom,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: isDev,
});
// RunSaga
sagaMiddleware.run(rootSaga);
const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
