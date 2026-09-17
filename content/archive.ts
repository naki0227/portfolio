import repositorySnapshot from "./repositories.json";

export const categories = [
  "すべて",
  "Web・AI",
  "Mobile",
  "Systems",
  "Learning",
  "Other",
] as const;
export type Category = (typeof categories)[number];
export type Repository = {
  name: string;
  url: string;
  category: Category;
  description: string;
  tags: string[];
};
type Entry = [Category, string, string[]];
const descriptions: Record<string, Entry> = {
  StudyReel: [
    "Mobile",
    "学習時間とタイムラプスを記録するiOSアプリ。",
    ["Swift", "SwiftData", "WidgetKit"],
  ],
  logiscore: [
    "Systems",
    "ソースコードをMIDIに変換。Rustの処理をブラウザで実行。",
    ["Rust", "WebAssembly", "React"],
  ],
  dayline: [
    "Mobile",
    "RustのContext EngineとApple Intelligenceを接続するアプリ。",
    ["Rust", "Swift", "UniFFI"],
  ],
  "useful-map": [
    "Mobile",
    "移動手段別の所要時間を比較するiOSアプリ。",
    ["Swift", "MapKit", "SwiftPM"],
  ],
  encura: [
    "Mobile",
    "カメラでの作品認識と対話を備えた美術館ガイド。",
    ["Flutter", "Gemini"],
  ],
  preplay: [
    "Mobile",
    "人数や場所などの状況から、隙間時間の遊びを提案。",
    ["Flutter", "Dart"],
  ],
  nue: [
    "Systems",
    "入力・AI解析・レンダリングを分離した動画処理基盤。",
    ["Rust", "Go", "Python", "FFmpeg"],
  ],
  eac: [
    "Systems",
    "再現可能なアニメーションをコードで記述する実験的ランタイム。",
    ["TypeScript", "DSL"],
  ],
  "world-oriented-programming": [
    "Systems",
    "空間・時間・制約を記述する言語「sekai」の研究・試作。",
    ["Language", "Research"],
  ],
  AGN: [
    "Systems",
    "Rustとwgpuを用いた言語処理・描画エンジンの実験。",
    ["Rust", "wgpu", "WebAssembly"],
  ],
  context_cue: [
    "Systems",
    "同意のある会話で、メモや関連情報の参照を支援するローカルアプリ。",
    ["Rust", "Tauri", "React"],
  ],
  enludus_ego: [
    "Systems",
    "ローカルの文脈情報を利用するAIアシスタント。",
    ["Rust", "Local AI"],
  ],
  auto_CM_director: [
    "Web・AI",
    "AIエージェント向けのプロモーション動画生成フレームワーク。",
    ["Remotion", "MCP"],
  ],
  "task-manager": [
    "Web・AI",
    "提案とユーザー承認を分離したAIタスク支援「DreamCatcher」。",
    ["Next.js", "FastAPI", "PostgreSQL"],
  ],
  KoeTect: [
    "Web・AI",
    "テキストや音声から3Dシーンを生成・演出するツール。",
    ["React Three Fiber", "Gemini"],
  ],
  AITH: [
    "Web・AI",
    "写真からの質問や学習計画を扱うAI学習支援。",
    ["AI", "Education"],
  ],
  covenant: [
    "Web・AI",
    "会議の記録から担当・期限・作業を整理する議事録ツール。",
    ["Gemini", "Supabase"],
  ],
  "my-language-dojo": [
    "Web・AI",
    "動画の字幕から単語・文法・クイズを生成する語学学習ツール。",
    ["Gemini", "Education"],
  ],
  weekendTodo: [
    "Web・AI",
    "週末のタスクをスマートフォンとPCで共有するアプリ。",
    ["React", "TypeScript", "Supabase"],
  ],
  kotodama: [
    "Web・AI",
    "文章の分析とリライトを支援するエディタ。",
    ["Next.js", "Gemini", "Supabase"],
  ],
  Eeyo: [
    "Web・AI",
    "近くにいる人同士の助け合いを扱うソーシャルアプリ。",
    ["React", "Rust", "WebAssembly"],
  ],
  umeda_underground_map: [
    "Web・AI",
    "店舗や入口を手がかりに経路を探す、梅田地下街の案内PWA。",
    ["TypeScript", "PWA", "Dijkstra"],
  ],
  Logos: [
    "Web・AI",
    "断片的なメモからスライドの構成と内容を生成。",
    ["Vercel AI SDK", "Gemini"],
  ],
  amu: [
    "Web・AI",
    "GitHubのコードから紹介動画・記事・資料を生成するAIエージェント。",
    ["AI Agents", "Flutter"],
  ],
  mirutabi: [
    "Web・AI",
    "旅行の写真とルートを共有するSNS。",
    ["Next.js", "Maps"],
  ],
  "study-hub": [
    "Web・AI",
    "ポモドーロ・単語帳・AIクイズをまとめた学習ツール。",
    ["JavaScript", "Vite", "Gemini"],
  ],
  AutomatedHub: [
    "Web・AI",
    "データ収集・分析・コンテンツ生成をつなぐ自動化の実験。",
    ["Python", "Automation"],
  ],
  JisouNoKai: [
    "Web・AI",
    "漢字の部品を組み合わせるアクションゲームの開発。",
    ["React", "Vite", "TypeScript"],
  ],
  LifeHackAlchemist: [
    "Web・AI",
    "物理・化学をゲームに取り入れる学習RPGの企画。",
    ["Game", "Gemini"],
  ],
  dabuchi: [
    "Learning",
    "金融スマートフォンアプリのチーム開発モノレポ。",
    ["React", "Express", "MySQL"],
  ],
  "aws-kubernetes-lab": [
    "Learning",
    "EKS、Terraform、OIDCによる構築・運用の学習記録。",
    ["AWS", "Kubernetes", "Terraform", "Go"],
  ],
  "ai-readable-code-lab": [
    "Learning",
    "人とAIにとっての変更しやすさを比較する設計実験。",
    ["TypeScript", "Fastify", "Research"],
  ],
  "my-analyzing-app": [
    "Learning",
    "資産配分と企業の財務データを扱う授業課題のCLI。",
    ["C++", "CMake"],
  ],
  "rust-React-studying": [
    "Learning",
    "学習用リポジトリ。公開READMEに説明は未記載。",
    [],
  ],
  "rails-expense-workflow": [
    "Learning",
    "Railsプロジェクト。公開READMEは初期テンプレート。",
    ["Rails"],
  ],
  VlogWeb: [
    "Other",
    "Next.jsプロジェクト。公開READMEは初期テンプレート。",
    ["Next.js"],
  ],
  jobDeck: ["Other", "公開リポジトリ。説明はGitHubを参照。", []],
  "kiro-vault": ["Other", "Kiro Studioで作成したDigital Vault。", []],
  "Ibuki-Nagase": ["Other", "GitHub用の自己紹介。", []],
  enludus: ["Other", "個人開発プロジェクトをまとめたWebサイト。", ["Web"]],
  portfolio: [
    "Other",
    "このポートフォリオのソースコードと設計記録。",
    ["React", "TypeScript", "Three.js"],
  ],
  "random-two-char-maker": [
    "Web・AI",
    "ランダムな二文字を生成するツール。",
    ["HTML", "JavaScript"],
  ],
};
export const repositories: Repository[] = repositorySnapshot.map((r) => {
  const [category, description, tags] = descriptions[r.name] ?? [
    "Other",
    "公開リポジトリ。詳細はGitHubを参照。",
    [],
  ];
  return { name: r.name, url: r.url, category, description, tags };
});
export const archiveDate = "2026.09.17";
