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
            <h2>Contact</h2>

            <article class="article-contact">
              <p>Please answer questions provided below in this form by typing and filling in the blanks or selecting the answers within the dropdown feature. After the questions are answered, click “Submit review.” All information that you provide will be secured.</p>

              {/* <form action="/review" method="POST"> */}
              <form onSubmit={(e) => { e.preventDefault();}}>

                  <fieldset>
                  
                      <legend>Tell us about yourself...</legend>
        
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
                    
                  </fieldset>

                  <fieldset>
                      <legend>Provide some feedback...</legend>

                      <label for="web-development">How are you feeling about Web Development so far?</label>
                          <select name="web-development" id="web-development">
                              <option value="amazing" selected>Amazing</option>
                              <option value="great">Great</option>
                              <option value="okay">Okay</option>
                              <option value="terrible">Terrible</option>
                              <option value="extremely awful">Extremely awful</option>
                          </select>
        
                      <label for="rating" class="label-questions">How would you rate my website?</label>
                          <label for="best">
                            <input class="radio-input" type="radio" name="rating" id="best" value="best" placeholder="Select the best option"/>
                              Best
                          </label>

                          <label for="average">
                            <input class="radio-input" type="radio" name="rating" id="average" value="average" placeholder="Select the best option"/>
                              Average
                          </label>

                          <label for="worst">
                            <input class="radio-input" type="radio" name="rating" id="worst" value="worst" placeholder="Select the best option"/>
                              Worst
                        </label>
                    
      
                      <label for="checkbox" class="label-questions">Tell me how this website can be improved:</label>
                          <label for="color">
                            <input class="checkbox-input" type="checkbox" name="feedback" id="color"  value="Changing the color" placeholder=" Select the best feedback"/>
                            Change the theme color
                          </label>
                    
                          <label for="font">
                            <input class="checkbox-input" type="checkbox" name="feedback" id="font"  value="Changing the font" placeholder=" Select the best feedback"/>
                            Change the font
                          </label>
                    
                          <label for="image">
                            <input class="checkbox-input" type="checkbox" name="feedback" id="image"  value="Changing the background" placeholder=" Select the best feedback"/>
                            Change the background image
                          </label>
                    

                      <button>Submit review</button>
            
                </fieldset>
            </form>
          </article>
          </>
          );
      };
      
export default ContactPage;