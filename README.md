# Trendy Tech

This project is a Blog application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It also uses Tailwind CSS for styling, Vite for build tooling, React Redux for state management, JWT (JSON Web Tokens) for authentication and Firebase for additional services. 

The application allows users to like and comment on the blog posts as well as authenticate users securely.

## Features

1. **User Authentication:** 
- Users can sign up, log in, and log out securely using JWT authentication.
- Authentication integration with Firebase for additional security features and ease of implementation.
2. **Blog Post Management:** 
- Admins can create, edit and delete blog posts.
- Rich text editor for composing posts with formatting options.
- Users can view, like and comment on the blog posts.
3. **User Roles and Permissions**: 
- Implemented different user roles (e.g. admin, regular user) with varying permissions.
- Admins can moderate posts, manage users and perform administrative tasks.
4. **Comments and Interactivity**: 
- Allow users to leave comments on blog posts.
- Allow users to like someone else comment.
- Moderation features for managing comments (e.g. approval, deletion).
5. **Search and Filtering**: 
- Implemented search functionality to enable users to find specific blog posts.
- Filtering options for sorting posts based on categories and dates.
6. **Admin Dashboard**: Personalized dashboard for admin to manage users, comments and blog posts.
7. **Responsive Design**: Ensure the application is optimized for various devices and screen sizes, providing a seamless user experience across desktop and mobile platforms.

## Technologies Used

- **MongoDB**: Database for storing blog posts, user data and comments.
- **Express.js**: Backend framework for handling server-side logic and API endpoints.
- **React.js**: Frontend library for building interactive user interfaces.
- **Node.js**: JavaScript runtime environment for running the server-side code.
- **Tailwind CSS**: Utility-first CSS framework for styling the UI components.
- **Vite**: Fast, opinionated web dev build tool that serves your code via native ES Module imports during development.
- **React Redux**: State management library for managing application state and data flow within React components.
- **JWT (JSON Web Tokens):** Securely authenticate users and manage sessions.
- **Firebase:** Cloud-based services for authentication, storage and additional functionalities like real-time database updates and analytics.

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/Nirav-919/Trendy-Tech.git
```

2. Navigate to the project directory:

```bash
cd Trendy-Tech
```

3. Install dependencies for both frontend and backend:

```bash
npm install
cd client && npm install
```

4. Set up environment variables:

- Create a .env file in the root directory and add necessary environment variables.

```bash
MONGO = 
JWT_SECRET = 
```
- Also create a .env in client directory and add necessary environment variable.

```bash
VITE_FIREBASE_API_KEY = 
```

5. Open the terminal and start the backend server:

```bash
npm run dev
```

6. Open another terminal and start the frontend development server:

```bash
cd client && npm run dev
```

7. Open your browser and navigate to localhost created by the frontend development server to view the application.