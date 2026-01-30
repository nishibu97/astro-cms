# Astro + microCMS 静的サイトテンプレート

Astro と microCMS を使って静的サイトを生成するテンプレートです。  
ビルド時に microCMS からコンテンツを取得し、HTML を生成します。

## 特徴

- Astro による SSG (静的サイト生成)
- microCMS からのデータ取得 (リスト形式 API)
- シンプルな一覧ページのサンプル (`src/pages/index.astro`)

## セットアップ

1. 依存関係のインストール

```sh
npm install
```

2. 環境変数の設定

`.env.sample` をコピーして `.env` を作成し、値を設定してください。

```env
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

3. microCMS の準備

- API の種類: **リスト形式**
- エンドポイント名: `news` (変更した場合は `src/lib/microcms.ts` を修正)
- フィールド例: `title`, `content`, `publishedAt`

## コマンド

| Command           | Action                                |
| :---------------- | :------------------------------------ |
| `npm run dev`     | 開発サーバーを起動 (`localhost:4321`) |
| `npm run build`   | 本番ビルド (`./dist/` を生成)         |
| `npm run preview` | ビルド結果のプレビュー                |

## 主要ファイル

- `src/lib/microcms.ts` : microCMS クライアントと取得関数
- `src/pages/index.astro` : トップページ
