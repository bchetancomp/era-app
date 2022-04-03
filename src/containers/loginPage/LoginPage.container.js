import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
//import * as rootActions from "../Root/Root.actions";
import * as loginActions from "./LoginPage.actions";
import LoginPage from "./LoginPage";

export default connect((state) => ({
    isLoggedIn: state.login.isLoggedIn,
    user: state.login.user,
    status: state.login.status,
}), (dispatch) => ({
    loginActions: bindActionCreators(loginActions, dispatch),
}))(LoginPage);