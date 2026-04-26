// sample-data.jsx — ブログ記事サンプルデータ & PostCard

window.SAMPLE_POSTS = [
  {
    slug: "business-clog-identify",
    title: "忙しいのに進まない会社の共通点",
    category: "業務改善",
    date: "2026.04.10",
    readMin: 4,
    image: "assets/images/business-clog-identify-eyecatch-v5.png",
    excerpt: "業務自体は回っているのに、月末の締めも請求書発行も、毎月ぎりぎりまでもつれ込む。原因は、人ではなく業務の流れの側にあります。進まない会社で同時に起きている4つの「詰まり」を整理しました。",
    tags: ["業務改善", "業務フロー"],
  },
];

function PostCard({ post, featured = false }) {
  return (
    <a href={`article.html?slug=${post.slug}`} className="card" style={{ display: "block", textDecoration: "none", color: "inherit", padding: 0, overflow: "hidden" }}>
      {post.image ? (
        <div className="post-card-image-frame" style={{ height: featured ? 220 : 160 }}>
          <img src={post.image} alt="" className="post-card-image" />
        </div>
      ) : (
        <div className="ph" style={{ height: featured ? 220 : 160, borderRadius: 0, borderLeft: 0, borderRight: 0, borderTop: 0 }}>
          <span>{post.category} — 記事イメージ</span>
        </div>
      )}
      <div style={{ padding: 20 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "center", fontSize: 12 }}>
          <span className="tag">{post.category}</span>
          <span style={{ color: "var(--ink-500)" }}>{post.date}</span>
          <span style={{ color: "var(--ink-500)" }}>· {post.readMin}分で読める</span>
        </div>
        <h3 style={{ fontSize: featured ? 20 : 17, margin: "0 0 10px", color: "var(--navy-900)", lineHeight: 1.5, fontWeight: 700 }}>
          {post.title}
        </h3>
        <p style={{ fontSize: 14, color: "var(--ink-700)", margin: 0, lineHeight: 1.7 }}>
          {post.excerpt}
        </p>
      </div>
    </a>
  );
}

window.PostCard = PostCard;
