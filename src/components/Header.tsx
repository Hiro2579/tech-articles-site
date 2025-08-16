import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            プログラミング技術記事
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            総合まとめサイト
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            TypeScript・React・Java・C#・Ruby・PHPの学習に役立つ厳選記事を初級から上級まで幅広くお届けします
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;