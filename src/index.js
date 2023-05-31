import React from 'react';
import ReactDOM from 'react-dom';
import {ToastProvider} from 'react-toast-notifications';
import './styles/index.css';
import { App } from './components';

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider autoDismiss autoDismissTimeout={4000} placement='top-left'>
      <App />
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
