export interface ArticleMetadata {
  slug: string;
  title: string;
  author: string;
  category: string;
  readTime: string;
  summary: string;
  publicationDate: string;
  isExternal?: boolean;
  externalUrl?: string;
  // Add other metadata as needed, e.g., publishDate
}

export interface Article {
  metadata: ArticleMetadata;
  htmlContent: string;
}
