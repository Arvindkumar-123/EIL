import useQuizLogic from "../../Quiz/quiz";
import QuestionCard from "../../Quiz/up.police.quiz1";
import SscFooter from "../../ssc/ssc_quiz_footer";

export const  Science = () =>  {
    const {questions,selectedOptions,submitted,showSolutions,
        handleOptionClick,calculateScore,correctCount,incorrectCount,handleRestart,handleAutoSubmit,setSubmitted,setShowSolutions
   } = useQuizLogic('https://eilback.onrender.com/science');

  return (
    <div className="quiz-container">
      {/* {!submitted && questions.length > 0 && (
        <QuizTimer duration={900} onTimeUp={handleAutoSubmit} />
      )} */}

      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.slice(0, ).map((q, index) => {
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