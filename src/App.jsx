import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, useNavigate } from "react-router-dom";
import profilePic from "./assets/profile.jpg";
import ProjectPage from "./ProjectPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";


const pageVariants = {
  initial: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 200 : -200,
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -200 : 200,
    transition: { duration: 0.4 },
  }),
};

export default function App() {
  const [tab, setTab] = useState("home");
  const [direction, setDirection] = useState(1);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const changeTab = (newTab) => {
    const order = ["home", "projects", "experience"];
    const currentIndex = order.indexOf(tab);
    const newIndex = order.indexOf(newTab);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setTab(newTab);
  };

  // SCROLL
  useEffect(() => {
    const main = document.querySelector(".main");
    if (!main) return;

    const handleScroll = () => {
      const scrollTop = main.scrollTop;
      const height = main.scrollHeight - main.clientHeight;
      setProgress((scrollTop / height) * 100);
    };

    main.addEventListener("scroll", handleScroll);
    return () => main.removeEventListener("scroll", handleScroll);
  }, []);

  // CURSOR
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const glow = document.getElementById("cursor-glow");

    const moveCursor = (e) => {
      if (!dot || !glow) return;

      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const projects = [
    {
      id: "playlist",
      name: "Playlist Manager",
      desc: "Java GUI App",
      img: "https://picsum.photos/400?1",
      color: "#1db954"
    },
    {
      id: "pert",
      name: "PERT Tool",
      desc: "Cost Estimator",
      img: "https://picsum.photos/400?2",
      color: "#9333ea"
    },
    {
      id: "db",
      name: "Database Design",
      desc: "SQL Structuring",
      img: "https://picsum.photos/400?3",
      color: "#3b82f6"
    },
  ];

  return (
    <div className="app">

      {/* GLOBAL CURSOR */}
      <div className="cursor-dot" id="cursor-dot"></div>
      <div className="cursor-glow" id="cursor-glow"></div>

      <Routes>

        {/* HOME */}
        <Route path="/" element={
          <>
            {/* SIDEBAR */}
            <div className="sidebar">
              <h2 className="logo">JOSH.EXE</h2>
              <button onClick={() => changeTab("home")}>Home</button>
              <button onClick={() => changeTab("projects")}>Playlists</button>
              <button onClick={() => changeTab("experience")}>Production</button>
            </div>

            {/* MAIN */}
            <div className="main">
              <AnimatePresence mode="wait">

                {/* HOME TAB */}
                {tab === "home" && (
                  <motion.div
                    key="home"
                    custom={direction}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >

                    {/* HERO */}
                    <div className="profile-hero">
                      <img src={profilePic} className="profile-pic" />

                      <div className="profile-info">
                        <p className="profile-label">Developer</p>
                        <h1>Joshua Francois</h1>
                        <p className="profile-desc">
                          Building interactive apps with Java, React, and modern tools.
                        </p>

                        <div className="profile-actions">
                          <button onClick={() => navigate("/contact")}>Contact</button>
                          <button onClick={() => changeTab("projects")}>View Projects</button>
                        </div>
                      </div>
                    </div>

                    {/* FEATURED */}
                    <div className="section">
                      <h2>Featured Projects</h2>

                      <div className="grid">
                        {projects.slice(0, 3).map((p, i) => (
                          <motion.div
                            key={i}
                            className="card"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => navigate(`/project/${p.id}`)}
                          >
                            <img src={p.img} className="card-bg" />
                            <div className="card-overlay" />
                            <div className="card-content">
                              <h3>{p.name}</h3>
                              <p>{p.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* EXPLORE */}
                    <div className="section">
                      <h2>Explore</h2>

                      <div className="grid">
                        <div className="card about-card" onClick={() => navigate("/about")}>
                          <div className="card-content">
                            <h3>About Me</h3>
                          </div>
                        </div>

                        <div className="card contact-card" onClick={() => navigate("/contact")}>
                          <div className="card-content">
                            <h3>Contact</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                )}

                {/* PROJECTS TAB */}
                {tab === "projects" && (
                  <motion.div
                    key="projects"
                    custom={direction}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <h1>Playlists 💿</h1>

                    <div className="grid">
                      {projects.map((p, i) => (
                        <motion.div
                          key={i}
                          className="card"
                          whileHover={{ scale: 1.05 }}
                          onClick={() => navigate(`/project/${p.id}`)}
                        >
                          <img src={p.img} className="card-bg" />
                          <div
                            className="card-overlay"
                            style={{ background: `linear-gradient(to top, ${p.color}, transparent)` }}
                          />
                          <div className="card-content">
                            <h3>{p.name}</h3>
                            <p>{p.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* EXPERIENCE TAB */}
                {tab === "experience" && (
                  <motion.div
                    key="experience"
                    custom={direction}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <h1>Production 🎚</h1>

                    <div className="grid">

                      <div className="card experience-card">
                        <img src="https://picsum.photos/400?java" className="card-bg" />
                        <div className="card-overlay" style={{ background: "linear-gradient(to top, #22c55e, transparent)" }} />
                        <div className="card-content">
                          <h3>Java Development</h3>
                          <p>OOP • Data Structures • GUI</p>
                        </div>
                      </div>

                      <div className="card experience-card">
                        <img src="https://picsum.photos/400?code" className="card-bg" />
                        <div className="card-overlay" style={{ background: "linear-gradient(to top, #3b82f6, transparent)" }} />
                        <div className="card-content">
                          <h3>Web Development</h3>
                          <p>React • UI • Frontend</p>
                        </div>
                      </div>

                      <div className="card experience-card">
                        <img src="https://picsum.photos/400?pc" className="card-bg" />
                        <div className="card-overlay" style={{ background: "linear-gradient(to top, #9333ea, transparent)" }} />
                        <div className="card-content">
                          <h3>PC Building</h3>
                          <p>Hardware • Troubleshooting</p>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </>
        } />

        {/* ROUTES */}
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </div>
  );
}