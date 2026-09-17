import { skills } from "@/content/experience";
export function Experience() {
  return (
    <section className="section experience-section" id="skills">
      <div className="section-title">
        <span className="eyebrow">03 / SKILLS</span>
        <h2>技術と取り組んでいること</h2>
        <p>経験のある技術と、現在学習している領域。</p>
      </div>
      <div className="skills-table">
        {skills.map((skill) => (
          <div key={skill.name}>
            <span className="mono">{skill.name}</span>
            <h4>{skill.primary}</h4>
            <p>{skill.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
