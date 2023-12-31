# Website Portfolio

Welcome to my personal portfolio website, a culmination of dedicated work and learning over the duration of my web development course quarter. This portfolio website is the result of work I did during my web development course. Initially built based on the course guidelines, I later redesigned it and integrated a backend with MongoDB to manage and display projects dynamically.

The projects you see below the introduction are fetched from MongoDB, demonstrating my skills in database management.

Post-course, I deployed the site using AWS Amplify, highlighting my ability to take a project from development to live production. Throughout the process, I've used Git and GitHub for version control, ensuring that every step of my development is well-documented and organized.

https://www.diannapham.com/


# Before
<img width="1222" alt="Screenshot 2023-09-18 at 1 47 35 PM" src="https://github.com/dianna-SE/mern-website-portfolio/assets/97206862/50f246ba-2de3-4c53-8a67-0516d3a85743">


# After
<img width="1328" alt="screenshot" src="https://github.com/dianna-SE/mern-website-portfolio/assets/97206862/6e838d39-173f-4def-81ef-3f9fe2740cb9">
<img width="1329" alt="Screenshot 2023-09-23 at 2 38 19 AM" src="https://github.com/dianna-SE/mern-website-portfolio/assets/97206862/de8eccef-a955-4063-a9d0-6a59121b7596">
<img width="1329" alt="Screenshot 2023-09-23 at 2 38 01 AM" src="https://github.com/dianna-SE/mern-website-portfolio/assets/97206862/6d20aebb-1956-46fd-a6f1-f518fa9c35a9">




---

## Features
- **Clean Design**: Utilizes a minimalist and intuitive interface ensuring that users can easily navigate and understand the content without being overwhelmed. This simplicity emphasizes the projects and achievements, making the portfolio more effective and user-friendly.

- **Responsive Design**: Optimized for various screen sizes, ensuring a seamless experience on devices from mobile to desktop.

- **Project Management**: Automatically updates the portfolio page with projects listed in the database dynamically. Integrated with the backend to handle and update project data within MongoDB.

- **Error Handling**:  Implements robust error handling mechanisms, ensuring that any inconsistencies or issues with the backend or frontend project data are addressed promptly, and users are provided with informative feedback to enhance their overall experience.

---

## Technologies 
- **MongoDB**
- **Express.js**
- **React**
- **Node.js**

### Setup:
- **MongoDB Atlas**: This is utilized for data management. A MongoDB Atlas account must be set up. Create a new cluster using Google Cloud and connect to the recommended region to start handling project data.
1. Register for a [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas/register) if you don't have one.
2. Create a new cluster using Google Cloud.
3. Ensure that you connect to the recommended region to optimally manage project data.
  
- **Token**: A token is required for authentication. Generate a token and add it to your `.env` file within the backend folder with the variable name.


- **Local Host Configuration**: Specify the local hosts you'll be working with in your `.env` file. 
- **Backend**: Add the connection string and the port string.
`MONGODB_CONNECT_STRING='mongodb+srv://<username>:<password>@<your-cluster-url>'`
`PORT=3000`

- **Frontend**: Add the local port string.
`PORT=8000`

---
## Installation

1. **Clone the Repository**:
```git clone https://github.com/dianna-SE/mern-website-portfolio.git```

2. **Navigate to the Project Directory**:
```cd mern-website-portfolio```

3. **Install Backend Dependencies**:
```cd backend && npm install```

4. **Install Frontend Dependencies**:
```cd frontend && npm install```

---

## Usage

**Starting the Backend**:

Navigate to the backend directory and run:
```npm start```

**Starting the Frontend**:

Navigate to the frontend directory and run:
```npm start```

The frontend will then connect to the backend, and you should see your projects being listed dynamically on the portfolio page. Please note that it is suggested to start the backend in order to load the server before starting the user interface.

---

---

## Acknowledgements

- Big thanks to OSU's CS290 for the web development tools used here.
- Inspired by [Spotify's website design](https://www.lifeatspotify.com/students).
- Icons by [react-icons](https://react-icons.github.io/react-icons/).

