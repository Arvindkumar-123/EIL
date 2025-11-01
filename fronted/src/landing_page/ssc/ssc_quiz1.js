import useQuizLogic from "../Quiz/quiz";
import QuestionCard from "../Quiz/up.police.quiz1";
import SscFooter from "./ssc_quiz_footer";
import QuizTimer from "../contexts/Timer.Quiz";

export const  SscQuiz1 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/RBE');

  return (
    <div className="quiz-container">
      {!submitted && questions.length > 0 && (
        <QuizTimer duration={900} onTimeUp={handleAutoSubmit} />
      )}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(0, 30).map((q, index) => {
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
  <SscFooter
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

export const  SscQuiz2 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/RBE');

  return (
    <div className="quiz-container">
      {!submitted && questions.length > 0 && (
        <QuizTimer duration={900} onTimeUp={handleAutoSubmit} />
      )}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(30, 60).map((q, index) => {
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
  <SscFooter
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

export const SscQuiz3 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/RBE');

  return (
    <div className="quiz-container">
      {!submitted && questions.length > 0 && (
        <QuizTimer duration={900} onTimeUp={handleAutoSubmit} />
      )}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(60, 90).map((q, index) => {
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
  <SscFooter
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

export const SscQuiz4 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/RBE');

  return (
    <div className="quiz-container">
      {!submitted && questions.length > 0 && (
        <QuizTimer duration={900} onTimeUp={handleAutoSubmit} />
      )}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(90, 120).map((q, index) => {
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
  <SscFooter
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

export const SscQuiz5 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/RBE');

  return (
    <div className="quiz-container">
      {!submitted && questions.length > 0 && (
        <QuizTimer duration={900} onTimeUp={handleAutoSubmit} />
      )}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(120, 150).map((q, index) => {
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
  <SscFooter
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

export const SscQuiz6 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/RBE');

  return (
    <div className="quiz-container">
      {!submitted && questions.length > 0 && (
        <QuizTimer duration={900} onTimeUp={handleAutoSubmit} />
      )}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(150, 180).map((q, index) => {
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
  <SscFooter
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

export const  SscQuiz7= () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/RBE');

  return (
    <div className="quiz-container">
      {!submitted && questions.length > 0 && (
        <QuizTimer duration={900} onTimeUp={handleAutoSubmit} />
      )}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(180, 210).map((q, index) => {
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
  <SscFooter
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


export const  SscQuiz8 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/RBE');

  return (
    <div className="quiz-container">
      {!submitted && questions.length > 0 && (
        <QuizTimer duration={900} onTimeUp={handleAutoSubmit} />
      )}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(210, 240).map((q, index) => {
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
  <SscFooter
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

export const  SscQuiz9 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/RBE');

  return (
    <div className="quiz-container">
      {!submitted && questions.length > 0 && (
        <QuizTimer duration={900} onTimeUp={handleAutoSubmit} />
      )}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(240, 270).map((q, index) => {
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
  <SscFooter
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


export const  SscQuiz10 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/RBE');

  return (
    <div className="quiz-container">
      {!submitted && questions.length > 0 && (
        <QuizTimer duration={900} onTimeUp={handleAutoSubmit} />
      )}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(270, 300).map((q, index) => {
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
  <SscFooter
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


export const  SscQuiz11 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/RBE');

  return (
    <div className="quiz-container">
      {!submitted && questions.length > 0 && (
        <QuizTimer duration={900} onTimeUp={handleAutoSubmit} />
      )}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(300, 330).map((q, index) => {
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
  <SscFooter
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

export const SscQuiz12 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/RBE');

  return (
    <div className="quiz-container">
      {!submitted && questions.length > 0 && (
        <QuizTimer duration={900} onTimeUp={handleAutoSubmit} />
      )}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(330, 360).map((q, index) => {
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
  <SscFooter
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

export const  SscQuiz13 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/RBE');

  return (
    <div className="quiz-container">
      {!submitted && questions.length > 0 && (
        <QuizTimer duration={900} onTimeUp={handleAutoSubmit} />
      )}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(360, 390).map((q, index) => {
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
  <SscFooter
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

export const SscQuiz14 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/RBE');

  return (
    <div className="quiz-container">
      {!submitted && questions.length > 0 && (
        <QuizTimer duration={900} onTimeUp={handleAutoSubmit} />
      )}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(390, 420).map((q, index) => {
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
  <SscFooter
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

export const  SscQuiz15 = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
  } = useQuizLogic('https://eilback.onrender.com/RBE');

  return (
    <div className="quiz-container">
      {!submitted && questions.length > 0 && (
        <QuizTimer duration={900} onTimeUp={handleAutoSubmit} />
      )}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(420, 450).map((q, index) => {
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
  <SscFooter
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