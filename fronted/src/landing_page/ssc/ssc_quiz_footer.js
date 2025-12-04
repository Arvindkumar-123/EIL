import React from 'react';

const SscFooter = ({
  submitted,
  calculateScore,
  questions,
  correctCount,
  incorrectCount,
  handleRestart,
  showSolutions,
  setSubmitted,
  setShowSolutions
}) => {
  return (
    <>
      {!submitted ? (
        <button className="btn btn-success" onClick={() => setSubmitted(true)} style={{marginTop:'500px'}}>
          Submit
        </button>
      ) : (
        <div className="score-summary">
          <p><strong>Total Score:</strong> {calculateScore()} / {questions.length-441}</p>
          <p>✅ Correct: {correctCount}</p>
          <p>❌ Incorrect: {incorrectCount}</p>
          <button className="btn btn-primary" onClick={handleRestart}>Restart</button>
          <button className="btn btn-info" onClick={() => setShowSolutions(prev => !prev)}>
            {showSolutions ? 'Hide Solutions' : 'Show Solutions'}
          </button>
        </div>
      )}
    </>
  );
};

export default SscFooter;