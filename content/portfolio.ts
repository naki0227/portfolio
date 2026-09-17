export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  problem: string;
  decision: string;
  learning: string;
  url?: string;
  linkLabel?: string;
  visual: "frames" | "score" | "pipeline";
};
export const profile = {
  name: "IBUKI NAGASE",
  japaneseName: "長瀬 唯楓",
  github: "https://github.com/naki0227",
  zenn: "https://zenn.dev/ibukinagase",
};
export const projects: Project[] = [
  {
    id: "studyreel",
    number: "01",
    title: "StudyReel",
    category: "iOS / LEARNING",
    summary: "学習時間とタイムラプスを\n記録するiOSアプリ。",
    stack: ["Swift", "iOS", "Time-lapse"],
    problem:
      "塾講師として聞いた「家で勉強したことを、親に伝えられない」という声。時間の自己申告だけでは残せない、学習の過程を記録したい。",
    decision:
      "学習風景を定期撮影し、タイムラプスとして残す。常時録画を避け、バッテリー消費と記録の確認時間に配慮した。",
    learning:
      "画面の消灯や表示モードによる動作の違いを実利用で発見。端末設定ごとの確認項目を整理し、改善に取り組んだ。",
    url: "https://apps.apple.com/jp/app/studyreel/id6756177589",
    linkLabel: "View on App Store",
    visual: "frames",
  },
  {
    id: "logiscore",
    number: "02",
    title: "Logiscore",
    category: "RUST / WEBASSEMBLY",
    summary: "ソースコードを音楽に変換する\nブラウザアプリ。",
    stack: ["Rust", "WebAssembly", "React", "Web Audio"],
    problem:
      "ソースコードの構造を、文字を読む以外の体験へ変換する。手元のコードを外部へ送らず、ブラウザの中で完結させたい。",
    decision:
      "Rustの変換エンジンをWebAssembly化。ファイル入力・再生を担うReactと、コードからMIDIを生成する処理を分離した。",
    learning:
      "データの変換と音としての体験を両立させる設計を探究。音声からの復元についても検証を進めている。",
    url: "https://github.com/naki0227/logiscore",
    linkLabel: "Source on GitHub",
    visual: "score",
  },
  {
    id: "nue",
    number: "03",
    title: "Nue",
    category: "BACKEND / VIDEO",
    summary: "AI解析とレンダリングをつなぐ\n動画処理基盤。",
    stack: ["Rust", "Go", "Python", "FFmpeg"],
    problem:
      "映像を作るとき、編集の作業量が発信の障壁になる。素材の取り込みから解析、レンダリングまでを自動化したい。",
    decision:
      "Goの入力窓口、PythonのAI解析、Rustの動画処理に役割を分割。編集指示を介して処理を接続する構成にした。",
    learning:
      "責務の分離と、サービスの分割は別の判断。複数コンテナの運用負荷を踏まえ、Rustへの集約を検討している。",
    url: "https://github.com/naki0227/nue",
    linkLabel: "Source on GitHub",
    visual: "pipeline",
  },
];
export const capabilities = [
  {
    label: "01 / BACKEND",
    title: "仕組みを、堅実に。",
    text: "Go・Rustを軸にAPIと処理基盤を実装。エラー、状態、データの境界を明確にし、変更を追いやすい構造を考える。",
    tags: "Go / Rust / Java / PostgreSQL",
  },
  {
    label: "02 / PRODUCT",
    title: "課題から、つくる。",
    text: "誰の、どんな困りごとを解決するのか。対話から要件を整理し、WebからiOSまで、体験に必要な形へ落とし込む。",
    tags: "TypeScript / React / Swift",
  },
  {
    label: "03 / OPERATIONS",
    title: "動いた、その先へ。",
    text: "実装して終わりにせず、テストと運用まで見渡す。AWSやコンテナ技術を学び、システム全体を理解する範囲を広げている。",
    tags: "Docker / GitHub Actions / AWS（学習中）",
  },
];
