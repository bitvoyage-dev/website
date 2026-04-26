// home-variants.jsx — トップページの3案

/* ===== 共通：ヒーローの手書きアクセント SVG ===== */
function HandLine({ d, color = "var(--yellow-500)", width = 4, len = 300 }) {
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}>
      <path d={d} stroke={color} strokeWidth={width} fill="none" strokeLinecap="round"
        className="draw-line" style={{ "--len": len }} />
    </svg>
  );
}

/* ===== 案A （採用版）— デザインは忠実、レイアウトはミニマル寄り ===== */
function HomeA() {
  useRevealOnScroll();
  return (
    <div className="page bg-grid">
      <TopNav currentPage="home" />
      {/* ヒーロー：中央寄せ、イラストなし */}
      <section className="home-hero">
        <div className="container-narrow fade-up draw-line-trigger" style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-hand)", color: "var(--navy-700)", fontSize: 14, marginBottom: 16, letterSpacing: "0.1em" }}>
            — 広島の業務改善パートナー —
          </div>
          <h1 className="home-hero-title">
            <span className="home-hero-title-desktop">
              現場の「詰まり」をほどき、<br/>
              <span className="underline-hand">業務が止まらない状態にする。</span>
            </span>
            <span className="home-hero-title-mobile">
              現場の「詰まり」を<br/>
              ほどき、<br/>
              <span className="underline-hand">業務が止まらない<br/>状態にする。</span>
            </span>
          </h1>
          <p className="home-hero-lead">
            小さく整えながら、<br className="mobile-only" />
            無理なく続く形にしていきます。
          </p>
          <div className="home-hero-actions">
            <a href="#contact" className="btn btn-primary">
              <Icon.Clock /> <span>まずは1つ、<br className="mobile-only" />業務を見せてください</span>
            </a>
            <a href="service.html" className="btn btn-outline">
              サービスを見る <Icon.ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* こんなお困りごとはありませんか？ */}
      <section className="section" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="container-narrow fade-up">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 className="problem-heading" style={{ fontSize: 28, color: "var(--navy-900)", margin: "0 0 12px", fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 24, height: 24, border: "2px solid var(--navy-800)", borderRadius: 4, position: "relative" }}>
                <span style={{ position: "absolute", left: 5, top: -2, width: 8, height: 15, borderRight: "3px solid var(--navy-800)", borderBottom: "3px solid var(--navy-800)", transform: "rotate(42deg)" }}></span>
              </span>
              <span>こんな<span className="marker">お困りごと</span>は<br className="mobile-only" />ありませんか？</span>
            </h2>
          </div>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                <>業務が増えて、どこから手をつけていいか<br className="mobile-only" />分からない</>,
                <>Excelや手作業が増え、<br className="mobile-only" />ミスや手戻りが起きている</>,
                <>特定の人に業務が偏り、<br className="mobile-only" />引き継げない</>,
                <>ツールを入れたが、<br className="mobile-only" />結局使われていない</>,
              ].map((t, i) => (
                <li key={i} style={{ display: "flex", gap: 14, padding: "10px 0", alignItems: "flex-start" }}>
                  <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--yellow-500)", marginTop: 11, flexShrink: 0 }}></span>
                  <span style={{ fontSize: 17, color: "var(--ink-900)" }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <p style={{ textAlign: "center", fontSize: 15, color: "var(--ink-700)", marginTop: 32, lineHeight: 1.9 }}>
            現場を見ながら、ムダな作業を減らし、<br/>
            自然に回る形に整えます。
          </p>
        </div>
      </section>

      {/* BitVoyageがやること */}
      <section className="section" style={{ padding: "60px 0", background: "var(--paper-2)" }}>
        <div className="container-narrow fade-up">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="section-eyebrow">what we do</div>
            <h2 style={{ fontSize: 28, color: "var(--navy-900)", margin: "0 0 16px", fontWeight: 800 }}>
              <span className="marker">BitVoyage</span>がやること
            </h2>
            <p style={{ fontSize: 15, color: "var(--ink-700)", lineHeight: 1.9, margin: 0 }}>
              業務を見て、止まらず回る状態に整えていきます。
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { n: "1", t: "無駄な作業を減らす", d: "業務を見て、手作業や転記などのムダを見つけて減らします。すぐに変えられるところから改善していきます。" },
              { n: "2", t: "詰まりをなくす", d: "業務の流れを整理しながら、止まりやすい工程や属人化している部分を見つけ、流れが止まらない状態に整えます。" },
              { n: "3", t: "無理なく回る形にする", d: "全部を一気に変えるのではなく、今のやり方に合わせて少しずつ仕組みにしていきます。" },
            ].map(s => (
              <div key={s.n} style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 20, alignItems: "flex-start", padding: "20px 0", borderBottom: "1px dashed var(--line)" }}>
                <span className="num-badge" style={{ marginTop: 2 }}>{s.n}</span>
                <div>
                  <h3 style={{ fontSize: 19, color: "var(--navy-900)", margin: "0 0 8px", fontWeight: 800 }}>{s.t}</h3>
                  <p style={{ fontSize: 15, color: "var(--ink-700)", lineHeight: 1.9, margin: 0 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3ステップ */}
      <ServiceThreeSteps />

      {/* CTA リボン */}
      <CTARibbon />

      <SiteFooter />
    </div>
  );
}

