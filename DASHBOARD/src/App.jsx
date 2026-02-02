import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
  Outlet,
  Navigate
} from "react-router-dom";

import profilePic from "./profile.jpeg";
import logo from "./logo.png";

/* ---------- PAGES ---------- */

// HOME
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>My Dashboard</h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          marginTop: "30px"
        }}
      >
        {/* PROFILE IMAGE */}
        <img
          src={profilePic}
          alt="Profile"
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "top center",
            border: "3px solid #00e5ff"
          }}
        />

        {/* INFO + BUTTONS */}
        <div>
          <h2>Aditya Thakur</h2>
          <p style={{ color: "#00e5ff", fontWeight: "600" }}>
            Frontend Developer | React Enthusiast
          </p>

          <div style={{ display: "flex", gap: "12px", marginTop: "14px" }}>
            <button onClick={() => navigate("/profile")}>
              Go to Profile
            </button>

            <button onClick={() => navigate("/projects")}>
              Go to Projects
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// PROFILE
const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>My Resume</h1>

      <h3>Education</h3>
      <ul>
        <li>B.Tech CSE-AIML</li>
        <li>Chandigarh University</li>
      </ul>

      <h3>Skills</h3>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React, React Router</li>
        <li>Bootstrap, Material UI</li>
      </ul>

      <h3>Projects</h3>
      <ul>
        <li>Multi-Page SPA using React Router</li>
        <li>Profile Dashboard</li>
      </ul>

      <button
        onClick={() => navigate("/")}
        style={{ marginTop: "20px" }}
      >
        Go Home
      </button>
    </>
  );
};

// PROJECTS
const Projects = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>My Projects</h1>

      <ul>
        <li>Multi-Page SPA using React Router</li>
        <li>Profile Dashboard</li>
        <li>Full Stack Application</li>
      </ul>

      <button
        onClick={() => navigate("/")}
        style={{ marginTop: "20px" }}
      >
        Go Home
      </button>
    </>
  );
};

// LOGIN
const Login = () => {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("auth", "true");
    navigate("/profile");
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </>
  );
};

// 404
const NotFound = () => (
  <div className="not-found">
    <h1>404</h1>
    <p>Page not found</p>
  </div>
);

/* ---------- PROTECTED ROUTE ---------- */

const ProtectedRoute = ({ children }) => {
  const auth = localStorage.getItem("auth");
  return auth ? children : <Navigate to="/login" />;
};

/* ---------- LAYOUT ---------- */

const Layout = () => {
  return (
    <>
      <nav>
        {/* LOGO → HOME */}
        <NavLink to="/" end className="nav-logo">
          <img src={logo} alt="Logo" />
        </NavLink>

        {/* NAV LINKS */}
        <div className="nav-links">
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </div>
      </nav>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

/* ---------- APP ---------- */

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="projects" element={<Projects />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
