import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { toast } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';

import 'react-toastify/dist/ReactToastify.css';
toast.configure({
  autoClose:4000,
  fontSize : '25px'
});



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
