import * as actions from '../actions/actionsType';
import auth from '../../services/auth';

const initialState = {
    token: null,
    isLogged: auth.isAuth(),

};



export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.AUTH_LOGIN:
            return { ...state, token: payload.token, isLogged: payload.isLogged };
        case actions.AUTH_LOGOUT:
            return { ...state, token: payload.token, isLogged: payload.isLogged };        
        default:
        return state;
    }
};
