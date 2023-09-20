import React, { useState } from 'react';
import products from '../data/products.js';

export const ContactPage = () => {

  const [formData, setFormData] = useState({
    // Initial state for form data
});

const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to the '/review' endpoint with the form data
    fetch('/review', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
        // Handle the response from the server
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

    return (
        <>

            <article class="article-contact">
              {/* <form action="/review" method="POST"> */}
              <form onSubmit={(e) => { e.preventDefault();}}>

                  <fieldset>
                  
                    <legend>Contact</legend>
        
                        <label for="firstName">First Name
                            <input type="text" 
                              name="firstName" 
                              id="firstName" 
                              size="30" 
                              maxlength="30" 
                              required 
                              placeholder="First name" 
                              autofocus />
                        </label>

                        <label for="lastName">Last Name
                            <input type="text" 
                              name="lastName" 
                              id="lastName" 
                              size="30" 
                              maxlength="30" 
                              required 
                              placeholder="Last name" 
                              autofocus />
                        </label>
        
                        <label for="email">Email
                            <input 
                              type="email" 
                              name="eAddress" 
                              id="email" 
                              size="30" 
                              maxlength="50" 
                              required 
                              pattern="[^ @]+@[^ @]+.[a-z]+"
                              placeholder="E-mail address" />
                        </label>

                      <label for="comments">What else would you like to tell us?</label>
                        <textarea 
                          name="comments" 
                          id="comments" 
                          minlenth="3" 
                          maxlenth="250" 
                          required 
                          placeholder="Please add any comments here." 
                        ></textarea>
                
                      <button type="submit">Send</button>
                    
                  </fieldset>
            </form>
          </article>
          </>
          );
      };
      
export default ContactPage;