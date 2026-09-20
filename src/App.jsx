import React from "react";
import "./App.css";

function App() {
  const skills = {
    "Data & Analytics": [
      "Python",
      "Pandas",
      "NumPy",
      "Power BI",
      "Tableau",
      "Machine Learning",
      "Excel",
    ],
    Database: [
      "SQL",
      "MySQL",
      "JOINs",
      "Subqueries",
      "Aggregations",
    ],
    Development: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "Git",
    ],
  };

  const projects = [
    {
      number: "01",
      title: "SQL Data Analysis",
      category: "DATA ANALYTICS",
      description:
        "Business-focused SQL analysis project covering 20+ queries to answer practical questions around customers, sales, revenue and performance.",
      tech: ["MySQL", "SQL", "Data Analysis"],
      link: "https://github.com/Rishab295",
    },
    {
      number: "02",
      title: "Invoice Maker",
      category: "REACT APPLICATION",
      description:
        "A responsive online invoice generator with live form updates and downloadable PDF invoices, deployed for real-world use.",
      tech: ["React.js", "JavaScript", "PDF Export", "Netlify"],
      link: "https://invoicemakerbyrishab295.netlify.app",
    },
    {
      number: "03",
      title: "Resume Builder",
      category: "REACT APPLICATION",
      description:
        "Real-time resume builder allowing users to edit their information and generate a downloadable professional resume.",
      tech: ["React.js", "JavaScript", "PDF", "Responsive UI"],
      link: "https://resume-builder-app-by-rishab.netlify.app",
    },
    {
      number: "04",
      title: ".INTERIOR",
      category: "FULL STACK DEVELOPMENT",
      description:
        "Full-stack e-commerce home décor platform featuring product browsing, cart, checkout, authentication and online payments.",
      tech: [
        "React.js",
        "Node.js",
        "Express",
        "MySQL",
        "Firebase",
        "Razorpay",
      ],
      link: "#contact",
    },
  ];

  const experience = [
    {
      year: "JAN — MAY 2026",
      role: "Software Developer",
      company: "Qodequay Technologies Pvt. Ltd.",
      description:
        'Developed ".INTERIOR", a full-stack e-commerce home décor website using React, Node.js, Express, MySQL, Firebase Authentication and Razorpay.',
    },
    {
      year: "JUN — AUG 2025",
      role: "Frontend Developer Intern",
      company: "ZeTheta Algorithms Pvt. Ltd.",
      description:
        "Built responsive web pages for a job aggregator platform using HTML, CSS and JavaScript while following Git and Agile workflows.",
    },
    {
      year: "JUN — AUG 2024",
      role: "Data Science Intern",
      company: "SmartEd Innovation",
      description:
        "Built machine learning models using Python and performed dataset cleaning and analysis using Pandas and NumPy.",
    },
  ];

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            RD<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          {/* FIXED BUTTON POSITION */}
          <a
            href="#contact"
            className="nav-button"
          >
            Let's Talk ↗
          </a>

        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-grid"></div>

        <div className="hero-content">

          <div className="availability">
            <span></span>
            OPEN TO WORK · PUNE
          </div>

          <h1>
            Data
            <br />
            <span>Analyst.</span>
          </h1>

          <p className="hero-description">
            B.Sc. Data Science graduate focused on transforming data into
            meaningful business insights using SQL, Python, Power BI and
            Machine Learning.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              View My Work <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <strong>20+</strong>
              <span>SQL Queries</span>
            </div>

            <div>
              <strong>3+</strong>
              <span>Internships</span>
            </div>

            <div>
              <strong>7.0</strong>
              <span>CGPA</span>
            </div>

          </div>

        </div>

        <div className="scroll-text">
          SCROLL TO EXPLORE ↓
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about" id="about">

        <div className="section-label">
          01 — ABOUT
        </div>

        <div className="about-grid">

          <div>
            <h2>
              Turning
              <br />
              <span>data into decisions.</span>
            </h2>
          </div>

          <div className="about-text">

            <p>
              I'm Rishab Das, a Data Science graduate based in Pune,
              Maharashtra. I enjoy solving business problems through data,
              analytical thinking and technology.
            </p>

            <p>
              My core focus is Data Analytics, with hands-on experience in
              SQL, Python, Power BI and Tableau. I also have practical
              experience building full-stack applications using React and
              Node.js.
            </p>

            <p>
              I'm currently looking for opportunities where I can work with
              real-world data, build useful analytical solutions and continue
              developing my technical skills.
            </p>

            <a
              href="mailto:rishabdas139@gmail.com"
              className="text-link"
            >
              GET IN TOUCH ↗
            </a>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">

        <div className="section-label">
          02 — SKILLS
        </div>

        <div className="section-heading">

          <h2>
            Technical toolkit.
          </h2>

          <p>
            Technologies I use to analyze data, build applications and
            deliver practical solutions.
          </p>

        </div>

        <div className="skills-grid">

          {Object.entries(skills).map(
            ([category, items], index) => (

              <div
                className="skill-card"
                key={category}
              >

                <div className="skill-number">
                  0{index + 1}
                </div>

                <h3>
                  {category}
                </h3>

                <div className="skill-list">

                  {items.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            )
          )}

        </div>

      </section>

      {/* EXPERIENCE */}
      <section
        className="section experience-section"
        id="experience"
      >

        <div className="section-label">
          03 — EXPERIENCE
        </div>

        <div className="section-heading">

          <h2>
            Where I've worked.
          </h2>

        </div>

        <div className="experience-list">

          {experience.map((item, index) => (

            <div
              className="experience-item"
              key={index}
            >

              <div className="experience-year">
                {item.year}
              </div>

              <div className="experience-content">

                <h3>
                  {item.role}
                </h3>

                <h4>
                  {item.company}
                </h4>

                <p>
                  {item.description}
                </p>

              </div>

              <div className="experience-arrow">
                ↗
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section
        className="section projects-section"
        id="projects"
      >

        <div className="section-label">
          04 — PROJECTS
        </div>

        <div className="section-heading projects-heading">

          <div>
            <h2>
              Selected work.
            </h2>
          </div>

          <p>
            A selection of projects demonstrating my experience across
            analytics, machine learning and software development.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project) => (

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-card"
              key={project.number}
            >

              <div className="project-top">

                <span>
                  {project.number}
                </span>

                <span>
                  ↗
                </span>

              </div>

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="tech-stack">

                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </a>

          ))}

        </div>

      </section>

      {/* CERTIFICATIONS */}
      <section className="section certifications">

        <div className="section-label">
          05 — CERTIFICATIONS
        </div>

        <div className="cert-grid">

          <div className="cert-card">

            <span>
              01
            </span>

            <h3>
              Agentic AI Certified Foundations Associate
            </h3>

            <p>
              AI / GENERATIVE AI
            </p>

          </div>

          <div className="cert-card">

            <span>
              02
            </span>

            <h3>
              Deloitte Data Analytics Job Simulation
            </h3>

            <p>
              DATA ANALYTICS
            </p>

          </div>

        </div>

      </section>

      {/* EDUCATION */}
      <section className="section education">

        <div className="section-label">
          06 — EDUCATION
        </div>

        <div className="education-content">

          <div>

            <span className="education-year">
              2023 — 2026
            </span>

            <h2>
              B.Sc. Data Science
            </h2>

            <h3>
              Symbiosis Skills & Professional University
            </h3>

            <p>
              Pune, Maharashtra
            </p>

          </div>

          <div className="cgpa">

            <span>
              CGPA
            </span>

            <strong>
              7.00
            </strong>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        className="contact-section"
        id="contact"
      >

        <div className="contact-bg">
          LET'S CONNECT
        </div>

        <div className="contact-content">

          <div className="section-label">
            07 — CONTACT
          </div>

          <h2>
            Have a project
            <br />
            <span>in mind?</span>
          </h2>

          <p>
            I'm open to Data Analyst, SQL Analyst, MIS Analyst and
            entry-level Data Science opportunities.
          </p>

          <a
            href="mailto:rishabdas139@gmail.com"
            className="contact-email"
          >
            rishabdas139@gmail.com ↗
          </a>

          <div className="social-links">

            <a
              href="https://github.com/Rishab295"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="tel:+919834621522">
              +91 9834621522
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div>
          © 2026 RISHAB DAS
        </div>

        <div>
          BUILT WITH REACT · PUNE, INDIA
        </div>

      </footer>

    </div>
  );
}

export default App;