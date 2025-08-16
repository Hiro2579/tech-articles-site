import { Article } from '@/types/article';
import { typescriptReactArticles } from './typescript-react-articles';
import { javaArticles } from './java-articles';
import { csharpArticles } from './csharp-articles';
import { rubyArticles } from './ruby-articles';
import { phpArticles } from './php-articles';

export const articles: Article[] = [
  ...typescriptReactArticles,
  ...javaArticles,
  ...csharpArticles,
  ...rubyArticles,
  ...phpArticles
];