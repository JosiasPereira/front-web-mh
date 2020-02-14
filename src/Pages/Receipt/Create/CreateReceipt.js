import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import histore from '../../../history';

import { Container, Title,TextBtnSubmit, ImagePreview } from './styles';
import api from '../../../services/api';

import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import TextArea from '../../../Components/TextArea';
import StyledForm from '../../../Components/Form';
import Select from '../../../Components/Select';
import Option from '../../../Components/Select/Option';
import Modal from '../../../Components/Modal';

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
];
/**
 * file: Yup.mixed()
    .required("Um comprovante deve ser anexado")
    .test(
      "fileSize",
      "Arquivo muito grande",
      value => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Formato inválido",
      value => value && SUPPORTED_FORMATS.includes(value.type)
    )
 */
const ReceiptSchema = Yup.object().shape({
  value: Yup.string()
    .required('O valor deve ser informado'),
    
  user_recipient_id: Yup.number()
    .required('O destinatário é obrigatório'),
  comment : Yup.string() 
    .max(255, 'O limite de caracteres foi atigindo'),
  file: Yup.mixed()
    .required("Um comprovante deve ser anexado")    
});

export default function Create() {
  
  const [ imagePreview, setImagePreview] = useState(null);
  const [ image, setImage] = useState(null);
  const [ users, setUsers] = useState([]);
  

  useEffect(() =>{
    const getUsers = async() =>{
      const users = await api.get('user');
      if (users.data){
        setUsers(users.data);
      }
      
    };
    getUsers();
  },[])

  async function handleSubmit(values){
    //values.file = image;
    
    
    const data = new FormData();
    
    data.append('value', values.value);
    //data.append('user_issuer_id', 1);
    data.append('user_recipient_id', values.user_recipient_id);
    data.append('comment', values.comment);
    data.append('file', image);  
    
    try {
      const response = await api.post('receipt',data);
      if (response.data){
        console.log(response.data);
          
        histore.push('/');
        toast.success('Salvo com sucesso!')
      }
    } catch (error) {
      toast.error('Erro ao realizar envio. Tente novamente!' +error)
    }
    
  }
  
  
  function handleSetImage(e,setFieldValue){
    setImage(e.target.files[0]);
    setFieldValue('file', e.target.value);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  }
  
  return (
    <Container>
        
      
        <Title fontSize={35} >
            Novo comprovante
        </Title>
        
        <Formik
          onSubmit={handleSubmit}
          
          initialValues={{            
            user_recipient_id: '',
            value: '',              
            file: '',
            comment : ''
          }}
          validationSchema={ReceiptSchema} 
        >
          {props => (
          <StyledForm >
            <Field              
              placeholder="Qual o valor do comprovante..."          
              type="number"              
              name="value"
              novalidate
              component={Input}                     
            />
            <Field              
              placeholder="Selecione o destinatário..."            
              name="user_recipient_id"
              component={Select}  
              type="text"        
              
                     
            >        
            <option value="" disabled selected>Selecione um destinatário</option> 
            {users.map(user => <option value={user.id} >{user.username}</option> )}     
            
            </Field>
            <Field              
              placeholder="Digite alguma descrição..."
              textError=""
              type="text"
              name="comment"
              rows = "4"
              component={TextArea}                     
            />
            <Field              
              placeholder="Selecione uma imagem..."
              type="file"
              name="file"  
              value={props.values.file}                    
              component={Input} 
              onChange={e => {
                handleSetImage(e, props.setFieldValue)
                //props.setFieldValue('file', e);
             }}                    
            />
            
            <ImagePreview src={imagePreview}/>
            <Button color="primary" type='submit'>
              <TextBtnSubmit>
                SALVAR COMPROVANTE
              </TextBtnSubmit>
            </Button>
            
          </StyledForm>
          )}
        </Formik>
        
        
                
      
    </Container>
    
  );
}
