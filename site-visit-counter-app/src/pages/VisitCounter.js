import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { PageHeader, Button, Card } from 'antd';
import { CLEAR_SIGN_IN_STATS, SIGN_OUT } from '../reducers/constants';

function VisitCounter(props) {
    if (!props.isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    let { totalAttempts, success, failures } = props;
    return (
            <PageHeader
              ghost={false}
              onBack={() => window.history.back()}
              title="Site Visit Counter Page"
              subTitle="This is a subtitle"
              extra={[
                <Button key="2" onClick={ (event)=>{ props.clearSignInStats() } }>Clear Stats</Button>,
                <Button key="1" type="primary" onClick={(event)=>{ props.signOut() }}>Logout</Button>,
              ]}
            >
              <table>
                <tr>
                  <th>Total Site visits</th>
                  <th>Successful Login Attempts</th>
                  <th>Failed Login Attempts</th>
                </tr>
                <tr>
                  <td>{totalAttempts}</td>
                  <td>{success}</td>
                  <td>{failures}</td>
                </tr>
              </table>
            </PageHeader>
    );
}

function mapStateToProps(store) {
  const { isLoggedIn, totalAttempts, success, failures } = store.login;
  return { isLoggedIn, totalAttempts, success, failures };
}

function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch({ type: SIGN_OUT }),
    clearSignInStats: () => dispatch({ type: CLEAR_SIGN_IN_STATS })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitCounter);