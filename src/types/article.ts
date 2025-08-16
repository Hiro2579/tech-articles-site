export interface Article {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  technology: 'typescript' | 'react' | 'both' | 'java' | 'csharp' | 'ruby' | 'php';
  tags: string[];
  author: string;
  publishedAt: string;
  readTime: number;
  url: string;
  imageUrl?: string;
  content: string;
}

export interface ArticleFilter {
  level?: Article['level'];
  technology?: Article['technology'];
  searchQuery?: string;
}