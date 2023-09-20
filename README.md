# Portfolio Website

Welcome to my personal portfolio website, a culmination of dedicated work and learning over the duration of my web development course quarter. This portfolio website is the result of work I did during my web development course. Initially built based on the course guidelines, I later redesigned it and integrated a backend with MongoDB to manage and display projects dynamically.

The projects you see below the introduction are fetched from MongoDB, demonstrating my skills in database management.

Post-course, I deployed the site using AWS Amplify, highlighting my ability to take a project from development to live production. Throughout the process, I've used Git and GitHub for version control, ensuring that every step of my development is well-documented and organized.

![Portfolio Screenshot](path-to-screenshot.png)

---

## Features
- **Clean Design**: Utilizes a minimalist and intuitive interface ensuring that users can easily navigate and understand the content without being overwhelmed. This simplicity emphasizes the projects and achievements, making the portfolio more effective and user-friendly.

- **Responsive Design**: Optimized for various screen sizes, ensuring a seamless experience on devices from mobile to desktop.

- **Project Management**: Automatically updates the portfolio page with projects listed in the database dynamically. Integrated with the backend to handle and update project data within MongoDB.

- **Error Handling**:  Implements robust error handling mechanisms, ensuring that any inconsistencies or issues with the backend or frontend project data are addressed promptly, and users are provided with informative feedback to enhance their overall experience.

---

### Setup:
- **MongoDB Atlas**: This is utilized for data management. A MongoDB Atlas account must be set up. Create a new cluster using Google Cloud and connect to the recommended region to start handling project data.
1. Register for a [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas/register) if you don't have one.
2. Create a new cluster using Google Cloud.
3. Ensure you connect to the recommended region to optimally manage project data.
  
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

