const notes = [
  {
    number: "04",
    name: "Dayline",
    label: "RUST × SWIFT",
    title: "言語とプラットフォームの境界",
    text: "RustのContext Engine、SwiftのApple Intelligenceアダプター、アプリの組み立てを分離。言語間の契約を明示する設計です。",
    url: "https://github.com/naki0227/dayline",
  },
  {
    number: "05",
    name: "Useful Map",
    label: "iOS / MODULE DESIGN",
    title: "モジュールで依存方向を決める",
    text: "移動手段ごとの所要時間を比較するiOSアプリ。SwiftPMでドメイン・データ・外部SDK・表示を分け、依存関係を検査します。",
    url: "https://github.com/naki0227/useful-map",
  },
  {
    number: "06",
    name: "AWS Kubernetes Lab",
    label: "INFRASTRUCTURE / LEARNING",
    title: "構築からデプロイまでを試す",
    text: "GoアプリとPostgreSQLをEKS上に構築。Terraform、OIDC、IAM Roleの分離、永続化やネットワーク制御を学んだ記録です。",
    url: "https://github.com/naki0227/aws-kubernetes-lab",
  },
];
export function EngineeringNotes() {
  return (
    <div className="engineering-notes">
      {notes.map((n) => (
        <article key={n.name}>
          <span className="mono">
            {n.number} / {n.label}
          </span>
          <h3>{n.name}</h3>
          <h4>{n.title}</h4>
          <p>{n.text}</p>
          <a
            className="text-link"
            href={n.url}
            target="_blank"
            rel="noreferrer"
          >
            設計とコードを見る <span>↗</span>
          </a>
        </article>
      ))}
    </div>
  );
}
