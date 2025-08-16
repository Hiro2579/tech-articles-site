import { Article } from '@/types/article';

export const javaArticles: Article[] = [
  {
    id: '11',
    title: 'Java基礎：オブジェクト指向プログラミング入門',
    description: 'Javaの基本構文からオブジェクト指向の概念まで、初心者向けに分かりやすく解説します。',
    level: 'beginner',
    technology: 'java',
    tags: ['基礎', 'OOP', 'クラス', 'オブジェクト指向'],
    author: 'Java Expert',
    publishedAt: '2024-03-05',
    readTime: 15,
    url: '/articles/11',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=200&fit=crop',
    content: `
      <h2>Javaとは</h2>
      <p>Javaは1995年にSun Microsystems（現Oracle）が開発したオブジェクト指向プログラミング言語です。「Write Once, Run Anywhere」の哲学のもと、プラットフォームに依存しないアプリケーション開発が可能です。</p>

      <h2>基本的な構文</h2>
      <h3>Hello Worldプログラム</h3>
      <pre><code>public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>

      <h3>変数の宣言</h3>
      <pre><code>// 基本データ型
int number = 42;
double price = 99.99;
boolean isActive = true;
char grade = 'A';

// 参照型
String name = "Java";
String[] languages = {"Java", "Python", "C#"};
ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;();</code></pre>

      <h2>クラスとオブジェクト</h2>
      <h3>クラスの定義</h3>
      <pre><code>public class Person {
    // フィールド（属性）
    private String name;
    private int age;
    
    // コンストラクタ
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // メソッド
    public void introduce() {
        System.out.println("こんにちは、" + name + "です。");
        System.out.println("年齢は" + age + "歳です。");
    }
    
    // ゲッター・セッター
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}</code></pre>

      <h3>オブジェクトの作成と使用</h3>
      <pre><code>public class Main {
    public static void main(String[] args) {
        // オブジェクトの作成
        Person person1 = new Person("田中太郎", 25);
        Person person2 = new Person("佐藤花子", 30);
        
        // メソッドの呼び出し
        person1.introduce();
        person2.introduce();
    }
}</code></pre>

      <h2>継承</h2>
      <pre><code>// 基底クラス
public class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void eat() {
        System.out.println(name + "が食べています。");
    }
}

// 派生クラス
public class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }
    
    public void bark() {
        System.out.println(name + "が吠えています：ワンワン！");
    }
    
    @Override
    public void eat() {
        System.out.println(name + "がドッグフードを食べています。");
    }
}</code></pre>

      <h2>まとめ</h2>
      <p>Javaの基本を学ぶことで：</p>
      <ul>
        <li>オブジェクト指向プログラミングの概念を理解</li>
        <li>大規模なアプリケーション開発の基礎を習得</li>
        <li>エンタープライズ開発への第一歩</li>
        <li>Android開発の土台作り</li>
      </ul>
      <p>まずは基本的なクラスとオブジェクトから始めて、徐々に高度な機能を学んでいきましょう！</p>
    `
  },
  {
    id: '12',
    title: 'Java Spring Boot入門：Web APIの構築',
    description: 'Spring Bootを使用してRESTful Web APIを構築する方法を学びます。',
    level: 'intermediate',
    technology: 'java',
    tags: ['Spring Boot', 'REST API', 'Web開発'],
    author: 'Spring Master',
    publishedAt: '2024-03-10',
    readTime: 22,
    url: '/articles/12',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
    content: `
      <h2>Spring Bootとは</h2>
      <p>Spring Bootは、Springフレームワークを使用したアプリケーションを簡単に構築・実行できるようにするプロジェクトです。設定の自動化により、開発者は複雑な設定ファイルを書くことなく、すぐにアプリケーション開発に集中できます。</p>

      <h2>プロジェクトのセットアップ</h2>
      <h3>依存関係の追加（pom.xml）</h3>
      <pre><code>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;com.h2database&lt;/groupId&gt;
        &lt;artifactId&gt;h2&lt;/artifactId&gt;
        &lt;scope&gt;runtime&lt;/scope&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;</code></pre>

      <h2>エンティティクラスの作成</h2>
      <pre><code>@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    // コンストラクタ
    public User() {}
    
    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }
    
    // ゲッター・セッター
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}</code></pre>

      <h2>リポジトリインターフェース</h2>
      <pre><code>@Repository
public interface UserRepository extends JpaRepository&lt;User, Long&gt; {
    Optional&lt;User&gt; findByEmail(String email);
    List&lt;User&gt; findByNameContaining(String name);
}</code></pre>

      <h2>RESTコントローラーの実装</h2>
      <pre><code>@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;
    
    // 全ユーザー取得
    @GetMapping
    public List&lt;User&gt; getAllUsers() {
        return userRepository.findAll();
    }
    
    // ID指定でユーザー取得
    @GetMapping("/{id}")
    public ResponseEntity&lt;User&gt; getUserById(@PathVariable Long id) {
        Optional&lt;User&gt; user = userRepository.findById(id);
        return user.map(ResponseEntity::ok)
                  .orElse(ResponseEntity.notFound().build());
    }
    
    // 新しいユーザー作成
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }
    
    // ユーザー更新
    @PutMapping("/{id}")
    public ResponseEntity&lt;User&gt; updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        Optional&lt;User&gt; optionalUser = userRepository.findById(id);
        
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setName(userDetails.getName());
            user.setEmail(userDetails.getEmail());
            return ResponseEntity.ok(userRepository.save(user));
        }
        
        return ResponseEntity.notFound().build();
    }
    
    // ユーザー削除
    @DeleteMapping("/{id}")
    public ResponseEntity&lt;Void&gt; deleteUser(@PathVariable Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}</code></pre>

      <h2>アプリケーション設定</h2>
      <h3>application.properties</h3>
      <pre><code># H2データベース設定
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# JPA設定
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true

# H2コンソール有効化
spring.h2.console.enabled=true</code></pre>

      <h2>まとめ</h2>
      <p>Spring Bootを使用することで：</p>
      <ul>
        <li>簡単にRESTful APIを構築</li>
        <li>データベース操作の自動化</li>
        <li>設定の簡素化</li>
        <li>本格的なWebアプリケーション開発</li>
      </ul>
      <p>この基礎を元に、セキュリティ、テスト、デプロイなどの高度な機能も学んでいきましょう！</p>
    `
  }
];