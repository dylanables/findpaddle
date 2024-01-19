import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';
import { Height } from '@mui/icons-material';
import Container from '@mui/material/Container';

const Footer = ({sidebar}) => {
  return (
  <Container>
    <div className={`footer ${sidebar}`}>
      <div className='top'>
        <div className='item'>
          <h1>Tools</h1>
          <span><Link to='/search'>Advanced Search</Link></span>
          <span><Link to='/quiz'>Recommendation Quiz</Link></span>
          {/*<span><Link to='/similar'>Find Similar Paddles</Link></span>*/}
          <span><Link to='/guide'>Paddle Guide</Link></span>
        </div>
        <div className='item'>
          <h1>Get in Touch</h1>
          <span><Link to='/contact'>Contact Us</Link></span>
          <span><Link to='/#subscribe'>Sign Up for Mailing List</Link></span>
          <span><Link to='/contact'>Submit Feedback</Link></span>
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <span><img src='/findpaddle.svg' alt="FindPaddle" className='logo' /> FindPaddle.com</span>
          <span className='copyright'>© Copyright 2023. All rights reserved</span>
        </div>
      </div>
    </div>
  </Container>
  )
}

export default Footer