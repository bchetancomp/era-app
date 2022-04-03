import { Component } from 'react';
import { Link } from 'react-router-dom'
import {Menu, Image, Dropdown, Button, Avatar} from 'antd';

export default function AppBar() {
    const menu = (
      <Menu>
        <Menu.Item key="1">
          <Link to="/profile">User Profile</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/settings">Settings</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Sign out
          </a>
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