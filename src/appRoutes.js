import {Component} from 'react';
import LoginPage from './containers/loginPage/LoginPage.container';
import SignupPage from './containers/signupPage/SignupPage';
import LandingPage from './containers/landingPage/LandingPage.container';
import VisitCounter from './containers/visitCounter/VisitCounter';
import ProfilePage from './containers/profile/ProfilePage';
import SettingsPage from './containers/settings/SettingsPage';
import AppsListPage from './containers/appsList/AppsListPage';
import CLM from './apps/clm/CLM';
import CPQ from './apps/cpq/CPQ';
import CRM from './apps/crm/CRM';
import ERP from './apps/erp/ERP';
import ITS from './apps/its/ITS';
import ITSM from './apps/itsm/ITSM';
import SIEM from './apps/siem/SIEM';


import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
    return (
       <BrowserRouter>
           <Routes>
             <Route path="/" element={<LandingPage/>}>
                <Route path="/" element={<AppsListPage/>}></Route>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/settings" element={<SettingsPage />} />

                <Route path="/clm" element={<CLM />} />
                <Route path="/cpq" element={<CPQ />} />
                <Route path="/crm" element={<CRM />} />
                <Route path="/erp" element={<ERP />} />
                <Route path="/its" element={<ITS />} />
                <Route path="/itsm" element={<ITSM />} />
                <Route path="/siem" element={<SIEM />} />
             </Route>
             <Route path="login" element={<LoginPage/>} />
             <Route path="signup" element={<SignupPage/>} />
             <Route path="visits" element={<VisitCounter/>} />
             <Route path="*" element={<p>There's nothing here: 404!</p>} />
           </Routes>
        </BrowserRouter>
    );
}