import {Component} from 'react';
import LoginPage from './containers/loginPage/LoginPage';
import SignupPage from './containers/signupPage/SignupPage';
import LandingPage from './containers/landingPage/LandingPage';
import VisitCounter from './containers/visitCounter/VisitCounter';

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
    return (
       <BrowserRouter>
           <Routes>
             <Route path="/"  element={<LandingPage/>} />
             <Route path="login" element={<LoginPage/>} />
             <Route path="signup" element={<SignupPage/>} />
             <Route path="visits" element={<VisitCounter/>} />
           </Routes>
        </BrowserRouter>
    );
}