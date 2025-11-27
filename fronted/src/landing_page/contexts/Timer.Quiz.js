// components/QuizTimer.js
import React, { useEffect, useState } from 'react';

const QuizTimer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerId);
          onTimeUp?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [onTimeUp]);

  const formatTime = sec => {
    const min = Math.floor(sec / 60);
    const rem = sec % 60;
    return `${min}:${rem < 10 ? '0' : ''}${rem}`;
  };

   return (
       <div 
    // style={{
    //   height: '50px',
    //   width: '100%',
    //   zIndex: '10000',
    //   background: 'black',
    //   color: 'white',
    //   position: 'fixed'
    // }}
     >
       <a className='text-center quiz_nav '>
        ⏳ समय शेष: {formatTime(timeLeft)}
      </a>
    </div>
  );
};

export default QuizTimer; 