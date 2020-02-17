import React, { useState } from 'react';
import { Formik, Field, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { Container, Title,TextBtnLogin, TextBtnSignUp } from './styles';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import StyledForm from '../../Components/Form';
import Modal from '../../Components/Modal';
import api from '../../services/api';


const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .required('O nome é obrigatório'),
  email: Yup.string()
    .required('O e-mail é obrigatório')
    .email('E-mail inválido'),
  cpf_cnpj: Yup.string()
    .required('O documento é obrigatório')
    .matches(/(^[0-9]+$)/, 'Digite somente números')
    .matches(/^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/, 'Documento inválido'),
    
  password: Yup.string()
    .required('A senha é obrigatória')
    .min(6, 'Muito curto'),
  confirmPassword: Yup.string()
    .required('Confirmar a senha é obrigatória')
    .min(6, 'Muito curto')
    .test('passwords-equals', 'As senha devem ser iguais', function(value) {
      return this.parent.password === value;
    }),
});

export default function SignUp({loading, opened, close}) {

  
  async function handleSubmit(values, formkHekpers){  
    values.type = 'U';

    try {
      const response = await api.post('user', values);

      if (response){
        toast.success('Cadastro realizado!');
        hadleClose();
      }
    } catch (error) {
      toast.error('Erro ao finalizar cadastro.');
    }
    
  }
  function hadleClose(){
    close();
  }
  return (
    <Modal opened={opened} close={close}>
      <>
      
          <Title fontSize={35} >
              Criar nova conta 
          </Title>

          <Formik            
            onSubmit={handleSubmit}
            initialValues={{
                username:'',
                email: '',
                cpf_cnpj :'',
                password: '',
                confirmPassword:''
            }}
            validationSchema={SignUpSchema} 
                     
            >         
            
              <StyledForm>
                <Field
                  autoComplete="off"
                  placeholder="Digite seu nome..."
                  name="username"                          
                  component={Input}           
                  >
                  </Field>

                  <Field
                  placeholder="Digite seu email..."                
                  name="email"               
                  component={Input}           
                  >
                  </Field>

                  <Field
                  placeholder="Digite seu CPF ou CNPJ..."                
                  name="cpf_cnpj"               
                  component={Input}           
                  >
                  </Field>

                  <Field              
                  placeholder="Digite sua senha..."
                  type="password"
                  name="password"
                  component={Input}        
                  >
                  </Field>
                  <Field              
                  placeholder="Confirme sua senha..."
                  type="password"
                  name="confirmPassword"
                  component={Input}        
                  >
                  </Field>
                <Button color="primary" type="submit">
                  <TextBtnLogin >
                    CADASTRAR
                  </TextBtnLogin>
                </Button>
                <Button color="transparent" type='reset'>
                  <TextBtnSignUp onClick={() => close()}>
                    Voltar
                  </TextBtnSignUp>
                </Button>
              </StyledForm>

          </Formik>                                      
        
      </>
    </Modal>
    
  );
}
