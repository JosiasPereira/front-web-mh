import * as actions from './actionsType';
import history from '../../history';
import {toast} from 'react-toastify';

export const signOut =()=>{
    
    return{
        type: actions.AUTH_LOGOUT,
        payload:{
            token: null,
            isLogged : false
        }
    }
}
export const login =(token)=>{
    
    return{
        type: actions.AUTH_LOGIN,
        payload:{
            token: token,
            isLogged : true
        }
    }
}