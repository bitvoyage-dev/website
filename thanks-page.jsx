// thanks-page.jsx — お問い合わせ完了

function ThanksPage() {
  useRevealOnScroll();
  return (
    <div className="page bg-grid">
      <TopNav currentPage="" />

      <section className="page-hero" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="container-narrow fade-up" style={{ textAlign: "center" }}>
          <div className="section-eyebrow">thank you</div>
          <h1 className="page-hero-title">お問い合わせ<br className="mobile-only"/>ありがとうございます</h1>
          <p className="page-hero-lead" style={{ marginTop: 16 }}>
            内容を確認のうえ、通常2営業日以内に<br className="mobile-only"/>担当よりご返信いたします。
          </p>
          <p style={{ marginTop: 32, color: "var(--ink-500)", fontSize: 14 }}>
            ※返信が届かない場合は、お手数ですが<br className="mobile-only"/>
            <a href="mailto:contact@bitvoyage.co.jp" style={{ color: "var(--navy-800)" }}>contact@bitvoyage.co.jp</a> まで直接ご連絡ください。
          </p>
          <div style={{ marginTop: 48 }}>
            <a href="index.html" className="btn btn-primary">トップページへ戻る</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

window.ThanksPage = ThanksPage;
