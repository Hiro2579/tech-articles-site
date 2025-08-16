import { Article } from '@/types/article';

export const typescriptReactArticles: Article[] = [
  {
    id: '1',
    title: 'TypeScript基礎：型安全なJavaScriptを始めよう',
    description: 'TypeScriptの基本的な型システムから始めて、実践的な使い方までを学びます。',
    level: 'beginner',
    technology: 'typescript',
    tags: ['基礎', '型システム', '初心者向け'],
    author: 'Tech Writer A',
    publishedAt: '2024-01-15',
    readTime: 10,
    url: '/articles/1',
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop',
    content: `
      <h2>TypeScriptとは</h2>
      <p>TypeScriptは、Microsoftが開発したJavaScriptのスーパーセットです。JavaScriptに静的型付けを追加することで、開発時にエラーを早期発見し、より安全で保守性の高いコードを書くことができます。</p>
      
      <h2>なぜTypeScriptを使うのか</h2>
      <h3>1. 型安全性</h3>
      <p>TypeScriptの最大の利点は型安全性です。コンパイル時に型チェックが行われるため、実行時エラーを大幅に減らすことができます。</p>
      
      <pre><code>// JavaScript（型エラーが実行時まで分からない）
function greet(name) {
  return "Hello, " + name.toUpperCase();
}

greet(123); // 実行時エラー

// TypeScript（コンパイル時にエラーを検出）
function greet(name: string): string {
  return "Hello, " + name.toUpperCase();
}

greet(123); // コンパイルエラー</code></pre>

      <h3>2. 優れた開発体験</h3>
      <p>IDEやエディタでの自動補完、リファクタリング、ナビゲーション機能が大幅に向上します。</p>
      
      <h2>基本的な型</h2>
      <h3>プリミティブ型</h3>
      <pre><code>// 基本的な型の宣言
let name: string = "TypeScript";
let age: number = 5;
let isActive: boolean = true;

// 配列の型
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array&lt;string&gt; = ["Alice", "Bob", "Charlie"];</code></pre>

      <h3>オブジェクトの型</h3>
      <pre><code>// インターフェースの定義
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // オプショナルプロパティ
}

// オブジェクトの作成
const user: User = {
  id: 1,
  name: "田中太郎",
  email: "tanaka@example.com"
};</code></pre>

      <h2>関数の型定義</h2>
      <pre><code>// 関数の型定義
function add(a: number, b: number): number {
  return a + b;
}

// アロー関数
const multiply = (a: number, b: number): number => a * b;

// オプショナル引数とデフォルト引数
function greetUser(name: string, greeting: string = "こんにちは"): string {
  return \`\${greeting}、\${name}さん！\`;
}</code></pre>

      <h2>TypeScriptの設定</h2>
      <h3>tsconfig.json</h3>
      <p>TypeScriptプロジェクトには設定ファイル「tsconfig.json」が必要です。</p>
      
      <pre><code>{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}</code></pre>

      <h2>まとめ</h2>
      <p>TypeScriptは学習コストはありますが、得られるメリットは非常に大きいです。特に：</p>
      <ul>
        <li>大規模なプロジェクトでの型安全性</li>
        <li>開発効率の向上</li>
        <li>バグの早期発見</li>
        <li>チーム開発でのコード品質向上</li>
      </ul>
      <p>まずは小さなプロジェクトから始めて、TypeScriptの恩恵を体感してみましょう！</p>
    `
  },
  {
    id: '2',
    title: 'React Hooks完全ガイド：useState から useEffect まで',
    description: 'React Hooksの基本的な使い方から応用パターンまでを詳しく解説します。',
    level: 'beginner',
    technology: 'react',
    tags: ['Hooks', 'useState', 'useEffect'],
    author: 'React Master',
    publishedAt: '2024-01-20',
    readTime: 15,
    url: '/articles/2',
    imageUrl: 'https://images.unsplash.com/photo-1581471036207-7c0b1eeb9fbb?w=400&h=200&fit=crop',
    content: `
      <h2>React Hooksとは</h2>
      <p>React Hooksは、React 16.8で導入された機能で、関数コンポーネントでもstateやライフサイクルメソッドなどのReactの機能を使えるようにする仕組みです。</p>

      <h2>useState：状態管理の基本</h2>
      <h3>基本的な使い方</h3>
      <p>useStateは関数コンポーネントで状態を管理するためのHookです。</p>

      <pre><code>import React, { useState } from 'react';

function Counter() {
  // [現在の値, 値を更新する関数] = useState(初期値)
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;現在のカウント: {count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        +1
      &lt;/button&gt;
      &lt;button onClick={() =&gt; setCount(count - 1)}&gt;
        -1
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <h3>複数の状態を管理する</h3>
      <pre><code>function UserProfile() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  return (
    &lt;form&gt;
      &lt;input
        type="text"
        placeholder="名前"
        value={name}
        onChange={(e) =&gt; setName(e.target.value)}
      /&gt;
      &lt;input
        type="number"
        placeholder="年齢"
        value={age}
        onChange={(e) =&gt; setAge(Number(e.target.value))}
      /&gt;
      &lt;input
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) =&gt; setEmail(e.target.value)}
      /&gt;
    &lt;/form&gt;
  );
}</code></pre>

      <h2>useEffect：副作用の処理</h2>
      <h3>基本的な使い方</h3>
      <p>useEffectは、コンポーネントのレンダリング後に実行される副作用を定義します。</p>

      <pre><code>import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() =&gt; {
    const interval = setInterval(() =&gt; {
      setSeconds(prev =&gt; prev + 1);
    }, 1000);

    // クリーンアップ関数
    return () =&gt; clearInterval(interval);
  }, []); // 依存配列が空の場合、マウント時に一度だけ実行

  return &lt;div&gt;経過時間: {seconds}秒&lt;/div&gt;;
}</code></pre>

      <h3>依存配列の使い分け</h3>
      <pre><code>function DataFetcher({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // userIdが変更された時に実行
  useEffect(() =&gt; {
    const fetchUser = async () =&gt; {
      setLoading(true);
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('ユーザー取得エラー:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // userIdが変更されたときに再実行

  if (loading) return &lt;div&gt;読み込み中...&lt;/div&gt;;
  if (!user) return &lt;div&gt;ユーザーが見つかりません&lt;/div&gt;;

  return &lt;div&gt;こんにちは、{user.name}さん！&lt;/div&gt;;
}</code></pre>

      <h2>その他の便利なHooks</h2>
      <h3>useContext：コンテキストの利用</h3>
      <pre><code>import React, { useContext } from 'react';

const ThemeContext = React.createContext();

function ThemedButton() {
  const theme = useContext(ThemeContext);
  
  return (
    &lt;button style={{ 
      backgroundColor: theme.bg, 
      color: theme.color 
    }}&gt;
      テーマカラーのボタン
    &lt;/button&gt;
  );
}</code></pre>

      <h3>useReducer：複雑な状態管理</h3>
      <pre><code>import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    &lt;div&gt;
      カウント: {state.count}
      &lt;button onClick={() =&gt; dispatch({ type: 'increment' })}&gt;+&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'decrement' })}&gt;-&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'reset' })}&gt;リセット&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <h2>Hooksのルール</h2>
      <p>Hooksを使う際は以下のルールを守る必要があります：</p>
      <ol>
        <li><strong>最上位でのみ呼び出す</strong>：ループ、条件分岐、ネストした関数内で呼び出してはいけません</li>
        <li><strong>React関数内でのみ呼び出す</strong>：通常のJavaScript関数内では使用できません</li>
      </ol>

      <pre><code>// ❌ 悪い例
function BadComponent({ condition }) {
  if (condition) {
    const [count, setCount] = useState(0); // 条件分岐内でHooksを使用
  }
  // ...
}

// ✅ 良い例
function GoodComponent({ condition }) {
  const [count, setCount] = useState(0); // 最上位で呼び出し
  
  if (condition) {
    // Hooksの結果を条件分岐で使用
  }
  // ...
}</code></pre>

      <h2>まとめ</h2>
      <p>React Hooksを使うことで：</p>
      <ul>
        <li>関数コンポーネントで状態管理ができる</li>
        <li>ライフサイクルメソッドの代替として副作用を処理できる</li>
        <li>ロジックの再利用が簡単になる</li>
        <li>よりシンプルで読みやすいコードが書ける</li>
      </ul>
      <p>まずはuseStateとuseEffectから始めて、徐々に他のHooksも覚えていきましょう！</p>
    `
  },
  {
    id: '3',
    title: 'TypeScript + React：型安全なコンポーネント設計',
    description: 'TypeScriptとReactを組み合わせて、保守性の高いコンポーネントを作る方法を学びます。',
    level: 'intermediate',
    technology: 'both',
    tags: ['コンポーネント', 'Props', '型安全'],
    author: 'Full Stack Dev',
    publishedAt: '2024-01-25',
    readTime: 20,
    url: '/articles/3',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop',
    content: `
      <h2>TypeScript + Reactの強力な組み合わせ</h2>
      <p>TypeScriptとReactを組み合わせることで、型安全で保守性の高いコンポーネントを作成できます。プロップスの型定義から始めて、実践的なパターンまで学びましょう。</p>

      <h2>コンポーネントのProps型定義</h2>
      <h3>基本的なProps定義</h3>
      <pre><code>interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

function Button({ children, onClick, variant = 'primary', disabled = false }: ButtonProps) {
  return (
    &lt;button
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
    &gt;
      {children}
    &lt;/button&gt;
  );
}</code></pre>

      <h3>より複雑なProps定義</h3>
      <pre><code>interface UserCardProps {
  user: {
    id: number;
    name: string;
    email: string;
    avatar?: string;
  };
  onEdit?: (userId: number) => void;
  onDelete?: (userId: number) => void;
  showActions?: boolean;
}

function UserCard({ user, onEdit, onDelete, showActions = true }: UserCardProps) {
  return (
    &lt;div className="user-card"&gt;
      &lt;img src={user.avatar || '/default-avatar.png'} alt={user.name} /&gt;
      &lt;h3&gt;{user.name}&lt;/h3&gt;
      &lt;p&gt;{user.email}&lt;/p&gt;
      {showActions && (
        &lt;div className="actions"&gt;
          {onEdit && &lt;button onClick={() => onEdit(user.id)}&gt;編集&lt;/button&gt;}
          {onDelete && &lt;button onClick={() => onDelete(user.id)}&gt;削除&lt;/button&gt;}
        &lt;/div&gt;
      )}
    &lt;/div&gt;
  );
}</code></pre>

      <h2>ジェネリクスを活用したコンポーネント</h2>
      <pre><code>interface ListProps&lt;T&gt; {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
  emptyMessage?: string;
}

function List&lt;T&gt;({ items, renderItem, keyExtractor, emptyMessage = '項目がありません' }: ListProps&lt;T&gt;) {
  if (items.length === 0) {
    return &lt;div className="empty-state"&gt;{emptyMessage}&lt;/div&gt;;
  }

  return (
    &lt;div className="list"&gt;
      {items.map((item, index) => (
        &lt;div key={keyExtractor(item)} className="list-item"&gt;
          {renderItem(item, index)}
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}

// 使用例
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function TodoList({ todos }: { todos: Todo[] }) {
  return (
    &lt;List
      items={todos}
      keyExtractor={(todo) => todo.id}
      renderItem={(todo) => (
        &lt;div&gt;
          &lt;span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}&gt;
            {todo.title}
          &lt;/span&gt;
        &lt;/div&gt;
      )}
      emptyMessage="Todoがありません"
    /&gt;
  );
}</code></pre>

      <h2>React.FC vs 関数宣言</h2>
      <h3>React.FCを使う場合</h3>
      <pre><code>import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC&lt;GreetingProps&gt; = ({ name }) => {
  return &lt;div&gt;こんにちは、{name}さん！&lt;/div&gt;;
};</code></pre>

      <h3>関数宣言を使う場合（推奨）</h3>
      <pre><code>interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return &lt;div&gt;こんにちは、{name}さん！&lt;/div&gt;;
}</code></pre>

      <h2>イベントハンドラーの型定義</h2>
      <pre><code>interface FormProps {
  onSubmit: (data: { name: string; email: string }) => void;
}

function ContactForm({ onSubmit }: FormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent&lt;HTMLFormElement&gt;) => {
    e.preventDefault();
    onSubmit({ name, email });
  };

  const handleNameChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) => {
    setEmail(e.target.value);
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="名前"
      /&gt;
      &lt;input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="メールアドレス"
      /&gt;
      &lt;button type="submit"&gt;送信&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>

      <h2>useStateと型定義</h2>
      <pre><code>// 基本的な型推論
const [count, setCount] = useState(0); // number型として推論される
const [name, setName] = useState(''); // string型として推論される

// 明示的な型定義
interface User {
  id: number;
  name: string;
  email: string;
}

const [user, setUser] = useState&lt;User | null&gt;(null);
const [users, setUsers] = useState&lt;User[]&gt;([]);

// Union型の使用
type Status = 'loading' | 'success' | 'error';
const [status, setStatus] = useState&lt;Status&gt;('loading');</code></pre>

      <h2>カスタムHooksの型定義</h2>
      <pre><code>interface UseFetchResult&lt;T&gt; {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

function useFetch&lt;T&gt;(url: string): UseFetchResult&lt;T&gt; {
  const [data, setData] = useState&lt;T | null&gt;(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState&lt;string | null&gt;(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

// 使用例
interface Post {
  id: number;
  title: string;
  body: string;
}

function PostList() {
  const { data: posts, loading, error } = useFetch&lt;Post[]&gt;('/api/posts');

  if (loading) return &lt;div&gt;読み込み中...&lt;/div&gt;;
  if (error) return &lt;div&gt;エラー: {error}&lt;/div&gt;;
  if (!posts) return &lt;div&gt;データがありません&lt;/div&gt;;

  return (
    &lt;div&gt;
      {posts.map(post => (
        &lt;div key={post.id}&gt;
          &lt;h3&gt;{post.title}&lt;/h3&gt;
          &lt;p&gt;{post.body}&lt;/p&gt;
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>

      <h2>まとめ</h2>
      <p>TypeScript + Reactの組み合わせで得られるメリット：</p>
      <ul>
        <li>Props の型安全性により、実行時エラーを防止</li>
        <li>IDEの自動補完とリファクタリング機能の向上</li>
        <li>チーム開発でのコード品質統一</li>
        <li>保守性とスケーラビリティの向上</li>
      </ul>
      <p>最初は型定義が面倒に感じるかもしれませんが、開発が進むにつれてその恩恵を実感できるはずです！</p>
    `
  },
  {
    id: '4',
    title: 'Advanced TypeScript：ジェネリクスと条件型',
    description: 'TypeScriptの高度な型機能を使って、より柔軟で再利用可能なコードを書く方法を探ります。',
    level: 'advanced',
    technology: 'typescript',
    tags: ['ジェネリクス', '条件型', '高度な型'],
    author: 'Type Wizard',
    publishedAt: '2024-02-01',
    readTime: 25,
    url: '/articles/4',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop',
    content: `
      <h2>ジェネリクスとは</h2>
      <p>ジェネリクス（Generics）は、TypeScriptの最も強力な機能の一つです。型を変数のように扱うことで、再利用可能で型安全なコードを書くことができます。</p>

      <h2>ジェネリクスの基本</h2>
      <h3>関数でのジェネリクス</h3>
      <pre><code>// 基本的なジェネリクス関数
function identity&lt;T&gt;(arg: T): T {
  return arg;
}

// 使用例
const numberResult = identity&lt;number&gt;(42); // number型
const stringResult = identity&lt;string&gt;("Hello"); // string型
const booleanResult = identity(true); // 型推論でboolean型</code></pre>

      <h3>配列操作でのジェネリクス</h3>
      <pre><code>function getFirst&lt;T&gt;(array: T[]): T | undefined {
  return array[0];
}

function getLast&lt;T&gt;(array: T[]): T | undefined {
  return array[array.length - 1];
}

// 使用例
const numbers = [1, 2, 3, 4, 5];
const firstNumber = getFirst(numbers); // number | undefined

const strings = ["a", "b", "c"];
const lastString = getLast(strings); // string | undefined</code></pre>

      <h2>条件型の基本</h2>
      <h3>基本的な条件型</h3>
      <pre><code>// 条件型の基本構文: T extends U ? X : Y
type IsString&lt;T&gt; = T extends string ? true : false;

type Test1 = IsString&lt;string&gt;; // true
type Test2 = IsString&lt;number&gt;; // false
type Test3 = IsString&lt;"hello"&gt;; // true</code></pre>

      <h3>実用的な条件型の例</h3>
      <pre><code>// 配列の要素型を取得
type ArrayElement&lt;T&gt; = T extends (infer U)[] ? U : never;

type StringArrayElement = ArrayElement&lt;string[]&gt;; // string
type NumberArrayElement = ArrayElement&lt;number[]&gt;; // number

// 関数の戻り値型を取得
type ReturnType&lt;T&gt; = T extends (...args: any[]) => infer R ? R : never;

type FunctionReturn = ReturnType&lt;() =&gt; string&gt;; // string
type MethodReturn = ReturnType&lt;(x: number) =&gt; boolean&gt;; // boolean</code></pre>

      <h2>高度なジェネリクス活用</h2>
      <h3>複数の型パラメータ</h3>
      <pre><code>interface KeyValuePair&lt;K, V&gt; {
  key: K;
  value: V;
}

function createPair&lt;K, V&gt;(key: K, value: V): KeyValuePair&lt;K, V&gt; {
  return { key, value };
}

// 使用例
const stringNumberPair = createPair("count", 42);
const numberBooleanPair = createPair(1, true);</code></pre>

      <h3>制約のあるジェネリクス</h3>
      <pre><code>// extends を使った型制約
interface Lengthwise {
  length: number;
}

function logLength&lt;T extends Lengthwise&gt;(arg: T): T {
  console.log(arg.length);
  return arg;
}

// OK: string は length プロパティを持つ
logLength("Hello");

// OK: Array は length プロパティを持つ
logLength([1, 2, 3]);

// Error: number は length プロパティを持たない
// logLength(123);</code></pre>

      <h2>条件型の実践的活用</h2>
      <h3>Optional型の作成</h3>
      <pre><code>// 特定のプロパティをオプショナルにする
type MakeOptional&lt;T, K extends keyof T&gt; = Omit&lt;T, K&gt; & Partial&lt;Pick&lt;T, K&gt;&gt;;

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// age を オプショナルにする
type UserWithOptionalAge = MakeOptional&lt;User, 'age'&gt;;</code></pre>

      <h3>DeepReadonly型の実装</h3>
      <pre><code>type DeepReadonly&lt;T&gt; = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly&lt;T[P]&gt; : T[P];
};

interface NestedObject {
  user: {
    profile: {
      name: string;
      settings: {
        theme: string;
      };
    };
  };
}

type ReadonlyNested = DeepReadonly&lt;NestedObject&gt;;
// すべてのプロパティが readonly になる</code></pre>

      <h2>Mapped Typesとの組み合わせ</h2>
      <pre><code>// APIレスポンス型からフォーム型を生成
type FormData&lt;T&gt; = {
  [K in keyof T]: T[K] extends string | number ? T[K] : string;
};

interface ApiUser {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  preferences: {
    theme: string;
  };
}

type UserForm = FormData&lt;ApiUser&gt;;
// {
//   id: number;
//   name: string;
//   email: string;
//   createdAt: string;
//   preferences: string;
// }</code></pre>

      <h2>実践的なユーティリティ型</h2>
      <pre><code>// 非同期処理の結果型
type AsyncResult&lt;T&gt; = {
  loading: boolean;
  data: T | null;
  error: string | null;
};

// フィルター型（条件に合うプロパティのみ抽出）
type FilterByType&lt;T, U&gt; = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

interface ExampleInterface {
  name: string;
  age: number;
  isActive: boolean;
  count: number;
}

type StringKeys = FilterByType&lt;ExampleInterface, string&gt;; // "name"
type NumberKeys = FilterByType&lt;ExampleInterface, number&gt;; // "age" | "count"</code></pre>

      <h2>まとめ</h2>
      <p>ジェネリクスと条件型をマスターすることで：</p>
      <ul>
        <li>高度に再利用可能なコードが書ける</li>
        <li>型安全性を保ちながら柔軟性を実現</li>
        <li>複雑な型変換を自動化できる</li>
        <li>ライブラリの型定義が理解できるようになる</li>
      </ul>
      <p>最初は複雑に感じるかもしれませんが、段階的に学習することで、TypeScriptの真の力を活用できるようになります！</p>
    `
  },
  {
    id: '5',
    title: 'React Server Components入門',
    description: 'Next.js 13以降で導入されたServer Componentsの概念と実装方法を学びます。',
    level: 'intermediate',
    technology: 'react',
    tags: ['Server Components', 'Next.js', 'SSR'],
    author: 'Next.js Expert',
    publishedAt: '2024-02-05',
    readTime: 18,
    url: '/articles/5',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop',
    content: `
      <h2>React Server Components入門</h2>
      <p>React Server Components（RSC）は、Next.js 13で導入された革新的な機能で、サーバーサイドでReactコンポーネントをレンダリングできます。</p>
      
      <h2>Server Componentsの基本概念</h2>
      <pre><code>// app/page.tsx (Server Component)
export default function HomePage() {
  // サーバーサイドで実行される
  const data = fetch('/api/data').then(res => res.json());
  
  return (
    &lt;div&gt;
      &lt;h1&gt;ホームページ&lt;/h1&gt;
      &lt;ServerData data={data} /&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>Client Componentsとの使い分け</h2>
      <pre><code>// Client Component
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;button onClick={() => setCount(count + 1)}&gt;
      カウント: {count}
    &lt;/button&gt;
  );
}</code></pre>
    `
  },
  {
    id: '6',
    title: 'TypeScript Template Literal Types の活用',
    description: 'Template Literal Typesを使用したタイプセーフなAPI設計のテクニックを紹介します。',
    level: 'advanced',
    technology: 'typescript',
    tags: ['Template Literal', 'API設計', '型レベルプログラミング'],
    author: 'Advanced Dev',
    publishedAt: '2024-02-10',
    readTime: 22,
    url: '/articles/6',
    imageUrl: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=200&fit=crop',
    content: `
      <h2>Template Literal Typesとは</h2>
      <p>TypeScript 4.1で導入されたTemplate Literal Typesは、文字列リテラル型をより柔軟に操作できる強力な機能です。</p>
      
      <h2>基本的な使い方</h2>
      <pre><code>type Greeting = \`Hello \${string}\`;

const validGreeting: Greeting = "Hello World"; // OK
const invalidGreeting: Greeting = "Hi World"; // Error</code></pre>
      
      <h2>APIエンドポイントの型安全性</h2>
      <pre><code>type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ApiEndpoint = \`/api/\${string}\`;
type ApiCall = \`\${HttpMethod} \${ApiEndpoint}\`;

function makeApiCall(call: ApiCall) {
  console.log(call);
}

makeApiCall('GET /api/users'); // OK
makeApiCall('POST /api/posts'); // OK</code></pre>
    `
  },
  {
    id: '7',
    title: 'React Testing Library でのコンポーネントテスト',
    description: 'ユーザー中心のテストアプローチを使って、堅牢なReactアプリケーションを構築しましょう。',
    level: 'intermediate',
    technology: 'react',
    tags: ['テスト', 'Testing Library', 'Jest'],
    author: 'Test Engineer',
    publishedAt: '2024-02-15',
    readTime: 16,
    url: '/articles/7',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop',
    content: `
      <h2>React Testing Libraryとは</h2>
      <p>React Testing Libraryは、ユーザーの視点からコンポーネントをテストすることに焦点を当てたテストライブラリです。</p>
      
      <h2>基本的なテスト</h2>
      <pre><code>import { render, screen } from '@testing-library/react';
import Button from './Button';

test('ボタンがクリックされると文字が変わる', () => {
  render(&lt;Button /&gt;);
  
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('クリック前');
  
  fireEvent.click(button);
  expect(button).toHaveTextContent('クリック後');
});</code></pre>
    `
  },
  {
    id: '8',
    title: 'TypeScript 5.0 新機能解説',
    description: 'TypeScript 5.0で追加された新機能と改善点について詳しく解説します。',
    level: 'beginner',
    technology: 'typescript',
    tags: ['新機能', 'アップデート', 'TypeScript 5.0'],
    author: 'TS Evangelist',
    publishedAt: '2024-02-20',
    readTime: 12,
    url: '/articles/8',
    imageUrl: 'https://images.unsplash.com/photo-1537884944318-390069bb8665?w=400&h=200&fit=crop',
    content: `
      <h2>TypeScript 5.0の新機能</h2>
      <p>TypeScript 5.0では、多くの新機能と改善が追加されました。特に注目すべき機能を紹介します。</p>
      
      <h2>Decorators</h2>
      <pre><code>function logged(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function(...args: any[]) {
    console.log(\`\${propertyKey} was called\`);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @logged
  add(a: number, b: number) {
    return a + b;
  }
}</code></pre>
    `
  },
  {
    id: '9',
    title: 'React パフォーマンス最適化の実践',
    description: 'useMemo、useCallback、React.memoなどを使ったパフォーマンス改善のテクニックを学びます。',
    level: 'advanced',
    technology: 'react',
    tags: ['パフォーマンス', 'useMemo', 'useCallback', '最適化'],
    author: 'Performance Expert',
    publishedAt: '2024-02-25',
    readTime: 28,
    url: '/articles/9',
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop',
    content: `
      <h2>Reactパフォーマンス最適化</h2>
      <p>Reactアプリケーションのパフォーマンスを最適化するための実践的な手法を学びます。</p>
      
      <h2>useMemoの活用</h2>
      <pre><code>const ExpensiveComponent = ({ items }) => {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);
  
  return &lt;div&gt;{expensiveValue}&lt;/div&gt;;
};</code></pre>
      
      <h2>useCallbackの最適化</h2>
      <pre><code>const ParentComponent = ({ users }) => {
  const handleUserClick = useCallback((userId) => {
    console.log('User clicked:', userId);
  }, []);
  
  return (
    &lt;div&gt;
      {users.map(user => (
        &lt;UserCard 
          key={user.id} 
          user={user} 
          onClick={handleUserClick} 
        /&gt;
      ))}
    &lt;/div&gt;
  );
};</code></pre>
    `
  },
  {
    id: '10',
    title: 'TypeScript + React で作る堅牢なフォーム',
    description: 'react-hook-formとzodを組み合わせて、型安全で使いやすいフォームを実装する方法を紹介します。',
    level: 'advanced',
    technology: 'both',
    tags: ['フォーム', 'react-hook-form', 'zod', 'バリデーション'],
    author: 'Form Master',
    publishedAt: '2024-03-01',
    readTime: 30,
    url: '/articles/10',
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=200&fit=crop',
    content: `
      <h2>TypeScript + React で堅牢なフォーム</h2>
      <p>react-hook-formとzodを組み合わせることで、型安全で保守性の高いフォームを作成できます。</p>
      
      <h2>Zodスキーマの定義</h2>
      <pre><code>import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(1, '名前は必須です'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  age: z.number().min(0).max(120),
});

type UserFormData = z.infer&lt;typeof userSchema&gt;;</code></pre>
      
      <h2>react-hook-formとの統合</h2>
      <pre><code>import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

function UserForm() {
  const { register, handleSubmit, formState: { errors } } = useForm&lt;UserFormData&gt;({
    resolver: zodResolver(userSchema),
  });
  
  const onSubmit = (data: UserFormData) => {
    console.log(data);
  };
  
  return (
    &lt;form onSubmit={handleSubmit(onSubmit)}&gt;
      &lt;input {...register('name')} /&gt;
      {errors.name && &lt;p&gt;{errors.name.message}&lt;/p&gt;}
    &lt;/form&gt;
  );
}</code></pre>
    `
  }
];