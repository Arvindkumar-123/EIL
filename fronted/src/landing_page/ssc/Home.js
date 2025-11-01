
import React from "react";
import { useNavigate } from 'react-router-dom';

function Home(){
  const router = useNavigate(); 
  return(
     <div className="container">
            <div className="row text-center ms-5" >
                <div className="col-8 border mt-1 "><a className="p-0">Quiz1 <br/> Total question 30 <br/><button className="btn btn-success " onClick={() => router('/Rail/Quiz1')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz2 <br/> Total question 30 <br/><button className="btn btn-success " onClick={() => router('/Rail/Quiz2')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz3 <br/> Total question 30 <br/><button className="btn btn-success " onClick={() => router('/Rail/Quiz3')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz4 <br/> Total question 30 <br/><button className="btn btn-success " onClick={() => router('/Rail/Quiz4')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz5 <br/> Total question 30 <br/><button className="btn btn-success " onClick={() => router('/Rail/Quiz5')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz6 <br/> Total question 30 <br/><button className="btn btn-success " onClick={() => router('/Rail/Quiz6')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz7 <br/> Total question 30 <br/><button className="btn btn-success "  onClick={() => router('/Rail/Quiz7')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz8 <br/> Total question 30 <br/><button className="btn btn-success "  onClick={() => router('/Rail/Quiz8')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz9 <br/> Total question 30 <br/><button className="btn btn-success "  onClick={() => router('/Rail/Quiz9')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz10 <br/> Total question 30 <br/><button className="btn btn-success "  onClick={() => router('/Rail/Quiz10')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz11 <br/> Total question 30 <br/><button className="btn btn-success "  onClick={() => router('/Rail/Quiz11')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz12 <br/> Total question 30 <br/><button className="btn btn-success "  onClick={() => router('/Rail/Quiz12')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz13 <br/> Total question 30 <br/><button className="btn btn-success "  onClick={() => router('/Rail/Quiz13')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz14 <br/> Total question 30 <br/><button className="btn btn-success "  onClick={() => router('/Rail/Quiz14')}>Start</button></a></div>
                <div className="col-8 border mt-2"><a className="p-0">Quiz15 <br/> Total question 30 <br/><button className="btn btn-success "  onClick={() => router('/Rail/Quiz15')}>Start</button></a></div>

            </div>
        </div>
  )
};

export default Home;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import QuizTimer from '../contexts/Timer.Quiz';



// // 🧠 Main Quiz Component
// const Home = () => {
//   const [questions, setQuestions] = useState([]);
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [showSolutions, setShowSolutions] = useState(false);

//   useEffect(() => {
//     axios.get('https://eilback.onrender.com/RBE')
//       .then(res => setQuestions(res.data))
//       .catch(err => console.error('Error fetching questions:', err));
//   }, []);

//   const handleOptionClick = (questionIndex, optionIndex) => {
//     if (submitted) return;
//     setSelectedOptions(prev => ({
//       ...prev,
//       [questionIndex]: prev[questionIndex] === optionIndex ? undefined : optionIndex
//     }));
//   };

//   const calculateScore = () => {
//     return questions.reduce((score, q, idx) => {
//       const userAnswer = selectedOptions[idx];
//       const correctAnswers = Array.isArray(q.answer) ? q.answer.map(Number) : [];

//       if (userAnswer === undefined) return score;
//       if (correctAnswers.includes(userAnswer)) return score + 1;
//       return score - 0.25;
//     }, 0);
//   };

//   const correctCount = questions.filter((q, idx) => {
//     const userAnswer = selectedOptions[idx];
//     const correctAnswers = Array.isArray(q.answer) ? q.answer.map(Number) : [];
//     return correctAnswers.includes(userAnswer);
//   }).length;

//   const incorrectCount = questions.filter((q, idx) => {
//     const userAnswer = selectedOptions[idx];
//     const correctAnswers = Array.isArray(q.answer) ? q.answer.map(Number) : [];
//     return userAnswer !== undefined && !correctAnswers.includes(userAnswer);
//   }).length;

//   const handleRestart = () => {
//     setSelectedOptions({});
//     setSubmitted(false);
//     setShowSolutions(false);
//   };

//   const handleAutoSubmit = () => {
//     if (!submitted) {
//       setSubmitted(true);
//       alert('समय समाप्त! उत्तर जमा किए जा रहे हैं...');
//     }
//   };
  


//   return (
//     <div style={{ padding: '20px', background: 'white', color: 'black',whiteSpace: 'pre-line' }}>
//       {/* {!submitted && <QuizTimer duration={30} onTimeUp={handleAutoSubmit} />} */}
//       {!submitted && questions.length > 0 && (
//         <QuizTimer  duration={300} onTimeUp={handleAutoSubmit} />
//       )}



//       {questions.length === 0 ? (
//         <p>Loading...</p>
//       ) : (
//         questions.slice(0,).map((q, index) => {
//           const userAnswer = selectedOptions[index];
//           const correctAnswers = Array.isArray(q.answer) ? q.answer.map(Number) : [];

//           return (
//             <div key={index} style={{ marginBottom: '30px',whiteSpace: 'pre-line'  }}>
//               <p style={{whiteSpace: 'pre-line' }}><strong>{index + 1}:</strong> {q.question}
// </p>
//               <ul style={{ listStyle: 'none', padding: 0 }}>
//                 {q.options.map((opt, optIdx) => {
//                   const isSelected = userAnswer === optIdx;
//                   const isCorrect = correctAnswers.includes(optIdx);
//                   const showFeedback = submitted;

//                   let bgColor = '#f0f0f0';
//                   if (showFeedback) {
//                     if (isCorrect) bgColor = '#4CAF50';
//                     else if (isSelected) bgColor = '#F44336';
//                   } else if (isSelected) {
//                     bgColor = '#90CAF9';
//                   }

//                   return (
//                     <li
//                       key={optIdx}
//                       onClick={() => handleOptionClick(index, optIdx)}
//                       style={{
//                         backgroundColor: bgColor,
//                         color: 'black',
//                         padding: '10px',
//                         margin: '5px 0',
//                         cursor: submitted ? 'default' : 'pointer',
//                         borderRadius: '5px'
//                       }}
//                     >
//                       {opt}
//                       {showFeedback && isCorrect && <span> ✅</span>}
//                       {showFeedback && isSelected && !isCorrect && <span> ❌</span>}
//                     </li>
//                   );
//                 })}
//               </ul>

//               {submitted && (
//                 <div style={{ marginTop: '5px' }}>
//                   <p>
//                     <strong>Result:</strong>{' '}
//                     {userAnswer === undefined
//                       ? 'Not Attempted ⚠️'
//                       : correctAnswers.includes(userAnswer)
//                       ? 'Correct ✅'
//                       : 'Incorrect ❌'}
//                   </p>
//                   {showSolutions && (
//                     <>
//                       <p style={{ color: '#2E7D32' }}>
//                         <strong>Correct Answer:</strong> {q.options[q.answer[0]]}
//                       </p>
//                       {q.explanation && q.explanation.trim() !== '' && (
//                         <p style={{ fontStyle: 'italic', color: '#555' }}>
//                           <strong>Explanation:</strong> {q.explanation}
//                         </p>
//                       )}
//                     </>
//                   )}
//                 </div>
//               )}
//             </div>
//           );
//         })
//       )}

//       {!submitted ? (
//         <button
//           className='btn btn-success'
//           onClick={() => setSubmitted(true)}
//         >
//           Submit
//         </button>
//       ) : (
//         <div style={{ marginTop: '20px' }}>
//           <p><strong>Total Score:</strong> {calculateScore()} / {questions.length}</p>
//           <p>✅ Correct: {correctCount}</p>
//           <p>❌ Incorrect:  ({incorrectCount })</p>
//           <button
//             className='btn btn-primary'
//             onClick={handleRestart}
//             style={{ marginRight: '10px' }}
//           >
//             Restart
//           </button>
//           <button
//             className='btn btn-info'
//             onClick={() => setShowSolutions(prev => !prev)}
//           >
//             {showSolutions ? 'Hide Solutions' : 'Show Solutions'}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;


// src/pages/QuizPage.js
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { loadQuiz } from '../utils/loadQuiz';
// import QuizPlayer from '../components/QuizPlayer';

// function QuizPage() {
//   const { quizId } = useParams(); // e.g., quiz1, quiz2, quiz999
//   const [questions, setQuestions] = useState([]);
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [showSolutions, setShowSolutions] = useState(false);

//   useEffect(() => {
//     setQuestions(loadQuiz(quizId));
//   }, [quizId]);

//   const handleOptionClick = (qIdx, optIdx) => {
//     if (!submitted) {
//       setSelectedOptions(prev => ({ ...prev, [qIdx]: optIdx }));
//     }
//   };

//   const handleRestart = () => {
//     setSelectedOptions({});
//     setSubmitted(false);
//     setShowSolutions(false);
//   };

//   const handleAutoSubmit = () => setSubmitted(true);

//   const calculateScore = () =>
//     questions.reduce((score, q, i) => {
//       const correct = Array.isArray(q.answer) ? q.answer.map(Number) : [];
//       return correct.includes(selectedOptions[i]) ? score + 1 : score;
//     }, 0);

//   const correctCount = calculateScore();
//   const incorrectCount = questions.length - correctCount;

//   return (
//     <QuizPlayer
//       questions={questions}
//       selectedOptions={selectedOptions}
//       submitted={submitted}
//       showSolutions={showSolutions}
//       handleOptionClick={handleOptionClick}
//       handleRestart={handleRestart}
//       setSubmitted={setSubmitted}
//       setShowSolutions={setShowSolutions}
//       calculateScore={calculateScore}
//       correctCount={correctCount}
//       incorrectCount={incorrectCount}
//       handleAutoSubmit={handleAutoSubmit}
//     />
//   );
// }

// export default QuizPage;