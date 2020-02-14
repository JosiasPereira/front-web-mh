import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure({
  autoClose:4000,
  fontSize : '25px'
});



ReactDOM.render(<App />, document.getElementById('root'));
