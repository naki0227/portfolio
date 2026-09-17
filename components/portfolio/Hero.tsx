import { FlowFallback } from "./FlowFallback";
import { FlowBackground } from "./FlowBackground";
export function Hero({ count }: { count: number }) {
  return (
    <section className="hero-v2" aria-labelledby="hero-title">
      <FlowBackground>
        <FlowFallback />
      </FlowBackground>
      <div className="hero-marker mono">
        <span>PORTFOLIO — 2026</span>
        <span>OSAKA, JAPAN / OECU</span>
      </div>
      <div className="hero-content">
        <p className="hero-role">Backend & Software Engineering</p>
        <h1 id="hero-title">
          IBUKI
          <br />
          <span>
            NAGASE<span className="name-dot">.</span>
          </span>
        </h1>
        <div className="hero-intro">
          <p>
            長瀬 唯楓<span>大阪電気通信大学 / 2028年卒業予定</span>
          </p>
          <p>
            Go・Rustを中心に、WebとiOSアプリを開発しています。
            <br />
            使う人の課題から考えて、設計・実装・改善まで取り組みます。
          </p>
        </div>
        <div className="hero-actions">
          <a href="#work">
            制作したものを見る <span>↓</span>
          </a>
          <a href="#about">
            プロフィール <span>↗</span>
          </a>
        </div>
      </div>
      <div className="hero-bottomline">
        <span className="mono">GO · RUST · TYPESCRIPT · SWIFT</span>
        <a href="#archive">
          <strong>{count}</strong>
          <span>
            公開リポジトリ
            <br />
            一覧を見る ↗
          </span>
        </a>
        <span className="hero-scroll mono">SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
