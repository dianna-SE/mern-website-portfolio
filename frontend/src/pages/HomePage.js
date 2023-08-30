import React from 'react';
import { MdOutlineEngineering } from 'react-icons/md';

// Change the function names and links
// to fit your portfolio topic.

function HomePage() {
  return (
    <>

        <article>
            <p>Hi! I’m Dianna Pham, and I am currently pursuing a B.S. in Computer Science at Oregon State University (OSU). As I learn more about the complexities and intricacies of web development, my main career goal is to leverage these skills and experiences that I learned in my time here at OSU to my future role as a software engineer. I aim to work with a development team to utilize my expertise in languages like Python, JavaScript, HTML, and CSS, as well as frameworks such as Django and React. Likewise, I strive to improve through learning, growth, and passion in computer science as I continue to pursue my path as a software engineer. </p>
        
            <p>
                The technologies that are used within the website are listed below – together, all the tools that I have used made it possible to build this well-designed, full-stack MERN website:
            <ol>
                <strong>HTML</strong>: Similar to the skeleton of a website, HTML was used to structure the content of this webpage and work hand in hand with CSS and JavaScript to develop a well-rounded website. 
            </ol>
            
            <ol>
                <strong>CSS</strong>: This was used to create the visualization of the webpage, and ensured that the styles and selectors were consistent with the overall design.
            </ol>

            <ol>
                <strong>JavaScript</strong>: The primary programming language for this application, this brought life to the functionality of the website by enabling interactive features, handling user input, manipulating the DOM (Document Object Model), and providing real-time updates without needing to refresh the page.
            </ol>

            <ol>
                <strong>MongoDB</strong>: Used for the backend side of this application, MongoDB is a NoSQL database used to handle storing data and data management within the server-side of the application.
            </ol>
            
            <ol>
                <strong>Express.js</strong>: This is the backbone of managing the server where it helped create real-time updates, route handling, and establish CRUD operations (Create, Read, Update, and Delete).
            </ol>

            <ol>
                <strong>React</strong>: The frontend of the webpage, it was meant to handle the client-side for communication with the server within the framework. This also enhanced the user interface and integrated a single-page application (SPA) for a smoother process.
            </ol>

            <ol>
                <strong>Node.js</strong>: Node.js provided a working environment for the backend and worked with Express.js to ensure that the communication between both the frontend and the backend coordinated with each other efficiently.
            </ol>

            <ol>
                <strong>Visual Studio Code</strong>: An editor developed by Microsoft, it was used to assist with extensions, code formatting, debugging, with integrated terminal and version control to help build this full-stack MERN application. 
            </ol>

        </p>
        
        </article>
    </>
  );
}

export default HomePage;