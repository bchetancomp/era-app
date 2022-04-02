import {Component} from 'react';
import {Menu, Image, Dropdown, Button, Avatar} from 'antd';

export default function AppBar() {
    const menu = (
      <Menu>
        <Menu.Item key="1">
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            Profile
          </a>
        </Menu.Item>
        <Menu.Item key="2">
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            Settings
          </a>
        </Menu.Item>
        <Menu.Item key="3">
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Sign out
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
        <div className="flex-container">
            <Image
              width={36}
              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            />
            <Dropdown overlay={menu} placement="topRight" arrow={{ pointAtCenter: true }}>
              <Avatar>CB</Avatar>
            </Dropdown>
        </div>
    )
}