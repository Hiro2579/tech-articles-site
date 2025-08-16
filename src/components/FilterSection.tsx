import React from 'react';
import { ArticleFilter, Article } from '@/types/article';

interface FilterSectionProps {
  filter: ArticleFilter;
  onFilterChange: (filter: ArticleFilter) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ filter, onFilterChange }) => {
  const handleLevelChange = (level: Article['level'] | '') => {
    onFilterChange({
      ...filter,
      level: level || undefined,
    });
  };

  const handleTechnologyChange = (technology: Article['technology'] | '') => {
    onFilterChange({
      ...filter,
      technology: technology || undefined,
    });
  };

  const handleSearchChange = (searchQuery: string) => {
    onFilterChange({
      ...filter,
      searchQuery: searchQuery || undefined,
    });
  };

  const clearFilters = () => {
    onFilterChange({});
  };

  const hasActiveFilters = filter.level || filter.technology || filter.searchQuery;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            記事を検索
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              id="search"
              type="text"
              placeholder="タイトルや説明で検索..."
              value={filter.searchQuery || ''}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-2">
              レベル
            </label>
            <select
              id="level"
              value={filter.level || ''}
              onChange={(e) => handleLevelChange(e.target.value as Article['level'] | '')}
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
            >
              <option value="">すべて</option>
              <option value="beginner">初級</option>
              <option value="intermediate">中級</option>
              <option value="advanced">上級</option>
            </select>
          </div>

          <div>
            <label htmlFor="technology" className="block text-sm font-medium text-gray-700 mb-2">
              技術
            </label>
            <select
              id="technology"
              value={filter.technology || ''}
              onChange={(e) => handleTechnologyChange(e.target.value as Article['technology'] | '')}
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
            >
              <option value="">すべて</option>
              <option value="typescript">TypeScript</option>
              <option value="react">React</option>
              <option value="both">TypeScript + React</option>
              <option value="java">Java</option>
              <option value="csharp">C#</option>
              <option value="ruby">Ruby</option>
              <option value="php">PHP</option>
            </select>
          </div>

          {hasActiveFilters && (
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                クリア
              </button>
            </div>
          )}
        </div>
      </div>

      {hasActiveFilters && (
        <div className="mt-4 flex flex-wrap gap-2">
          {filter.level && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
              レベル: {filter.level === 'beginner' ? '初級' : filter.level === 'intermediate' ? '中級' : '上級'}
              <button
                onClick={() => handleLevelChange('')}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                ×
              </button>
            </span>
          )}
          {filter.technology && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
              技術: {
                filter.technology === 'typescript' ? 'TypeScript' :
                filter.technology === 'react' ? 'React' :
                filter.technology === 'both' ? 'TypeScript + React' :
                filter.technology === 'java' ? 'Java' :
                filter.technology === 'csharp' ? 'C#' :
                filter.technology === 'ruby' ? 'Ruby' :
                filter.technology === 'php' ? 'PHP' : filter.technology
              }
              <button
                onClick={() => handleTechnologyChange('')}
                className="ml-2 text-green-600 hover:text-green-800"
              >
                ×
              </button>
            </span>
          )}
          {filter.searchQuery && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
              検索: "{filter.searchQuery}"
              <button
                onClick={() => handleSearchChange('')}
                className="ml-2 text-purple-600 hover:text-purple-800"
              >
                ×
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterSection;