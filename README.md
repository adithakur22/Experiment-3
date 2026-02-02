# React Router Portfolio Dashboard

A modern, single-page application (SPA) built with React and React Router, featuring a personal portfolio dashboard with protected routes and smooth navigation.

## Features

- **Multi-page Navigation** - Seamless routing between Home, Profile, and Projects pages
- **Protected Routes** - Authentication-based access control for sensitive pages
- **Responsive Layout** - Clean, consistent navigation across all pages
- **Profile Dashboard** - Personal information display with profile image
- **Quick Navigation** - Easy access buttons and navigation links

## Pages

### Home (`/`)
Dashboard landing page featuring:
- Profile image with styled border
- Personal introduction
- Quick navigation buttons to Profile and Projects

### Profile (`/profile`)
Protected resume page displaying:
- Educational background
- Technical skills
- Project portfolio
- Requires authentication to access

### Projects (`/projects`)
Showcase of completed projects and works

### Login (`/login`)
Simple authentication page for accessing protected routes

### 404 Page
Custom not-found page for invalid routes

## Tech Stack

- **React** - UI library
- **React Router v6** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS** - Styling

## Project Structure

```
├── App.jsx          # Main application component with routes
├── main.jsx         # Application entry point
├── App.css          # Styles (required)
├── profile.jpeg     # Profile image
└── logo.png         # Navigation logo
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Required dependencies:
```bash
npm install react-router-dom
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173` (or another port if 5173 is busy).

## Usage

### Navigation
- Click the logo to return to the home page
- Use navigation links in the header to access Profile and Projects
- Use quick action buttons on the home page for direct navigation

### Authentication
- Click "Login" to authenticate
- Once logged in, you can access the Profile page
- Authentication state persists using localStorage

### Protected Routes
The Profile page is protected and requires authentication. If you try to access it without logging in, you'll be redirected to the login page.

## Key Components

### Layout Component
Provides consistent navigation structure across all pages with:
- Logo link to home
- Navigation links to Profile and Projects
- Outlet for nested route rendering

### ProtectedRoute Component
HOC that wraps protected pages and checks authentication status before rendering.

### Route Configuration
- Nested routes under Layout for consistent UI
- Separate login route outside main layout
- Wildcard route for 404 handling

## Customization

### Update Profile Information
Edit the `Home` and `Profile` components in `App.jsx` to reflect your personal information:
- Name
- Title/Role
- Education
- Skills
- Projects

### Styling
Modify `App.css` to customize colors, layouts, and visual appearance.

### Images
Replace `profile.jpeg` and `logo.png` with your own images.

## Authentication Note

This demo uses localStorage for simple authentication simulation. For production applications, implement proper authentication with:
- Backend API integration
- JWT tokens or session management
- Secure credential handling
- Proper logout functionality

## Browser Compatibility

Works on all modern browsers that support:
- ES6+ JavaScript
- React 18
- CSS3

## License

MIT License - feel free to use this project for learning and development.

## Author

**Aditya Thakur**  
Frontend Developer | React Enthusiast  
B.Tech CSE-AIML, Chandigarh University

## Acknowledgments

- Built with React and React Router
- Inspired by modern portfolio design patterns

  <img width="1784" height="909" alt="image" src="https://github.com/user-attachments/assets/a95073b1-781f-4444-9e86-516035bf30e0" />
