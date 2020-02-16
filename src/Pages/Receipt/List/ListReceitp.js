import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';

import * as Yup from 'yup';
import {toast} from 'react-toastify';
import history from '../../../history';
import addImg from '../../../assets/add.png';
import { Container, Title,TextBtnLogin, TextBtnSignUp, 
  ContainerList, SearchInput, ContainerTop,  
  ContainerRow, ButtonAdd , ImageAdd} from './styles';
import api from '../../../services/api';

import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import StyledForm from '../../../Components/Form';
import Modal from '../../../Components/Modal';
import Receipt from '../../../Components/Receipt';
import CreateModal from '../CreateWithModal';

export default function Login() {
  const [ receipts, setReceipts ] = useState([]);
  const [ originalRec, setOriginalRec ] = useState([]);
  const [ showCreate, setShowCreate ] = useState(false);
  useEffect(() =>{
    const getReceipts = async() =>{
      const response = await api.get('receipt');
      if (response.data){
        setReceipts(response.data); 
        setOriginalRec(response.data);
      }
      
    };
    getReceipts();
  },[]);

  function filter(e){
    const regexp = new RegExp(e.target.value, 'i');
    if (e.target.value){
      const dataFiltred = originalRec.filter((item) => (regexp.test(item.usersIssuer.username) || regexp.test(item.comment) ));
  
      setReceipts(dataFiltred);
    }else{
      setReceipts(originalRec);
    }
    
  }

  function handleAdd(){
    history.push('/create-receipt')
    //setShowCreate(true)
  }
  function handleClose(){
    //history.push('/create-receipt')
    setShowCreate(false)
  }
  
  return (
    <Container>   
        <CreateModal close={handleClose} opened={showCreate}/>
        <ContainerTop>
          <Title fontSize={35}>
              Comprovantes 
          </Title>
          <ContainerRow>
            <SearchInput placeholder="Pesquise nos comprovantes" onChange={filter}/>
            <ButtonAdd onClick={handleAdd}>
              <ImageAdd src={addImg} />
            </ButtonAdd>
          </ContainerRow>
          
        </ContainerTop>             
        <ContainerList>
          {receipts.map(item => <Receipt key={item.id} item={item} /> )}
         
        </ContainerList>
        
              
    </Container>
    
  );
}
