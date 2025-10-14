import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Home from './landing_page/Home/Home';
import Quiz from './landing_page/ssc/ssc_quiz';
import Authentication from './landing_page/pages/authentication';

import Footer from './footer';
import { AuthProvider} from './landing_page/contexts/AuthContext';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
          <Navbar />
          <AuthProvider>
          <Routes>
           
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Authentication />} />
            
            <Route path='/ssc' element={<Quiz/>} />
           
          </Routes>
          </AuthProvider>
         <Footer />
    </BrowserRouter>
);

