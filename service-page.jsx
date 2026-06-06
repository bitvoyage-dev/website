// service-page.jsx — サービス詳細ページ（サービス構成）

/* ===== サービス詳細内の各コンテンツブロック ===== */
function ServiceListBox({ label, items, variant = "dot" }) {
  const muted = variant === "muted";
  const boxStyle = muted
    ? { background: "var(--paper-2)", padding: 20, borderRadius: 10, border: "1px dashed var(--line)" }
    : { background: "#fff", padding: 20, borderRadius: 10, border: "1px solid var(--line)" };
  return (
    <div style={{ marginBottom: 28 }}>
      {label && (
        <h3 style={{ fontSize: 15, color: muted ? "var(--ink-500)" : "var(--navy-900)", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 8 }}>
          {variant === "check" && <Icon.Doc size={18} />}{label}
        </h3>
      )}
      <div style={boxStyle}>
        {items.map(x =>
          variant === "check" ? (
            <div key={x} className="check-item"><span className="check-box"></span><span style={{ fontSize: 14 }}>{x}</span></div>
          ) : (
            <div key={x} style={{ display: "flex", gap: 8, padding: "3px 0", fontSize: 14, color: muted ? "var(--ink-700)" : "var(--ink-900)" }}>
              <span style={{ color: muted ? "var(--ink-500)" : "var(--yellow-500)", fontWeight: 700 }}>{muted ? "—" : "・"}</span>{x}
            </div>
          )
        )}
      </div>
    </div>
  );
}

