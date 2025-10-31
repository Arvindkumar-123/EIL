import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Home from './landing_page/Home/Home';
import Quiz from './landing_page/ssc/ssc_quiz';
// import Authentication from './landing_page/pages/authentication';
import {PoliceQuiz,PoliceQuiz1,PoliceQuiz2,PoliceQuiz3,PoliceQuiz4,PoliceQuiz5} from './landing_page/Quiz/police.Quiz';

import Footer from './footer';
import Uphome from './landing_page/police/uphome';
// import { AuthProvider} from './landing_page/contexts/AuthContext';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
          <Navbar />
          {/* <AuthProvider> */}
          <Routes>
           
            <Route path='/' element={<Home />} />
            {/* <Route path='/login' element={<Authentication />} /> */}
            
            <Route path='/ssc' element={<Quiz/>} />
            <Route path='/police' element={<Uphome/>} />
            <Route path='/police/quiz' element={<PoliceQuiz/>} />
            <Route path='/police/quiz1' element={<PoliceQuiz1/>} />
            <Route path='/police/quiz2' element={<PoliceQuiz2/>} />
            <Route path='/police/quiz3' element={<PoliceQuiz3/>} />
            <Route path='/police/quiz4' element={<PoliceQuiz4/>} />
            <Route path='/police/quiz5' element={<PoliceQuiz5/>} />
          </Routes>
          {/* </AuthProvider> */}
         <Footer />
    </BrowserRouter>
);

