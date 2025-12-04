import React from 'react';

const QuestionCard = ({
  q,
  index,
  userAnswer,
  correctAnswers,
  submitted,
  showSolutions,
  handleOptionClick
}) => {
  const optionLabels = ['(A)', '(B)', '(C)', '(D)']; 
  return (
    <div className="question-block">
      <p style={{color:'gold'}}><strong>Q:</strong> {q.question}</p>
      <ul className="option-list">
        {q.options.map((opt, optIdx) => {
          const isSelected = userAnswer === optIdx;
          const isCorrect = correctAnswers.includes(optIdx);
          const showFeedback = submitted;

          let optionClass = 'option-item';
          if (showFeedback) {
            if (isCorrect) optionClass += ' correct';
            else if (isSelected) optionClass += ' incorrect';
          } else if (isSelected) {
            optionClass += ' selected';
          }

          return (
            <li
              key={optIdx}
              className={optionClass}
              onClick={() => handleOptionClick(index, optIdx)}
            >
             <strong>{optionLabels[optIdx]}</strong> {opt}
              {showFeedback && isCorrect && <span> ✅</span>}
              {showFeedback && isSelected && !isCorrect && <span> ❌</span>}
            </li>
          );
        })}
      </ul>

      {submitted && (
        <div className="result-block">
          <p>
            <strong>Result:</strong>{' '}
            {userAnswer === undefined
              ? 'Not Attempted ⚠️'
              : correctAnswers.includes(userAnswer)
              ? 'Correct ✅'
              : 'Incorrect ❌'}
          </p>
          {showSolutions && (
            <>
              <p className="correct-answer">
                <strong>Correct Answer:</strong> {q.options[q.answer[0]]}
              </p>
              {q.explanation?.trim() && (
                <p className="explanation">
                  <strong>Explanation:</strong> {q.explanation}
                </p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;