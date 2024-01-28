import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './component/pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/pages/Home';
import Profile from './component/pages/Profile';
import Contact from './component/pages/Contact';
import LoginReg from './component/auth/LoginReg';
import SendPasswordResetEmail from './component/auth/SendPasswordResetEmail';
import ResetPassword from './component/auth/ResetPassword';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >

          <Route index element={ <Home /> }/>
          <Route path="/profile" element={ <Profile /> }/>
          <Route path="/contact" element={ <Contact /> }/>
          <Route path="/loginreg" element={ <LoginReg /> }/>
          <Route path="/password_reset_mail" element={ <SendPasswordResetEmail /> }/>
          <Route path="/reset_password" element={ <ResetPassword /> }/>
          <Route path="/*" element={ <h1>404 Page Not Found</h1> }/>

        </Route>
      </Routes>
    </BrowserRouter>
);
