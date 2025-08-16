import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/types/article';

interface ArticleCardProps {
  article: Article;
}

const levelColors = {
  beginner: 'bg-green-100 text-green-800 border-green-200',
  intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  advanced: 'bg-red-100 text-red-800 border-red-200',
};

const levelLabels = {
  beginner: '初級',
  intermediate: '中級',
  advanced: '上級',
};

const technologyColors = {
  typescript: 'bg-blue-100 text-blue-800 border-blue-200',
  react: 'bg-cyan-100 text-cyan-800 border-cyan-200',
  both: 'bg-purple-100 text-purple-800 border-purple-200',
  java: 'bg-orange-100 text-orange-800 border-orange-200',
  csharp: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  ruby: 'bg-red-100 text-red-800 border-red-200',
  php: 'bg-violet-100 text-violet-800 border-violet-200',
};

const technologyLabels = {
  typescript: 'TypeScript',
  react: 'React',
  both: 'TS + React',
  java: 'Java',
  csharp: 'C#',
  ruby: 'Ruby',
  php: 'PHP',
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
      <div className="relative overflow-hidden">
        {article.imageUrl && (
          <Image
            src={article.imageUrl}
            alt={article.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${levelColors[article.level]}`}>
            {levelLabels[article.level]}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${technologyColors[article.technology]}`}>
            {technologyLabels[article.technology]}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {article.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
            >
              #{tag}
            </span>
          ))}
          {article.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
              +{article.tags.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {article.readTime}分
          </span>
          <span>{article.author}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
          </span>
          <Link
            href={`/articles/${article.id}`}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            記事を読む
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;