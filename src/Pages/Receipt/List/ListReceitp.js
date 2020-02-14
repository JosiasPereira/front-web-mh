import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';

import * as Yup from 'yup';
import {toast} from 'react-toastify';
import histore from '../../../history';

import { Container, Logo, Title,TextBtnLogin, TextBtnSignUp } from './styles';
import api from '../../../services/api';

import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import StyledForm from '../../../Components/Form';
import Modal from '../../../Components/Modal';


export default function Login() {
  const [ receipts, setReceipts ] = useState([]);
  
  useEffect(() =>{
    const getReceipts = async() =>{
      const response = await api.get('receipt');
      if (response.data){
        setReceipts(response.data);        
      }
      
    };
    getReceipts();
  },[])
  
  return (
    <Container>
        
        <Logo />  
        <Title>
            Login 
        </Title>
        
              
    </Container>
    
  );
}
