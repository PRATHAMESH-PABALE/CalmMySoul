import React, { useState } from 'react';
import axios from 'axios';

const Journal = ({ user }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/journals', {
        userId: user.uid,
        content
      });
      alert('Journal saved!');
      setContent('');
    } catch (err) {
      alert('Failed to save journal');
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Your Journal</h4>
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Write your thoughts..." />
      <br />
      <button onClick={handleSubmit}>Save Entry</button>
    </div>
  );
};

export default Journal;
