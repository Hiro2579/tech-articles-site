'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import ArticleCard from '@/components/ArticleCard';
import FilterSection from '@/components/FilterSection';
import { articles } from '@/data/articles';
import { ArticleFilter } from '@/types/article';

export default function Home() {
  const [filter, setFilter] = useState<ArticleFilter>({});

  const filteredArticles = articles.filter(article => {
    if (filter.level && article.level !== filter.level) return false;
    if (filter.technology && article.technology !== filter.technology) return false;
    if (filter.searchQuery && !article.title.toLowerCase().includes(filter.searchQuery.toLowerCase()) && 
        !article.description.toLowerCase().includes(filter.searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <FilterSection filter={filter} onFilterChange={setFilter} />
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            記事一覧 ({filteredArticles.length}件)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                条件に一致する記事が見つかりませんでした。
              </p>
            </div>
          )}
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">プログラミング技術記事総合まとめサイト</p>
          <p className="text-gray-300">TypeScript・React・Java・C#・Ruby・PHPの学習に役立つ技術記事を厳選してお届けします</p>
        </div>
      </footer>
    </div>
  );
}
