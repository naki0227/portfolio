import { activities } from "@/content/experience";
export function About() {
  return (
    <section className="section about-v2" id="about">
      <div className="section-title">
        <span className="eyebrow">04 / ABOUT</span>
        <h2>プロフィール</h2>
      </div>
      <div className="about-intro">
        <div className="about-name">
          <span className="mono">NAGASE IBUKI</span>
          <h3>長瀬 唯楓</h3>
          <p>
            大阪電気通信大学
            <br />
            総合情報学部 デジタルゲーム学科
            <br />
            2028年3月 卒業予定
          </p>
        </div>
        <div>
          <p>
            バックエンド開発を中心に、Web・iOS・AIを使ったプロダクトを作っています。GoとRustが主軸ですが、実現したいことに合わせて技術を選びます。
          </p>
          <p>
            接客や塾講師の経験から、まず相手の話を聞いて、何に困っているかを理解することを大切にしています。StudyReelも、生徒から受けた相談が出発点でした。
          </p>
          <p>
            今はAPIの実装に加え、AWSやKubernetesを使った構築・運用も学んでいます。今後は要件整理から設計を主導できるよう、システム全体を理解する範囲を広げたいと考えています。
          </p>
        </div>
      </div>
      <div className="profile-facts">
        <div>
          <span>EDUCATION</span>
          <p>
            奈良県立奈良高等学校<small>2020.04 — 2023.03</small>
          </p>
        </div>
        <div>
          <span>UNIVERSITY</span>
          <p>
            大阪電気通信大学<small>2024.04 — 2028.03 卒業予定</small>
          </p>
        </div>
        <div>
          <span>LANGUAGE</span>
          <p>
            TOEIC L&R 750<small>2026.07</small>
          </p>
        </div>
      </div>
      <div className="activity-list">
        {activities.map((a) => (
          <article key={a.title}>
            <span className="mono">{a.label}</span>
            <h3>{a.title}</h3>
            <p>{a.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
