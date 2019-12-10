import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
// import merge from 'lodash';

const ErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return { "login" : action.errors };
        default:
            return state;
    }
}


export default ErrorsReducer;