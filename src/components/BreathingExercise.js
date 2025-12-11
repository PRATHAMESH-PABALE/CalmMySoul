import React, { useState, useEffect } from 'react';
import './BreathingExercise.css';

const BreathingExercise = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState('ready'); // ready, inhale, hold, exhale
  const [countdown, setCountdown] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    const phases = [
      { name: 'inhale', duration: 4, text: 'Breathe In' },
      { name: 'hold', duration: 4, text: 'Hold' },
      { name: 'exhale', duration: 6, text: 'Breathe Out' }
    ];

    let currentPhaseIndex = 0;
    let currentCount = phases[0].duration;
    let cycles = 0;

    setPhase(phases[0].name);
    setCountdown(currentCount);

    const interval = setInterval(() => {
      currentCount--;
      setCountdown(currentCount);

      if (currentCount <= 0) {
        currentPhaseIndex++;
        
        if (currentPhaseIndex >= phases.length) {
          currentPhaseIndex = 0;
          cycles++;
          setCycleCount(cycles);
          
          if (cycles >= 3) {
            setIsRunning(false);
            setPhase('complete');
            clearInterval(interval);
            return;
          }
        }

        currentCount = phases[currentPhaseIndex].duration;
        setPhase(phases[currentPhaseIndex].name);
        setCountdown(currentCount);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const startBreathing = () => {
    setIsRunning(true);
    setPhase('inhale');
    setCycleCount(0);
  };

  const stopBreathing = () => {
    setIsRunning(false);
    setPhase('ready');
    setCycleCount(0);
  };

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale': return 'Breathe In';
      case 'hold': return 'Hold';
      case 'exhale': return 'Breathe Out';
      case 'complete': return 'Well Done!';
      default: return 'Ready to Begin';
    }
  };

  return (
    <div className="breathing-exercise">
      <div className="breathing-container">
        <div className={`breathing-circle ${phase}`}>
          <div className="breathing-text">
            <span className="phase-text">{getPhaseText()}</span>
            {isRunning && phase !== 'complete' && (
              <span className="countdown">{countdown}</span>
            )}
          </div>
        </div>
      </div>

      {isRunning && phase !== 'complete' && (
        <div className="cycle-counter">
          Cycle {cycleCount + 1} of 3
        </div>
      )}

      {phase === 'complete' && (
        <div className="completion-message">
          <p>🎉 Great job! You completed 3 breathing cycles.</p>
          <p className="relaxation-tip">Take a moment to notice how you feel.</p>
        </div>
      )}

      <div className="breathing-controls">
        {!isRunning || phase === 'complete' ? (
          <button className="btn-start" onClick={startBreathing}>
            {phase === 'complete' ? 'Start Again' : 'Start Exercise'}
          </button>
        ) : (
          <button className="btn-stop" onClick={stopBreathing}>
            Stop
          </button>
        )}
      </div>

      {!isRunning && phase === 'ready' && (
        <div className="breathing-instructions">
          <h4>How it works:</h4>
          <ul>
            <li><strong>Breathe In</strong> for 4 seconds</li>
            <li><strong>Hold</strong> for 4 seconds</li>
            <li><strong>Breathe Out</strong> for 6 seconds</li>
          </ul>
          <p>Complete 3 cycles for a calming effect.</p>
        </div>
      )}
    </div>
  );
};

export default BreathingExercise;