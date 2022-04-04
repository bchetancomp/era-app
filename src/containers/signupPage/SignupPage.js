import { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Input, InputNumber, Button, Space } from 'antd';

export default function SignupPage(props) {
    const navigate = useNavigate();
    const message = props.message;
    let isValid = "success";
    if(message && message.length > 0) {
        isValid = "error";
    }
    function onFinish(values) {
        console.log('onFinish');
        props.signupActions.signUp(values.user, navigateToLoginPage);
    }
    function onFinishFailed() {
        console.log('onFinishFailed');
    }
    function onFormReset() {
        this.setState({});
    }
    function navigateToLoginPage() {
        navigate('/login');
    }
    return(
        <Card title="Sign up" bordered={true} style={{ width: 500 }}>
            <Form
                name="nest-messages"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                  <Form.Item name={['user', 'username']} label="Username" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                  <Form.Item label="Password" name={['user', 'password']} rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password />
                  </Form.Item>
                  <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]} rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                  <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                    <InputNumber />
                  </Form.Item>
                  <Form.Item name={['user', 'website']} label="Website">
                    <Input />
                  </Form.Item>
                  <Form.Item name={['user', 'introduction']} label="Introduction">
                    <Input.TextArea />
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 6, span: 16 }} validateStatus={isValid} help={message}>
                    <Space size="large">
                        <Button type="primary" htmlType="submit" loading={props.status === 'doing'}>
                          { props.status === 'doing'? 'Signing Up': 'Sign Up' }
                        </Button>
                        <Button onClick={onFormReset}>Reset</Button>
                    </Space>
                  </Form.Item>
            </Form>
        </Card>
    );
}