import { Component } from 'react';
import { Input, Button, Checkbox, Form, Card, Space } from 'antd';
import { Link } from 'react-router-dom';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        };
        this.onFinish = this.onFinish.bind(this);
        this.onFinishFailed = this.onFinishFailed.bind(this);
    }
    onFinish(values) {
        console.log('onFinish');
    }
    onFinishFailed(errorInfo) {
        console.log('onChangePswd');
    }
    render() {
        return (
            <Card title="Login" bordered={true} style={{ width: 500 }} >
                <Form
                  name="basic"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  onFinish={this.onFinish}
                  onFinishFailed={this.onFinishFailed}
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

                  <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                    <Space size="large">
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                        <Link to="/signup">Sign Up</Link>
                    </Space>
                  </Form.Item>

                </Form>
            </Card>
        );
    }
}