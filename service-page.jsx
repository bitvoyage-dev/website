// service-page.jsx — サービス詳細ページ

function ServicePage() {
  useRevealOnScroll();
  const details = [
    {
      id: "diagnose",
      num: "1",
      title: "小さな業務改善",
      tagline: "まずは1つの業務から改善します",
      scope: "数時間〜数日で対応できる範囲",
      price: "数万円〜",
      duration: "※数時間〜数日で対応できる範囲",
      icon: <Icon.Diagnose size={72} />,
      description: "転記・手作業・確認作業などのムダを見つけ、すぐに変えられるところから改善します。業務を見ながら、その場で直せる部分はそのまま改善します。",
      deliverables: [
        "改善内容の実装（または設定）",
        "簡単な運用方法の共有",
      ],
      flow: ["業務内容を確認（オンライン可）", "改善ポイントを提案", "実際に改善"],
    },
    {
      id: "advisor",
      num: "2",
      title: "継続改善サポート",
      tagline: "改善を止めず、継続的に回していきます",
      scope: "小さな改善を中心に対応",
      price: "月額 5万円〜",
      duration: "※日々の業務の中で完結する改善を対象とします",
      icon: <Icon.Advisor size={72} />,
      description: "業務を見ながら、小さな改善を積み重ねていきます。優先順位を決めながら、無理なく改善を続けます。",
      deliverablesLabel: "対応内容",
      deliverables: [
        "改善テーマの整理と優先順位決定",
        "小さな業務改善の実施",
        "定期的な状況確認と次の打ち手の整理",
        "改善の進行管理（止まらない状態の維持）",
      ],
      note: "※大きな仕組み変更・システム構築は別途プロジェクト対応",
      flow: ["改善テーマの整理", "優先順位の決定", "小さな改善の実施", "定期的な振り返り・次の改善決定"],
    },
    {
      id: "implement",
      num: "3",
      title: "業務の整理・再構築",
      tagline: "業務の流れをつくり直します",
      scope: "大きな変更はプロジェクト対応",
      price: "個別お見積り",
      duration: "※複数業務・複数人に関わる改善が対象",
      icon: <Icon.Implement size={72} />,
      description: "業務全体を見直し、止まらず回る形に整えます。必要に応じて、ツールや仕組みも含めて改善します。",
      deliverablesLabel: "対応内容",
      deliverables: [
        "業務全体の流れの整理",
        "詰まりや属人化の解消",
        "運用ルール・仕組みの設計",
        "必要に応じたツール・システムの導入／構築",
      ],
      flow: ["現状の業務整理", "課題・構造の特定", "改善方針の設計", "仕組み・ツールの整備", "運用への定着支援"],
    },
  ];

  return (
    <div className="page bg-grid">
      <TopNav currentPage="service" />
      <section className="page-hero service-hero">
        <div className="container-narrow fade-up" style={{ textAlign: "center" }}>
          <div className="section-eyebrow">service</div>
          <h1 className="page-hero-title">
            小さく改善し、<br className="mobile-only"/>
            <span className="underline-hand">無理なく続ける</span>
          </h1>
          <p className="page-hero-lead">
            まずは小さな改善から始め、必要に応じて継続・全体改善へと進めていきます。
          </p>
        </div>
      </section>

      {/* サービス一覧カード */}
      <section className="service-jump-section">
        <div className="container">
          <div className="service-jump-grid">
            {details.map(d => (
              <a key={d.id} href={`#${d.id}`} className="card fade-up" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span className="num-badge">{d.num}</span>
                  <h3 style={{ fontSize: 20, margin: 0, color: "var(--navy-900)" }}>{d.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: "var(--ink-700)", margin: "0 0 4px" }}>{d.tagline}</p>
                <p style={{ fontSize: 14, color: "var(--ink-700)", margin: "0 0 22px", lineHeight: 1.8, fontWeight: 800 }}>{d.scope}</p>
                <div style={{ fontSize: 15, color: "var(--ink-700)", fontWeight: 500 }}>
                  料金：{d.price}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 各サービス詳細 */}
      {details.map((d, i) => (
        <section key={d.id} id={d.id} className="service-detail-section" style={{ background: i % 2 === 0 ? "var(--paper-2)" : "transparent" }}>
          <div className="container fade-up">
            <div className="service-detail-grid">
              <div className="service-detail-aside">
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span className="num-badge" style={{ width: 44, height: 44, fontSize: 22 }}>{d.num}</span>
                  <h2 className="service-detail-title">{d.title}</h2>
                </div>
                <p style={{ fontFamily: "var(--font-hand)", color: "var(--navy-700)", fontSize: 16, margin: "0 0 20px" }}>
                  — {d.tagline} —
                </p>
                <div style={{ color: "var(--navy-800)", margin: "24px 0" }}>{d.icon}</div>
                <div style={{ background: "var(--yellow-200)", padding: "16px 20px", borderRadius: 10, marginTop: 20 }}>
                  <div style={{ fontSize: 13, color: "var(--navy-900)", fontWeight: 700, marginBottom: 4 }}>価格</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "var(--navy-900)" }}>{d.price}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-700)", marginTop: 4 }}>{d.duration}</div>
                </div>
              </div>
              <div className="service-detail-main">
                <p className="service-description">
                  {d.description}
                </p>
                <div style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 15, color: "var(--navy-900)", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 8 }}>
                    <Icon.Doc size={18} /> {d.deliverablesLabel || "お渡しするもの"}
                  </h3>
                  <div style={{ background: "#fff", padding: 20, borderRadius: 10, border: "1px solid var(--line)" }}>
                    {d.deliverables.map(x => (
                      <div key={x} className="check-item"><span className="check-box"></span><span style={{ fontSize: 14 }}>{x}</span></div>
                    ))}
                  </div>
                  {d.note && (
                    <p style={{ fontSize: 13, color: "var(--ink-500)", lineHeight: 1.8, margin: "12px 0 0" }}>{d.note}</p>
                  )}
                </div>
                <div>
                  <h3 style={{ fontSize: 15, color: "var(--navy-900)", margin: "0 0 12px" }}>進め方</h3>
                  <div className="service-flow">
                    {d.flow.map((f, idx) => (
                      <React.Fragment key={f}>
                        <span style={{ padding: "8px 14px", background: "#fff", border: "1px solid var(--line)", borderRadius: 999, fontSize: 13, color: "var(--ink-900)" }}>
                          <span style={{ color: "var(--navy-700)", marginRight: 6, fontWeight: 700 }}>{idx + 1}</span>{f}
                        </span>
                        {idx < d.flow.length - 1 && <span className="service-flow-arrow">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* よくあるご質問 */}
      <section className="section" style={{ padding: "80px 0" }}>
        <div className="container-narrow fade-up">
          <h2 className="section-title" style={{ fontSize: 28, textAlign: "center", marginBottom: 32 }}>
            <span className="marker">よくある</span>ご質問
          </h2>
          {[
            { q: "どこまで対応してもらえますか？", a: "小さな業務改善から、業務全体の整理・再構築まで対応しています。内容に応じて、顧問・プロジェクトとして進めます。" },
            { q: "小さな改善とはどのくらいの内容ですか？", a: "数時間〜数日で対応できる業務改善が対象です。転記作業の削減や、手作業の簡略化などから対応します。" },
            { q: "顧問サポートでは何をしてもらえますか？", a: "小さな改善を中心に、優先順位を決めながら継続的に改善を進めます。大きな仕組み変更やシステム構築は別途プロジェクトとして対応します。" },
            { q: "ツールやシステムの提案も可能ですか？", a: "必要に応じて、ツールの選定から設定・開発まで対応します。作るだけでなく、現場で使える形まで整えます。" },
            { q: "対応エリアはどこまでですか？", a: "オンラインでの対応は全国可能です。現地対応は主に広島県内を中心に行っています。" },
          ].map((f, i) => (
            <details key={i} className="card" style={{ marginBottom: 12, padding: 0 }}>
              <summary style={{ padding: "18px 24px", cursor: "pointer", fontWeight: 700, color: "var(--navy-900)", fontSize: 16, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span><span style={{ color: "var(--yellow-500)", marginRight: 10, fontFamily: "var(--font-hand)" }}>Q.</span>{f.q}</span>
                <span style={{ color: "var(--navy-700)" }}>＋</span>
              </summary>
              <div style={{ padding: "0 24px 20px", color: "var(--ink-700)", fontSize: 15, lineHeight: 1.9 }}>
                <span style={{ color: "var(--navy-700)", marginRight: 10, fontFamily: "var(--font-hand)" }}>A.</span>{f.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      <CTARibbon />
      <SiteFooter />
    </div>
  );
}

window.ServicePage = ServicePage;
