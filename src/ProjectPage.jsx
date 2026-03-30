import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// 🔥 IMPORT YOUR IMAGES
import ui from "../assets/playlist-ui.png";
import filled from "../assets/playlist-filled.png";
import csv from "../assets/csv-import.png";
import output from "../assets/playlist-output.png";

const projectData = {
  playlist: {
    title: "Smart Playlist Manager",
    subtitle: "Java • Data Structures • File I/O",
    color: "#1db954",

    // ✅ REAL IMAGES
    images: [ui, filled, csv, output],

    overview:
      "A Java desktop application that organizes music collections using data structures. Songs are automatically categorized by mood (BPM) and genre, with support for persistent storage and efficient retrieval.",

    problem:
      "Managing large music libraries manually is slow and inconsistent. Users must sort songs by mood and genre themselves, and often lose playlists without proper saving systems.",

    tech: [
      "Java",
      "Java Swing",
      "OOP",
      "ArrayList",
      "Stack",
      "Queue",
      "HashMap",
      "Binary Search Tree",
      "File I/O"
    ],

    solution: [
      "Designed a HashMap system for instant playlist retrieval",
      "Used Stacks to separate songs by energy level (BPM-based mood filtering)",
      "Implemented Queues for structured genre organization",
      "Stored songs dynamically using ArrayLists",
      "Built a Binary Search Tree for efficient searching and sorting",
      "Added CSV import functionality for loading large datasets",
      "Implemented file saving/loading for persistent playlists"
    ],

    result:
      "Developed a scalable system that automates playlist organization, reduces manual sorting, and demonstrates strong understanding of real-world data structure applications.",

    // 🔥 NEW SECTIONS
    challenges: [
      "Integrating multiple data structures into one cohesive system",
      "Maintaining synchronization between playlists and UI",
      "Balancing performance with usability"
    ],

    improvements: [
      "Integrate Spotify API for real-time data",
      "Convert to a full-stack web app",
      "Add recommendation system based on listening behavior",
      "Improve UI with modern frontend frameworks"
    ]
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
      "An estimation tool that calculates project costs using parametric models and scheduling techniques.",
    problem:
      "Manual cost estimation is error-prone and inefficient for large-scale planning.",
    tech: ["Excel", "Modeling", "Scheduling"],
    solution: [
      "Applied parametric estimation formulas",
      "Modeled cost scaling based on project size",
      "Improved accuracy of forecasting"
    ],
    result:
      "Provided a structured way to estimate costs efficiently and consistently."
  },

  db: {
    title: "Database Design",
    subtitle: "SQL • Data Structuring",
    color: "#3b82f6",
    images: [
      "https://picsum.photos/800?3",
      "https://picsum.photos/800?33"
    ],
    overview:
      "Designed a normalized relational database system for efficient data storage.",
    problem:
      "Unstructured data leads to redundancy and inefficiency.",
    tech: ["SQL", "Normalization", "ER Modeling"],
    solution: [
      "Applied 1NF, 2NF, 3NF normalization",
      "Created structured tables and relationships",
      "Improved data integrity and efficiency"
    ],
    result:
      "Built a scalable and efficient database structure."
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
      {/* HERO */}
      <div
        className="case-hero"
        style={{
          background: `linear-gradient(to bottom, ${project.color}, black)`
        }}
      >
        <button onClick={() => navigate(-1)}>← Back</button>

        <h1>{project.title}</h1>
        <p className="case-sub">{project.subtitle}</p>
      </div>

      {/* CONTENT */}
      <div className="case-content">

        {/* OVERVIEW */}
        <section>
          <h2>Overview</h2>
          <p>{project.overview}</p>
        </section>

        {/* PROBLEM */}
        <section>
          <h2>Problem</h2>
          <p>{project.problem}</p>
        </section>

        {/* TECH */}
        <section>
          <h2>Tech Stack</h2>
          <div className="case-tags">
            {project.tech.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </section>

        {/* 🔥 UPDATED IMAGES SECTION */}
        <section>
          <h2>Application Walkthrough</h2>

          <div className="case-images">
            {project.images.map((img, i) => {
              const captions = [
                "Main Interface",
                "Creating & Managing a Playlist",
                "Importing Songs via CSV",
                "Generated Playlist Output"
              ];

              return (
                <div key={i} className="case-image-card">
                  <img src={img} alt={captions[i]} />
                  <p>{captions[i]}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SOLUTION */}
        <section>
          <h2>How It Works</h2>
          <ul>
            {project.solution.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </section>

        {/* RESULT */}
        <section>
          <h2>Outcome</h2>
          <p>{project.result}</p>
        </section>

        {/* 🔥 NEW */}
        {project.challenges && (
          <section>
            <h2>Challenges</h2>
            <ul>
              {project.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </section>
        )}

        {project.improvements && (
          <section>
            <h2>Future Improvements</h2>
            <ul>
              {project.improvements.map((imp, i) => (
                <li key={i}>{imp}</li>
              ))}
            </ul>
          </section>
        )}

      </div>
    </motion.div>
  );
}