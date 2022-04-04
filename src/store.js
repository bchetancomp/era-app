import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import loginReducer from './containers/loginPage/LoginPage.reducer';
import signupReducer from './containers/signupPage/SignupPage.reducer';

let rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer
});

const store = createStore(rootReducer, ['Use Redux'], applyMiddleware(thunkMiddleware));

export default store;