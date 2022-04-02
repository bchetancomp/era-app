import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import LoginPage from './containers/loginPage/LoginPage';
import SignupPage from './containers/signupPage/SignupPage';


function App() {
  return (
    <div className="App full-height">
        <LoginPage/>
    </div>
  );
}

export default App;
