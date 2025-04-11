import { useEffect, useState } from "react";
import "./App.css";
import Dock from "./animated_components/Dock.jsx";
import {
  VscHome,
  VscAccount,
  VscTools,
  VscFolderLibrary,
  VscHeart,
  VscMail,
} from "react-icons/vsc";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Interests from "./components/Interests.jsx";
import ContactMe from "./components/ContactMe.jsx";

function App() {
  const navigate = useNavigate();
  const [magnification, setMagnification] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMagnification(50); // Small screen magnification
      } else {
        setMagnification(100); // Default magnification
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => navigate("/"),
    },
    {
      icon: <VscAccount size={18} />,
      label: "About Me",
      onClick: () => navigate("/about"),
    },
    {
      icon: <VscTools size={18} />,
      label: "Skills",
      onClick: () => navigate("/skills"),
    },
    {
      icon: <VscFolderLibrary size={18} />,
      label: "Projects",
      onClick: () => navigate("/projects"),
    },
    {
      icon: <VscHeart size={18} />,
      label: "Interests",
      onClick: () => navigate("/interests"),
    },
    {
      icon: <VscMail size={18} />,
      label: "Contact Me",
      onClick: () => navigate("/contact"),
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Main content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>

      {/* Dock at the bottom */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={magnification} // Dynamically set magnification
        />
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
