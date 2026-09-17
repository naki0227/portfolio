import type { Project as ProjectData } from "@/content/portfolio";
import { ProjectVisual } from "./ProjectVisual";
export function Project({ project: p }: { project: ProjectData }) {
  return (
    <article className="project" id={p.id}>
      <div className="project-heading">
        <span className="mono">
          {p.number} / {p.category}
        </span>
        <h3>{p.title}</h3>
        <p>{p.summary}</p>
        <div className="tags">
          {p.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        {p.url && (
          <a
            className="text-link"
            href={p.url}
            target="_blank"
            rel="noreferrer"
          >
            {p.linkLabel}
            <span>↗</span>
          </a>
        )}
      </div>
      <div>
        <ProjectVisual type={p.visual} />
        <details>
          <summary>
            課題と設計を読む <span className="expand">＋</span>
          </summary>
          <div className="case-study">
            {[
              ["課題", p.problem],
              ["設計判断", p.decision],
              ["学び・次の改善", p.learning],
            ].map(([title, text]) => (
              <div key={title}>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </details>
      </div>
    </article>
  );
}
