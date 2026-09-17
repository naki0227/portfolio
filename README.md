# IBUKI NAGASE — Portfolio

長瀬唯楓のポートフォリオ。公開リポジトリ、主な制作物、技術、学歴・活動をまとめています。

## 構成

- React + TypeScript / Vinext + Vite
- Three.jsによる遅延読み込みの3D背景、SVGフォールバック
- 42件の公開リポジトリを検索・分野別に閲覧
- HTMLによる作品詳細の開閉
- レスポンシブ、キーボード操作、動き軽減設定

設計判断とトレードオフは [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)。確認結果は [docs/VALIDATION.md](docs/VALIDATION.md)。

## 開発

Node.js 22.13以上、pnpm（package.jsonのpackageManager指定版）を使用します。

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

```sh
pnpm exec tsc --noEmit
pnpm build
```

ローカルで環境専用の設定が無い場合は、同梱スクリプトがportableプロファイルを利用します。本サイトはSSR/Workers対応構成です。GitHub Pagesへそのまま配置する構成ではありません。

## 責務

| 場所                           | 役割                             |
| ------------------------------ | -------------------------------- |
| content/                       | 公開データ・型・説明文           |
| components/portfolio/          | セクションと表示、UI状態         |
| lib/portfolio-filter.ts        | 検索・カテゴリ絞り込みの純粋関数 |
| lib/scene/surface.ts           | 表面の座標計算                   |
| lib/scene/create-flow-scene.ts | Three.jsとGPUリソースの管理      |
| app/styles/                    | 基本スタイルとサイトのレイアウト |
| app/page.tsx                   | セクションの組み立て             |

## 情報更新

`content/repositories.json`は2026年9月17日に確認した公開リポジトリ一覧です。`content/archive.ts`でカテゴリと短い紹介を管理します。実行時のGitHub API呼び出しやトークンは不要です。READMEの説明を要約したもので、各アプリのすべての機能を検証済みという意味ではありません。

技術・活動は`content/experience.ts`、主要制作物は`content/portfolio.ts`。更新時には公開可否と事実関係を確認してください。機密情報や認証情報を追加しないでください。
