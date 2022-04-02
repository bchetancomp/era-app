import { Component } from 'react';
import { Card, Form, Input, InputNumber, Button, Space } from 'antd';

export default class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            confirmPassword: null,
            age: null,
            website: null
        };
        this.onFinish = this.onFinish.bind(this);
        this.onFinishFailed = this.onFinishFailed.bind(this);
    }
    onFinish() {
        console.log('onFinish');
    }
    onFinishFailed() {
        console.log('onChangePswd');
    }
    onFormReset() {
        this.setState({});
    }
    render() {
        return(
            <Card title="Sign up" bordered={true} style={{ width: 500 }}>
                <Form
                    name="nest-messages"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                >
                      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                        <Input />
                      </Form.Item>
                      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
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
                      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Space size="large">
                            <Button type="primary" htmlType="submit">
                              Submit
                            </Button>
                            <Button onClick={this.onFormReset}>Reset</Button>
                        </Space>
                      </Form.Item>
                </Form>
            </Card>
        );
    }
}