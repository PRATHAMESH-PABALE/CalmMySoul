import React from 'react';
import MoodCheckIn from './MoodCheckIn';
import Journal from './Journal';
import BreathingExercise from './BreathingExercise';
import Chatbot from './Chatbot';
import './Dashboard.css';

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        {/* Header Section */}
        <div className="dashboard-header">
          <h2 className="dashboard-title">
            Welcome back, {user?.displayName || 'User'}
          </h2>
          <p className="dashboard-subtitle">
            Your wellness journey starts here
          </p>
        </div>

        {/* Grid Layout */}
        <div className="dashboard-grid">
          {/* Mood Check-In */}
          <div className="dashboard-card">
            <div className="card-header">
              <div className="icon-badge icon-mood">
                🌈
              </div>
              <h3 className="card-title">
                Mood Check-In
              </h3>
            </div>
            <MoodCheckIn />
          </div>

          {/* Breathing Exercise */}
          <div className="dashboard-card">
            <div className="card-header">
              <div className="icon-badge icon-breathing">
                🧘
              </div>
              <h3 className="card-title">
                Breathing Exercise
              </h3>
            </div>
            <BreathingExercise />
          </div>

          {/* Daily Journal */}
          <div className="dashboard-card">
            <div className="card-header">
              <div className="icon-badge icon-journal">
                📓
              </div>
              <h3 className="card-title">
                Daily Journal
              </h3>
            </div>
            <Journal />
          </div>

          {/* Personal Chatbot */}
          <div className="dashboard-card">
            <div className="card-header">
              <div className="icon-badge icon-chatbot">
                💬
              </div>
              <h3 className="card-title">
                Personal Chatbot
              </h3>
            </div>
            <Chatbot />
          </div>
        </div>

        {/* Footer Message */}
        <div className="dashboard-footer">
          <p>Remember: Small steps every day lead to big changes 💫</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;