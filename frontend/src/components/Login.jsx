import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import pic1 from '../asset/pic1.jpg';
import pic2 from '../asset/pic2.jpg';
import pic3 from '../asset/pic3.jpg';
import pic4 from '../asset/pic4.jpg';

function Login() {
  const [showForgotModal, setShowForgotModal] = useState(false);

  return (
    <>
      
      <div className={`login-page ${showForgotModal ? 'blurred' : ''}`}>
        <div className='right-side'>
          <img src={pic1} alt="pic1" className="right-img" />
          <img src={pic2} alt="pic2" className="right-img" />
          <img src={pic3} alt="pic3" className="right-img" />
          <img src={pic4} alt="pic4" className="right-img" />
        </div>

        <div className='left-side'>
          <h1 style={{ color: '#d492d8' }}>Meka</h1>
          <h1 style={{ color: 'black', fontSize: '1.7rem' }}>Welcome to Meka!</h1>
          <h2 style={{ color: 'black' }}>Snap. Caption. Share.</h2>
          <p style={{ color: 'gray' }}>
            Capture moments and get instant, creative captions powered by AI.
          </p>

          <form>
            <input
              className='input-field'
              type="email"
              placeholder="Email"
              style={{ fontSize: '20px', marginBottom: '15px' }}
            /><br />
            <input
              className='input-field'
              type="password"
              placeholder="Password"
              style={{ fontSize: '20px', marginBottom: '15px' }}
            /><br />

            <div className='forgot-container'>
              <span
                className='forgot-link'
                onClick={() => setShowForgotModal(true)}
              >
                Forgot password?
              </span>
            </div>

            <button className='button' type="submit">Login</button>
            <div className="signup-text">
              Don’t have an account? <span className="signup-link">Sign up</span>
            </div>
          </form>
        </div>
      </div>

      
      {showForgotModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Reset Password</h2>
            <input
              className='input-field'
              type="email"
              placeholder="Enter your email"
              style={{ fontSize: '20px', marginBottom: '15px', borderRadius: '8px' }}
            />
            <input
              className='input-field'
              type="password"
              placeholder="Enter New Password"
              style={{ fontSize: '20px', marginBottom: '15px' }}
            />
            <input
              className='input-field'
              type="password"
              placeholder="Confirm Password"
              style={{ fontSize: '20px', marginBottom: '15px' }}
            />
            <button
              className="close-btn"
              onClick={() => setShowForgotModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
