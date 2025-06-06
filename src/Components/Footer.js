import React from 'react'
import { Button } from './Button';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the resume newsletter 
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe anytime 
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" 
                        name="email"
                        placeholder="Your Email"
                        className='footer-input'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Me</h2>
                        <Link to='/sign-up'> How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer