// nav-footer.jsx — ナビゲーションとフッターの共有コンポーネント

function TopNav({ currentPage = "home" }) {
  const [open, setOpen] = React.useState(false);
  const links = [
    { id: "home", label: "ホーム", href: "index.html" },
    { id: "service", label: "サービス", href: "service.html" },
    { id: "company", label: "会社概要", href: "company.html" },
    { id: "blog", label: "ブログ", href: "blog.html" },
  ];
  React.useEffect(() => {
    if (open) {
      document.body.classList.add("nav-drawer-open");
    } else {
      document.body.classList.remove("nav-drawer-open");
    }
    return () => document.body.classList.remove("nav-drawer-open");
  }, [open]);
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="index.html" className="nav-logo">
          <img src="assets/Logo/BitVoyage_logo_white.png" alt="BitVoyage" className="nav-logo-image" />
        </a>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.id} href={l.href} className={currentPage === l.id ? "is-active" : ""}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta">無料相談</a>
        </div>
        <button
          type="button"
          className={"nav-burger" + (open ? " is-open" : "")}
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className={"nav-drawer" + (open ? " is-open" : "")} onClick={() => setOpen(false)}>
        <div className="nav-drawer-panel" onClick={(e) => e.stopPropagation()}>
          {links.map(l => (
            <a
              key={l.id}
              href={l.href}
              className={"nav-drawer-link" + (currentPage === l.id ? " is-active" : "")}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="nav-drawer-cta" onClick={() => setOpen(false)}>
            無料で“詰まり”を相談する →
          </a>
        </div>
      </div>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ marginBottom: 16 }}>
              <img src="assets/Logo/BitVoyage_logo_white.png" alt="BitVoyage" className="footer-logo-image" />
            </div>
            <p style={{ fontSize: 13, opacity: 0.7, lineHeight: 1.8, margin: 0 }}>
              忙しいのに進まない業務を整理し、<br/>
              止まらず回る仕組みに整えます。
            </p>
          </div>
          <div>
            <h4>サービス</h4>
            <ul>
              <li><a href="service.html#diagnose">業務診断</a></li>
              <li><a href="service.html#advisor">顧問サポート</a></li>
              <li><a href="service.html#implement">実装プロジェクト</a></li>
            </ul>
          </div>
          <div>
            <h4>会社</h4>
            <ul>
              <li><a href="company.html">会社概要</a></li>
              <li><a href="blog.html">ブログ</a></li>
              <li><a href="index.html#contact">お問い合わせ</a></li>
            </ul>
          </div>
          <div>
            <h4>お問い合わせ</h4>
            <ul>
              <li><a href="mailto:contact@bitvoyage.co.jp">contact@bitvoyage.co.jp</a></li>
              <li style={{ opacity: 0.7 }}>広島県広島市</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 株式会社BitVoyage</span>
          <span><a href="privacy.html">プライバシーポリシー</a></span>
          <span>現場と一緒に、止まらない仕組みへ。</span>
        </div>
      </div>
    </footer>
  );
}

// スクロールで要素を visible にする
function useRevealOnScroll() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".fade-up, .draw-line-trigger");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          e.target.querySelectorAll(".draw-line").forEach(l => l.classList.add("drawn"));
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

window.TopNav = TopNav;
window.SiteFooter = SiteFooter;
window.useRevealOnScroll = useRevealOnScroll;
