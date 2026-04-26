// company-page.jsx — 会社概要ページ

function CompanyPage() {
  useRevealOnScroll();
  return (
    <div className="page bg-grid">
      <TopNav currentPage="company" />
      <section className="company-hero">
        <div className="container-narrow fade-up" style={{ textAlign: "center" }}>
          <div className="section-eyebrow">about us</div>
          <h1 className="company-hero-title">
            業務の<span className="marker marker-thick">「詰まり」</span>をほどく。
          </h1>
          <p className="company-hero-lead">
            業務のムダや詰まりを見つけ、<br/>
            小さく改善しながら、止まらず回る状態に整えます。
          </p>
        </div>
      </section>

      {/* ミッション */}
      <section className="company-mission-section">
        <div className="container fade-up">
          <div className="company-mission-card">
            <div style={{ position: "absolute", top: -18, left: 48, background: "var(--yellow-500)", padding: "4px 16px", borderRadius: 999, fontSize: 13, fontWeight: 700, color: "var(--navy-900)" }}>
              Mission
            </div>
            <h2 className="company-mission-title">
              現場が、<br className="mobile-only"/>
              <span className="underline-hand">無理なく回り続ける</span><br className="mobile-only"/>
              状態を当たり前にする。
            </h2>
            <p className="company-mission-lead">
              改善は、一度整えて終わりではありません。<br/>
              日々の仕事の中で、無理なく続けられる形にしていくことが大切です。<br/><br/>
              私たちは、現場に合ったやり方で整え、<br/>
              自然に続く状態をつくります。
            </p>
          </div>
        </div>
      </section>

      {/* 会社情報 */}
      <section className="section" style={{ padding: "40px 0 60px" }}>
        <div className="container-narrow fade-up">
          <h2 className="section-title" style={{ fontSize: 26, marginBottom: 24 }}>会社概要</h2>
          <div className="company-info-box">
            {[
              ["会社名", "株式会社BitVoyage"],
              ["所在地", "広島県広島市（登記住所）"],
              ["活動拠点", "東広島市・呉市を中心に広島県内対応"],
              ["事業内容", <div>
                <div>・ 小さな業務改善（転記・手作業・確認作業の削減）</div>
                <div>・ 継続改善サポート（改善テーマの整理・進行管理）</div>
                <div>・ 業務の整理・再構築（止まらず回る仕組みづくり）</div>
                <div>・ 必要に応じたツール・システムの導入／構築支援</div>
              </div>],
              ["お問い合わせ", <a href="mailto:contact@bitvoyage.co.jp" style={{ color: "var(--navy-800)", fontWeight: 600 }}>contact@bitvoyage.co.jp</a>],
            ].map(([k, v], i, arr) => (
              <div key={k} className="company-info-row" style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none" }}>
                <div className="company-info-label">{k}</div>
                <div className="company-info-value">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 大切にしていること */}
      <section className="section" style={{ padding: "40px 0 80px", background: "var(--paper-2)" }}>
        <div className="container fade-up">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-eyebrow">our values</div>
            <h2 className="section-title" style={{ fontSize: 28 }}>大切にしていること</h2>
          </div>
          <div className="value-grid">
            {[
              { n: "01", t: "業務を見る", d: "現場や画面を見ながら、実際の流れに沿ってムダや詰まりを見つけます。" },
              { n: "02", t: "小さく変える", d: "大きく作り替える前に、数時間〜数日で変えられる改善から進めます。" },
              { n: "03", t: "続く形にする", d: "一度きりの改善で終わらせず、無理なく続けられる運用に整えます。" },
            ].map(v => (
              <div key={v.n} className="card" style={{ background: "#fff" }}>
                <div style={{ fontFamily: "var(--font-hand)", fontSize: 28, color: "var(--yellow-500)", fontWeight: 700, marginBottom: 8 }}>{v.n}</div>
                <h3 style={{ fontSize: 19, color: "var(--navy-900)", margin: "0 0 12px", fontWeight: 800 }}>{v.t}</h3>
                <p style={{ fontSize: 14, color: "var(--ink-700)", lineHeight: 1.9, margin: 0 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTARibbon />
      <SiteFooter />
    </div>
  );
}

window.CompanyPage = CompanyPage;
