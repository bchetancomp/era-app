import {Component} from 'react';
import LoginPage from './pages/LoginPage';
import VisitCounter from './pages/VisitCounter';


import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
    return (
       <BrowserRouter>
           <Routes>
             <Route path="/" element={<VisitCounter/>} />
             <Route path="login" element={<LoginPage/>} />
             <Route path="*" element={<p>There's nothing here: 404!</p>} />
           </Routes>
        </BrowserRouter>
    );
}