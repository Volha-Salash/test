
import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import App from "./App";
import "./styles/reset.css";
import "./styles/common.css";
import store from './redux/store';

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);