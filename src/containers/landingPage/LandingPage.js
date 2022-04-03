import { Navigate, Outlet } from 'react-router-dom';
import LeftNav from '../../components/leftNav/LeftNav';
import AppBar from '../../components/appBar/AppBar';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default function LandingPage(props) {
    if (!props.isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return (
        <Layout className="full-height">
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: 48, color: 'rgba(255, 255, 255, 0.65)' }}>
            <AppBar/>
          </Header>
          <Layout style={{ height: '100%', borderRight: 0 }}>
            <Sider>
                <LeftNav/>
            </Sider>
            <Content style={{margin: '50px 0px 0px 60px', padding: '20px', overflowY: 'scroll'}}>
                <Outlet/>
            </Content>
          </Layout>
          <Footer style={{ height: 24, textAlign: 'center', padding: '0', backgroundColor: '#001529', color: 'rgba(255, 255, 255, 0.65)' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
    );
}