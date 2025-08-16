import { Article } from '@/types/article';

export const csharpArticles: Article[] = [
  {
    id: '13',
    title: 'C# .NET入門：モダンな言語機能とLINQ',
    description: 'C#の基本からLINQまで、.NET開発の基礎を分かりやすく解説します。',
    level: 'beginner',
    technology: 'csharp',
    tags: ['C#', '.NET', 'LINQ', '基礎'],
    author: '.NET Developer',
    publishedAt: '2024-03-12',
    readTime: 18,
    url: '/articles/13',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop',
    content: `
      <h2>C#とは</h2>
      <p>C#は、Microsoftが開発したオブジェクト指向プログラミング言語です。.NETプラットフォーム上で動作し、型安全で高性能なアプリケーションを開発できます。</p>

      <h2>基本的な構文</h2>
      <h3>Hello Worldプログラム</h3>
      <pre><code>using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            Console.ReadKey();
        }
    }
}</code></pre>

      <h3>変数と型</h3>
      <pre><code>// 基本型
int number = 42;
double price = 99.99;
bool isActive = true;
string name = "C#";

// var キーワード（型推論）
var city = "Tokyo";  // string型として推論
var count = 10;      // int型として推論

// Nullable型
int? nullableInt = null;
string? nullableString = null;</code></pre>

      <h2>クラスとオブジェクト</h2>
      <h3>プロパティを使ったクラス</h3>
      <pre><code>public class Person
{
    // 自動実装プロパティ
    public string Name { get; set; }
    public int Age { get; set; }
    
    // 読み取り専用プロパティ
    public string FullName { get; private set; }
    
    // コンストラクタ
    public Person(string firstName, string lastName, int age)
    {
        Name = firstName;
        Age = age;
        FullName = $"{firstName} {lastName}";
    }
    
    // メソッド
    public void Introduce()
    {
        Console.WriteLine($"こんにちは、{FullName}です。{Age}歳です。");
    }
    
    // 演算子オーバーロード
    public static bool operator >(Person p1, Person p2)
    {
        return p1.Age > p2.Age;
    }
    
    public static bool operator <(Person p1, Person p2)
    {
        return p1.Age < p2.Age;
    }
}</code></pre>

      <h2>コレクションとLINQ</h2>
      <h3>基本的なコレクション</h3>
      <pre><code>// List&lt;T&gt;
var numbers = new List&lt;int&gt; { 1, 2, 3, 4, 5 };
var names = new List&lt;string&gt; { "Alice", "Bob", "Charlie" };

// Dictionary&lt;TKey, TValue&gt;
var scores = new Dictionary&lt;string, int&gt;
{
    ["Alice"] = 95,
    ["Bob"] = 87,
    ["Charlie"] = 92
};</code></pre>

      <h3>LINQ クエリ</h3>
      <pre><code>var numbers = new[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// メソッド構文
var evenNumbers = numbers.Where(n => n % 2 == 0).ToList();
var doubled = numbers.Select(n => n * 2).ToArray();
var sum = numbers.Sum();
var average = numbers.Average();

// クエリ構文
var query = from n in numbers
            where n > 5
            select n * n;

var result = query.ToList(); // [36, 49, 64, 81, 100]</code></pre>

      <h3>複雑なLINQクエリ</h3>
      <pre><code>public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public List&lt;string&gt; Subjects { get; set; }
    public Dictionary&lt;string, int&gt; Grades { get; set; }
}

var students = new List&lt;Student&gt;
{
    new Student 
    { 
        Name = "田中", 
        Age = 20, 
        Subjects = new List&lt;string&gt; { "数学", "英語" },
        Grades = new Dictionary&lt;string, int&gt; { ["数学"] = 85, ["英語"] = 92 }
    },
    new Student 
    { 
        Name = "佐藤", 
        Age = 22, 
        Subjects = new List&lt;string&gt; { "物理", "化学" },
        Grades = new Dictionary&lt;string, int&gt; { ["物理"] = 78, ["化学"] = 88 }
    }
};

// 複雑なクエリ
var topStudents = students
    .Where(s => s.Grades.Values.Average() >= 80)
    .OrderByDescending(s => s.Grades.Values.Average())
    .Select(s => new 
    {
        Name = s.Name,
        Average = s.Grades.Values.Average(),
        TopSubject = s.Grades.OrderByDescending(g => g.Value).First().Key
    })
    .ToList();</code></pre>

      <h2>非同期プログラミング</h2>
      <pre><code>public class DataService
{
    private static readonly HttpClient httpClient = new HttpClient();
    
    public async Task&lt;string&gt; GetDataAsync(string url)
    {
        try
        {
            var response = await httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadAsStringAsync();
        }
        catch (HttpRequestException ex)
        {
            Console.WriteLine($"エラー: {ex.Message}");
            return null;
        }
    }
    
    public async Task ProcessMultipleUrlsAsync(string[] urls)
    {
        var tasks = urls.Select(url => GetDataAsync(url));
        var results = await Task.WhenAll(tasks);
        
        foreach (var result in results.Where(r => r != null))
        {
            Console.WriteLine($"データ取得完了: {result.Length} characters");
        }
    }
}</code></pre>

      <h2>まとめ</h2>
      <p>C#を学ぶことで：</p>
      <ul>
        <li>型安全で高性能なアプリケーション開発</li>
        <li>LINQによる強力なデータ操作</li>
        <li>非同期プログラミングによる効率的な処理</li>
        <li>Webアプリ、デスクトップアプリ、ゲーム開発</li>
      </ul>
      <p>C#の豊富な機能を活用して、様々なアプリケーションを開発してみましょう！</p>
    `
  },
  {
    id: '14',
    title: 'ASP.NET Core Web API開発：実践的なアプローチ',
    description: 'ASP.NET Coreを使用して本格的なWeb APIを構築する方法を実践的に学びます。',
    level: 'intermediate',
    technology: 'csharp',
    tags: ['ASP.NET Core', 'Web API', 'Entity Framework'],
    author: 'ASP.NET Expert',
    publishedAt: '2024-03-15',
    readTime: 25,
    url: '/articles/14',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop',
    content: `
      <h2>ASP.NET Core Web APIとは</h2>
      <p>ASP.NET Core Web APIは、RESTful Webサービスを構築するためのフレームワークです。クロスプラットフォーム対応で、高性能なWebアプリケーションを開発できます。</p>

      <h2>プロジェクトのセットアップ</h2>
      <h3>依存関係とパッケージ</h3>
      <pre><code>&lt;PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="7.0.0" /&gt;
&lt;PackageReference Include="Microsoft.EntityFrameworkCore.Tools" Version="7.0.0" /&gt;
&lt;PackageReference Include="Microsoft.AspNetCore.Authentication.JwtBearer" Version="7.0.0" /&gt;
&lt;PackageReference Include="Swashbuckle.AspNetCore" Version="6.4.0" /&gt;</code></pre>

      <h2>モデルとDbContext</h2>
      <pre><code>public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public int CategoryId { get; set; }
    public Category Category { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List&lt;Product&gt; Products { get; set; } = new List&lt;Product&gt;();
}

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions&lt;ApplicationDbContext&gt; options)
        : base(options)
    {
    }

    public DbSet&lt;Product&gt; Products { get; set; }
    public DbSet&lt;Category&gt; Categories { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity&lt;Product&gt;(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Name).IsRequired().HasMaxLength(100);
            entity.Property(e => e.Price).HasColumnType("decimal(18,2)");
            
            entity.HasOne(p => p.Category)
                  .WithMany(c => c.Products)
                  .HasForeignKey(p => p.CategoryId);
        });
    }
}</code></pre>

      <h2>DTOとマッピング</h2>
      <pre><code>public class ProductDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public string CategoryName { get; set; }
}

public class CreateProductDto
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; }
    
    [StringLength(500)]
    public string Description { get; set; }
    
    [Range(0.01, double.MaxValue)]
    public decimal Price { get; set; }
    
    [Required]
    public int CategoryId { get; set; }
}</code></pre>

      <h2>コントローラーの実装</h2>
      <pre><code>[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger&lt;ProductsController&gt; _logger;

    public ProductsController(ApplicationDbContext context, ILogger&lt;ProductsController&gt; logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpGet]
    public async Task&lt;ActionResult&lt;IEnumerable&lt;ProductDto&gt;&gt;&gt; GetProducts(
        [FromQuery] int page = 1, 
        [FromQuery] int pageSize = 10)
    {
        var products = await _context.Products
            .Include(p => p.Category)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .Select(p => new ProductDto
            {
                Id = p.Id,
                Name = p.Name,
                Description = p.Description,
                Price = p.Price,
                CategoryName = p.Category.Name
            })
            .ToListAsync();

        return Ok(products);
    }

    [HttpGet("{id}")]
    public async Task&lt;ActionResult&lt;ProductDto&gt;&gt; GetProduct(int id)
    {
        var product = await _context.Products
            .Include(p => p.Category)
            .FirstOrDefaultAsync(p => p.Id == id);

        if (product == null)
        {
            return NotFound();
        }

        var productDto = new ProductDto
        {
            Id = product.Id,
            Name = product.Name,
            Description = product.Description,
            Price = product.Price,
            CategoryName = product.Category.Name
        };

        return Ok(productDto);
    }

    [HttpPost]
    public async Task&lt;ActionResult&lt;ProductDto&gt;&gt; CreateProduct(CreateProductDto createProductDto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var category = await _context.Categories.FindAsync(createProductDto.CategoryId);
        if (category == null)
        {
            return BadRequest("指定されたカテゴリが存在しません");
        }

        var product = new Product
        {
            Name = createProductDto.Name,
            Description = createProductDto.Description,
            Price = createProductDto.Price,
            CategoryId = createProductDto.CategoryId,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        _context.Products.Add(product);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, new ProductDto
        {
            Id = product.Id,
            Name = product.Name,
            Description = product.Description,
            Price = product.Price,
            CategoryName = category.Name
        });
    }

    [HttpPut("{id}")]
    public async Task&lt;IActionResult&gt; UpdateProduct(int id, CreateProductDto updateProductDto)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null)
        {
            return NotFound();
        }

        product.Name = updateProductDto.Name;
        product.Description = updateProductDto.Description;
        product.Price = updateProductDto.Price;
        product.CategoryId = updateProductDto.CategoryId;
        product.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task&lt;IActionResult&gt; DeleteProduct(int id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null)
        {
            return NotFound();
        }

        _context.Products.Remove(product);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}</code></pre>

      <h2>Startup設定</h2>
      <pre><code>public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // サービスの登録
        builder.Services.AddDbContext&lt;ApplicationDbContext&gt;(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        // CORS設定
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowSpecificOrigin",
                builder =>
                {
                    builder.WithOrigins("http://localhost:3000")
                           .AllowAnyHeader()
                           .AllowAnyMethod();
                });
        });

        var app = builder.Build();

        // ミドルウェアの設定
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();
        app.UseCors("AllowSpecificOrigin");
        app.UseAuthorization();
        app.MapControllers();

        app.Run();
    }
}</code></pre>

      <h2>まとめ</h2>
      <p>ASP.NET Core Web APIで：</p>
      <ul>
        <li>効率的なRESTful API開発</li>
        <li>Entity Frameworkによるデータアクセス</li>
        <li>自動バリデーションとエラーハンドリング</li>
        <li>Swaggerによる自動API文書化</li>
      </ul>
      <p>これらの基礎を元に、認証、ログ、テストなどの機能も追加していきましょう！</p>
    `
  }
];