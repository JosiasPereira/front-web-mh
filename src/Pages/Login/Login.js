import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import logo from '../../assets/logo2.png';
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import histore from '../../history';
import { Container, Logo, Title,TextBtnLogin, TextBtnSignUp } from './styles';
import api from '../../services/api';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import StyledForm from '../../Components/Form';
import Modal from '../../Components/Modal';
import SignUp from '../SignUp';


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('O e-mail é obrigatório')
    .email('E-mail inválido'),
    
  password: Yup.string()
    .required('A senha é obrigatória')
    .min(6, 'Muito curto'),
});

const Login = function ({login}) {
  const [ showSignUp, setShowSignUp ] = useState(false);
  
  async function handleSubmit(values){
    
  
    try {
      const response = await api.post('login',values);
      if (response.data.token){
        console.log(response.data);
        await localStorage.setItem('@mh-token', response.data.token);    
        login(response.data.token);

        histore.push('/');
      }
    } catch (error) {
      toast.error('Erro ao realizar login. Tente novamente!')
    }
    
  }
  function handleReset(values,{setStatus}){
    setStatus(true);
  }
  function handleClose(){
    
    setShowSignUp(!showSignUp);
  }
  return (
    <Container>
        <SignUp close={handleClose} opened={showSignUp}/>
        <Logo src={logo}/>  
        <Title>
            Login 
        </Title>
        
        <Formik
          onSubmit={handleSubmit}
          onReset={handleReset}
          initialValues={{            
            email: '',
            password: '',              
          }}
          validationSchema={LoginSchema} 
        >
          <StyledForm>
            <Field              
              placeholder="Digite seu e-mail..."
              textError="senha errada"
              type="text"
              name="email"
              component={Input}                     
            />
            <Field              
              placeholder="Digite sua senha..."
              textError="senha errada"
              type="password"
              name="password"
              component={Input}                     
            />
            <Button color="primary" type='submit'>
              <TextBtnLogin>
                LOGIN
              </TextBtnLogin>
            </Button>
            <Button color="transparent" type='reset'>
              <TextBtnSignUp onClick={handleClose}>
                Criar conta agora
              </TextBtnSignUp>
            </Button>
          </StyledForm>
        </Formik>
        
        
                
      
    </Container>
    
  );
};


const mapStateToProps = state => ({});

const mapDispatchToProps = {
  login : actions.login
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);



