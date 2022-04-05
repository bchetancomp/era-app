import { Component } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {signIn} from '../services/signInService';
import { Input, Button, Checkbox, Form, Card, Space } from 'antd';
import { Link } from 'react-router-dom';
import { SIGN_IN } from '../reducers/constants';

function LoginPage(props) {
    const navigate = useNavigate();
    const message = props.message;
    let isValid = "success";
    if(message && message.length > 0) {
        isValid = "error";
    }

    function onFinish(values) {
        console.log('onFinish');
        props.signIn(values, navigateToLandingPage);
    }
    function onFinishFailed(errorInfo) {
        console.log('onFinishFailed');
    }
    function navigateToLandingPage() {
        navigate('/');
    }
    // validateStatus="success","error","validating", "warning"
    return (
        <Card title="Login" bordered={true} style={{ width: 500 }} >
            <Form
              name="basic"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 6, span: 16 }} validateStatus={isValid} help={message}>
                <Space size="large">
                    <Button type="primary" htmlType="submit" loading={props.status === 'doing'}>
                      { props.status === 'doing'? 'Signing In': 'Sign In' }
                    </Button>
                </Space>
              </Form.Item>

            </Form>
        </Card>
    );
}

function mapStateToProps(store) {
  const { isLoggedIn, user, status, message } = store.login;
  return { isLoggedIn, user, status, message };
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: (user, callback) =>  signIn(dispatch, user, callback) //dispatch({ type: SIGN_IN, payload: user })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);