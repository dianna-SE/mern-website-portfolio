// 1. strict mode
'use strict'; 

// 2. Constant variable for requiring Express, app, and PORT
const express = require('express'); 
const app = express(); 
const PORT = 3000; 
const nodemailer = require('nodemailer');


// 3. App function for URL Encoding
app.use(express.urlencoded({ extended: true }));

// 4. An app function for Express static method for the public folder
app.use(express.static('public'));


// 5. Define two JavaScript variables using let.
let htmlTop = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name="robots" content="noindex,noarchive, nofollow" />
    <title>Dianna Pham</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>

    <script src="main.js"></script>

    <!--Favicon links-->
    <link rel="icon" type="image/png" sizes="512x512" href="android-chrome-512x512.png"> 
    <link rel="icon" type="image/png" sizes="192x192" href="android-chrome-192x192.png"> 
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
</head>
<body>
    <header>
        <h1>Dianna Pham</h1>
        <img src="android-chrome-192x192.png" alt="Favicon" sizes="192x192" title="&copy; 2023 Dianna Pham">
    </header>

    <nav>
        <a href="./index.html">Home</a>
        <a href="./gallery.html">Gallery</a>
        <a href="./contact.html">Contact</a>
        <a href="./order.html">Order</a>
    </nav>

    <main>
`

    // b. The second variable=value should provide all the necessary HTML elements 
    // needed to complete the page...from the ending main tag to the ending </html> tag:
    let htmlBottom = `
    </main>

    <footer>
        <p>&copy; 2023 Dianna Pham</p>
    </footer>
</body>
</html>
 `

// 6. Define an app. function using method POST and an endpoint value that matches the 
// HTML form's action value.
app.post("/review", (req, res) => {
    // Extract values from the form controls
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const eAddress = req.body.eAddress
    const comments = req.body.comments;
    const webDevFeedback = req.body['web-development'];
    const rating = req.body.rating;
    const feedbackCheckbox = req.body.feedback;

    // Handles single or multiple answers that are selected in checkbox
    const feedbackCheckboxArray = Array.isArray(feedbackCheckbox) ? feedbackCheckbox : [feedbackCheckbox];

    // Construct the response using template literal syntax
    const emailResponse = `
        <section class="response-container">
                <article>
                <h4 class="output" >Thanks for your feedback, ${firstName} ${lastName}!</h4>
            
                <p>You let us know that Web Development is <strong>${webDevFeedback}</strong> so far, and that 
                this website is the <strong>${rating}</strong>. Your additional feedback to improve this website includes:
                </p> 
                    <ul>
                        ${feedbackCheckboxArray.map((answer) => `<li>${answer}</li>`).join('')}
                    </ul>

                <p>You also left us this message:</p>
                    <p class="answer">${comments}</p>

                <p>We will respond to you at <strong>${eAddress}</strong>.</p>
            </article>
        </section>
    `;

    const htmlResponse = `
            <h4 class="output" >Thanks for your feedback, ${firstName} ${lastName}!</h4>
        
            <p>You let us know that Web Development is <strong>${webDevFeedback}</strong> so far, and that 
            this website is the <strong>${rating}</strong>. Your additional feedback to improve this website includes:
            </p> 
                <ul>
                    ${feedbackCheckboxArray.map((answer) => `<li>${answer}</li>`).join('')}
                </ul>

            <p>You also left us this message:</p>
                <p class="answer">${comments}</p>

            <p>We will respond to you at <strong>${eAddress}</strong>.</p>
    `;

    const websiteResponse = `
        ${htmlTop} 
        ${emailResponse}
        ${htmlBottom} 
    `;

    // Remove HTML tags from the response for the text parameter
    const plainTextResponse = emailResponse.replace(/<[^>]+>/g, '');

    // Send the response
    res.send(websiteResponse);


    // EXTRA CREDIT


    // Generate SMTP service account from ethereal.email
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account. ' + err.message);
            return process.exit(1);
        }

        console.log('Credentials obtained, sending message...');

        // Message object
        const message = {
            from: `Dianna Pham <phamdia@oregonstate.edu`,
            to: `${eAddress}`,
            subject: `Feedback Received from ${firstName} ${lastName}`,
            text: `${plainTextResponse}`, // Removes all HTML tags
            html: `${htmlResponse}`
        };
        

        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return process.exit(1);
            }

            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    });
});


// FOR ASSIGNMENT 6
const orderProducts = require('../frontend/src/data/products.js').products; 

function CompareProductData(productOrder) {
    for (const oneQuantity of orderProducts) {
      if (oneQuantity.product === productOrder) {
        return oneQuantity;
      }
    }
    return undefined; 
  }

app.post("/order", (req, res) => {
    // Extract values from the form controls
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const deliveryInstructions = req.body.deliveryInstructions
    const eAddress = req.body.eAddress
    const homeAddress = req.body.homeAddress
    const productOrder = req.body.productOrder
    const quantity = req.body.quantity
    const selectedItem = CompareProductData(req.body.productOrder)
    const company = selectedItem.company
    const priceOfOne = selectedItem.price
    const priceOfOneString = selectedItem.price.toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2})
    const totalCost = quantity * priceOfOne
    const totalCostString = totalCost.toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2})

    // Construct the response using template literal syntax
    const orderResponse = `
        <main>
            <section class="response-container">
                <article>
                    <h4 class="output">Thanks for your order, ${firstName} ${lastName}!</h4>
            
                    <p>You submitted an order of <strong>${quantity} ${productOrder}</strong> from <strong>${company}</strong>. The price of one item is <strong>${priceOfOneString}</strong>. Your total cost for this order is <strong>${totalCostString}</strong>.</p>
                
                    <p>You will receive your order at <strong>${homeAddress}</strong> following these instructions: <strong>${deliveryInstructions}</strong></p>
                </article>
            </section>
        </main>
    `;

    const htmlResponse = `
        <h4 class="output">Thanks for your order, ${firstName} ${lastName}!</h4>

        <p>You submitted an order of <strong>${quantity} ${productOrder}</strong> from <strong>${company}</strong>. The price of one item is <strong>${priceOfOneString}</strong>. Your total cost for this order is <strong>${totalCostString}</strong>.</p>

        <p>You will receive your order at <strong>${homeAddress}</strong> following these instructions: <strong>${deliveryInstructions}</strong></p>
    `;

    const websiteResponse = `
        ${htmlTop} 
        ${orderResponse}
        ${htmlBottom} 
    `;

    // Remove HTML tags from the response for the text parameter
    const plainTextResponse = orderResponse.replace(/<[^>]+>/g, '');

    // Send the response
    res.send(websiteResponse);


    // EXTRA CREDIT

    // ETHEREAL (example code)
    const nodemailer = require('nodemailer');


    // Generate SMTP service account from ethereal.email
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account. ' + err.message);
            return process.exit(1);
        }

        console.log('Credentials obtained, sending message...');

        // Create a SMTP transporter object
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'kristian.parker49@ethereal.email',
                pass: 'BhAddAK4jfK4Z8Mm7h'
            }
        });

        // Message object
        const message = {
            from: `Dianna Pham <phamdia@oregonstate.edu`,
            to: `${eAddress}`,
            subject: `Feedback Received from ${firstName} ${lastName}`,
            text: `${plainTextResponse}`, // Removes all HTML tags
            html: `${htmlResponse}`
        };
        

        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return process.exit(1);
            }

            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    });
});


// 7. Listen to the PORT specified in the constant variable.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

export default index;

