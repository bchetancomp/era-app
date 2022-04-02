import { createStore, combineReducers } from 'redux';

import loginReducer from './containers/loginPage/LoginPage.reducer';
import signupReducer from './containers/signupPage/SignupPage.reducer';

let rootReducer = combineReducers({
                                          login: loginReducer,
                                          signun: signupReducer
                                      });

const store = createStore(rootReducer);

export default store;