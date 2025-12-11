import React, { useState } from 'react';
import axios from 'axios';
import './MoodCheckIn.css';

const MoodCheckIn = ({ user }) => {
  const [mood, setMood] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [loading, setLoading] = useState(false);

  const moodOptions = [
    { emoji: '😊', label: 'Happy', value: 'happy' },
    { emoji: '😔', label: 'Sad', value: 'sad' },
    { emoji: '😰', label: 'Anxious', value: 'anxious' },
    { emoji: '😌', label: 'Calm', value: 'calm' },
    { emoji: '😤', label: 'Angry', value: 'angry' },
    { emoji: '😴', label: 'Tired', value: 'tired' }
  ];

  const handleMoodSelect = (moodOption) => {
    setSelectedEmoji(moodOption.emoji);
    setMood(moodOption.label);
  };

  const handleSubmit = async () => {
    if (!mood) {
      alert('Please select a mood');
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/moods', {
        userId: user.uid,
        mood
      });
      alert('Mood saved successfully! 🎉');
      setMood('');
      setSelectedEmoji('');
    } catch (err) {
      alert('Failed to save mood. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mood-checkin">
      <h4 className="mood-question">How are you feeling today?</h4>
      
      <div className="mood-grid">
        {moodOptions.map((option) => (
          <button
            key={option.value}
            className={`mood-option ${selectedEmoji === option.emoji ? 'selected' : ''}`}
            onClick={() => handleMoodSelect(option)}
            type="button"
          >
            <span className="mood-emoji">{option.emoji}</span>
            <span className="mood-label">{option.label}</span>
          </button>
        ))}
      </div>

      <div className="mood-input-container">
        <input
          type="text"
          className="mood-input"
          value={mood}
          onChange={e => setMood(e.target.value)}
          placeholder="Or type your mood here..."
        />
      </div>

      <button
        className={`mood-submit ${loading ? 'loading' : ''}`}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Saving...' : 'Save Mood'}
      </button>
    </div>
  );
};

export default MoodCheckIn;