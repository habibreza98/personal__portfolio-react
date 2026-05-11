export default function Skills() {
  const skills = [
    { name: "HTML", percent: 90 },
    { name: "CSS", percent: 85 },
    { name: "JavaScript", percent: 75 },
    { name: "Tailwind CSS", percent: 80 },
    { name: "MERN", percent: 70 },
    { name: "Figma", percent: 60 },
  ];

  return (
    <div className="skills page">
      <h2 className="skills-title">My Skills</h2>

      {skills.map((skill, index) => (
        <div className="skill-box" key={index}>
          <div className="skill-info">
            <span>{skill.name}</span>
            <span>{skill.percent}%</span>
          </div>

          <div className="skill-bar">
            <div
              className="skill-progress"
              style={{ width: `${skill.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
