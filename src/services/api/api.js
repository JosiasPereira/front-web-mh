import React from 'react';
import axios from 'axios';
import auth from '../auth';
import {Redirect} from 'react-router-dom'
import {URL_SERVER} from '../../utils/consts';
import history from '../../history';
import {toast} from 'react-toastify';

const api = axios.create({
  //baseURL : 'http://williamestrela.herokuapp.com/'
  baseURL : URL_SERVER+'/'
})

api.interceptors.request.use(async config => {
  const token = await auth.token();
  if (token) {
    config.headers.Authorization = 'Bearer ' +token;
  }
  
  return config;
});


api.interceptors.response.use( 
  response => {   

    if(response.status && response.status == 401){      
      return <Redirect to='/login' />
    }
    return response
  },
  error => {
    return error;
    /*
    if(error.response.status && error.response.status == 401){      
      history.push('/login');
      toast.warn('Efetue seu login para acessar a página solicitada.')
      return error
    }
    */
    
  }
);
export default api