function ServiceTimeline({ label, steps }) {
  return (
    <div style={{ marginBottom: 28 }}>
      {label && <h3 style={{ fontSize: 15, color: "var(--navy-900)", margin: "0 0 16px" }}>{label}</h3>}
      <div style={{ borderLeft: "2px solid var(--yellow-200)", paddingLeft: 22, display: "grid", gap: 18 }}>
        {steps.map(s => (
          <div key={s.time} style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: -29, top: 3, width: 12, height: 12, borderRadius: "50%", background: "var(--yellow-500)", border: "2px solid #fff" }}></span>
            <div style={{ display: "flex", gap: 10, alignItems: "baseline", flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-hand)", fontWeight: 700, color: "var(--navy-800)", fontSize: 15 }}>{s.time}</span>
              <span style={{ fontWeight: 700, color: "var(--navy-900)", fontSize: 15 }}>{s.title}</span>
            </div>
            {s.desc && <div style={{ fontSize: 13.5, color: "var(--ink-700)", lineHeight: 1.8, marginTop: 4 }}>{s.desc}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceCallout({ label, lines }) {
  return (
    <div style={{ borderLeft: "4px solid var(--yellow-500)", background: "var(--yellow-100)", padding: "18px 22px", borderRadius: "0 10px 10px 0", margin: "0 0 28px" }}>
      {label && <div style={{ fontWeight: 800, color: "var(--navy-900)", marginBottom: 8, fontSize: 15 }}>{label}</div>}
      {lines.map(l => <p key={l} style={{ margin: "2px 0", fontSize: 14.5, color: "var(--navy-900)", lineHeight: 1.85 }}>{l}</p>)}
    </div>
  );
}

function ServiceSection({ section }) {
  if (section.kind === "list") return <ServiceListBox label={section.label} items={section.items} variant={section.variant} />;
  if (section.kind === "timeline") return <ServiceTimeline label={section.label} steps={section.steps} />;
  if (section.kind === "callout") return <ServiceCallout label={section.label} lines={section.lines} />;
  if (section.kind === "note") return <p style={{ fontSize: 13.5, color: "var(--ink-700)", lineHeight: 1.9, margin: "0 0 24px" }}>{section.text}</p>;
  if (section.kind === "flow") {
    return (
      <div style={{ marginBottom: 8 }}>
        {section.label && <h3 style={{ fontSize: 15, color: "var(--navy-900)", margin: "0 0 12px" }}>{section.label}</h3>}
        <div className="service-flow">
          {section.steps.map((f, idx) => (
            <React.Fragment key={f}>
              <span style={{ padding: "8px 14px", background: "#fff", border: "1px solid var(--line)", borderRadius: 999, fontSize: 13, color: "var(--ink-900)" }}>
                <span style={{ color: "var(--navy-700)", marginRight: 6, fontWeight: 700 }}>{idx + 1}</span>{f}
              </span>
              {idx < section.steps.length - 1 && <span className="service-flow-arrow">→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
  return null;
}

function ServicePage() {
  useRevealOnScroll();
  const details = [
    {
      id: "consult",
      num: "1",
      title: "作業の棚卸し相談",
      tagline: "減らせる作業があるか、まず一緒に確認する",
      price: "無料",
      priceNote: "オンライン／対面どちらも可（対面は広島市・東広島市・呉市内は無料、それ以外の地域は交通費のみ）。何を頼めばいいか決まっていなくても大丈夫です。",
      illustration: "assets/illustrations/01-person-thinking.png",
      description: [
        "毎月くり返している手作業や、売上につながらないのに時間を取っている作業を伺います。",
        "無料相談では、作業そのものを改善するのではなく、「どこに時間を取られているか」「何から減らせそうか」を一緒に確認します。",
      ],
      sections: [
        { kind: "list", label: "相談で確認すること", variant: "dot", items: [
          "毎月くり返している作業",
          "手入力や転記が発生している作業",
          "確認連絡が多い作業",
          "探す・聞く・待つが多い作業",
          "特定の人に寄っている作業",
          "減らせそうな作業",
          "今すぐ対応しなくてよい作業",
        ] },
        { kind: "list", label: "相談のあとに進められること", variant: "check", items: [
          "小さな作業をひとつ減らす",
          "現場を見て、減らせる作業を整理する",
          "継続して減らすサポート",
        ] },
      ],
    },
    {
      id: "small",
      num: "2",
      title: "小さな作業をひとつ減らす",
      tagline: "対象が明確な作業を、1つだけ小さく整える",
      price: "3万円〜",
      priceNote: "対象作業が明確で、1つの表・作業に絞れる場合の目安です。固定料金ではなく、内容を確認のうえ事前にお見積りします。",
      illustration: "assets/illustrations/service-01-small-improvement.png",
      description: [
        "既存のExcel・紙・スプレッドシートなどをもとに、対象がはっきりしている作業を1つだけ小さく整えます。",
        "大きなシステム導入ではなく、入力しやすい表、簡単な管理表、チェックリストなど、実際に「少し楽になった」と感じられる改善から始めます。",
        "何から手をつけるべきか整理が必要な場合や、複数の工程にまたがる場合は、先に作業整理・現場確認をご案内します。",
      ],
      sections: [
        { kind: "list", label: "3万円〜で対応しやすい作業の例", variant: "dot", items: [
          "既存Excelの整理",
          "入力しやすい管理表の作成",
          "備品管理表",
          "名簿・顧客リストの整理",
          "チェックリスト作成",
          "簡単な集計表",
          "紙の記録表のExcel化",
          "スプレッドシートへの移行",
          "入力規則・プルダウン設定",
          "毎月使う表の見やすさ改善",
        ] },
        { kind: "list", label: "含まれる内容", variant: "check", items: [
          "対象作業の確認",
          "減らせる部分の整理",
          "既存環境に合わせた作成・設定",
          "簡単な動作確認",
          "使い方の共有",
          "必要最低限の運用ルール整理",
        ] },
        { kind: "note", text: "3万円〜は、対象作業が明確で、1つの表・作業に絞れる場合の目安です。複数工程にまたがるもの、業務全体の整理が必要なもの、設計・検証が必要なものは、作業整理・現場確認または別途お見積りとなります。" },
        { kind: "flow", label: "進め方", steps: ["対象作業の確認", "減らせる部分の整理", "作成・設定", "動作確認", "使い方の共有"] },
      ],
    },
    {
      id: "onsite",
      num: "3",
      title: "現場を見て、減らせる作業を整理する",
      tagline: "何から減らすべきか、現場を見て整理する",
      price: "5万円〜",
      priceNote: "まずは2〜3時間の現場確認から。広島県内は訪問／県外は要相談（出張可・交通費別）。",
      illustration: "assets/illustrations/08-icon-search-doc.png",
      description: [
        "「どこから手をつければいいか分からない」会社向けに、実際の作業や情報の流れを確認します。",
        "手入力・転記・確認連絡・探し物・待ち時間など、売上につながらないのに時間を取っている作業を見つけ、減らせそうな作業を整理します。",
        "後日、改善候補と、次に何から始めるとよいかをお伝えします。",
      ],
      sections: [
        { kind: "note", text: "※ 差し支えない範囲で、日々の作業や情報の流れ（帳票・Excel・紙・システム・連絡方法など）を見せていただきます。すべてを開示いただく必要はありません。" },
        { kind: "list", label: "現場で確認すること（2〜3時間）", variant: "check", items: [
          "日々の作業・帳票・Excel・紙・システム・連絡方法の確認",
          "手入力・転記・確認連絡・探し物・待ち時間の確認",
          "減らせそうな作業の抽出",
          "次に何から始めるべきかの簡易提案",
        ] },
        { kind: "list", label: "整理後に分かること", variant: "check", items: [
          "どの作業に時間を取られているか",
          "まず減らせそうな作業はどれか",
          "小さく始めるならどこからがよいか",
          "次に進める場合の進め方",
        ] },
      ],
    },
    {
      id: "support",
      num: "4",
      title: "継続して減らすサポート",
      tagline: "改善を後回しにしないための、外部パートナー",
      price: "月額 5万円〜",
      priceNote: "毎月の改善ミーティング、チャット相談、軽微な表作成・修正対応込み。大きな実装や外部連携が必要なものは別途お見積り。",
      illustration: "assets/illustrations/09-icon-support.png",
      description: [
        "忙しい現場では、改善はどうしても後回しになります。BitVoyage が外部の立場で毎月入り、売上につながらない作業を一緒に確認し、次に減らすことを決めて進めます。",
        "優先順位を整理して進捗を確認することで、改善が止まらない状態をつくります。",
        "月内で対応できる範囲で、軽微な表作成・修正・設定作業にも対応します。たとえば、Excel・スプレッドシートの整理、簡単な管理表の作成、項目追加、関数修正、チェックリスト作成、運用ルールの文章化などです。",
        "複数人で使う仕組みの構築、外部サービス連携、AI/API連携、権限設計、データ移行、運用検証が必要なものは、内容に応じて別途お見積りします。",
      ],
      sections: [
        { kind: "list", label: "毎月の内容", variant: "check", items: [
          "月1回 60分の改善ミーティング",
          "改善テーマの整理",
          "KPI・進捗の確認",
          "次に減らす作業の提案",
          "優先順位の整理",
          "チャット相談",
          "月内で対応できる軽微な表作成・修正対応",
        ] },
        { kind: "list", label: "継続サポートに含む軽微作業", variant: "dot", items: [
          "Excel・スプレッドシートの整理",
          "簡単な管理表の作成",
          "項目追加",
          "簡単な関数修正",
          "チェックリスト作成",
          "運用ルールの文章化",
          "使い方の説明",
          "KPI確認用の簡単な表作成",
          "既存ツールの軽い調整",
          "月内で対応できる小さな VBA・GAS の修正／自動化",
        ] },
        { kind: "note", text: "複数人で使う仕組み、外部サービス連携、AI/API連携、本格的な実装などが必要になった場合は、継続サポートの中で要件を整理し、「個別実装・仕組みづくり」として別途お見積りします。" },
      ],
    },
    {
      id: "implementation",
      num: "5",
      title: "個別実装・仕組みづくり",
      tagline: "整理した内容をもとに、必要な仕組みを形にする",
      price: "個別見積り",
      priceNote: "作る内容・利用人数・扱うデータ・運用方法を確認したうえで、お見積りします。",
      illustration: "assets/illustrations/10-icon-implementation.png",
      description: [
        "作業整理や継続サポートの中で見えてきた改善を、実際に使える仕組みとして形にします。",
        "Googleスプレッドシート、Excel、Googleフォーム、GAS、Webアプリなど、今ある環境や目的に合わせて進めます。",
        "複数人で使う仕組み、外部サービス連携、AI/API連携、権限設計や運用検証が必要なものは、内容を確認してお見積りします。",
      ],
      sections: [
        { kind: "list", label: "対応できることの例", variant: "dot", items: [
          "Googleスプレッドシートを使った管理表",
          "Googleフォームによる入力受付",
          "GmailやChatworkへの通知",
          "Excel・スプレッドシートの集計自動化",
          "紙やExcelで管理している情報のデータ化",
          "業務用Webアプリの作成",
          "AI/APIを使った情報整理や検索補助",
        ] },
        { kind: "note", text: "すでに対象が明確な小さな作業は「小さな作業をひとつ減らす」で対応できる場合があります。複数の作業が関わるものや、誰が・いつ・どの情報を使うかの整理が必要なものは、個別実装・仕組みづくりとして内容を確認します。" },
      ],
    },
  ];

  const cases = [
    {
      title: "個別連絡・確認作業",
      illustration: "assets/illustrations/04-icon-mail-person.png",
      problem: "1件ずつ手で送る連絡に、時間とミスの不安があった",
      result: <>一括送信＋個別差し込みで、連絡に使う<span className="marker">時間を削減</span></>,
    },
    {
      title: "分析・計算作業",
      illustration: "assets/illustrations/05-icon-chart-calc.png",
      problem: "専門的な分析に、外部ソフトの費用と手間がかかっていた",
      result: <>分析処理を内製化し、作業時間と<span className="marker">外部コストを削減</span></>,
    },
    {
      title: "手順・記録の整理",
      illustration: "assets/illustrations/06-icon-gears-checklist.png",
      problem: "人によって作業の進め方が違い、結果にばらつきが出やすい状態だった",
      result: <>作業手順と記録の残し方をそろえ、<span className="marker">再現性のある形</span>に整理</>,
    },
    {
      title: "情報の確認・検索",
      illustration: "assets/illustrations/07-icon-folder-flow.png",
      problem: "必要な情報を探すたび、資料や過去情報の確認に時間がかかっていた",
      result: <>必要な情報にたどり着きやすい形にし、<span className="marker">探す・確認する時間を削減</span></>,
    },
  ];

  return (
    <div className="page bg-grid">
      <TopNav currentPage="service" />
      <section className="page-hero service-hero">
        <div className="container-narrow fade-up" style={{ textAlign: "center" }}>
          <div className="section-eyebrow">service</div>
          <h1 className="page-hero-title">
            売上につながらない作業を、<span className="underline-hand">減らす</span>。
          </h1>
          <p className="page-hero-lead">
            手入力・転記・集計・確認連絡など、<br/>
            毎日少しずつ時間を奪っている作業を見つけ、<br/>
            小さな改善から、無理なく前に進めます。
          </p>
        </div>
      </section>

      {/* サービス一覧（ジャンプナビ） */}
      <section className="service-jump-section">
        <div className="container-narrow fade-up">
          <p style={{ textAlign: "center", fontSize: 14, color: "var(--ink-700)", margin: "0 0 20px" }}>
            「どこから手をつければいいか分からない」状態からで大丈夫です。<br className="mobile-only"/>
            まずは無料相談で減らせる作業を確認し、小さな改善・作業整理・継続サポート・個別実装へ段階的に進めます。
          </p>
          <div className="service-five-grid">
            {details.map(d => (
              <a key={d.id} href={`#${d.id}`} className="service-five-row">
                <div className="service-five-tab">{d.num}</div>
                <div className="service-five-content">
                  <h3 className="service-five-title">{d.title}</h3>
                  <p className="service-five-sub">{d.tagline}</p>
                </div>
                <div className="service-five-price">{d.price}</div>
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
                <div className="service-detail-illustration">
                  <img src={d.illustration} alt="" />
                </div>
                <div style={{ background: "var(--yellow-200)", padding: "16px 20px", borderRadius: 10, marginTop: 20 }}>
                  <div style={{ fontSize: 13, color: "var(--navy-900)", fontWeight: 700, marginBottom: 4 }}>価格</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "var(--navy-900)" }}>{d.price}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-700)", marginTop: 6, lineHeight: 1.7 }}>{d.priceNote}</div>
                </div>
              </div>
              <div className="service-detail-main">
                {d.description.map((p, idx) => (
                  <p key={idx} className="service-description" style={idx > 0 ? { marginTop: -8 } : undefined}>{p}</p>
                ))}
                {d.sections.map((s, idx) => <ServiceSection key={idx} section={s} />)}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 使う道具の方針 */}
      <section className="section" style={{ padding: "64px 0 32px" }}>
        <div className="container-narrow fade-up">
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <div className="section-eyebrow">our stance</div>
            <h2 className="section-title" style={{ fontSize: 26 }}>
              使う道具は、<span className="marker">会社ごと</span>に変わります。
            </h2>
          </div>
          <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 12, padding: "28px 32px", maxWidth: 640, margin: "0 auto", lineHeight: 2, fontSize: 15.5, color: "var(--ink-900)" }}>
            <p style={{ margin: "0 0 6px" }}>Excel で十分な場合は、Excel で。</p>
            <p style={{ margin: "0 0 6px" }}>Google スプレッドシートが合う場合は、Google で。</p>
            <p style={{ margin: "0 0 18px" }}>Microsoft 365 をお使いの場合は、その環境に合わせて。</p>
            <p style={{ margin: 0, fontWeight: 700, color: "var(--navy-900)" }}>
              新しいツールを入れることよりも、今ある作業を減らすことを優先します。
            </p>
          </div>
          <p style={{ textAlign: "center", fontSize: 13.5, color: "var(--ink-500)", lineHeight: 1.9, margin: "28px auto 0", maxWidth: 600 }}>
            複数部門にまたがる見直しや、会社全体の業務整理も対応可能です。<br className="mobile-only"/>
            まずは一部の作業から、段階的に進めることをおすすめしています。
          </p>
        </div>
      </section>

      {/* 減らせた作業の例 */}
      <section className="section cases-section" style={{ padding: "48px 0 80px", background: "var(--paper-2)" }}>
        <div className="container fade-up">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-eyebrow">cases</div>
            <h2 className="section-title" style={{ fontSize: 28 }}>
              これまで<span className="marker">対応してきた改善例</span>
            </h2>
            <p style={{ fontSize: 15, color: "var(--ink-700)", lineHeight: 1.9, margin: "12px 0 0" }}>
              日々の作業の中で、こうした手間を減らす改善に取り組んできました。
            </p>
          </div>
          <div className="cases-grid">
            {cases.map(c => (
              <div key={c.title} className="case-card fade-up">
                <h3 className="case-card-title">{c.title}</h3>
                <div className="case-card-illustration">
                  <img src={c.illustration} alt="" />
                </div>
                <p className="case-card-problem">{c.problem}</p>
                <div className="case-card-arrow" aria-hidden="true">
                  <svg width="22" height="40" viewBox="0 0 22 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4 q-1 12 0 24" />
                    <path d="M5 24 q4 4 6 8 q2 -4 6 -8" />
                  </svg>
                  <span>削減</span>
                </div>
                <p className="case-card-result">{c.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* よくあるご質問 */}
      <section className="section" style={{ padding: "80px 0" }}>
        <div className="container-narrow fade-up">
          <h2 className="section-title" style={{ fontSize: 28, textAlign: "center", marginBottom: 32 }}>
            <span className="marker">よくある</span>ご質問
          </h2>
          {[
            { q: "どこから始めるのが良いですか？", a: "まずは無料の「作業の棚卸し相談」からで大丈夫です。何を減らせばいいか決まっていなくても、どこに時間を取られているかを一緒に確認します。そのうえで、小さく1つ減らす・現場を見て整理する・継続して減らす、のどれに進むかをご案内します。" },
            { q: "「小さな作業をひとつ減らす」は、どんな場合に利用できますか？", a: "対象作業が明確で、1つの表・作業に絞れる場合に利用しやすいメニューです。たとえば、既存Excelの整理、簡単な管理表の作成、チェックリスト化、紙の記録表のExcel化などです。何から手をつけるべきか分からない場合や、複数の工程が関わる場合は、先に作業整理・現場確認をご案内します。" },
            { q: "「小さな作業をひとつ減らす」と「継続して減らすサポート」は、何が違うのですか？", a: "「小さな作業をひとつ減らす」は、対象が明確な1つの作業を小さく整えるスポット対応です。「継続して減らすサポート」は、毎月一緒に「次に減らせる作業」を決め、作って使いながら改善を続ける月額サポートです。改善が後回しにならないように、外部から伴走します。" },
            { q: "「現場を見て、減らせる作業を整理する」では、何が分かりますか？", a: "2〜3時間ほど現場や作業の流れを確認し、時間を取られている作業、減らせそうな作業、次に着手しやすい改善案を整理します。すぐに大きなシステムを作るのではなく、次に減らす作業を決めるための支援です。" },
            { q: "個別実装・仕組みづくりでは、どんなものを作れますか？", a: "作業整理や継続サポートの中で見えてきた内容をもとに、必要な仕組みを個別に作ります。たとえば、Googleスプレッドシートを使った管理表、Googleフォームによる入力受付、通知、集計自動化、Webアプリ、AI/APIを使った情報整理などです。利用人数・扱うデータ・運用方法によって必要な設計や検証が変わるため、内容を確認して個別にお見積りします。" },
            { q: "「小さな作業をひとつ減らす」と「個別実装・仕組みづくり」は、何が違うのですか？", a: "「小さな作業をひとつ減らす」は、対象が明確な1つの作業を小さく整えるメニューです。たとえば、既存Excelの整理、簡単な管理表の作成、チェックリスト化など、何を減らすかがはっきりしている場合に向いています。個別実装・仕組みづくりは、複数人で使う、複数の作業が関わる、外部サービス連携やAI/API連携が必要など、事前に設計や確認が必要なものです。誰が使うのか、どの情報を扱うのか、どの作業の前後につながるのかを確認したうえで、お見積りします。" },
            { q: "ツールやシステムは何を使うのですか？", a: "会社の環境に合わせます。Excelで十分ならExcel、スプレッドシートが合えばGoogle、Microsoft 365をお使いならその環境で進めます。新しいツールを入れることよりも、今ある作業を減らすことを優先します。軽微な表作成や修正は「小さな作業をひとつ減らす」または継続サポート内で対応できる場合がありますが、Webアプリ、AI/API連携、外部サービス連携、複数人で使う仕組み、運用検証が必要なものは内容に応じてお見積りします。" },
            { q: "対応エリアはどこまでですか？", a: "作業の棚卸し相談は、オンラインなら全国対応です。対面は広島市・東広島市・呉市内なら無料で、それ以外の地域は交通費のみご負担ください。現場を見て減らせる作業を整理するなど現場確認を含むものは、広島県内を中心に訪問対応しています（県外は要相談・出張可・交通費別）。" },
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
