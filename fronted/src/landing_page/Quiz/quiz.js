

import { useState, useEffect } from 'react';
import axios from 'axios';

const useQuizLogic = (endpoint) => {
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);

  useEffect(() => {
    axios.get(endpoint)
      .then(res => setQuestions(res.data))
      .catch(err => console.error('Error fetching questions:', err));
  }, [endpoint]);

  const handleOptionClick = (questionIndex, optionIndex) => {
    if (submitted) return;
    setSelectedOptions(prev => ({
      ...prev,
      [questionIndex]: prev[questionIndex] === optionIndex ? undefined : optionIndex
    }));
  };

  const calculateScore = () => {
    return questions.reduce((score, q, idx) => {
      const userAnswer = selectedOptions[idx];
      const correctAnswers = Array.isArray(q.answer) ? q.answer.map(Number) : [];
      if (userAnswer === undefined) return score;
      return correctAnswers.includes(userAnswer) ? score + 1 : score - 0.25;
    }, 0);
  };

  const correctCount = questions.filter((q, idx) => {
    const userAnswer = selectedOptions[idx];
    const correctAnswers = Array.isArray(q.answer) ? q.answer.map(Number) : [];
    return correctAnswers.includes(userAnswer);
  }).length;

  const incorrectCount = questions.filter((q, idx) => {
    const userAnswer = selectedOptions[idx];
    const correctAnswers = Array.isArray(q.answer) ? q.answer.map(Number) : [];
    return userAnswer !== undefined && !correctAnswers.includes(userAnswer);
  }).length;

  const handleRestart = () => {
    setSelectedOptions({});
    setSubmitted(false);
    setShowSolutions(false);
  };

  const handleAutoSubmit = () => {
    if (!submitted) {
      setSubmitted(true);
      alert('समय समाप्त! उत्तर जमा किए जा रहे हैं...');
    }
  };

  return {
    questions,
    selectedOptions,
    submitted,
    showSolutions,
    handleOptionClick,
    calculateScore,
    correctCount,
    incorrectCount,
    handleRestart,
    handleAutoSubmit,
    setSubmitted,
    setShowSolutions
  };
  
};

export default useQuizLogic;