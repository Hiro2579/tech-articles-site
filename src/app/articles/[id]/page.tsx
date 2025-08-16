import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/data/articles';
import { Article } from '@/types/article';

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
  both: 'TypeScript + React',
  java: 'Java',
  csharp: 'C#',
  ruby: 'Ruby',
  php: 'PHP',
};

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const article = articles.find(a => a.id === id);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            記事一覧に戻る
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {article.imageUrl && (
              <div className="relative h-64 md:h-80">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 flex gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${levelColors[article.level]}`}>
                    {levelLabels[article.level]}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${technologyColors[article.technology]}`}>
                    {technologyLabels[article.technology]}
                  </span>
                </div>
              </div>
            )}

            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  {article.author}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  約{article.readTime}分で読めます
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {article.description}
                </p>

                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}