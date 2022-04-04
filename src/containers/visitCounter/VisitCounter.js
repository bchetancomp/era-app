import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import { PageHeader, Button, Descriptions } from 'antd';

function VisitCounter(props) {
    let {totalLoginAttempts, loginSuccess, loginFailures, totalSignupAttempts, signupSuccess, signupFailures} = props;
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
              ghost={false}
              onBack={() => window.history.back()}
              title="App Visit Stats"
              subTitle="Shows Login and Signup statistics"
              extra={[
                <Button key="2">Clear All</Button>,
                <Button key="1" type="primary">
                  Export
                </Button>,
              ]}
            >
              <Descriptions size="small" column={3}>
                <Descriptions.Item label="Login attempts"><a>{totalLoginAttempts}</a></Descriptions.Item>
                <Descriptions.Item label="Success"><a>{loginSuccess}</a></Descriptions.Item>
                <Descriptions.Item label="Failure"><a>{loginFailures}</a></Descriptions.Item>
                <Descriptions.Item label="Signup attempts"><a>{totalSignupAttempts}</a></Descriptions.Item>
                <Descriptions.Item label="Success"><a>{signupSuccess}</a></Descriptions.Item>
                <Descriptions.Item label="Failure"><a>{signupFailures}</a></Descriptions.Item>
              </Descriptions>
            </PageHeader>
          </div>
    )
}

export default connect((state) => ({
    totalLoginAttempts: state.login.totalAttempts,
    loginSuccess: state.login.success,
    loginFailures: state.login.failures,
    totalSignupAttempts: state.signup.totalAttempts,
    signupSuccess: state.signup.success,
    signupFailures: state.signup.failures
}), (dispatch) => ({}))(VisitCounter);