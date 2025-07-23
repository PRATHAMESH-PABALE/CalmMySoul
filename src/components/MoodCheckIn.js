import React, { useState } from 'react';
import axios from 'axios';

const MoodCheckIn = ({ user }) => {
  const [mood, setMood] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/moods', {
        userId: user.uid,
        mood
      });
      alert('Mood saved!');
      setMood('');
    } catch (err) {
      alert('Failed to save mood');
      console.error(err);
    }
  };

  return (
    <div>
      <h4>How are you feeling today?</h4>
      <input value={mood} onChange={e => setMood(e.target.value)} placeholder="e.g., Happy, Sad" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default MoodCheckIn;
