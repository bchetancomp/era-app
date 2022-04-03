import { Component } from 'react';
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
//import * as rootActions from "../Root/Root.actions";
import * as loginActions from "../../containers/loginPage/LoginPage.actions";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Menu, Image, Dropdown, Button, Avatar} from 'antd';

function AppBar(props) {
    const navigate = useNavigate();
    function onSignoutClick() {
        console.log('onSignoutClick');
        props.loginActions.logOut(navigateToLoginPage);
        //navigate('login');
    }
    function navigateToLoginPage() {
        navigate('/login');
    }
    const menu = (
      <Menu>
        <Menu.Item key="1">
          <Link to="/profile">User Profile</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/settings">Settings</Link>
        </Menu.Item>
        <Menu.Item key="3" onClick={onSignoutClick}>
          Sign out
        </Menu.Item>
      </Menu>
    );

    return (
        <div className="app-bar flex-container">
            <div className="app-logo-n-name">
                <Image
                  className="app-logo"
                  width={30}
                  src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                />
                <span className="app-name">Enterprise React App</span>
            </div>
            <Dropdown overlay={menu} placement="topRight" arrow={{ pointAtCenter: true }}>
              <Avatar style={{margin: '8px 0px 0px 0px'}}>CB</Avatar>
            </Dropdown>
        </div>
    )
}

export default connect((state) => ({
    isLoggedIn: state.login.isLoggedIn,
    user: state.login.user,
    status: state.login.status,
}), (dispatch) => ({
    loginActions: bindActionCreators(loginActions, dispatch),
}))(AppBar);