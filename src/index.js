import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },

  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/ino.jpg" alt="Ino Zavvou" />;
}

function Intro() {
  return (
    <div>
      <h1>Ino Zavvou</h1>
      <p>
        Ino Zavvou is a wanna be front-end developer. Let's see if she can make
        it. Give her some good vibes.
      </p>
    </div>
  );
}

function SkillList() {
  const skillsObj = skills;
  return (
    <ul className="skill-list">
      {skillsObj.map((skill) => (
        <Skill skillsObj={skill} key={skill.name} />
      ))}
    </ul>
  );
}

function Skill({ skillsObj }) {
  return (
    <li className="skill" style={{ backgroundColor: skillsObj.color }}>
      <span>{skillsObj.skill}</span>

      <span>
        {skillsObj.level === "begginer" && "🐣"}
        {skillsObj.level === "intermediate" && "👶"}
        {skillsObj.level === "advanced" && "💪"}
      </span>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
