import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';
import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        {loading ? (
          <>
            <div className="skeleton skeleton-title" style={{ margin: '0 auto', marginBottom: '1rem' }}></div>
            <div className="skeleton skeleton-text" style={{ margin: '0 auto', maxWidth: '500px', marginBottom: '2.5rem' }}></div>
            <div className="cta-container">
              <div className="skeleton skeleton-button"></div>
              <div className="skeleton skeleton-button"></div>
            </div>
          </>
        ) : (
          <>
            <h1 className="hero-title">Welcome to Train Seat Booking System</h1>
            <p className="hero-subtitle">
              Book your train seats easily and securely
            </p>
            <div className="cta-container">
              <button onClick={handleLogin} className="cta-button primary">
                Login
              </button>
              <button onClick={handleRegister} className="cta-button secondary">
                Register
              </button>
            </div>
          </>
        )}
      </div>
      
      <div className="features-section">
        <h2 className="section-title">{loading ? <div className="skeleton skeleton-title" style={{ margin: '0 auto', width: '200px' }}></div> : 'How It Works'}</h2>
        <div className="features-grid">
          {loading ? (
            Array(3).fill().map((_, index) => (
              <div className="feature-card" key={index}>
                <div className="skeleton skeleton-title" style={{ width: '80px', margin: '0 auto' }}></div>
                <div className="skeleton skeleton-text" style={{ margin: '0 auto', marginTop: '1rem' }}></div>
              </div>
            ))
          ) : (
            <>
              <div className="feature-card">
                <h3>1. Sign Up</h3>
                <p>Create your account in just a few clicks</p>
              </div>
              <div className="feature-card">
                <h3>2. Choose Seats</h3>
                <p>Select your preferred seats from available options</p>
              </div>
              <div className="feature-card">
                <h3>3. Book & Pay</h3>
                <p>Complete your booking with secure payment</p>
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className="about-section">
        <h2 className="section-title">{loading ? <div className="skeleton skeleton-title" style={{ margin: '0 auto', width: '300px' }}></div> : 'About Our Service'}</h2>
        <div className="about-content">
          {loading ? (
            <div className="about-text">
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text" style={{ width: '80%' }}></div>
              <div style={{ marginTop: '20px' }}>
                {Array(4).fill().map((_, index) => (
                  <div className="skeleton skeleton-text" style={{ width: '90%', marginLeft: '20px' }} key={index}></div>
                ))}
              </div>
            </div>
          ) : (
            <div className="about-text">
              <p>
                Our platform provides a seamless experience for train seat booking.
                With our user-friendly interface, you can easily:
              </p>
              <ul className="about-list">
                <li>View available seats in real-time</li>
                <li>Book seats instantly</li>
                <li>Manage your bookings</li>
                <li>Get instant confirmation</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;