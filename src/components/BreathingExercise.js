import React, { useState } from 'react';

const BreathingExercise = () => {
  const [isRunning, setIsRunning] = useState(false);

  const startBreathing = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 15000); // 15 seconds cycle
  };

  return (
    <div>
      <h2>Breathing Exercise</h2>
      <button onClick={startBreathing}>Start Breathing</button>
      {isRunning && <div className="circle breathing-animation"></div>}
      <style jsx>{`
        .circle {
          margin: 20px auto;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: lightblue;
        }
        .breathing-animation {
          animation: breathe 5s ease-in-out infinite;
        }
        @keyframes breathe {
          0% { transform: scale(1); }
          50% { transform: scale(1.5); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default BreathingExercise;
