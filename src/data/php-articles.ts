import { Article } from '@/types/article';

export const phpArticles: Article[] = [
  {
    id: '16',
    title: 'PHP Laravel入門：エレガントなWebアプリケーション開発',
    description: 'PHPの基本からLaravelフレームワークを使った開発まで、実践的に学びます。',
    level: 'beginner',
    technology: 'php',
    tags: ['PHP', 'Laravel', 'Eloquent', 'Blade'],
    author: 'Laravel Expert',
    publishedAt: '2024-03-20',
    readTime: 22,
    url: '/articles/16',
    imageUrl: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=400&h=200&fit=crop',
    content: `
      <h2>PHPとは</h2>
      <p>PHPは、Web開発に特化したサーバーサイドスクリプト言語です。シンプルな構文で学習しやすく、多くのWebサイトで使用されています。Laravelは、PHPの最も人気のあるフレームワークの一つです。</p>
      <h2>PHP基本構文</h2>
      <h3>変数と配列</h3>
      <pre><code>&lt;?php
// 変数（$記号で始まる）
$name = "PHP";
$age = 28;
$price = 99.99;
$isActive = true;
// 配列
$languages = ["PHP", "JavaScript", "Python"];
$numbers = [1, 2, 3, 4, 5];
// 連想配列
$person = [
    "name" => "田中太郎",
    "age" => 30,
    "city" => "東京"
];
// 多次元配列
$users = [
    ["name" => "Alice", "email" => "alice@example.com"],
    ["name" => "Bob", "email" => "bob@example.com"]
];
?&gt;</code></pre>
      <h3>関数とクラス</h3>
      <pre><code>&lt;?php
// 関数定義
function greet($name, $greeting = "こんにちは") {
    return $greeting . "、" . $name . "さん！";
}
// クラス定義
class Person {
    private $name;
    private $age;
    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
    public function getName() {
        return $this->name;
    }
    public function getAge() {
        return $this->age;
    }
    public function introduce() {
        return "こんにちは、{$this->name}です。{$this->age}歳です。";
    }
    public function isAdult() {
        return $this->age >= 18;
    }
}
// 継承
class Student extends Person {
    private $school;
    private $grade;
    public function __construct($name, $age, $school, $grade) {
        parent::__construct($name, $age);
        $this->school = $school;
        $this->grade = $grade;
    }
    public function introduce() {
        return parent::introduce() . " {$this->school}の{$this->grade}年生です。";
    }
}
?&gt;</code></pre>
      <h2>Laravelの基本</h2>
      <h3>プロジェクトセットアップ</h3>
      <pre><code># Composer経由でLaravelをインストール
composer create-project laravel/laravel blog
# 開発サーバーの起動
php artisan serve
# 環境設定
cp .env.example .env
php artisan key:generate</code></pre>
      <h2>Eloquent ORM</h2>
      <h3>モデルの作成</h3>
      <pre><code># モデル、マイグレーション、コントローラーを一括作成
php artisan make:model Post -mcr</code></pre>
      <h4>モデルクラス</h4>
      <pre><code>&lt;?php
// app/Models/Post.php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Post extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'title',
        'content',
        'published',
        'user_id'
    ];
    protected $casts = [
        'published' => 'boolean',
        'published_at' => 'datetime'
    ];
    // リレーション
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
    // スコープ
    public function scopePublished($query)
    {
        return $query->where('published', true);
    }
    public function scopeRecent($query)
    {
        return $query->orderBy('created_at', 'desc');
    }
    // アクセサ
    public function getSummaryAttribute()
    {
        return substr($this->content, 0, 100) . '...';
    }
    // ミューテータ
    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = ucfirst($value);
    }
}
?&gt;</code></pre>
      <h3>マイグレーション</h3>
      <pre><code>&lt;?php
// database/migrations/create_posts_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
return new class extends Migration
{
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->boolean('published')->default(false);
            $table->timestamp('published_at')->nullable();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->timestamps();
            $table->softDeletes();
            
            $table->index(['published', 'created_at']);
        });
    }
    public function down()
    {
        Schema::dropIfExists('posts');
    }
};
?&gt;</code></pre>
      <h2>コントローラーとルーティング</h2>
      <h3>コントローラー</h3>
      <pre><code>&lt;?php
// app/Http/Controllers/PostController.php
namespace App\Http\Controllers;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('user')
            ->published()
            ->recent()
            ->paginate(10);
        return view('posts.index', compact('posts'));
    }
    public function show(Post $post)
    {
        // ポリシーでアクセス制御
        $this->authorize('view', $post);
        
        $post->load(['user', 'comments.user', 'tags']);
        
        return view('posts.show', compact('post'));
    }
    public function create()
    {
        $this->authorize('create', Post::class);
        
        return view('posts.create');
    }
    public function store(Request $request)
    {
        $this->authorize('create', Post::class);
        
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string|min:10',
            'published' => 'boolean'
        ]);
        $post = Auth::user()->posts()->create($validated);
        return redirect()->route('posts.show', $post)
            ->with('success', '投稿が作成されました。');
    }
    public function edit(Post $post)
    {
        $this->authorize('update', $post);
        
        return view('posts.edit', compact('post'));
    }
    public function update(Request $request, Post $post)
    {
        $this->authorize('update', $post);
        
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string|min:10',
            'published' => 'boolean'
        ]);
        $post->update($validated);
        return redirect()->route('posts.show', $post)
            ->with('success', '投稿が更新されました。');
    }
    public function destroy(Post $post)
    {
        $this->authorize('delete', $post);
        
        $post->delete();
        return redirect()->route('posts.index')
            ->with('success', '投稿が削除されました。');
    }
}
?&gt;</code></pre>
      <h3>ルーティング</h3>
      <pre><code>&lt;?php
// routes/web.php
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
Route::get('/', function () {
    return view('welcome');
});
// 認証が必要なルート
Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('posts', PostController::class);
});
// API ルート
Route::prefix('api')->middleware('api')->group(function () {
    Route::apiResource('posts', PostController::class);
});
// カスタムルート
Route::get('/posts/search', [PostController::class, 'search'])->name('posts.search');
Route::post('/posts/{post}/publish', [PostController::class, 'publish'])->name('posts.publish');
?&gt;</code></pre>
      <h2>Bladeテンプレート</h2>
      <pre><code>&lt;!-- resources/views/posts/index.blade.php --&gt;
@extends('layouts.app')
@section('title', 'ブログ投稿一覧')
@section('content')
&lt;div class="container"&gt;
    &lt;div class="row"&gt;
        &lt;div class="col-md-12"&gt;
            &lt;h1&gt;ブログ投稿一覧&lt;/h1&gt;
            
            @can('create', App\Models\Post::class)
                &lt;a href="{{ route('posts.create') }}" class="btn btn-primary mb-3"&gt;
                    新しい投稿
                &lt;/a&gt;
            @endcan
            @if(session('success'))
                &lt;div class="alert alert-success"&gt;
                    {{ session('success') }}
                &lt;/div&gt;
            @endif
            @forelse($posts as $post)
                &lt;div class="card mb-3"&gt;
                    &lt;div class="card-body"&gt;
                        &lt;h5 class="card-title"&gt;
                            &lt;a href="{{ route('posts.show', $post) }}"&gt;
                                {{ $post->title }}
                            &lt;/a&gt;
                        &lt;/h5&gt;
                        &lt;p class="card-text"&gt;{{ $post->summary }}&lt;/p&gt;
                        &lt;small class="text-muted"&gt;
                            投稿者: {{ $post->user->name }} | 
                            投稿日: {{ $post->created_at->format('Y年m月d日') }}
                        &lt;/small&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            @empty
                &lt;p&gt;投稿がありません。&lt;/p&gt;
            @endforelse
            {{ $posts->links() }}
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
@endsection</code></pre>
      <h2>まとめ</h2>
      <p>PHP Laravelを学ぶことで：</p>
      <ul>
        <li>エレガントで表現力豊かなコード</li>
        <li>Eloquent ORMによる直感的なデータベース操作</li>
        <li>Bladeテンプレートによる効率的なUI作成</li>
        <li>豊富な機能による高速開発</li>
      </ul>
      <p>Laravelの「美しいコード」を書いて、効率的なWeb開発を始めましょう！</p>
    `
  }
];