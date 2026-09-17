import { profile, projects } from "@/content/portfolio";
import { repositories, archiveDate } from "@/content/archive";
import { Hero } from "@/components/portfolio/Hero";
import { Project } from "@/components/portfolio/Project";
import { EngineeringNotes } from "@/components/portfolio/EngineeringNotes";
import { RepositoryArchive } from "@/components/portfolio/RepositoryArchive";
import { Experience } from "@/components/portfolio/Experience";
import { About } from "@/components/portfolio/About";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        本文へスキップ
      </a>
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="IBUKI NAGASE ホーム">
          IN<span> / </span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#work">Works</a>
          <a href="#archive">Archive</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
        </nav>
        <a
          className="header-github"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </header>
      <main id="main">
        <Hero count={repositories.length} />
        <section className="section work-v2" id="work">
          <div className="section-title">
            <span className="eyebrow">01 / SELECTED WORKS</span>
            <h2>主な制作物</h2>
            <p>アプリの目的と、実装で考えたこと。</p>
          </div>
          {projects.map((p) => (
            <Project key={p.id} project={p} />
          ))}
          <EngineeringNotes />
        </section>
        <section className="section archive-section" id="archive">
          <div className="section-title">
            <span className="eyebrow">02 / REPOSITORY ARCHIVE</span>
            <h2>
              開発の一覧
              <span className="section-count">{repositories.length}</span>
            </h2>
            <p>
              アプリ、実験、学習用コードまで。各項目からGitHubの詳細を確認できます。
            </p>
          </div>
          <RepositoryArchive repositories={repositories} date={archiveDate} />
        </section>
        <Experience />
        <About />
        <footer className="footer-v2">
          <div className="footer-top">
            <span className="eyebrow">05 / ELSEWHERE</span>
            <p>コードと、学んだこと。</p>
            <div>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={profile.zenn} target="_blank" rel="noreferrer">
                Zenn ↗
              </a>
              <a
                href="https://github.com/naki0227/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                このサイトのソース ↗
              </a>
            </div>
          </div>
          <div className="footer-name" aria-hidden="true">
            IBUKI NAGASE<span>.</span>
          </div>
          <div className="footer-bottom mono">
            <span>© 2026 IBUKI NAGASE</span>
            <a href="#">BACK TO TOP ↑</a>
          </div>
        </footer>
      </main>
    </>
  );
}
