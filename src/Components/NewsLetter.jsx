import React from 'react'
import '../Styles/NewsLetter.css'
import { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  
// email authentication
  if (!email || !email.includes('@')) {
    setError('Please enter a valid email address.');
    return;
  }
  const EmailSubscription = `Subscribing ${email} to newsletter`;

  // form reset and success confirmation
  setEmail('');
  setSubscribed(true);
  setError('');
}
  return (
    <div className='NewsLetter'>
      <div className='NewsLetter-inner'>
        <h2>Subscribe to Our Newsletter</h2>
        {subscribed ? (
          <p>Thank you for subscribing!</p>) : (
          <form onSubmit={ handleSubmit }>
            <input className='EmailInput' style={{ border: 'none' }} type="email" placeholder="Enter your email address here" value={email} onChange={handleInputChange}/>
            <button className='NewsLetterBtn' type="submit">Subscribe</button>
          </form>
        )}
      </div>

    </div>
  )
}
export default NewsLetter