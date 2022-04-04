import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";

import * as signupActions from "./SignupPage.actions";
import SignupPage from "./SignupPage";

export default connect((state) => ({
    isLoggedIn: state.login.isLoggedIn,
    user: state.login.user,
    status: state.signup.status,
    message: state.signup.message,
    signedUpUsers: state.signup.signedUpUsers
}), (dispatch) => ({
    signupActions: bindActionCreators(signupActions, dispatch),
}))(SignupPage);