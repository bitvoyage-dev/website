// blog-pages.jsx — ブログ一覧 & 記事詳細

function BlogPage() {
  useRevealOnScroll();
  const [category, setCategory] = React.useState("すべて");
  const categories = ["すべて", "業務改善", "DX", "可視化", "組織設計"];
  const posts = window.SAMPLE_POSTS;
  const filtered = category === "すべて" ? posts : posts.filter(p => p.category === category);
  const gridPosts = filtered.filter(p => p.slug !== posts[0].slug);

  return (
    <div className="page bg-grid">
      <TopNav currentPage="blog" />
      <section className="blog-hero">
        <div className="container fade-up" style={{ textAlign: "center" }}>
          <div className="section-eyebrow">blog</div>
          <h1 className="blog-hero-title">
            業務の<span className="marker">「詰まり」</span>を<br className="mobile-only" />ほどくヒント
          </h1>
          <p className="blog-hero-lead">
            手作業・転記・属人化など、<br className="mobile-only" />忙しいのに進まない原因を整理し、<br/>
            無駄を減らして回る状態にするための<br className="mobile-only" />考え方と実例をまとめています。
          </p>
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: "32px 0" }}>
        <div className="container fade-up">
          <a href={`article.html?slug=${posts[0].slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <div className="card blog-feature-card">
              {posts[0].image ? (
                <div className="blog-feature-image">
                  <img src={posts[0].image} alt="" />
                </div>
              ) : (
                <div className="ph blog-feature-image">
                  <span>特集記事イメージ</span>
                </div>
              )}
              <div className="blog-feature-body">
                <div style={{ display: "flex", gap: 8, marginBottom: 16, alignItems: "center" }}>
                  <span className="tag tag-yellow">Featured</span>
                  <span className="tag">{posts[0].category}</span>
                  <span style={{ color: "var(--ink-500)", fontSize: 12 }}>{posts[0].date}</span>
                </div>
                <h2 className="blog-feature-title">
                  {posts[0].title}
                </h2>
                <p style={{ fontSize: 15, color: "var(--ink-700)", lineHeight: 1.9, margin: "0 0 20px" }}>
                  {posts[0].excerpt}
                </p>
                <div style={{ color: "var(--navy-800)", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                  続きを読む <Icon.ArrowRight />
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* カテゴリフィルタ・記事グリッドは記事数が増えてから表示 */}
      {posts.length > 1 && (
        <section style={{ padding: "32px 0 16px" }}>
          <div className="container fade-up">
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", borderBottom: "1px solid var(--line)", paddingBottom: 16 }}>
              {categories.map(c => (
                <button key={c} onClick={() => setCategory(c)}
                  style={{
                    padding: "8px 18px", borderRadius: 999, border: "1px solid",
                    borderColor: category === c ? "var(--navy-800)" : "var(--line)",
                    background: category === c ? "var(--navy-800)" : "transparent",
                    color: category === c ? "#fff" : "var(--ink-700)",
                    fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
                    transition: "all .15s"
                  }}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {gridPosts.length > 0 && (
        <section style={{ padding: "32px 0 80px" }}>
          <div className="container">
            <div className="post-grid">
              {gridPosts.map(p => <PostCard key={p.slug} post={p} />)}
            </div>
          </div>
        </section>
      )}

      {posts.length <= 1 && (
        <section style={{ padding: "32px 0 80px" }}>
          <div className="container fade-up" style={{ textAlign: "center", color: "var(--ink-500)", fontSize: 14 }}>
            新しい記事を順次追加していきます。
          </div>
        </section>
      )}

      <CTARibbon />
      <SiteFooter />
    </div>
  );
}

function ArticlePage() {
  useRevealOnScroll();
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || window.SAMPLE_POSTS[0].slug;
  const post = window.SAMPLE_POSTS.find(p => p.slug === slug) || window.SAMPLE_POSTS[0];
  const related = window.SAMPLE_POSTS.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="page" style={{ background: "var(--paper)" }}>
      <TopNav currentPage="blog" />

      {/* 記事ヘッダー */}
      <section style={{ padding: "56px 0 32px" }}>
        <div className="container-narrow fade-up">
          <div style={{ fontSize: 13, color: "var(--ink-500)", marginBottom: 16 }}>
            <a href="blog.html" style={{ color: "var(--navy-800)", textDecoration: "none" }}>ブログ</a> / {post.category}
          </div>
          <div style={{ display: "flex", gap: 10, marginBottom: 20, alignItems: "center" }}>
            <span className="tag">{post.category}</span>
            <span style={{ color: "var(--ink-500)", fontSize: 13 }}>{post.date}</span>
            <span style={{ color: "var(--ink-500)", fontSize: 13 }}>· {post.readMin}分で読める</span>
          </div>
          <h1 style={{ fontSize: 38, fontWeight: 800, color: "var(--navy-900)", margin: "0 0 24px", lineHeight: 1.45 }}>
            {post.title}
          </h1>
          <p style={{ fontSize: 17, color: "var(--ink-700)", lineHeight: 1.9, margin: 0 }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* アイキャッチ */}
      <section style={{ padding: "16px 0 40px" }}>
        <div className="container-narrow">
          {post.image ? (
            <div className="article-eyecatch-frame">
              <img src={post.image} alt="" />
            </div>
          ) : (
            <div className="ph" style={{ height: 360 }}>
              <span>記事アイキャッチ画像</span>
            </div>
          )}
        </div>
      </section>

      {/* 本文 */}
      <article style={{ padding: "16px 0 64px" }}>
        <div className="container-narrow fade-up" style={{ fontSize: 16, lineHeight: 2, color: "var(--ink-900)" }}>
          <p>忙しいのに、業務が進まない。</p>
          <p>経営者・部門長の方で、こうした感覚を抱えたことはないでしょうか。</p>
          <p>業務自体は、毎日回ってはいる。でも、月末の締めも、請求書発行も、毎月ぎりぎりまでもつれ込む。</p>

          <h2 style={{ fontSize: 26, color: "var(--navy-900)", margin: "40px 0 16px", fontWeight: 800, borderLeft: "5px solid var(--yellow-500)", paddingLeft: 16 }}>
            「人の問題」だけでは説明がつかない
          </h2>
          <p>多くの場合、最初に疑われるのは「人」です。</p>
          <p>段取りが悪い。<br/>主体性が足りない。<br/>育成が追いついていない。</p>
          <p>ただ、人の判断や努力でカバーしているということは、その時点で、仕組み側がそれを要求している、ということです。</p>
          <p>仕組みが、人の判断と努力を前提に組まれている、ということでもあります。</p>
          <p>つまり、見るべきは人ではなく、仕事の運ばれ方の側です。</p>

          <h2 style={{ fontSize: 26, color: "var(--navy-900)", margin: "40px 0 16px", fontWeight: 800, borderLeft: "5px solid var(--yellow-500)", paddingLeft: 16 }}>
            進まない会社で同時に起きている4つのこと
          </h2>
          <p>進まない会社では、4つのことが同時に起きています。</p>

          <h3 style={{ fontSize: 19, color: "var(--navy-900)", margin: "32px 0 10px", fontWeight: 800 }}>1. 判断が多すぎる</h3>
          <p>手作業や属人作業が多いと、一つひとつで「どうするか」の判断が発生します。</p>
          <p>そのたびに、業務は短く止まる。<br/>それが日に何十回と積み重なっていくのです。</p>

          <h3 style={{ fontSize: 19, color: "var(--navy-900)", margin: "32px 0 10px", fontWeight: 800 }}>2. 判断できる人が偏っている</h3>
          <blockquote style={{ borderLeft: "4px solid var(--yellow-500)", background: "var(--yellow-100)", padding: "16px 24px", margin: "20px 0", borderRadius: "0 10px 10px 0" }}>
            <p style={{ margin: 0, fontSize: 16, color: "var(--navy-900)" }}>「これはこの人しか決められない」</p>
          </blockquote>
          <p>これが増えると、判断は一部に集中していきます。</p>
          <p>一人に仕事が集まって、周囲は手が空いたまま待つ、ということが起こります。</p>

          <h3 style={{ fontSize: 19, color: "var(--navy-900)", margin: "32px 0 10px", fontWeight: 800 }}>3. 工程がつながりすぎている</h3>
          <p>一つの工程が終わらないと、次に進めない。</p>
          <p>例えば、シフト作成が終わらないと、現場の配置も決まらない。</p>
          <p>一箇所止まると、後ろがすべて止まります。</p>

          <h3 style={{ fontSize: 19, color: "var(--navy-900)", margin: "32px 0 10px", fontWeight: 800 }}>4. 処理量がそろっていない</h3>
          <p>前の工程は早いのに、後ろが遅い。<br/>またはその逆。</p>
          <p>例えば、受注は毎日入ってくるのに、社内の処理は週単位でしか動かない、というような差です。</p>
          <p>この差がある限り、結果として、どこかに必ず仕事の溜まり場ができる。</p>

          <h2 style={{ fontSize: 26, color: "var(--navy-900)", margin: "40px 0 16px", fontWeight: 800, borderLeft: "5px solid var(--yellow-500)", paddingLeft: 16 }}>
            「忙しい」のではなく「詰まっている」
          </h2>
          <p>この4つが重なると、業務は流れません。</p>
          <p>ここで重要なのは、<span className="marker">「忙しい」のではなく、「詰まっている」</span>ということです。</p>
          <p>処理はしているのに、流れていない。<br/>これでは、いくら頑張ったところで前には進みません。</p>

          <h2 style={{ fontSize: 26, color: "var(--navy-900)", margin: "40px 0 16px", fontWeight: 800, borderLeft: "5px solid var(--yellow-500)", paddingLeft: 16 }}>
            まずやることは、解決策の選定ではありません
          </h2>
          <p>この状態を変えるには、いきなり解決策を探してはいけません。</p>
          <p>まずやるべきは、</p>
          <div style={{ background: "var(--paper-2)", borderRadius: 12, padding: 28, margin: "24px 0", border: "1px solid var(--line)" }}>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li>どこで止まっているのか</li>
              <li>誰の前で詰まっているのか</li>
              <li>どこに仕事が溜まっているのか</li>
            </ul>
          </div>
          <p>これを把握することです。</p>
          <p>地味な作業ですが、ここが見えると「忙しい」という感覚が、「ここが詰まっている」という具体に変わります。</p>
          <p>そこから初めて、改善の打ち手が現実的になります。</p>

          <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid var(--line)", fontSize: 14, color: "var(--ink-700)", lineHeight: 1.9 }}>
            <p style={{ margin: "0 0 12px", fontWeight: 700, color: "var(--navy-900)", fontSize: 15 }}>
              BitVoyage では、業務の流れを見て、詰まっているところを書き出すところから始めています。
            </p>
            <p style={{ margin: "0 0 12px" }}>
              いきなり仕組みを変えるのではなく、小さな改善から積み重ねていくスタイルです。
            </p>
            <p style={{ margin: 0 }}>
              広島で、無理なく回り続ける状態を一緒につくります。
            </p>
          </div>
        </div>
      </article>

      {/* タグ */}
      <section style={{ padding: "0 0 48px" }}>
        <div className="container-narrow">
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontSize: 13, color: "var(--ink-500)" }}>タグ:</span>
            {post.tags.map(t => <span key={t} className="tag">#{t}</span>)}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      {related.length > 0 && (
        <section style={{ padding: "56px 0 80px", background: "var(--paper-2)", borderTop: "1px solid var(--line)" }}>
          <div className="container">
            <h2 style={{ fontSize: 22, color: "var(--navy-900)", margin: "0 0 24px", fontWeight: 800 }}>
              関連する記事
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {related.map(p => <PostCard key={p.slug} post={p} />)}
            </div>
          </div>
        </section>
      )}

      <CTARibbon />
      <SiteFooter />
    </div>
  );
}

window.BlogPage = BlogPage;
window.ArticlePage = ArticlePage;
