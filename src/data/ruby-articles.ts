import { Article } from '@/types/article';

export const rubyArticles: Article[] = [
  {
    id: '15',
    title: 'Ruby on Rails入門：Webアプリケーション開発の基礎',
    description: 'Rubyの基本からRailsを使ったWebアプリケーション開発まで、初心者向けに解説します。',
    level: 'beginner',
    technology: 'ruby',
    tags: ['Ruby', 'Rails', 'Web開発', 'MVC'],
    author: 'Rails Developer',
    publishedAt: '2024-03-18',
    readTime: 20,
    url: '/articles/15',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop',
    content: `
      <h2>Rubyとは</h2>
      <p>Rubyは、まつもとゆきひろ氏によって開発された動的プログラミング言語です。「プログラマーが幸せになる」ことを重視した設計で、読みやすく書きやすいコードが特徴です。</p>
      <h2>Ruby基本構文</h2>
      <h3>変数とデータ型</h3>
      <pre><code># 変数（型宣言不要）
name = "Ruby"
age = 29
price = 99.99
is_active = true
# 配列
languages = ["Ruby", "Python", "JavaScript"]
numbers = [1, 2, 3, 4, 5]
# ハッシュ
person = {
  name: "田中太郎",
  age: 30,
  city: "東京"
}
# シンボル
status = :active
colors = [:red, :green, :blue]</code></pre>
      <h3>メソッドとブロック</h3>
      <pre><code># メソッド定義
def greet(name)
  "こんにちは、#{name}さん！"
end
def calculate(x, y, operation = :add)
  case operation
  when :add
    x + y
  when :subtract
    x - y
  when :multiply
    x * y
  when :divide
    x / y
  else
    "未対応の操作です"
  end
end
# ブロックの使用
numbers = [1, 2, 3, 4, 5]
# each
numbers.each do |num|
  puts "数値: #{num}"
end
# map
doubled = numbers.map { |num| num * 2 }
# select
even_numbers = numbers.select { |num| num.even? }</code></pre>
      <h2>クラスとオブジェクト</h2>
      <pre><code>class Person
  # attr_accessor で getter/setter を自動生成
  attr_accessor :name, :age
  attr_reader :id  # getter のみ
  # クラス変数
  @@count = 0
  def initialize(name, age)
    @name = name
    @age = age
    @id = generate_id
    @@count += 1
  end
  def introduce
    "こんにちは、#{@name}です。#{@age}歳です。"
  end
  def adult?
    @age >= 18
  end
  # クラスメソッド
  def self.count
    @@count
  end
  private
  def generate_id
    Time.now.to_i + rand(1000)
  end
end
# 継承
class Student < Person
  attr_accessor :school, :grade
  def initialize(name, age, school, grade)
    super(name, age)
    @school = school
    @grade = grade
  end
  def introduce
    super + " #{@school}の#{@grade}年生です。"
  end
  def study(subject)
    "#{@name}が#{subject}を勉強しています。"
  end
end</code></pre>
      <h2>Ruby on Railsの基本</h2>
      <h3>新しいアプリケーションの作成</h3>
      <pre><code># Rails アプリケーションの作成
rails new blog_app
# データベースの作成
rails db:create
# 開発サーバーの起動
rails server</code></pre>
      <h3>MVCアーキテクチャ</h3>
      <h4>モデル（Model）</h4>
      <pre><code># app/models/post.rb
class Post < ApplicationRecord
  validates :title, presence: true, length: { minimum: 5 }
  validates :content, presence: true, length: { minimum: 10 }
  scope :published, -> { where(published: true) }
  scope :recent, -> { order(created_at: :desc) }
  def summary
    content.truncate(100)
  end
  def published?
    published
  end
end</code></pre>
      <h4>コントローラー（Controller）</h4>
      <pre><code># app/controllers/posts_controller.rb
class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  def index
    @posts = Post.published.recent.page(params[:page])
  end
  def show
  end
  def new
    @post = Post.new
  end
  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to @post, notice: '投稿が作成されました。'
    else
      render :new
    end
  end
  def edit
  end
  def update
    if @post.update(post_params)
      redirect_to @post, notice: '投稿が更新されました。'
    else
      render :edit
    end
  end
  def destroy
    @post.destroy
    redirect_to posts_url, notice: '投稿が削除されました。'
  end
  private
  def set_post
    @post = Post.find(params[:id])
  end
  def post_params
    params.require(:post).permit(:title, :content, :published)
  end
end</code></pre>
      <h4>ビュー（View）</h4>
      <pre><code>&lt;!-- app/views/posts/index.html.erb --&gt;
&lt;h1&gt;ブログ投稿一覧&lt;/h1&gt;
&lt;%= link_to '新しい投稿', new_post_path, class: 'btn btn-primary' %&gt;
&lt;div class="posts"&gt;
  &lt;% @posts.each do |post| %&gt;
    &lt;div class="post-card"&gt;
      &lt;h2&gt;&lt;%= link_to post.title, post_path(post) %&gt;&lt;/h2&gt;
      &lt;p&gt;&lt;%= post.summary %&gt;&lt;/p&gt;
      &lt;small&gt;
        投稿日: &lt;%= post.created_at.strftime("%Y年%m月%d日") %&gt;
      &lt;/small&gt;
    &lt;/div&gt;
  &lt;% end %&gt;
&lt;/div&gt;
&lt;!-- app/views/posts/_form.html.erb --&gt;
&lt;%= form_with model: post, local: true do |form| %&gt;
  &lt;% if post.errors.any? %&gt;
    &lt;div id="error_explanation"&gt;
      &lt;h2&gt;&lt;%= pluralize(post.errors.count, "error") %&gt; がありました:&lt;/h2&gt;
      &lt;ul&gt;
        &lt;% post.errors.full_messages.each do |message| %&gt;
          &lt;li&gt;&lt;%= message %&gt;&lt;/li&gt;
        &lt;% end %&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;% end %&gt;
  &lt;div class="field"&gt;
    &lt;%= form.label :title, 'タイトル' %&gt;
    &lt;%= form.text_field :title %&gt;
  &lt;/div&gt;
  &lt;div class="field"&gt;
    &lt;%= form.label :content, '内容' %&gt;
    &lt;%= form.text_area :content, rows: 10 %&gt;
  &lt;/div&gt;
  &lt;div class="field"&gt;
    &lt;%= form.check_box :published %&gt;
    &lt;%= form.label :published, '公開する' %&gt;
  &lt;/div&gt;
  &lt;div class="actions"&gt;
    &lt;%= form.submit %&gt;
  &lt;/div&gt;
&lt;% end %&gt;</code></pre>
      <h2>データベースマイグレーション</h2>
      <pre><code># マイグレーションファイルの生成
rails generate migration CreatePosts title:string content:text published:boolean
# マイグレーションファイル
class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.boolean :published, default: false
      t.timestamps
    end
    add_index :posts, :published
    add_index :posts, :created_at
  end
end
# マイグレーションの実行
rails db:migrate</code></pre>
      <h2>まとめ</h2>
      <p>Ruby on Railsを学ぶことで：</p>
      <ul>
        <li>素早いWebアプリケーション開発</li>
        <li>「設定より規約」による効率的な開発</li>
        <li>MVCアーキテクチャの理解</li>
        <li>RESTfulな設計の習得</li>
      </ul>
      <p>Railsの「魔法」を理解して、生産性の高いWeb開発を始めましょう！</p>
    `
  }
];