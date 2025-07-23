import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebaseConfig';
import './Login.css';

const Login = ({ setUser }) => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="landing-page">
      {/* Floating Particles */}
      <div className="particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
        <div className="particle particle-7"></div>
        <div className="particle particle-8"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="logo-container">
            <div className="logo-ring"></div>
            <span className="logo-emoji">🧘‍♀️</span>
            <div className="logo-pulse"></div>
          </div>
          <h1 className="hero-title">
            <span className="brand-text">Calm</span>
            <span className="brand-accent">My</span>
            <span className="brand-text">Soul</span>
          </h1>
          <p className="hero-subtitle">
            Your personal sanctuary for mindfulness, mental wellness, and inner peace
          </p>
          <div className="scroll-indicator">
            <span>Discover More</span>
            <div className="scroll-arrow">↓</div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="features-section">
        <div className="section-container">
          <h2 className="section-title">What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon mindfulness">🧠</div>
              <h3>Mindfulness Training</h3>
              <p>Learn proven techniques to stay present, reduce anxiety, and cultivate awareness in your daily life.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon relaxation">💆‍♀️</div>
              <h3>Deep Relaxation</h3>
              <p>Experience guided meditation sessions designed to release tension and restore your inner balance.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon growth">🌱</div>
              <h3>Personal Growth</h3>
              <p>Develop emotional intelligence and resilience through personalized wellness programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="section-container">
          <h2 className="section-title">Why Choose CalmMySoul?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🎯</div>
              <h3>Personalized Experience</h3>
              <p>Tailored meditation programs that adapt to your specific needs and progress.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⏰</div>
              <h3>Flexible Scheduling</h3>
              <p>Practice anytime, anywhere with sessions ranging from 5 minutes to 1 hour.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📈</div>
              <h3>Track Your Progress</h3>
              <p>Monitor your meditation journey with detailed insights and achievement milestones.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">👥</div>
              <h3>Community Support</h3>
              <p>Connect with like-minded individuals on their wellness journey.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔬</div>
              <h3>Science-Based</h3>
              <p>All practices are backed by neuroscience research and clinical studies.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🏆</div>
              <h3>Expert Guidance</h3>
              <p>Learn from certified meditation teachers and wellness professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3>Sign Up</h3>
              <p>Create your account and complete a brief wellness assessment.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3>Get Personalized</h3>
              <p>Receive a customized meditation plan based on your goals and preferences.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3>Start Your Journey</h3>
              <p>Begin with guided sessions and track your progress over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2 className="section-title">What Our Users Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"CalmMySoul transformed my daily routine. I feel more centered and peaceful than ever before."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩‍💼</div>
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <span>Marketing Manager</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The personalized approach really works. My anxiety has decreased significantly in just 3 weeks."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨‍💻</div>
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <span>Software Developer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Finally, a meditation app that understands my busy lifestyle. Short sessions that make a big impact."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩‍⚕️</div>
                <div className="author-info">
                  <h4>Dr. Emily Rodriguez</h4>
                  <span>Healthcare Professional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Meditation Minutes</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">User Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign In Section */}
      <section className="signin-section">
        <div className="signin-container">
          <div className="signin-content">
            <h2 className="signin-title">Ready to Begin Your Journey?</h2>
            <p className="signin-subtitle">
              Join thousands of users who have transformed their lives with CalmMySoul
            </p>
            
            <div className="signin-card">
              <button onClick={signInWithGoogle} className="google-signin-btn">
                <div className="button-bg"></div>
                <div className="button-content">
                  <svg className="google-icon" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="button-text">Continue with Google</span>
                </div>
                <div className="button-shine"></div>
              </button>

              <div className="signin-benefits">
                <div className="benefit-point">
                  <span className="check-icon">✓</span>
                  <span>Free to start, no credit card required</span>
                </div>
                <div className="benefit-point">
                  <span className="check-icon">✓</span>
                  <span>Access to basic meditation library</span>
                </div>
                <div className="benefit-point">
                  <span className="check-icon">✓</span>
                  <span>Personalized recommendations</span>
                </div>
              </div>

              <div className="footer-text">
                By signing in, you agree to our 
                <span className="footer-link">Terms of Service</span> and 
                <span className="footer-link">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;