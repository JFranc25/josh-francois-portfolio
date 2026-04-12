import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

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

      <div className="about-hero">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        {/* ✅ IMPORTANT: image must exist */}
        <img src="/profile.jpg" className="profile-img" alt="Profile" />

        <div className="about-info">
          <h1>Joshua Francois</h1>
          <p className="tagline">IT Student • Developer • Problem Solver</p>

          <div className="contact-row">

            <div className="contact-card" onClick={copyEmail}>
              <img src="/gmail.png" className="contact-icon" alt="Email" />
              <div>
                <p className="label">Email</p>
                <p className="value">Josh.Francois04@gmail.com</p>
              </div>
              {copied && <span className="copied">Copied</span>}
            </div>

            <a
              href="https://www.linkedin.com/in/joshfrancois04/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <img src="/linkedin.png" className="contact-icon" alt="LinkedIn" />
              <div>
                <p className="label">LinkedIn</p>
                <p className="value">joshfrancois04</p>
              </div>
            </a>

          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>About Me</h2>
        <p>
          I’m an Information Technology student at New York Institute of Technology with a strong
          foundation in building interactive applications and solving real-world problems through technology.
        </p>
      </div>

    </motion.div>
  );
}