import {SIGNING_IN, SIGN_IN, SIGN_IN_ERROR} from '../reducers/constants';

export function signIn(dispatch, user, callback) {
    dispatch({ type: SIGNING_IN, payload: 'Trying to login...' })
    setTimeout(function signInAPI() {
        if(user.username === 'admin' && user.password === 'admin') {
            dispatch({ type: SIGN_IN, payload: user });
            callback();
        }else {
            dispatch({ type: SIGN_IN_ERROR, payload: 'Sign in failed, either username or password is not correct.' })
        }
    }, 2000);
}