// service-page.jsx — サービス詳細ページ（4ステップ構成）

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
      title: "作業見直し相談",
      tagline: "売上につながらない作業を、まず一緒に見直す",
      price: "無料",
      priceNote: "オンライン／対面どちらも可。何を頼めばいいか決まっていなくて大丈夫です。",
      illustration: "assets/illustrations/01-person-thinking.png",
      description: [
        "毎月くり返している手作業や、売上につながらないのに時間を取っている作業を、一緒に確認します。",
        "いきなりシステムを作るのではなく、まずは「どこに時間を取られているか」「何から減らせそうか」を整理するところから始めます。",
      ],
      sections: [
        { kind: "list", label: "相談で確認すること", variant: "dot", items: [
          "毎月くり返している作業",
          "手入力や転記が発生している作業",
          "確認連絡が多い作業",
          "探す・聞く・待つが多い作業",
          "特定の人に寄っている作業",
          "今すぐ減らせそうな作業",
          "後回しでよい作業",
        ] },
        { kind: "list", label: "相談のあとは（必要に応じて）", variant: "check", items: [
          "小さな作業をひとつ減らす",
          "現場を見て、減らせる仕事を整理する",
          "継続して減らすサポート",
        ] },
        { kind: "note", text: "売り込みはしません。その場で減らせそうなことがあれば、その場でお伝えします。" },
      ],
    },
    {
      id: "small",
      num: "2",
      title: "小さな作業をひとつ減らす",
      tagline: "大きな改善ではなく、まず1つだけ具体的に減らす",
      price: "3万円〜",
      priceNote: "まず1つの作業に絞って小さく始める場合の目安。固定料金ではなく、内容を確認のうえ事前にお見積りします。",
      illustration: "assets/illustrations/service-01-small-improvement.png",
      description: [
        "名刺整理・領収書整理・転記・集計・確認連絡など、毎月くり返している作業を、まず1つに絞って小さく減らします。",
        "いきなり大きく変えるのではなく、実際に「楽になった」と感じられる小さな改善から始めます。",
      ],
      sections: [
        { kind: "list", label: "減らせる作業の例", variant: "dot", items: [
          "名刺整理", "領収書整理", "手入力", "転記", "集計",
          "確認連絡", "日程調整", "簡単な一覧化", "Excel・スプレッドシートの整理",
        ] },
        { kind: "list", label: "含まれる内容", variant: "check", items: [
          "対象作業の簡単な確認",
          "減らせる部分の整理",
          "既存環境に合わせた実装・設定",
          "使い方の共有",
          "必要最低限の運用ルール整理",
        ] },
        { kind: "note", text: "3万円〜は、まず1つの作業に絞って小さく始める場合の目安です。固定の料金ではありません。作業範囲・利用環境・データの扱い方によって金額は変わるため、内容を確認したうえで、事前にお見積りをお渡しします。" },
        { kind: "list", label: "とくに金額が変わりやすい要素", variant: "muted", items: [
          "対象が1つの作業か、業務全体の整理まで必要か",
          "1人で使うか、複数人で使うか",
          "権限・共有設定が必要か",
          "AI や API 連携が必要か",
          "既存データの移行が必要か",
          "新しい仕組みをつくる必要があるか",
        ] },
        { kind: "flow", label: "進め方", steps: ["対象作業の確認", "減らせる部分の整理", "実装・設定", "使い方の共有"] },
      ],
    },
    {
      id: "onsite",
      num: "3",
      title: "現場を見て、減らせる仕事を整理する",
      tagline: "一度現場を見て、減らせる作業を整理する",
      price: "5万円〜",
      priceNote: "まずは2〜3時間の現場確認から。広島県内は訪問／県外は要相談（出張可・交通費別）。",
      illustration: "assets/illustrations/08-icon-search-doc.png",
      description: [
        "「どこから手をつければいいか分からない」会社向けの現場確認です。2〜3時間ほど、実際の作業や情報の流れを見せていただきます。",
        "手入力・転記・確認連絡・探し物・待ち時間など、売上につながらないのに時間を取っている作業を確認し、減らせそうな作業を整理します。",
        "多くの場合、2〜3時間 見せていただければ、どこから減らせそうかの見当はつきます。後日、減らせる作業の候補と、次に何から始めるとよいかをお伝えします。",
      ],
      sections: [
        { kind: "note", text: "※ 差し支えない範囲で、日々の作業や情報の流れ（帳票・Excel・紙・システム・連絡方法など）を見せていただきます。すべてを開示いただく必要はありません。" },
        { kind: "list", label: "現場で確認すること（2〜3時間）", variant: "check", items: [
          "日々の作業・帳票・Excel・紙・システム・連絡方法の確認",
          "手入力・転記・確認連絡・探し物・待ち時間の確認",
          "減らせそうな作業を3〜5個ほど抽出",
          "次に何から始めるべきかの簡易提案",
        ] },
        { kind: "list", label: "現場を見たあとに、分かること・ご提案すること", variant: "check", items: [
          "どの作業に時間を取られているか",
          "まず減らせそうな作業はどれか",
          "小さく始めるなら、どこからがよいか",
          "次に進める場合の進め方",
        ] },
        { kind: "note", text: "重い診断レポートを作って終わり、ではありません。目的は「次に減らす作業を決める」ことです。まずは一度、現場を見せてもらう くらいの気軽さで大丈夫です。" },
      ],
    },
    {
      id: "support",
      num: "4",
      title: "継続して減らすサポート",
      tagline: "改善を後回しにしないための、外部パートナー",
      price: "月額 5万円〜",
      priceNote: "毎月の改善ミーティング＋軽微作業（月2時間）込み。大きな実装は別途お見積り。",
      illustration: "assets/illustrations/09-icon-support.png",
      description: [
        "忙しい現場では、改善はどうしても後回しになります。BitVoyage が外部の立場で毎月入り、売上につながらない作業を一緒に確認し、次に減らすことを決めて進めます。優先順位を整理して進捗を確認することで、改善が止まらない状態をつくります。",
        "月内の範囲で、軽微な修正・設定作業にも対応します。たとえば、Excel・スプレッドシートの整理、項目追加、簡単な関数修正、管理表の調整、簡単な VBA・GAS の修正などです。",
        "本格的に作りたいものが出てきても、対応できます。新しいツールの作成や業務システム化、AI／API・外部サービス連携、運用検証や E2E テストが必要なものは、要件を確認し、設計・検証まで含めて別途お見積りします。顧問契約は、そうした実装をきちんと形にしていくための入口にもなります。",
      ],
      sections: [
        { kind: "list", label: "毎月の内容", variant: "check", items: [
          "月1回 60〜90分の改善ミーティング",
          "改善テーマの整理",
          "KPI・進捗の確認",
          "次に減らす作業の提案",
          "優先順位の整理",
          "チャット相談",
          "軽微な修正・設定作業（月2時間まで）",
        ] },
        { kind: "list", label: "顧問内で対応する軽微作業（月2時間まで）", variant: "dot", items: [
          "Excel・スプレッドシートの軽い修正",
          "項目追加",
          "簡単な関数修正",
          "管理表の整理",
          "運用ルールの文章化",
          "使い方の説明",
          "KPI 確認用の簡単な表作成",
          "既存ツールの軽い調整",
          "月2時間で収まる簡単な VBA・GAS の修正／小さな自動化",
        ] },
        { kind: "list", label: "別途お見積りになるもの", variant: "muted", items: [
          "新規ツール作成",
          "複数人で使う仕組みの構築",
          "予約管理・顧客管理などの業務システム化",
          "GAS / VBA の本格実装",
          "AI／API 連携",
          "外部サービス連携",
          "データ移行",
          "運用検証や E2E テストが必要なもの",
          "セキュリティ・権限設計が必要なもの",
        ] },
        { kind: "note", text: "線引きは「作る／作らない」ではありません。その場で確認しながら、月2時間の範囲で安全に直せるものは対応します。要件確認・設計・検証・運用設計が必要なものは、別途お見積りします。" },
      ],
    },
  ];

  const cases = [
    {
      title: "個別連絡・確認の作業",
      illustration: "assets/illustrations/04-icon-mail-person.png",
      problem: "1件ずつ手で送る連絡に、毎回 時間とミスが発生",
      result: <>一括送信＋個別差し込みで、連絡に使う<span className="marker">時間を大幅に削減</span></>,
    },
    {
      title: "計算・集計の作業",
      illustration: "assets/illustrations/05-icon-chart-calc.png",
      problem: "外部ソフト頼みで、毎月のコストと手間が増加",
      result: <>自社で回せる形にして、集計の<span className="marker">時間とコストを削減</span></>,
    },
    {
      title: "製造工程の管理",
      illustration: "assets/illustrations/06-icon-gears-checklist.png",
      problem: "やり方が人によって違い、〇〇さん頼みが常態化",
      result: <>記録の一元化で、誰がやっても同じになり<span className="marker">確認の手間を削減</span></>,
    },
    {
      title: "情報探し・書類整理",
      illustration: "assets/illustrations/07-icon-folder-flow.png",
      problem: "情報が散らばり、探す・確認する時間がかかる",
      result: <>置き場を決めて、<span className="marker">探す時間をほぼゼロに</span></>,
    },
  ];

  return (
    <div className="page bg-grid">
      <TopNav currentPage="service" />
      <section className="page-hero service-hero">
        <div className="container-narrow fade-up" style={{ textAlign: "center" }}>
          <div className="section-eyebrow">service</div>
          <h1 className="page-hero-title">
            売上につながらない作業を、<span className="underline-hand">減らす</span>
          </h1>
          <p className="page-hero-lead">
            手入力・転記・集計・領収書整理・日程調整……。<br/>
            毎日 時間を奪っている作業を、まずは一緒に見直します。<br/>
            小さく1つ減らすところから、現場整理、継続的な改善まで。
          </p>
        </div>
      </section>

      {/* 4ステップの流れ（ジャンプナビ兼サービス一覧） */}
      <section className="service-jump-section">
        <div className="container-narrow fade-up">
          <p style={{ textAlign: "center", fontSize: 14, color: "var(--ink-700)", margin: "0 0 20px" }}>
            「何を減らせばいいか分からない」状態からで大丈夫です。<br className="mobile-only"/>
            まず相談 → 小さく1つ減らす → 現場を見て整理 → 継続、の流れで進めます。
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
              <span className="marker">減らせた作業</span>の例（一部）
            </h2>
            <p style={{ fontSize: 15, color: "var(--ink-700)", lineHeight: 1.9, margin: "12px 0 0" }}>
              こんな作業に使う時間が、こう減っています。
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
            { q: "どこから始めるのが良いですか？", a: "まずは無料の「①作業見直し相談」からで大丈夫です。何を減らせばいいか決まっていなくても、一緒に「どこに時間を取られているか」を確認します。そのうえで、②小さく1つ減らす・③現場を見て整理する・④継続して減らす、のどれに進むかをご案内します。" },
            { q: "②小さな作業をひとつ減らすと④継続して減らすサポートは、何が違うのですか？", a: "②は「この作業を減らしてほしい」という1件単位の依頼です。④は、毎月一緒に「次に減らせる作業」を決めて進める顧問契約で、改善が後回しにならないように外部から伴走します。" },
            { q: "③現場を見て整理すると、何がもらえるのですか？", a: "2〜3時間の現場確認です。実際の作業や情報の流れを見せていただき、「時間を取られている作業」「減らせそうな作業（3〜5個ほど）」「次に着手しやすい改善案」を整理してお伝えします。多くの場合、2〜3時間で どこから減らせそうかの見当はつきます。重い診断レポートを売るのではなく、次に減らす作業を決めるためのものです。" },
            { q: "ツールやシステムは何を使うのですか？", a: "会社の環境に合わせます。Excel で十分なら Excel、スプレッドシートが合えば Google、Microsoft 365 をお使いならその環境で。新しいツールを入れることよりも、今ある作業を減らすことを優先します。AI・API・新規システムが必要な場合は、内容に応じて別途お見積りします。" },
            { q: "対応エリアはどこまでですか？", a: "無料相談やオンラインで進められるサービスは全国対応可能です。③現場を見て整理するなど現場確認を含むものは、広島県内（広島・東広島・呉）を中心に現場訪問で対応しています。県外の場合は要相談（出張可・交通費別）です。" },
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
