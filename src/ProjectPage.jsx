import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const projectData = {
  playlist: {
    title: "Smart Playlist Manager",
    subtitle: "Java • Data Structures • File I/O",
    color: "#1db954",
    images: [
      "/playlist-ui.png",
      "/playlist-filled.png",
      "/csv-import.png",
      "/playlist-output.png"
    ],
    overview:
      "A Java desktop application that organizes music collections using data structures.",
    problem:
      "Managing large music libraries manually is slow and inconsistent.",
    tech: ["Java", "Swing", "OOP"],
    solution: ["Used HashMaps", "Stacks", "Queues"],
    result: "Efficient automated playlist system."
  },

  pert: {
    title: "PERT Cost Tool",
    subtitle: "Project Estimation System",
    color: "#9333ea",
    images: [
      "https://picsum.photos/800?2",
      "https://picsum.photos/800?22"
    ],
    overview:
      "An estimation tool that calculates project costs.",
    problem:
      "Manual cost estimation is inefficient.",
    tech: ["Excel", "Modeling"],
    solution: ["Parametric estimation"],
    result: "Improved forecasting accuracy."
  }
};

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id];

  if (!project) return <h1>Not Found</h1>;

  return (
    <motion.div
      className="case-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      {/* 🔥 FULL WIDTH HERO */}
      <div
        className="case-hero full-width"
        style={{
          background: `linear-gradient(to bottom, ${project.color}, black)`
        }}
      >
        <button onClick={() => navigate(-1)}>← Back</button>
        <h1>{project.title}</h1>
        <p className="case-sub">{project.subtitle}</p>
      </div>

      {/* 🔥 CENTERED CONTENT */}
      <div className="case-content">
        <div className="case-inner">

          <section>
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </section>

          <section>
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </section>

          <section>
            <h2>Tech Stack</h2>
            <div className="case-tags">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* 🔥 FULL WIDTH IMAGES */}
      <div className="case-images full-width">
        {project.images.map((img, i) => (
          <div key={i} className="case-image-card">
            <img src={img} alt="project" />
          </div>
        ))}
      </div>

      {/* 🔥 MORE CENTERED CONTENT */}
      <div className="case-content">
        <div className="case-inner">

          <section>
            <h2>How It Works</h2>
            <ul>
              {project.solution.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Outcome</h2>
            <p>{project.result}</p>
          </section>

        </div>
      </div>

    </motion.div>
  );
}