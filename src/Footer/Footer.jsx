import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';
import { Height } from '@mui/icons-material';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
  <Container>
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Tools</h1>
          <span><Link to='/search'>Advanced Search</Link></span>
          <span><Link to='/quiz'>Recommendation Quiz</Link></span>
          <span><Link to='/similar'>Find Similar Paddles</Link></span>
          <span><Link to='/guide'>Paddle Guide</Link></span>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span>Contact Us</span>
          <span>Sign Up for Mailing List</span>
          <span>Submit Feedback</span>
          <span>Privacy Policy</span>
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