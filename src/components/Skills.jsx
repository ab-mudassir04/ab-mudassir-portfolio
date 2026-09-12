import { FaCode, FaDatabase, FaServer, FaTools } from "react-icons/fa";

import {
  SiDocker,
  SiGit,
  SiGithub,
  SiHibernate,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiReact,
  SiSpringboot,
} from "react-icons/si";

import "./Skills.css";

const skillGroups = [
  {
    number: "01",
    title: "Backend Development",
    description:
      "Building structured backend applications and RESTful services using Java and Spring technologies.",
    icon: <FaServer />,
    skills: [
      {
        name: "Java",
        icon: <FaCode />,
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot />,
      },
      {
        name: "Hibernate",
        icon: <SiHibernate />,
      },
      {
        name: "REST API",
        icon: <FaServer />,
      },
    ],
  },

  {
    number: "02",
    title: "Frontend Development",
    description:
      "Creating responsive and user-focused interfaces with modern frontend technologies.",
    icon: <FaCode />,
    skills: [
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
      },
      {
        name: "HTML5",
        icon: <SiHtml5 />,
      },
      {
        name: "CSS3",
        icon: <FaCode />,
      },
      {
        name: "Bootstrap",
        icon: <FaCode />,
      },
    ],
  },

  {
    number: "03",
    title: "Database",
    description:
      "Working with relational and NoSQL databases for application data storage and management.",
    icon: <FaDatabase />,
    skills: [
      {
        name: "MySQL",
        icon: <SiMysql />,
      },
      { name: "Oracle",
        icon: <FaDatabase /> },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
      },
      {
        name: "PL/SQL",
        icon: <FaDatabase />,
      },
    ],
  },

  {
    number: "04",
    title: "Tools & Workflow",
    description:
      "Using common development and collaboration tools throughout the software development workflow.",
    icon: <FaTools />,
    skills: [
      {
        name: "Git",
        icon: <SiGit />,
      },
      {
        name: "GitHub",
        icon: <SiGithub />,
      },
      {
        name: "Postman",
        icon: <SiPostman />,
      },
      {
        name: "Docker",
        icon: <SiDocker />,
      },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">Technical Skills</span>

          <h2 className="section-title">
            Technologies I use to build software.
          </h2>

          <p className="section-description">
            A practical technology stack covering backend development, frontend
            interfaces, databases and modern development tools.
          </p>
        </div>

        {/* Technical Focus */}
        <div className="skills-overview" data-aos="fade-up" data-aos-delay="50">
          <div className="skills-overview-line" />

          <div>
            <span className="skills-overview-label">
              CURRENT TECHNICAL FOCUS
            </span>

            <p>
              Java&nbsp; · &nbsp;Spring Boot&nbsp; · &nbsp;React &nbsp; ·
              &nbsp;REST APIs&nbsp; · &nbsp;MySQL
            </p>
          </div>
        </div>

        {/* Skill Groups */}
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article
              className="skill-group"
              key={group.number}
              data-aos="fade-up"
              data-aos-delay={100 + index * 60}
            >
              <div className="skill-group-header">
                <div className="skill-group-number">{group.number}</div>

                <div className="skill-group-icon">{group.icon}</div>

                <div className="skill-group-title">
                  <h3>{group.title}</h3>
                </div>
              </div>

              <p className="skill-group-description">{group.description}</p>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-item-icon">{skill.icon}</span>

                    <span className="skill-item-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="skills-footer" data-aos="fade-up" data-aos-delay="180">
          <span className="skills-footer-line" />

          <p>
            I am continuously strengthening these skills through hands-on
            projects, problem solving and practical software development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
