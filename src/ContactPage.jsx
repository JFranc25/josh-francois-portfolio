import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const navigate = useNavigate();

  const copyEmail = () => {
    navigator.clipboard.writeText("josh.francois04@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <div className="contact-page">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="contact-container">

        <h1 className="contact-title">Contact</h1>
        <p className="contact-sub">
          Let’s connect — feel free to reach out or explore my work.
        </p>

        <div className="contact-grid">

          {/* GITHUB */}
          <a
            href="https://github.com/JFranc25"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.2 11.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.6-2.8 5.6-5.5 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </div>
            <h3>GitHub</h3>
            <p>github.com/JFranc25</p>
          </a>

          {/* EMAIL */}
          <div className="contact-card" onClick={copyEmail}>
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M12 13L2 6.5V18h20V6.5L12 13zm10-9H2l10 6 10-6z"/>
              </svg>
            </div>
            <h3>Email</h3>
            <p>josh.francois04@gmail.com</p>
          </div>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/joshfrancois04/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M20.45 20.45h-3.55v-5.4c0-1.3-.03-3-1.8-3s-2.08 1.4-2.08 2.9v5.5H9.5V9h3.4v1.6h.05c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.5v6.1zM5.34 7.4a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.1 20.45H3.6V9H7.1v11.45zM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0z"/>
              </svg>
            </div>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/joshfrancois04</p>
          </a>

        </div>

      </div>
    </div>
  );
}