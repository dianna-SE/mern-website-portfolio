# Portfolio Website

This is a personal portfolio website built using the MERN (MongoDB, Express.js, React, Node.js) stack. The website dynamically lists projects which are managed and served from the backend.

The projects listed below the introduction is managed by MongoDB.

![Portfolio Screenshot](path-to-screenshot.png)

---

## Features

- **Dynamic Project Listing**: Automatically updates the portfolio page with projects listed in the database.
- **Responsive Design**: Optimized for various screen sizes, ensuring a seamless experience on devices from mobile to desktop.
- **Contact Form**: Integrated with the backend to receive messages and inquiries directly from visitors.
- **Admin Dashboard**: A protected route that allows easy management of the projects listed on the portfolio.

---

#### Setup:
- **MongoDB Atlas**: This is utilized for data management. A MongoDB Atlas account must be set up. Create a new cluster using Google Cloud and connect to the recommended region to start handling project data.
- Register for a [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas/register) if you don't have one.
- Create a new cluster using Google Cloud.
- Ensure you connect to the recommended region to optimally manage project data.
  
- **Token**: A token is required for authentication. Generate a token and add it to your `.env` file within the backend folder with the variable name.


- **Local Host Configuration**: Specify the local hosts you'll be working with in your `.env` file. 
-Backend: Add the connection string and the port string.
`MONGODB_CONNECT_STRING='mongodb+srv://<username>:<password>@<your-cluster-url>'`
`PORT=3000`

-Frontend: Add the local port string.
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

