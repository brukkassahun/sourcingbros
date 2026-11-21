export interface ArticleContent {
  type: "h2" | "h3" | "p" | "ul" | "ol" | "table" | "chart" | "image" | "blockquote" | "callout";
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  chartType?: "bar" | "line" | "donut" | "comparison";
  chartTitle?: string;
  chartData?: { label: string; value: number; color?: string }[];
  chartUnit?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  variant?: "info" | "warning" | "success";
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
  keywords: string[];
  heroImage: string;
  heroAlt: string;
  content: ArticleContent[];
}

import { batch1 } from "@/lib/articles-data/batch1";
import { batch2 } from "@/lib/articles-data/batch2";
import { batch3 } from "@/lib/articles-data/batch3";
import { batch4 } from "@/lib/articles-data/batch4";

export const articles: Article[] = [...batch1, ...batch2, ...batch3, ...batch4];

export function getArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}
