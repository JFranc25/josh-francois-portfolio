import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

// IMPORT YOUR IMAGES
import profilePic from "./assets/profile.jpg";
import linkedinIcon from "./assets/linkedin.png";
import gmailIcon from "./assets/gmail.png";

export default function AboutPage() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("Josh.Francois04@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      {/* HERO SECTION */}
      <div className="about-hero">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

        <img src={profilePic} className="profile-img" />

        <div className="about-info">
          <h1>Joshua Francois</h1>
          <p className="tagline">IT Student • Developer • Problem Solver</p>

          {/* CONTACT */}
          <div className="contact-row">

            <div className="contact-card" onClick={copyEmail}>
              <img src={gmailIcon} className="contact-icon" />
              <div>
                <p className="label">Email</p>
                <p className="value">Josh.Francois04@gmail.com</p>
              </div>
              {copied && <span className="copied">Copied</span>}
            </div>

            <a
              href="https://www.linkedin.com/in/joshfrancois04/"
              target="_blank"
              className="contact-card"
            >
              <img src={linkedinIcon} className="contact-icon" />
              <div>
                <p className="label">LinkedIn</p>
                <p className="value">joshfrancois04</p>
              </div>
            </a>

          </div>
        </div>
      </div>

      {/* BIO */}
      <div className="about-section">
        <h2>About Me</h2>
        <p>
          I’m an Information Technology student at New York Institute of Technology with a strong
          foundation in building interactive applications and solving real-world problems through technology.
          I combine technical skills with customer-focused thinking, allowing me to design systems that are both
          functional and user-friendly. :contentReference[oaicite:2]{index=2}
        </p>

        <p>
          My experience ranges from developing software using Java, JavaScript, and Python to troubleshooting
          hardware and software systems. I enjoy building applications that simplify complex tasks and improve user experience.
        </p>
      </div>

      {/* PROJECT EXPERIENCE */}
      <div className="about-section">
        <h2>Project Experience</h2>

        <div className="project-highlight">

          <h3>Playlist Generator App 🎧</h3>

          <p>
            Designed and developed a Java-based playlist management system that automatically organizes music
            based on genre and energy levels. The application eliminates manual sorting by categorizing songs
            using BPM and structured data logic. :contentReference[oaicite:3]{index=3}
          </p>

          <ul>
            <li>Used <strong>ArrayLists</strong> to dynamically store and manage song collections</li>
            <li>Implemented <strong>Stacks</strong> to separate high-energy and relaxed tracks (BPM logic)</li>
            <li>Used <strong>Queues + Linked Lists</strong> for genre-based organization</li>
            <li>Built a <strong>HashMap system</strong> to manage multiple playlists efficiently</li>
            <li>Implemented <strong>Binary Search Tree</strong> for fast sorting and searching</li>
            <li>Added <strong>CSV file loading</strong> to import real datasets</li>
          </ul>

          <p className="project-note">
            This project demonstrates strong understanding of Object-Oriented Programming,
            data structures, and building full applications with real functionality.
          </p>

        </div>
      </div>

      {/* SKILLS */}
      <div className="about-section">
        <h2>Skills</h2>

        <div className="skills-grid">
          <span>Java</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>OOP</span>
          <span>Data Structures</span>
          <span>Technical Support</span>
          <span>Hardware Troubleshooting</span>
          <span>Customer Service</span>
        </div>
      </div>

    </motion.div>
  );
}