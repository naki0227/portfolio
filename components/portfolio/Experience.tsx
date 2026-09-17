import { experience, skills } from "@/content/experience";
export function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-title">
        <span className="eyebrow">03 / EXPERIENCE</span>
        <h2>これまでの経験</h2>
        <p>個人開発と並行して、企業での開発やチーム制作を経験しています。</p>
      </div>
      <div className="timeline">
        {experience.map((item) => (
          <article key={item.organization}>
            <span className="timeline-date mono">{item.date}</span>
            <div>
              <span className="timeline-type">{item.type}</span>
              <h3>{item.organization}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="skills-header">
        <h3>技術と取り組んでいること</h3>
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