/* ===== 案B — ミニマル版：余白多め、方眼なし、落ち着いた雰囲気 ===== */
function HomeB() {
  useRevealOnScroll();
  return (
    <div className="page" style={{ background: "var(--paper)" }}>
      <TopNav currentPage="home" />
      <section style={{ padding: "120px 0 100px" }}>
        <div className="container-narrow fade-up draw-line-trigger" style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-hand)", color: "var(--navy-700)", fontSize: 14, marginBottom: 16, letterSpacing: "0.1em" }}>
            — 業務設計パートナー —
          </div>
          <h1 style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.3, margin: 0, color: "var(--navy-900)", letterSpacing: "0.01em" }}>
            業務の<span className="marker marker-thick">"詰まり"</span>を、<br/>
            設計でほどく。
          </h1>
          <p style={{ fontSize: 19, marginTop: 36, color: "var(--ink-700)", lineHeight: 2 }}>
            現場の「詰まり」を特定し、何が問題か・何から直すかを決める。<br/>
            「ツールありき」ではなく、現場に合った方法で本質的な改善を実現します。
          </p>
          <div style={{ marginTop: 44, display: "flex", gap: 16, justifyContent: "center" }}>
            <a href="#contact" className="btn btn-primary">
              <Icon.Clock /> 無料30分ヒアリング
            </a>
            <a href="service.html" className="btn btn-outline">
              サービスを見る <Icon.ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* 静かなチェック比較 */}
      <section className="section" style={{ background: "var(--paper-2)", padding: "80px 0" }}>
        <div className="container fade-up">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-eyebrow">issue → outcome</div>
            <h2 className="section-title" style={{ fontSize: 28 }}>
              現場の<span className="marker">モヤモヤ</span>を、スッキリへ。
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 1fr", gap: 24, alignItems: "center", maxWidth: 900, margin: "0 auto" }}>
            <div className="card" style={{ background: "#fff" }}>
              <div style={{ fontSize: 13, color: "var(--ink-500)", marginBottom: 12, fontWeight: 600 }}>BEFORE</div>
              {["忙しいのに進まない","やり方がバラバラ","探し物に時間がかかる","手入力・転記が多い"].map(t => (
                <div key={t} style={{ padding: "6px 0", fontSize: 15, color: "var(--ink-700)" }}>・ {t}</div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center", color: "var(--navy-700)" }}>
              <Icon.ArrowRight size={32} />
            </div>
            <div className="card" style={{ background: "var(--navy-900)", color: "#fff", border: "none" }}>
              <div style={{ fontSize: 13, color: "var(--yellow-400)", marginBottom: 12, fontWeight: 600 }}>AFTER</div>
              {["何が問題かが明確になる","何から手をつけるか迷わない","業務の流れが見える","改善が進む状態になる"].map(t => (
                <div key={t} style={{ padding: "6px 0", fontSize: 15, display: "flex", gap: 8 }}>
                  <span style={{ color: "var(--yellow-400)" }}><Icon.Check /></span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceThreeSteps compact />
      <CTARibbon minimal />
      <SiteFooter />
    </div>
  );
}

/* ===== 案C — 記事重視レイアウト：ブログ・ナレッジを前面に ===== */
function HomeC() {
  useRevealOnScroll();
  return (
    <div className="page bg-grid">
      <TopNav currentPage="home" />
      <section style={{ padding: "60px 0 40px", position: "relative" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center" }}>
          <div className="fade-up">
            <div style={{ fontFamily: "var(--font-hand)", color: "var(--navy-700)", fontSize: 14, marginBottom: 12 }}>
              広島の業務設計パートナー
            </div>
            <h1 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.3, margin: 0, color: "var(--navy-900)" }}>
              業務の<span className="marker marker-thick">"詰まり"</span>を、<br/>
              設計でほどく。
            </h1>
            <p style={{ fontSize: 17, marginTop: 24, color: "var(--ink-700)", lineHeight: 1.9 }}>
              現場の「詰まり」を特定し、何が問題か・何から直すかを決める。<br/>
              「ツールありき」ではなく、現場に合った方法で本質的な改善を。
            </p>
            <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
              <a href="#contact" className="btn btn-primary"><Icon.Clock /> 無料30分ヒアリング</a>
              <a href="blog.html" className="btn btn-outline">ブログを読む <Icon.ArrowRight /></a>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <TangleIllustration small />
          </div>
        </div>
      </section>

      {/* 3ステップサービス紹介（簡潔に） */}
      <section className="section" style={{ padding: "60px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { n: "1", t: "業務診断", sub: "現場を見て、構造を可視化", price: "15万円〜", href: "service.html#diagnose" },
              { n: "2", t: "顧問サポート", sub: "改善の順番を決め、伴走支援", price: "月5万円〜", href: "service.html#advisor" },
              { n: "3", t: "実装プロジェクト", sub: "改善を仕組みとして実装", price: "個別お見積り", href: "service.html#implement" },
            ].map(s => (
              <a key={s.n} href={s.href} className="card fade-up" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span className="num-badge" style={{ width: 28, height: 28, fontSize: 14 }}>{s.n}</span>
                  <span style={{ fontSize: 18, fontWeight: 700, color: "var(--navy-900)" }}>{s.t}</span>
                </div>
                <div style={{ fontSize: 14, color: "var(--ink-700)", marginBottom: 12 }}>{s.sub}</div>
                <div style={{ fontSize: 13, color: "var(--navy-800)", fontWeight: 600 }}>{s.price}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 最新のナレッジ・記事 */}
      <section className="section" style={{ padding: "40px 0 80px", background: "var(--paper-2)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32 }}>
            <div>
              <div className="section-eyebrow">knowledge</div>
              <h2 className="section-title" style={{ fontSize: 28 }}>
                <span className="marker">現場</span>のためのナレッジ
              </h2>
            </div>
            <a href="blog.html" style={{ color: "var(--navy-800)", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
              すべての記事 <Icon.ArrowRight />
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {window.SAMPLE_POSTS.slice(0, 3).map(p => <PostCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>

      <CTARibbon />
      <SiteFooter />
    </div>
  );
}

/* ===== 共通：もつれた糸のイラスト ===== */
function TangleIllustration({ small = false }) {
  const size = small ? 280 : 360;
  return (
    <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
      <svg width={size} height={size * 0.9} viewBox="0 0 360 320" fill="none">
        {/* もつれ */}
        <g stroke="var(--ink-900)" strokeWidth="1.6" strokeLinecap="round" fill="none">
          <path d="M100 80 q30 -30 60 -10 q20 20 -5 35 q-30 15 10 35 q40 20 -10 30 q-50 10 20 25 q40 8 0 20" />
          <path d="M110 90 q20 -15 50 5 q20 15 0 30 q-20 15 10 25 q30 10 -5 20 q-30 10 20 15" />
          <path d="M120 100 q15 -10 30 10 q10 15 -10 20 q-20 5 5 15" />
        </g>
        {/* 引き出された線と単語ラベル */}
        {[
          { x1: 170, y1: 90, x2: 260, y2: 50, label: "ムダな作業" },
          { x1: 200, y1: 80, x2: 295, y2: 85, label: "確認・探し物" },
          { x1: 210, y1: 120, x2: 310, y2: 140, label: "属人化" },
          { x1: 210, y1: 160, x2: 305, y2: 195, label: "手戻り・ミス" },
          { x1: 200, y1: 200, x2: 285, y2: 245, label: "判断の遅れ" },
        ].map((l, i) => (
          <g key={i}>
            <path d={`M${l.x1} ${l.y1} Q${(l.x1+l.x2)/2 + 5} ${(l.y1+l.y2)/2 - 8} ${l.x2} ${l.y2}`} stroke="var(--ink-500)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <text x={l.x2 + 4} y={l.y2 + 4} fontSize="13" fontFamily="var(--font-hand)" fill="var(--ink-700)">{l.label}</text>
          </g>
        ))}
        {/* 考えている人 */}
        <g transform="translate(40, 140)">
          <circle cx="40" cy="30" r="22" fill="#fff" stroke="var(--ink-900)" strokeWidth="1.6" />
          <path d="M18 24 q0 -20 22 -20 t22 20 q-4 -6 -12 -6 q-8 2 -18 2 q-6 0 -14 4 z" fill="var(--ink-900)" />
          <path d="M33 30 q1 -2 3 0 M47 30 q1 -2 3 0" stroke="var(--ink-900)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M36 40 q4 2 8 0" stroke="var(--ink-900)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          <path d="M16 80 q4 -18 24 -24 h0 q20 6 24 24 v40 h-48 z" fill="#cdd6e0" stroke="var(--ink-900)" strokeWidth="1.6" />
          <path d="M52 46 q10 -2 14 -10" stroke="var(--ink-900)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

/* ===== 3ステップサービス（共通パーツ） ===== */
function ServiceThreeSteps({ compact = false }) {
  const steps = [
    { n: "1", t: "小さな業務改善", sub: "まずは1つの業務から改善します", price: "数万円〜", icon: <Icon.Diagnose size={56} />, list: ["業務内容を確認","改善ポイントを提案","改善内容の実装・設定","簡単な運用方法の共有"] },
    { n: "2", t: "継続改善サポート", sub: "改善を止めず、継続的に回していきます", price: "月額 5万円〜", icon: <Icon.Advisor size={56} />, list: ["改善テーマの整理","優先順位の決定","小さな業務改善の実施","定期的な振り返り"] },
    { n: "3", t: "業務の整理・再構築", sub: "業務の流れをつくり直します", price: "個別お見積り", icon: <Icon.Implement size={56} />, list: ["業務全体の流れの整理","詰まりや属人化の解消","運用ルール・仕組みの設計","ツール・システムの導入／構築"] },
  ];
  return (
    <section className="section" style={{ paddingTop: compact ? 40 : 60, paddingBottom: compact ? 40 : 80 }}>
      <div className="container fade-up">
        <div className="home-service-heading">
          <div className="section-eyebrow">service</div>
          <h2>
            小さな改善から、<span className="marker">継続・全体改善</span>まで
          </h2>
          <p>
            まずは1つの業務から始め、必要に応じて継続・全体改善へ進めます。
          </p>
        </div>
        <div className="service-steps-grid">
          {steps.map((s, i) => (
            <div key={s.n} style={{ position: "relative" }}>
              <div className="dashed-box" style={{ background: "#fff", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <span className="num-badge">{s.n}</span>
                  <h3 style={{ fontSize: 22, margin: 0, color: "var(--navy-900)", fontWeight: 800 }}>{s.t}</h3>
                </div>
                <p style={{ fontSize: 14, color: "var(--ink-700)", margin: "0 0 16px" }}>{s.sub}</p>
                <div style={{ color: "var(--navy-800)", margin: "16px 0", display: "flex", justifyContent: "center" }}>{s.icon}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", fontSize: 14 }}>
                  {s.list.map(l => (
                    <li key={l} style={{ display: "flex", gap: 8, padding: "3px 0", color: "var(--ink-700)" }}>
                      <span style={{ color: "var(--yellow-500)" }}>●</span> {l}
                    </li>
                  ))}
                </ul>
                <div style={{ background: "var(--yellow-200)", padding: "10px 14px", borderRadius: 8, fontSize: 13, fontWeight: 700, color: "var(--navy-900)", textAlign: "center" }}>
                  {s.price}
                </div>
              </div>
              {i < 2 && (
                <div className="service-step-arrow" style={{ position: "absolute", right: -16, top: "50%", transform: "translateY(-50%)", color: "var(--navy-700)", zIndex: 2, background: "var(--paper)", borderRadius: "50%", padding: 4 }}>
                  <Icon.ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== CTA リボン ===== */
function CTARibbon({ minimal = false }) {
  React.useEffect(() => {
    var toggle = document.getElementById('contact-toggle');
    var wrap = document.getElementById('contact-form');
    var submitBtn = document.getElementById('submit-btn');
    var form = document.getElementById('inquiry-form');
    if (!toggle || !wrap || !form) return;

    function onToggle() {
      var open = wrap.hidden;
      wrap.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'フォームを閉じる' : '無料で“詰まり”を相談する';
    }
    function onSubmit() {
      if (!submitBtn) return;
      submitBtn.disabled = true;
      submitBtn.textContent = '送信中…';
    }
    toggle.addEventListener('click', onToggle);
    form.addEventListener('submit', onSubmit);
    return () => {
      toggle.removeEventListener('click', onToggle);
      form.removeEventListener('submit', onSubmit);
    };
  }, []);

  return (
    <section id="contact" className="section" style={{ padding: minimal ? "60px 0" : "40px 0 100px" }}>
      <div className="container-narrow">
        <p style={{ textAlign: "center", fontSize: 16, color: "var(--ink-700)", marginBottom: 24 }}>
          業務を見ながら、無理なく続く形に整えます。
        </p>
        <div style={{ background: "var(--yellow-500)", padding: "36px 40px", borderRadius: 16, textAlign: "center", boxShadow: "var(--shadow-md)", position: "relative" }}>
          <div style={{ position: "absolute", top: 10, left: 20, fontSize: 11, fontFamily: "var(--font-hand)", color: "var(--navy-900)", opacity: 0.7 }}>お気軽にどうぞ</div>
          <h2 className="cta-ribbon-title" style={{ margin: 0, fontWeight: 800, color: "var(--navy-900)", letterSpacing: "0.02em" }}>
            業務の「詰まり」、<br/>
            一度見せてください。
          </h2>
          <div style={{ margin: "16px auto 24px", width: 80, height: 2, background: "var(--navy-900)" }}></div>
          <p style={{ margin: 0, fontSize: 16, color: "var(--navy-900)", fontWeight: 600 }}>
            30分で、どこが詰まっているかと、<br/>
            何から直すべきかを整理します。
          </p>

          <div className="contact-box" style={{ marginTop: 28 }}>
            <button
              type="button"
              className="btn btn-contact"
              id="contact-toggle"
              aria-expanded="false"
              aria-controls="contact-form"
              style={{ background: "var(--navy-900)", color: "#fff" }}
            >
              無料で“詰まり”を相談する
            </button>

            <div id="contact-form" className="contact-form-wrap" hidden>
              <form id="inquiry-form" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="b0bb2ab9-0584-49de-b67a-73e763da458b" />
                <input type="hidden" name="subject" value="BitVoyageサイトからのお問い合わせ" />
                <input type="hidden" name="from_name" value="BitVoyage" />
                <input type="hidden" name="redirect" value="https://bitvoyage.co.jp/thanks.html" />
                <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

                <div className="form-group">
                  <label htmlFor="field-company">会社名 <span className="required">必須</span></label>
                  <input type="text" id="field-company" name="company" required placeholder="例：株式会社○○" autoComplete="organization" />
                </div>

                <div className="form-group">
                  <label htmlFor="field-name">ご担当者名 <span className="required">必須</span></label>
                  <input type="text" id="field-name" name="name" required placeholder="例：山田 太郎" autoComplete="name" />
                </div>

                <div className="form-group">
                  <label htmlFor="field-email">メールアドレス <span className="required">必須</span></label>
                  <input type="email" id="field-email" name="email" required placeholder="例：info@example.com" autoComplete="email" />
                </div>

                <div className="form-group">
                  <label htmlFor="field-phone">電話番号（任意）</label>
                  <input type="tel" id="field-phone" name="phone" placeholder="例：090-1234-5678" autoComplete="tel" />
                </div>

                <div className="form-group">
                  <label htmlFor="field-message">ご相談内容 <span className="required">必須</span></label>
                  <textarea id="field-message" name="message" rows="3" required placeholder="例：Excelの手入力が増えて困っている"></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="field-date1">ご希望日時（第1希望）</label>
                  <input type="text" id="field-date1" name="date1" placeholder="例：4/10（木）10:00〜" />
                </div>

                <div className="form-group">
                  <label htmlFor="field-date2">ご希望日時（第2希望）</label>
                  <input type="text" id="field-date2" name="date2" placeholder="例：4/11（金）14:00〜" />
                </div>

                <div className="form-group">
                  <label htmlFor="field-date3">ご希望日時（第3希望）</label>
                  <input type="text" id="field-date3" name="date3" placeholder="例：4/14（月）終日可" />
                </div>

                <button type="submit" className="btn btn-submit" id="submit-btn">この内容で申し込む</button>
              </form>
            </div>

            <p className="contact-note" style={{ color: "var(--navy-900)", opacity: 0.75 }}>通常2営業日以内に日程をご案内いたします。</p>
          </div>
        </div>
      </div>
    </section>
  );
}

window.HomeA = HomeA;
window.HomeB = HomeB;
window.HomeC = HomeC;
window.ServiceThreeSteps = ServiceThreeSteps;
window.CTARibbon = CTARibbon;
window.TangleIllustration = TangleIllustration;
