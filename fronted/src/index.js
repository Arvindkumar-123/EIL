import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Home from './landing_page/Home/Home';
import Quiz from './landing_page/ssc/ssc_quiz';
// import Authentication from './landing_page/pages/authentication';
import {PoliceQuiz,PoliceQuiz1,PoliceQuiz2,PoliceQuiz3,PoliceQuiz4,PoliceQuiz5} from './landing_page/Quiz/police.Quiz';
import { SscQuiz1,SscQuiz2,SscQuiz3,SscQuiz4,SscQuiz5,SscQuiz6,SscQuiz7,SscQuiz8,SscQuiz9,SscQuiz10,SscQuiz11,SscQuiz12,SscQuiz13,SscQuiz14,SscQuiz15 } from './landing_page/ssc/ssc_quiz1';
import { Science } from './landing_page/RailGROUP/Group_D/science';
import Sscpage from './landing_page/sscpage/All_scc'; 
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
            <Route path='/ssctext' element={<Sscpage/>} />

            <Route path='/police/quiz' element={<PoliceQuiz/>} />
            <Route path='/police/quiz1' element={<PoliceQuiz1/>} />
            <Route path='/police/quiz2' element={<PoliceQuiz2/>} />
            <Route path='/police/quiz3' element={<PoliceQuiz3/>} />
            <Route path='/police/quiz4' element={<PoliceQuiz4/>} />
            <Route path='/police/quiz5' element={<PoliceQuiz5/>} />
            <Route path='/Rail/Quiz1' element={<SscQuiz1/>} />
            <Route path='/Rail/Quiz2' element={<SscQuiz2/>} />
            <Route path='/Rail/Quiz3' element={<SscQuiz3/>} />
            <Route path='/Rail/Quiz4' element={<SscQuiz4/>} />
            <Route path='/Rail/Quiz5' element={<SscQuiz5/>} />
            <Route path='/Rail/Quiz6' element={<SscQuiz6/>} />
            <Route path='/Rail/Quiz7' element={<SscQuiz7/>} />
            <Route path='/Rail/Quiz8' element={<SscQuiz8/>} />
            <Route path='/Rail/Quiz9' element={<SscQuiz9/>} />
            <Route path='/Rail/Quiz10' element={<SscQuiz10/>} />
            <Route path='/Rail/Quiz11' element={<SscQuiz11/>} />
            <Route path='/Rail/Quiz12' element={<SscQuiz12/>} />
            <Route path='/Rail/Quiz13' element={<SscQuiz13/>} />
            <Route path='/Rail/Quiz14' element={<SscQuiz14/>} />
            <Route path='/Rail/Quiz15' element={<SscQuiz15/>} />
             <Route path='/science' element={<Science/>} />
            
          </Routes>
          {/* </AuthProvider> */}
         <Footer />
    </BrowserRouter>
);

