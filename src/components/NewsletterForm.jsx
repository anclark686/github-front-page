import React from 'react';
import './NewsletterForm.css';

const NewsletterForm = () => {
    return (
        <div className="NewsletterForm">
            <input type="text" placeholder="Email address" />
            <button className="signUpButton">Sign up for Github</button>
        </div>
    )
}

export default NewsletterForm;