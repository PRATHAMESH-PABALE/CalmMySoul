import React from 'react';
import MoodCheckIn from './MoodCheckIn';
import Journal from './Journal';
import BreathingExercise from './BreathingExercise';
import Chatbot from './Chatbot';

const Dashboard = ({ user }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome, {user?.displayName || 'User'} 🌟</h2>
      <p style={styles.subtitle}>Let’s take care of your mental health today 💖</p>

      <div style={styles.section}>
        <h3>🌈 Mood Check-In</h3>
        <MoodCheckIn />
      </div>

      <div style={styles.section}>
        <h3>🧘 Breathing Exercise</h3>
        <BreathingExercise />
      </div>

      <div style={styles.section}>
        <h3>📓 Daily Journal</h3>
        <Journal />
      </div>

      <div style={styles.section}>
        <h3>💬 Personal Chatbot</h3>
        <Chatbot />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '30px',
    color: '#555'
  },
  section: {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)'
  }
};

export default Dashboard;
