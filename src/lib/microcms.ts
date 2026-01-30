import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY;

const client = createClient({
  serviceDomain,
  apiKey,
});

// 型定義（microCMSのスキーマに合わせて調整）
export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
};

export type NewsListResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: News[];
};

// ニュース一覧を取得する関数
export const getNews = async (queries?: MicroCMSQueries) => {
  console.log("getNews 実行中 - エンドポイント: news");
  return await client.getList<News>({ endpoint: "news", queries });
};

// ニュース詳細を取得する関数
export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });
};
