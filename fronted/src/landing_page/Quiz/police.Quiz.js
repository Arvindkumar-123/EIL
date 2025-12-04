

import React from 'react';

// import QuizTimer from '../contexts/Timer.Quiz';
import useQuizLogic from "./quiz"
import QuestionCard from './up.police.quiz1';
import QuizFooter from './quiz_footer';


export const  PoliceQuiz = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/UP_police');

  return (
    <div className="quiz-container">
      {/* {!submitted && questions.length > 0 && (
        <QuizTimer duration={2400} onTimeUp={handleAutoSubmit} />
      )} */}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(0, 80).map((q, index) => {
          const userAnswer = selectedOptions[index];
          const correctAnswers = Array.isArray(q.answer) ? q.answer.map(Number) : [];

          return (
            <QuestionCard
              key={index}
              q={q}
              index={index}
              userAnswer={userAnswer}
              correctAnswers={correctAnswers}
              submitted={submitted}
              showSolutions={showSolutions}
              handleOptionClick={handleOptionClick}
            />
          );
        })
      )}


     {questions.length > 0 && (
  <QuizFooter
    submitted={submitted}
    calculateScore={calculateScore}
    questions={questions}
    correctCount={correctCount}
    incorrectCount={incorrectCount}
    handleRestart={handleRestart}
    showSolutions={showSolutions}
    setSubmitted={setSubmitted}
    setShowSolutions={setShowSolutions}
  />
)}
    </div>
  );
};

export const  PoliceQuiz1 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/UP_police');



  return (
    <div className="quiz-container">
      {/* {!submitted && questions.length > 0 && (
        <QuizTimer duration={2400} onTimeUp={handleAutoSubmit} />
      )} */}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(80, 160).map((q, index) => {
          const userAnswer = selectedOptions[index];
          const correctAnswers = Array.isArray(q.answer) ? q.answer.map(Number) : [];

          return (
            <QuestionCard
              key={index}
              q={q}
              index={index}
              userAnswer={userAnswer}
              correctAnswers={correctAnswers}
              submitted={submitted}
              showSolutions={showSolutions}
              handleOptionClick={handleOptionClick}
            />
          );
        })
      )}


     {questions.length > 0 && (
  <QuizFooter
    submitted={submitted}
    calculateScore={calculateScore}
    questions={questions}
    correctCount={correctCount}
    incorrectCount={incorrectCount}
    handleRestart={handleRestart}
    showSolutions={showSolutions}
    setSubmitted={setSubmitted}
    setShowSolutions={setShowSolutions}
  />
)}
    </div>
  );
};

export const  PoliceQuiz2 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/UP_police');



  return (
    <div className="quiz-container">
      {/* {!submitted && questions.length > 0 && (
        <QuizTimer duration={2400} onTimeUp={handleAutoSubmit} />
      )} */}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(160, 240).map((q, index) => {
          const userAnswer = selectedOptions[index];
          const correctAnswers = Array.isArray(q.answer) ? q.answer.map(Number) : [];

          return (
            <QuestionCard
              key={index}
              q={q}
              index={index}
              userAnswer={userAnswer}
              correctAnswers={correctAnswers}
              submitted={submitted}
              showSolutions={showSolutions}
              handleOptionClick={handleOptionClick}
            />
          );
        })
      )}


     {questions.length > 0 && (
  <QuizFooter
    submitted={submitted}
    calculateScore={calculateScore}
    questions={questions}
    correctCount={correctCount}
    incorrectCount={incorrectCount}
    handleRestart={handleRestart}
    showSolutions={showSolutions}
    setSubmitted={setSubmitted}
    setShowSolutions={setShowSolutions}
  />
)}
    </div>
  );
};

export const  PoliceQuiz3 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/UP_police');



  return (
    <div className="quiz-container">
      {/* {!submitted && questions.length > 0 && (
        <QuizTimer duration={2400} onTimeUp={handleAutoSubmit} />
      )} */}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(240, 320).map((q, index) => {
          const userAnswer = selectedOptions[index];
          const correctAnswers = Array.isArray(q.answer) ? q.answer.map(Number) : [];

          return (
            <QuestionCard
              key={index}
              q={q}
              index={index}
              userAnswer={userAnswer}
              correctAnswers={correctAnswers}
              submitted={submitted}
              showSolutions={showSolutions}
              handleOptionClick={handleOptionClick}
            />
          );
        })
      )}


     {questions.length > 0 && (
  <QuizFooter
    submitted={submitted}
    calculateScore={calculateScore}
    questions={questions}
    correctCount={correctCount}
    incorrectCount={incorrectCount}
    handleRestart={handleRestart}
    showSolutions={showSolutions}
    setSubmitted={setSubmitted}
    setShowSolutions={setShowSolutions}
  />
)}
    </div>
  );
};

export const  PoliceQuiz4 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/UP_police');



  return (
    <div className="quiz-container">
      {/* {!submitted && questions.length > 0 && (
        <QuizTimer duration={2400} onTimeUp={handleAutoSubmit} />
      )} */}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(320, 400).map((q, index) => {
          const userAnswer = selectedOptions[index];
          const correctAnswers = Array.isArray(q.answer) ? q.answer.map(Number) : [];

          return (
            <QuestionCard
              key={index}
              q={q}
              index={index}
              userAnswer={userAnswer}
              correctAnswers={correctAnswers}
              submitted={submitted}
              showSolutions={showSolutions}
              handleOptionClick={handleOptionClick}
            />
          );
        })
      )}


     {questions.length > 0 && (
  <QuizFooter
    submitted={submitted}
    calculateScore={calculateScore}
    questions={questions}
    correctCount={correctCount}
    incorrectCount={incorrectCount}
    handleRestart={handleRestart}
    showSolutions={showSolutions}
    setSubmitted={setSubmitted}
    setShowSolutions={setShowSolutions}
  />
)}
    </div>
  );
};

export const  PoliceQuiz5 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/UP_police');



  return (
    <div className="quiz-container">
      {/* {!submitted && questions.length > 0 && (
        <QuizTimer duration={2400} onTimeUp={handleAutoSubmit} />
      )} */}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(400, ).map((q, index) => {
          const userAnswer = selectedOptions[index];
          const correctAnswers = Array.isArray(q.answer) ? q.answer.map(Number) : [];

          return (
            <QuestionCard
              key={index}
              q={q}
              index={index}
              userAnswer={userAnswer}
              correctAnswers={correctAnswers}
              submitted={submitted}
              showSolutions={showSolutions}
              handleOptionClick={handleOptionClick}
            />
          );
        })
      )}


     {questions.length > 0 && (
  <QuizFooter
    submitted={submitted}
    calculateScore={calculateScore}
    questions={questions}
    correctCount={correctCount}
    incorrectCount={incorrectCount}
    handleRestart={handleRestart}
    showSolutions={showSolutions}
    setSubmitted={setSubmitted}
    setShowSolutions={setShowSolutions}
  />
)}
    </div>
  );
};
 




 




 




 




 