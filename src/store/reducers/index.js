import { combineReducers } from 'redux';

import auth  from './authReducer';

export const Reducers = combineReducers({
    auth : auth
});
