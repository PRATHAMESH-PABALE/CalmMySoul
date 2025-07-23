import React, { useState } from 'react';
import axios from 'axios';
import './Journal.css'; // Import the CSS file

const Journal = ({ user }) => {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async () => {
    if (!content.trim()) return;
    
    setIsLoading(true);
    setMessage({ text: '', type: '' });
    
    try {
      await axios.post('http://localhost:5000/api/journals', {
        userId: user.uid,
        content
      });
      setMessage({ text: 'Journal entry saved successfully!', type: 'success' });
      setContent('');
    } catch (err) {
      setMessage({ text: 'Failed to save journal entry. Please try again.', type: 'error' });
      console.error(err);
    } finally {
      setIsLoading(false);
      // Clear message after 3 seconds
      setTimeout(() => setMessage({ text: '', type: '' }), 3000);
    }
  };

  const characterCount = content.length;
  const maxCharacters = 5000;
  const isNearLimit = characterCount > maxCharacters * 0.9;
  const isOverLimit = characterCount > maxCharacters;

  return (
    <div className="journal-container">
      <h4 className="journal-title">Your Journal</h4>
      
      {message.text && (
        <div className={`journal-message ${message.type}`}>
          {message.text}
        </div>
      )}
      
      <div className="journal-form">
        <textarea
          className="journal-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your thoughts, reflections, and experiences here..."
          maxLength={maxCharacters}
          disabled={isLoading}
        />
        
        <div className="journal-actions">
          <span className={`character-count ${isOverLimit ? 'error' : isNearLimit ? 'warning' : ''}`}>
            {characterCount}/{maxCharacters} characters
          </span>
          <button
            onClick={handleSubmit}
            className={`journal-submit-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading || !content.trim() || isOverLimit}
          >
            {isLoading ? '' : 'Save Entry'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Journal;