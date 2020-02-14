import React from 'react';
import axios from 'axios';
import auth from '../auth';
import {Redirect} from 'react-router-dom'
const api = axios.create({
  //baseURL : 'http://williamestrela.herokuapp.com/'
  baseURL : 'http://localhost:3333/'
})

api.interceptors.request.use(async config => {
  const token = await auth.isAuth();
  if (token) {
    config.headers.Authorization = 'Bearer ' +token;
  }
  
  return config;
});


api.interceptors.response.use( 
  response => {    
      return response
  },
  error => {
    if(error.response.status && error.response.status == 401){      
      return <Redirect to='/login' />
    }
    console.log('fora do if erro de rede')
    
  }
);
export default api