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

/* ===== 案A （採用版）— チラシ最終版に整合 ===== */
function HomeA() {
  useRevealOnScroll();
  return (
    <div className="page bg-grid">
      <TopNav currentPage="home" />
      {/* ヒーロー：中央寄せ、コピー一本勝負 */}
      <section className="home-hero">
        <div className="container-narrow fade-up draw-line-trigger" style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-hand)", color: "var(--navy-700)", fontSize: 14, marginBottom: 16, letterSpacing: "0.1em" }}>
            — 広島の業務改善パートナー —
          </div>
          <h1 className="home-hero-title">
            <span className="home-hero-title-desktop">
              忙しいのに、進まない。<br/>
              人に頼りきりの業務を、<br/>
              <span className="underline-hand">迷わず回る流れ</span>に整えます。
            </span>
            <span className="home-hero-title-mobile">
              忙しいのに、<br/>
              進まない。<br/>
              人に頼りきりの業務を、<br/>
              <span className="underline-hand">迷わず回る流れ</span>に<br/>
              整えます。
            </span>
          </h1>
          <p className="home-hero-lead">
            毎日2〜3時間、<br className="mobile-only" />
            同じ作業を繰り返していませんか。
          </p>
          <div className="home-hero-actions">
            <a href="#contact" className="btn btn-primary">
              <Icon.Clock /> <span>無料60分相談 + ご提案メモ</span>
            </a>
            <a href="service.html" className="btn btn-outline">
              サービスを見る <Icon.ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* こんな状態、ありませんか？ */}
      <section className="section" style={{ paddingTop: 40, paddingBottom: 24 }}>
        <div className="container-narrow fade-up">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 className="problem-heading" style={{ fontSize: 28, color: "var(--navy-900)", margin: "0 0 12px", fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 24, height: 24, border: "2px solid var(--navy-800)", borderRadius: 4, position: "relative" }}>
                <span style={{ position: "absolute", left: 5, top: -2, width: 8, height: 15, borderRight: "3px solid var(--navy-800)", borderBottom: "3px solid var(--navy-800)", transform: "rotate(42deg)" }}></span>
              </span>
              <span>こんな<span className="marker">状態</span>、ありませんか？</span>
            </h2>
          </div>
          <div className="problem-with-illustration">
            <div className="problem-illustration" aria-hidden="true">
              <img src="assets/illustrations/01-person-thinking.png" alt="" />
            </div>
            <ul className="problem-list">
              {[
                "同じ情報を、Excelに何度も入力している",
                "\"〇〇さん\" が休むと、業務が止まる",
                "受注・見積・請求が、毎月締切ギリギリでもつれ込む",
                "改善したいが、何から手をつけたらいいか分からない",
                "ITに詳しい人が、社内にいない",
              ].map((t, i) => (
                <li key={i} className="problem-item">
                  <span className="problem-checkbox" aria-hidden="true"></span>
                  <span className="problem-text">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* 損失コスト */}
          <div className="loss-cost-box">
            <div className="loss-cost-eyebrow">放っておくと</div>
            <p className="loss-cost-text">
              1日 <strong>2時間</strong> の手作業 →
              年間 <strong className="loss-cost-highlight">約500時間</strong>。
            </p>
            <p className="loss-cost-note">
              小さな詰まりほど、毎日の積み重ねで大きな損失になります。
            </p>
          </div>
        </div>
      </section>

      {/* 経営者 vs 現場ギャップ */}
      <section className="section gap-section">
        <div className="container fade-up">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div className="section-eyebrow">macro vs micro</div>
            <h2 style={{ fontSize: 28, color: "var(--navy-900)", margin: "0 0 14px", fontWeight: 800, lineHeight: 1.45 }}>
              「<span className="marker">人手不足</span>」の正体は、<br className="mobile-only"/>
              現場の小さな詰まりの積み重ね。
            </h2>
            <p style={{ fontSize: 15, color: "var(--ink-700)", lineHeight: 1.9, margin: 0 }}>
              経営者から見えている問題と、<br className="mobile-only"/>
              現場で実際に起きていることには、ギャップがあります。
            </p>
          </div>
          <div className="gap-grid">
            <div className="gap-card gap-card-macro">
              <div className="gap-card-label">経営者・部門長から<br/>見えている問題</div>
              <ul className="gap-list">
                <li>人手が足りない</li>
                <li>業務が多い</li>
                <li>DXを進めたい</li>
                <li>採用を増やすべき？</li>
              </ul>
              <div className="gap-card-tag">大きな話になりがち</div>
            </div>
            <div className="gap-arrow"><Icon.ArrowRight size={28} /></div>
            <div className="gap-card gap-card-micro">
              <div className="gap-card-label">現場で実際に起きている<br/>"詰まり"</div>
              <ul className="gap-list">
                <li>Excelに同じ情報を3回入力</li>
                <li>FAX注文書を手で見積に転記</li>
                <li>"〇〇さん" だけがマクロを触れる</li>
                <li>在庫表を毎朝手で集計</li>
                <li>顧客情報がExcel/LINE/紙で散在</li>
              </ul>
              <div className="gap-card-tag gap-card-tag-accent">本当のロスはここ</div>
            </div>
          </div>
        </div>
      </section>

      {/* 詰まりが取れると、こう変わる（結果ベース） */}
      <section className="section" style={{ padding: "60px 0", background: "var(--paper-2)" }}>
        <div className="container-narrow fade-up">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="section-eyebrow">outcome</div>
            <h2 style={{ fontSize: 28, color: "var(--navy-900)", margin: "0 0 14px", fontWeight: 800 }}>
              詰まりが取れると、<span className="marker">こう変わります</span>。
            </h2>
          </div>
          <div className="outcome-with-illustration">
            <div className="outcome-illustration" aria-hidden="true">
              <img src="assets/illustrations/03-person-forward.png" alt="" />
            </div>
            <div className="outcome-grid">
              {[
                { t: "「確認」「探す」「聞く」が減る", d: "情報の置き場が決まり、聞きにいかなくても進む状態に。" },
                { t: "誰がやっても同じ流れで回る", d: "属人化していた業務が、引き継げる形に。" },
                { t: "状態が「見ればわかる」ようになる", d: "進捗・在庫・顧客状況が、一目で把握できる形に。" },
                { t: "判断する回数が減る", d: "毎回考えていた判断をルール化し、迷う時間を削減。" },
                { t: "問題が起きる前に気づける", d: "ミスや遅れの兆候が、起きる前に見える状態に。" },
              ].map((o, i) => (
                <div key={i} className="outcome-item">
                  <span className="outcome-check"><Icon.Check /></span>
                  <div>
                    <div className="outcome-title">{o.t}</div>
                    <div className="outcome-desc">{o.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ツール屋ではない（ポジショニング） */}
      <section className="section" style={{ padding: "60px 0" }}>
        <div className="container-narrow fade-up">
          <div className="position-block">
            <div className="position-eyebrow">our motto</div>
            <h2 className="position-title">
              BitVoyage のモットー
            </h2>
            <p className="position-text">
              ツールを導入する前に、<br/>
              業務の<span className="underline-hand">流れ</span>を整える。<br/>
              必要な部分にだけ、ツールを入れる。
            </p>
            <p className="position-note">
              AIも、新しいツールも、流れに合えば取り入れます。
            </p>
          </div>
        </div>
      </section>

      {/* 5階層サービス（簡潔に） */}
      <ServiceFiveSteps />

      {/* CTA リボン */}
      <CTARibbon />

      {/* 事例パートナー */}
      <CasePartnerBlock />

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

/* ===== 5階層サービス（改善ノート行スタイル） ===== */
function ServiceFiveSteps() {
  const steps = [
    { n: "1", t: "小さな業務改善", sub: "毎日くり返す手作業を減らす", price: "5〜20万円", href: "service.html#small" },
    { n: "2", t: "業務領域の整理・自動化", sub: "1つの業務領域を、迷わず回る形に", price: "20〜80万円", href: "service.html#domain" },
    { n: "3", t: "業務構造診断パック", sub: "業務全体を整理したい会社向け", price: "15万円〜", href: "service.html#diagnose" },
    { n: "4", t: "継続改善サポート", sub: "外部の立場で優先順位を判断し続ける", price: "月額 5万円〜", href: "service.html#advisor" },
    { n: "5", t: "業務全体の整理・再構築", sub: "複数部門・複数業務にまたがる見直し", price: "50万円〜", href: "service.html#rebuild" },
  ];
  return (
    <section className="section" style={{ paddingTop: 60, paddingBottom: 80 }}>
      <div className="container-narrow fade-up">
        <div className="home-service-heading">
          <div className="section-eyebrow">service</div>
          <h2>
            1つの業務から、<span className="marker">会社全体の流れ</span>まで。
          </h2>
          <p>
            5つのサービスを、御社の状況に合わせて組み合わせます。
          </p>
        </div>
        <div className="service-five-grid">
          {steps.map(s => (
            <a key={s.n} href={s.href} className="service-five-row">
              <div className="service-five-tab">{s.n}</div>
              <div className="service-five-content">
                <h3 className="service-five-title">{s.t}</h3>
                <p className="service-five-sub">{s.sub}</p>
              </div>
              <div className="service-five-price">{s.price}</div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a href="service.html" className="btn btn-outline">
            サービス詳細を見る <Icon.ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===== 事例パートナー特典ブロック（募集ポスター） ===== */
function CasePartnerBlock() {
  return (
    <section className="section case-partner-section">
      <div className="container-narrow fade-up">
        <div className="case-partner-card">
          <div className="case-partner-stamp" aria-hidden="true">
            <span className="case-partner-stamp-large">募集中</span>
            <span className="case-partner-stamp-small">先着3社</span>
          </div>
          <h2 className="case-partner-title">
            事例パートナー、<span className="underline-hand">募集中</span>。
          </h2>
          <p className="case-partner-lead">
            ご契約後の最初の「小さな業務改善」1件を、
          </p>
          <div className="case-partner-headline">
            <span className="case-partner-half">半 額</span>
            <span className="case-partner-suffix">でご提供。</span>
          </div>
          <div className="case-partner-condition">
            <div className="case-partner-condition-label">条件</div>
            <p className="case-partner-condition-text">
              改善前と改善後の状態を、<br className="mobile-only"/>事例として公開させていただける企業様<br/>
              社名公開を歓迎。<br className="mobile-only"/>ご希望により業種のみの公開でも可
            </p>
          </div>
          <p className="case-partner-note">
            ※ 3社埋まり次第、本特典は終了します。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ===== 3ステップサービス（HomeB / HomeC 用、互換維持） ===== */
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

/* ===== CTA リボン（TimeRex 予約埋め込み・開閉式） ===== */
function CTARibbon({ minimal = false }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    if (document.getElementById('timerex_embed')) {
      if (window.TimerexCalendar) window.TimerexCalendar();
      return;
    }
    var script = document.createElement('script');
    script.id = 'timerex_embed';
    script.src = 'https://asset.timerex.net/js/embed.js';
    script.async = true;
    script.onload = function () {
      if (window.TimerexCalendar) window.TimerexCalendar();
    };
    document.body.appendChild(script);
  }, [open]);

  return (
    <section id="contact" className="section" style={{ padding: minimal ? "60px 0" : "40px 0 60px" }}>
      <div className="container-narrow">
        <p style={{ textAlign: "center", fontSize: 16, color: "var(--ink-700)", marginBottom: 24 }}>
          まずは60分、今 困っていることをお聞かせください。
        </p>
        <div style={{ background: "var(--yellow-500)", padding: "36px 40px", borderRadius: 16, textAlign: "center", boxShadow: "var(--shadow-md)", position: "relative" }}>
          <div style={{ position: "absolute", top: 10, left: 20, fontSize: 11, fontFamily: "var(--font-hand)", color: "var(--navy-900)", opacity: 0.7 }}>お気軽にどうぞ</div>
          <h2 className="cta-ribbon-title" style={{ margin: 0, fontWeight: 800, color: "var(--navy-900)", letterSpacing: "0.02em" }}>
            無料60分相談 +<br/>
            ご提案メモ。
          </h2>
          <div style={{ margin: "16px auto 24px", width: 80, height: 2, background: "var(--navy-900)" }}></div>
          <p style={{ margin: 0, fontSize: 16, color: "var(--navy-900)", fontWeight: 600, lineHeight: 1.85 }}>
            現状を整理し、どこから改善すべきかの<br className="mobile-only"/>
            入口をご案内します。
          </p>
          <div className="cta-feature-row">
            <div className="cta-feature">ご提案メモが付く</div>
            <div className="cta-feature">オンライン全国対応</div>
            <div className="cta-feature">出張も可（交通費別）</div>
          </div>

          <div className="contact-box" style={{ marginTop: 28 }}>
            <button
              type="button"
              className="btn btn-contact"
              aria-expanded={open}
              aria-controls="timerex-embed-wrap"
              onClick={() => setOpen(v => !v)}
              style={{ background: "var(--navy-900)", color: "#fff" }}
            >
              {open ? "カレンダーを閉じる" : "無料60分相談を予約する"}
            </button>
          </div>
        </div>

        {/* TimeRex 予約カレンダー埋め込み（開いたときだけ） */}
        {open && (
          <div id="timerex-embed-wrap" className="timerex-embed-wrapper">
            <div
              id="timerex_calendar"
              data-url="https://timerex.net/s/contact_7751_a6d8/d844c8aa"
            ></div>
          </div>
        )}

        <p className="contact-note">
          予約以外のお問い合わせは <a href="mailto:contact@bitvoyage.co.jp">contact@bitvoyage.co.jp</a> までお気軽にどうぞ。
        </p>
      </div>
    </section>
  );
}

window.HomeA = HomeA;
window.HomeB = HomeB;
window.HomeC = HomeC;
window.ServiceThreeSteps = ServiceThreeSteps;
window.ServiceFiveSteps = ServiceFiveSteps;
window.CasePartnerBlock = CasePartnerBlock;
window.CTARibbon = CTARibbon;
window.TangleIllustration = TangleIllustration;
