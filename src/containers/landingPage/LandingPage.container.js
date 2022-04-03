import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";

import LandingPage from "./LandingPage";

export default connect((state) => ({
    isLoggedIn: state.login.isLoggedIn,
    user: state.login.user,
    status: state.login.status,
}), (dispatch) => ({}))(LandingPage);