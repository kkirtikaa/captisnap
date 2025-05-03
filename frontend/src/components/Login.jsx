import React from 'react';
import './Login.css';
function Login(){
return(
    <div className='login-page'>
      <div className='right-side'>
        <img src="/public/pic1.jpg" alt="pic1" className="right-img" />
        <img src="/public/pic2.jpg" alt="pic2" className="right-img" />
        <img src="/public/pic3.jpg" alt="pic3" className="right-img" />
        <img src="/public/pic4.jpg" alt="pic4" className="right-img" />
      </div>
      <div className='left-side'>
        <h1 style={{color:' #d492d8',}}>Meka</h1>
        <h1 style={{color:'black',fontSize:'1.7rem'}}>Welcome to Meka!</h1>
        <h2 style={{color:'black'}}>Snap. Caption. Share.</h2>
        <p style={{color:'gray'}}>Capture moments and get instant,creative captions powered by AI.</p>
        <form>
        <input className='input-field' type="email" placeholder="email" style={{ fontSize: '20px', marginBottom:'15px' }} /><br />
          <input className='input-field' type="password" placeholder="Password" style={{ fontSize: '20px', marginBottom:'15px' }} /><br />
          <div className="forgot-link">Forgot password?</div>
          <button className='button' type="submit" >Login</button>
          <div className="signup-text"></div>
          Don’t have an account? <span className="signup-link">Sign up</span>

        </form>
      </div>

    </div>
);
}
export default Login;
