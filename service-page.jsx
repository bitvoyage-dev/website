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
      tagline: "どこから減らせるかを整理し、漠然とした忙しさを見える形にします",
      feeling: "「何から手をつければ」が、「ここから減らせそう」に変わります。",
      price: "無料",
      priceNote: "オンライン／対面どちらも可（対面は広島市・東広島市・呉市内は無料、それ以外の地域は交通費のみ）。何を頼めばいいか決まっていなくても大丈夫です。",
      illustration: "assets/illustrations/01-person-thinking.png",
      description: [
        "毎月くり返している手作業や、売上につながらないのに時間を取っている作業を伺います。",
        "無料相談は、作業そのものを改善する場ではなく、「どこに時間を取られているか」「何から減らせそうか」を確認し、次に進む方向を決めるための相談です。",
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
          "小さな作業改善（3万円〜）",
          "標準的な業務改善（5万円〜）",
          "業務まわりの仕組み化（10万円〜）",
          "業務に合わせた個別構築（30万円〜）",
          "継続サポート（月額5万円〜）",
        ] },
      ],
    },
    {
      id: "small",
      num: "2",
      title: "小さな作業改善",
      tagline: "毎回の入力・確認を少し軽くし、日々の負担を減らします",
      feeling: "地味に面倒な作業が、ひとつ片づきます。",
      price: "3万円〜",
      priceNote: "入力表・管理表・チェックリスト・簡単な一覧化・簡単な集計表など、範囲が明確な小さな改善の目安です。固定料金ではなく、内容を確認のうえ事前にお見積りします。",
      illustration: "assets/illustrations/service-01-small-improvement.png",
      description: [
        "入力表、管理表、チェックリスト、簡単な一覧化、簡単な集計表など、範囲が明確な小さな改善をひとつ整えるメニューです。",
        "既存のExcel・紙・スプレッドシートなどをもとに、入力しやすい表や、確認しやすい一覧を作ります。",
        "チラシでご案内している入口メニューです。範囲を「小さな表・入力・整理」に絞ることで、3万円〜から始められます。",
      ],
      sections: [
        { kind: "list", label: "対応しやすい作業の例", variant: "dot", items: [
          "既存Excelの整理",
          "入力しやすい管理表の作成",
          "簡単な集計表",
          "簡単な一覧化",
          "紙の記録表のExcel化",
          "入力規則・プルダウン設定",
          "チェックリスト作成",
          "毎月使う表の見やすさ改善",
        ] },
        { kind: "list", label: "含まれる内容", variant: "check", items: [
          "対象作業の確認",
          "減らせる部分の整理",
          "既存環境に合わせた作成・設定",
          "簡単な動作確認",
          "使い方の共有",
        ] },
        { kind: "callout", label: "3万円〜の範囲について", lines: [
          "3万円〜の小さな作業改善は、範囲が明確な入力表・管理表・チェックリストなどを想定しています。",
          "通知、連携、自動処理、複数人での運用設計が必要な場合は、5万円〜または個別見積りとなります。",
        ] },
        { kind: "flow", label: "進め方", steps: ["対象作業の確認", "減らせる部分の整理", "作成・設定", "動作確認", "使い方の共有"] },
      ],
    },
    {
      id: "standard",
      num: "3",
      title: "標準的な業務改善",
      tagline: "くり返し作業を整え、確認に追われる時間を減らします",
      feeling: "毎月気を張っていた転記や集計が、「見て確認するだけ」になります。",
      price: "5万円〜",
      priceNote: "くり返し発生する転記・集計・CSV作成・確認作業などを減らす、標準的な改善の目安です。内容を確認のうえ事前にお見積りします。",
      illustration: "assets/illustrations/05-icon-chart-calc.png",
      description: [
        "毎月くり返している転記、集計、CSV作成、確認作業などを、現場に合う形で減らす標準的な改善です。",
        "簡単な自動処理や通知、複数シートをまたぐ集計など、3万円〜の小さな改善より少し広い範囲に対応します。",
        "今ある Excel・スプレッドシート・CSV を活かして、毎月の手間を減らします。",
      ],
      sections: [
        { kind: "list", label: "対応しやすい作業の例", variant: "dot", items: [
          "毎月の転記・集計の半自動化",
          "複数シートをまたぐ集計",
          "CSVを決まった形式に整える",
          "確認・チェック作業の効率化",
          "簡単な通知（メール・チャット）",
          "スプレッドシートへの移行と共有",
          "くり返し作業のテンプレート化",
        ] },
        { kind: "list", label: "含まれる内容", variant: "check", items: [
          "対象作業の確認",
          "入力・確認・出力の流れの整理",
          "作成・設定（関数・自動処理・CSV処理など）",
          "動作確認",
          "使い方の共有",
          "簡単な運用ルール整理",
        ] },
        { kind: "note", text: "外部サービス連携、帳票読取（OCR）、複数人での運用設計、権限管理などを含む場合は、「業務まわりの仕組み化」または個別見積りとなります。" },
        { kind: "flow", label: "進め方", steps: ["対象作業の確認", "流れの整理", "作成・設定", "動作確認", "使い方の共有"] },
      ],
    },
    {
      id: "workflow",
      num: "4",
      title: "業務まわりの仕組み化",
      tagline: "複数の作業をつなげ、対応漏れや探し物の不安を減らします",
      feeling: "「対応漏れてないかな」「あの書類どこだっけ」が、ほとんどなくなります。",
      price: "10万円〜30万円程度",
      priceNote: "複数の作業や道具を組み合わせる、業務まわりの仕組み化の目安です。内容を確認のうえ、事前にお見積りします。",
      illustration: "assets/illustrations/08-icon-search-doc.png",
      description: [
        "問い合わせ管理、領収書管理、通知、予定連携などを組み合わせ、毎月の確認・転記・集計を減らす仕組みを作ります。",
        "単発の表作成より広く、入出金やお金まわりの確認、受発注・在庫管理、顧客・案件の整理、日報集計など、毎月の流れそのものを楽にする改善です。",
        "最初から大きなシステムを作るのではなく、今の作業に合わせて、小さく使える形から整えます。",
      ],
      sections: [
        { kind: "list", label: "対応できることの例", variant: "dot", items: [
          "問い合わせ・対応状況の管理",
          "領収書・支出記録の整理",
          "入出金など、お金まわりの確認リストの作成",
          "受発注・在庫・備品などの管理表整備",
          "顧客・案件情報の一覧化と探しやすい整理",
          "日報・作業記録の集計表づくり",
          "GoogleスプレッドシートやGASを使った業務管理",
          "通知・予定連携で確認漏れを見つけやすくする仕組み",
        ] },
        { kind: "list", label: "含まれる内容", variant: "check", items: [
          "現在の作業の確認",
          "入力・確認・出力の流れの整理",
          "必要な管理表・確認リストの作成",
          "GAS・関数・CSV処理などの設定",
          "通知・連携の設定",
          "テスト運用",
          "使い方の共有",
          "簡単な運用ルール整理",
        ] },
        { kind: "note", text: "10万円〜30万円程度は、複数の作業や道具を組み合わせる仕組み化の目安です。AI/OCRを使った帳票読取、複数部門にまたがる業務改善、大規模な外部サービス連携、工程管理などは、内容を確認したうえで個別見積りとなります。" },
        { kind: "flow", label: "進め方", steps: ["対象業務の確認", "流れの整理", "試作", "テスト", "運用開始"] },
      ],
    },
    {
      id: "custom",
      num: "5",
      title: "業務に合わせた個別構築",
      tagline: "人に頼りきりの業務を、任せやすく続けられる形に整えます",
      feeling: "休む人がいても業務が止まらない。そこまで整えます。",
      price: "30万円〜／個別見積り",
      priceNote: "内容・利用人数・扱うデータ・運用方法を確認したうえで、個別にお見積りします。",
      illustration: "assets/illustrations/10-icon-implementation.png",
      description: [
        "複数の業務が関係する作業や、帳票読取、照合、複数人での運用、外部システム連携を含む仕組み化です。",
        "現状の流れを確認し、誰が・いつ・どの情報を使うのかを整理したうえで、業務に合わせた仕組みを設計します。",
        "単発の作業改善ではなく、業務全体の流れや運用ルールまで含めて整える場合のメニューです。",
      ],
      sections: [
        { kind: "list", label: "対応できることの例", variant: "dot", items: [
          "複数の業務にまたがる管理の仕組み化",
          "複数担当者で使う業務アプリの作成",
          "工程・進捗・案件などの管理",
          "日報・実績の集計と共有",
          "既存システム・外部サービスとの連携",
          "帳票・伝票の読み取りや照合（AI/OCRの活用）",
          "権限設計（誰が何を見られるかの整理）",
          "運用ルールの設計",
        ] },
        { kind: "note", text: "内容・利用人数・扱うデータ・運用方法を確認したうえで、個別にお見積りします。" },
      ],
    },
    {
      id: "support",
      num: "6",
      title: "継続改善サポート",
      tagline: "相談だけで終わらせず、小さな改善を毎月前に進めます",
      feeling: "改善が「いつかやろう」で止まらなくなります。",
      price: "月額5万円〜",
      priceNote: "毎月の相談＋軽微な修正・小さな改善・設定変更を一定時間内で対応。実装量が大きい場合や新しい仕組みづくりは別途お見積り。",
      illustration: "assets/illustrations/09-icon-support.png",
      description: [
        "毎月の相談に加えて、軽微な修正・小さな改善・設定変更などを一定時間内で対応します。",
        "Excel・スプレッドシートの整理、項目追加、関数修正、チェックリスト作成、運用ルールの文章化など、月内で対応できる範囲の軽微作業を含みます。",
        "実装量が大きい場合や、新しい仕組みを作る場合は、別途お見積もりします。",
      ],
      sections: [
        { kind: "list", label: "毎月の内容", variant: "check", items: [
          "月1回の相談",
          "改善内容の整理",
          "軽微な修正",
          "小さな設定変更",
          "既存の仕組みの見直し",
          "追加実装の相談",
        ] },
        { kind: "list", label: "継続サポートに含む軽微作業", variant: "dot", items: [
          "Excel・スプレッドシートの整理",
          "簡単な管理表の作成",
          "項目追加",
          "簡単な関数修正",
          "チェックリスト作成",
          "運用ルールの文章化",
          "月内で対応できる小さな VBA・GAS の修正／自動化",
        ] },
        { kind: "note", text: "複数業務にまたがる仕組み、外部サービス連携、AI/API連携、本格的な実装、権限設計や運用検証が必要なものは、別途お見積りします。" },
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
          <p className="page-hero-feeling">
            めざすところは、確認に追われない毎日です。
          </p>
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
            まずは無料相談で作業の流れを確認し、3万円〜の小さな作業改善、5万円〜の標準的な業務改善、10万円〜30万円程度の仕組み化、30万円〜の個別構築まで、内容に合わせて選べます。使いながら整えたい場合は、月額5万円〜の継続サポートもあります。
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
          <p style={{ textAlign: "center", fontSize: 12, color: "var(--ink-500)", margin: "14px 0 0" }}>
            ※ 表示価格はすべて税別です。
          </p>
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
                {d.feeling && <p className="service-detail-feeling">{d.feeling}</p>}
                <p style={{ fontFamily: "var(--font-hand)", color: "var(--navy-700)", fontSize: 16, margin: "0 0 20px" }}>
                  — {d.tagline} —
                </p>
                <div className="service-detail-illustration">
                  <img src={d.illustration} alt="" />
                </div>
                <div style={{ background: "var(--yellow-200)", padding: "16px 20px", borderRadius: 10, marginTop: 20 }}>
                  <div style={{ fontSize: 13, color: "var(--navy-900)", fontWeight: 700, marginBottom: 4 }}>価格</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "var(--navy-900)" }}>
                    {d.price}
                    {d.price !== "無料" && <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-700)", marginLeft: 6 }}>（税別）</span>}
                  </div>
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

      {/* BitVoyageの標準的な進め方 */}
      <section className="section" style={{ padding: "64px 0 32px" }}>
        <div className="container fade-up">
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <div className="section-eyebrow">our approach</div>
            <h2 className="section-title" style={{ fontSize: 26 }}>
              まずは、<span className="marker">小さく始められる仕組み</span>から。
            </h2>
          </div>

          <div style={{ maxWidth: 680, margin: "0 auto 36px", lineHeight: 2, fontSize: 15.5, color: "var(--ink-900)" }}>
            <p style={{ margin: "0 0 16px" }}>
              BitVoyage では、中小企業の業務改善で、いきなり大がかりな専用システムを作るのではなく、今の業務に近い形で小さく始められる方法から検討します。
            </p>
            <p style={{ margin: "0 0 16px" }}>
              たとえば Google Workspace（スプレッドシート・Gmail・Drive・フォーム・カレンダーなど）を組み合わせると、低コストで業務の自動化・見える化・通知・入力管理を実現できるケースが多くあります。専用の Web アプリや外部システムを最初から作ると、開発費・保守費・管理コストが大きくなりやすいためです。
            </p>
            <p style={{ margin: 0 }}>
              まずは現場で扱いやすく、変更しやすい仕組みから整え、必要に応じて段階的に広げていきます。将来的に限界が来た場合は、Web アプリや他システムとの連携も検討します。
            </p>
          </div>

          <div style={{ maxWidth: 420, margin: "0 auto 40px" }}>
            <img
              src="assets/illustrations/service-approach-flow.png"
              alt="散らかった書類が、整理されて流れるようになる様子"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <h3 style={{ textAlign: "center", fontSize: 17, color: "var(--navy-900)", fontWeight: 800, margin: "0 0 22px" }}>
            業務に合わせて、道具を使い分けます
          </h3>
          <div className="value-grid" style={{ marginBottom: 32 }}>
            {[
              { tag: "手元の作業に", tool: "Excel", desc: "既存業務の確認や、一時的な整理、個人で完結するローカルな作業の改善に向いています。" },
              { tag: "共有・自動化に", tool: "Google スプレッドシート + 自動化", desc: "複数人での共有、確認、通知、集計が必要な業務に向いています。Google Apps Script などを活用し、毎月くり返す作業を減らします。" },
              { tag: "本格運用に", tool: "Web アプリ・システム連携", desc: "複雑な権限管理、外部公開、大量データ、基幹業務化など、共有スプレッドシートでは難しくなった段階で検討します。" },
            ].map(r => (
              <div key={r.tool} className="card" style={{ background: "#fff" }}>
                <div style={{ fontFamily: "var(--font-hand)", fontSize: 15, color: "var(--navy-700)", fontWeight: 700, marginBottom: 6 }}>{r.tag}</div>
                <h4 style={{ fontSize: 17, color: "var(--navy-900)", margin: "0 0 10px", fontWeight: 800, lineHeight: 1.5 }}>{r.tool}</h4>
                <p style={{ fontSize: 14, color: "var(--ink-700)", lineHeight: 1.9, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ borderLeft: "4px solid var(--yellow-500)", background: "var(--yellow-100)", padding: "20px 24px", borderRadius: "0 10px 10px 0", maxWidth: 720, margin: "0 auto 32px", lineHeight: 1.95, fontSize: 15, color: "var(--navy-900)" }}>
            ただし、すべてを Google Workspace で解決するわけではありません。現在お使いの Excel、Microsoft 365、既存システム、会計ソフト、予約システムなども確認したうえで、費用対効果と運用しやすさを見ながら、無理なく続けられる方法を提案します。
          </div>

          <p style={{ textAlign: "center", fontWeight: 700, color: "var(--navy-900)", fontSize: 15.5, lineHeight: 1.9, margin: "0 auto", maxWidth: 640 }}>
            新しいツールを入れることよりも、今ある作業を減らすことを優先します。
          </p>
          <p style={{ textAlign: "center", fontSize: 13.5, color: "var(--ink-500)", lineHeight: 1.9, margin: "20px auto 0", maxWidth: 600 }}>
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
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <p style={{ fontSize: 14.5, color: "var(--ink-700)", lineHeight: 1.9, margin: "0 0 18px" }}>
              入金確認、領収書整理、問い合わせ管理、進捗の見える化など、<br className="mobile-only"/>
              作業別の具体的な改善例もご覧いただけます。
            </p>
            <a href="improvements.html" className="btn btn-outline">
              改善例を見る <Icon.ArrowRight />
            </a>
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
            { q: "どこから始めるのが良いですか？", a: "まずは無料の「作業の棚卸し相談」からで大丈夫です。何を減らせばいいか決まっていなくても、どこに時間を取られているかを一緒に確認します。そのうえで、小さな作業改善（3万円〜）、標準的な業務改善（5万円〜）、業務まわりの仕組み化（10万円〜）、業務に合わせた個別構築（30万円〜）のどれに進むか、または月額の継続サポートにするかをご案内します。" },
            { q: "「3万円〜」で、どこまで対応してもらえますか？", a: "3万円〜の小さな作業改善は、範囲が明確な入力表・管理表・チェックリスト・簡単な一覧化・簡単な集計表などを想定しています。通知、外部サービス連携、自動処理、複数人での運用設計、権限管理、OCR・AI処理、複数シートにまたがる管理などが必要な場合は、5万円〜の標準的な業務改善、または内容に応じて個別見積りとなります。何でも3万円で対応するわけではなく、範囲を明確にしてお見積りします。" },
            { q: "「小さな作業改善（3万円〜）」と「標準的な業務改善（5万円〜）」は何が違いますか？", a: "「小さな作業改善」は、入力表・管理表・チェックリストなど、範囲が明確な小さな改善をひとつ整えるメニューです。「標準的な業務改善」は、転記・集計・CSV作成・確認作業など、くり返し作業を減らす改善で、簡単な自動処理や通知、複数シートをまたぐ集計など、少し広い範囲に対応します。" },
            { q: "「業務まわりの仕組み化（10万円〜30万円程度）」では、どんなことができますか？", a: "問い合わせ管理、領収書管理、通知、予定連携などを組み合わせ、毎月の確認・転記・集計を減らす仕組みを作ります。たとえば、入出金などお金まわりの確認、受発注・在庫の管理表、顧客・案件情報の一覧化、日報の集計などです。単発の表作成より広く、毎月の流れそのものを楽にする改善です。" },
            { q: "「業務に合わせた個別構築（30万円〜）」では、どんなことができますか？", a: "複数の業務が関係する作業や、帳票読取、照合、複数人での運用、外部システム連携を含む仕組み化です。たとえば、複数業務にまたがる管理、複数担当者で使う業務アプリ、工程・進捗・案件の管理、既存システム・外部サービスとの連携、帳票・伝票の読み取りや照合（AI/OCRの活用）などです。現状の流れと運用方法を整理したうえで、個別にお見積りします。" },
            { q: "単発メニューと、月額の継続サポートはどう違いますか？", a: "単発メニュー（3万円〜の小さな作業改善や、5万円〜の標準的な業務改善など）は、対象を決めて一度整えるスポット対応です。継続サポートは、使いながら見直したい場合や、改善を後回しにしたくない場合の月額サービスです。毎月の相談に加えて、軽微な修正・改善まで一定時間内で対応する「継続改善サポート（月額5万円〜）」があります。" },
            { q: "ツールやシステムは何を使うのですか？", a: "会社の環境に合わせます。Excelで十分ならExcel、スプレッドシートが合えばGoogle、Microsoft 365をお使いならその環境で進めます。中小企業では、導入のしやすさ・運用の手軽さ・セキュリティ面から、Googleスプレッドシートや GAS（Google Apps Script）が合うことも多く、その場合はそれらを活用します。新しいツールを入れることよりも、今ある作業を減らすことを優先します。" },
            { q: "対応エリアはどこまでですか？", a: "作業の棚卸し相談は、オンラインなら全国対応です。対面は広島市・東広島市・呉市内なら無料で、それ以外の地域は交通費のみご負担ください。現場確認を含むものは、広島県内を中心に訪問対応しています（県外は要相談・出張可・交通費別）。" },
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
