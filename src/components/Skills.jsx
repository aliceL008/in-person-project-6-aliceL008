const skills = [
  { name: 'React', category: 'Frontend Framework', level: 90, icon: '⚛️' },
  { name: 'CSS3', category: 'Styling', level: 95, icon: '🎨' },
  { name: 'Responsive Design', category: 'Design', level: 88, icon: '📱' },
  { name: 'JavaScript', category: 'Programming', level: 85, icon: '🚀' },
  { name: 'Figma', category: 'Design Tools', level: 80, icon: '🎯' },
  { name: 'Node.js', category: 'Backend', level: 75, icon: '🌐' },
];

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <div className="skill-category">{skill.category}</div>
              <div className="skill-level">
                <div
                  className="skill-progress"
                  style={{ '--skill-level': `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
