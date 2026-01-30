import { createClient } from "microcms-js-sdk";

// export const client = createClient({
//   serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
//   apiKey: import.meta.env.MICROCMS_API_KEY,
// });

// 型定義の例（ニュース記事など）
export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};

export type NewsResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: News[];
};
