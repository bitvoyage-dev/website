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
      illustration: "assets/illustrations/watercolor/consult-hearing.webp",
      description: [
        "毎月くり返している手作業や、売上につながらないのに時間を取っている作業を伺います。",
        "無料相談は、作業そのものを改善する場ではなく、「どこに時間を取られているか」「どこを大きく変えられそうか」を確認し、次に進む方向を決めるための相談です。",
        "小さく減らして終わりではなく、最終的にどうなったら楽になるかまで一緒に見ておきます。そこが決まっていないと、手をつけた割に負担が変わらない、ということが起きるためです。",
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
          "手作業をなくす仕組みづくり（20万円〜50万円・段階に分けて進められます）",
          "業務に合わせた個別構築（50万円〜）",
          "伴走顧問（月15万円〜）／保守サポート（月3万円〜）",
        ] },
        { kind: "note", text: "その場で契約をおすすめすることはありません。減らせそうな作業が見つからなければ、そのようにお伝えします。" },
      ],
    },
    {
      id: "core",
      num: "2",
      title: "手作業をなくす仕組みづくり",
      tagline: "先に「こうなったら楽になる」形を決めて、そこへ段階的に進めます",
      feeling: "「今月もこれをやらなきゃ」が、見て確認するだけに変わります。",
      price: "20万円〜50万円",
      priceNote: "段階に分けて進められるので、はじめから全額をお支払いいただく必要はありません。内容を確認のうえ、着手前にお見積りします。",
      illustration: "assets/illustrations/watercolor/menu-small.webp",
      description: [
        "転記、集計、確認、書類づくりなど、毎月くり返している手作業をなくしていくメニューです。",
        "はじめに「最終的にこうなったら楽になる」という形を一緒に決めます。そのうえで、一度に全部作らず、段階に分けて進めます。",
        "一段目を実際に使ってみて、効果を確かめてから次に進めます。大きな金額をまとめて決める必要はありません。",
      ],
      sections: [
        { kind: "callout", label: "進め方の例（支払い・振込まわり）", lines: [
          "ゴール：請求書を見ながら打ち直す作業がなくなり、金額が合っているかを確認するだけで支払いが回る状態",
          "STEP1：支払先の台帳と確認リストを整え、振込データをまとめて作れるようにする。銀行で1件ずつ入力する作業と、その緊張感がなくなります",
          "STEP2：請求書の読み取りまで含めて、転記そのものをなくす。金額が合っているかの照合もできるようにします",
          "STEP1だけでも振込の手入力はなくなります。ただ、請求書を見ながらリストを整える手間は残るので、そこまでなくすのがSTEP2です。最初に到達点を決めておくのは、どこまで進めば何がなくなるかを先に見ていただくためです。",
        ] },
        { kind: "list", label: "対応しやすい作業", variant: "dot", items: [
          "同じ情報を何度も入力している作業",
          "毎月の転記・集計・CSV作成",
          "入金確認・支払い・振込データの準備",
          "見積書・請求書など、決まった書類の作成",
          "領収書・支出記録の整理",
          "問い合わせや対応状況の管理",
          "紙・PDFの一覧化と、探しやすい整理",
          "確認漏れを見つけやすくする通知",
        ] },
        { kind: "list", label: "含まれる内容", variant: "check", items: [
          "現場での作業の確認",
          "入力・確認・出力の流れの整理",
          "到達点と段階のご提案",
          "管理表・確認リストの作成、関数や自動処理の設定",
          "通知・連携の設定",
          "テスト運用",
          "使い方の共有と、運用ルールの整理",
        ] },
        { kind: "note", text: "帳票の読み取り（AI・OCR）、複数部門にまたがる見直し、外部システムとの連携、複数人での権限設計などを含む場合は、次の「業務に合わせた個別構築」として個別にお見積りします。" },
        { kind: "flow", label: "進め方", steps: ["棚卸し相談", "到達点と段階の提案", "STEP1の作成", "使ってみる", "次の段へ"] },
      ],
    },
    {
      id: "custom",
      num: "3",
      title: "業務に合わせた個別構築",
      tagline: "人に頼りきりの業務を、任せやすく続けられる形に整えます",
      feeling: "休む人がいても業務が止まらない。そこまで整えます。",
      price: "50万円〜／個別見積り",
      priceNote: "内容・利用人数・扱うデータ・運用方法を確認したうえで、個別にお見積りします。",
      illustration: "assets/illustrations/watercolor/menu-kobetsu.webp",
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
      id: "advisor",
      num: "4",
      title: "伴走顧問",
      tagline: "外部の立場で、次に手をつけるところを決め続けます",
      feeling: "「あとで考えよう」が、毎月ちゃんと前に進みます。",
      price: "月15万円〜",
      priceNote: "月4回（1回2〜3時間）の打ち合わせが標準です。月2回であれば月10万円〜。訪問は月1回程度で、あとはオンラインで対応します。",
      illustration: "assets/illustrations/watercolor/menu-support.webp",
      description: [
        "経営と現場のあいだに入って、どの作業から手をつけるかを一緒に決め続ける役割です。",
        "毎月の打ち合わせで現場の状況を確認し、詰まっているところと、後回しでいいところを整理します。改善が「いつかやろう」で止まらなくなります。",
        "実装は含みません。判断する役と作る役を分けたほうが、どこまでやるかの線が引けて、お互いに気持ちよく進められるためです。",
      ],
      sections: [
        { kind: "list", label: "毎月やること", variant: "check", items: [
          "現場の状況の確認",
          "詰まっている作業の洗い出し",
          "手をつける順番の整理",
          "前月に進んだことの振り返り",
          "次に何をするかの決定",
        ] },
        { kind: "callout", label: "回数と費用", lines: [
          "月4回（1回2〜3時間）：月15万円〜　※標準",
          "月2回（1回2〜3時間）：月10万円〜",
          "訪問は月1回程度、それ以外はオンラインです。",
        ] },
        { kind: "note", text: "整えたい仕組みが出てきた場合は、「手作業をなくす仕組みづくり」または「追加実装」として別途お見積りします。顧問料の中に実装まで含めると、どこまで対応するのかの線が引けなくなるためです。" },
      ],
    },
    {
      id: "maintain",
      num: "5",
      title: "保守サポート",
      tagline: "お作りした仕組みが、これからも動き続けるように",
      feeling: "「急に動かなくなったらどうしよう」が、なくなります。",
      price: "月3万円〜",
      priceNote: "お作りした仕組みが対象です。規模や対象範囲によって変わるので、納品時にご案内します。",
      illustration: "assets/illustrations/watercolor/menu-shikumi.webp",
      description: [
        "一度お作りした仕組みを、これからも問題なく使い続けられるようにお預かりするメニューです。",
        "スプレッドシートやGoogleの仕様は少しずつ変わります。動かなくなってから慌てるのではなく、気づいた時点で直せる状態にしておきます。",
        "使っているうちに出てくる細かい不具合や、ちょっとした直しもここに含みます。",
      ],
      sections: [
        { kind: "list", label: "含まれるもの", variant: "check", items: [
          "不具合が出たときの対応",
          "Google側の仕様変更への追随",
          "項目名や表示まわりの細かい直し",
          "使い方の質問へのお答え",
          "動作の定期確認",
        ] },
        { kind: "note", text: "新しい機能を足す場合は「追加実装」、仕組みそのものを広げる場合は「手作業をなくす仕組みづくり」として別途お見積りします。" },
      ],
    },
    {
      id: "addon",
      num: "6",
      title: "追加実装（すでにお取引のある会社さま）",
      tagline: "一度整えた仕組みに、必要になった機能を足していきます",
      feeling: "「これも足せる？」が、その都度かなえられます。",
      price: "3万円〜",
      priceNote: "すでに現場と業務の流れを把握している状態からの追加なので、この価格で対応できます。はじめてのご依頼の場合は上のメニューからご案内します。",
      illustration: "assets/illustrations/watercolor/menu-standard.webp",
      description: [
        "すでに仕組みを作らせていただいた会社さま向けに、部品を足していくメニューです。",
        "現場の流れも、いま使っている仕組みの中身も分かっている状態からの作業になるので、確認にかかる時間が要りません。その分、小さい単位でお受けできます。",
        "「使ってみたらここも足したくなった」に、その都度お応えするための枠です。",
      ],
      sections: [
        { kind: "list", label: "追加しやすいものの例", variant: "dot", items: [
          "管理表への項目・シートの追加",
          "集計や関数の作り直し",
          "決まった書類の出力を1〜2種ふやす",
          "通知の条件を変える・追加する",
          "領収書や写真の一覧化",
          "カレンダー・Drive との連携",
        ] },
        { kind: "note", text: "内容によっては3万円で収まらないものもあります。分量が増える場合は、その都度お見積りしてからの着手です。" },
      ],
    },
  ];

  const cases = [
    {
      title: "個別連絡・確認作業",
      illustration: "assets/illustrations/watercolor/case-renraku.webp",
      problem: "1件ずつ手で送る連絡に、時間とミスの不安があった",
      result: <>一括送信＋個別差し込みで、連絡に使う<span className="marker">時間を削減</span></>,
    },
    {
      title: "分析・計算作業",
      illustration: "assets/illustrations/watercolor/case-bunseki.webp",
      problem: "専門的な分析に、外部ソフトの費用と手間がかかっていた",
      result: <>分析処理を内製化し、作業時間と<span className="marker">外部コストを削減</span></>,
    },
    {
      title: "手順・記録の整理",
      illustration: "assets/illustrations/watercolor/case-tejun.webp",
      problem: "人によって作業の進め方が違い、結果にばらつきが出やすい状態だった",
      result: <>作業手順と記録の残し方をそろえ、<span className="marker">再現性のある形</span>に整理</>,
    },
    {
      title: "情報の確認・検索",
      illustration: "assets/illustrations/watercolor/case-kensaku.webp",
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
            まずは無料相談で作業の流れを確認し、最終的にどうなったら楽になるかを一緒に決めます。そこから段階に分けて進めるので、はじめから大きな金額を決める必要はありません。
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
      <section className="section" style={{ padding: "44px 0 24px" }}>
        <div className="container fade-up">
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <div className="section-eyebrow">our approach</div>
            <h2 className="section-title" style={{ fontSize: 26 }}>
              まずは、<span className="marker">小さく始められる仕組み</span>から。
            </h2>
          </div>

          <div className="approach-illustration" aria-hidden="true">
            <img className="wc-illust-cut" src="assets/illustrations/watercolor/approach-screen.webp" alt="" />
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
              src="assets/illustrations/watercolor/approach-flow.webp"
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
      <section className="section cases-section" style={{ padding: "40px 0 60px", background: "var(--paper-2)" }}>
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
      <section className="section" style={{ padding: "56px 0" }}>
        <div className="container-narrow fade-up">
          <h2 className="section-title" style={{ fontSize: 28, textAlign: "center", marginBottom: 32 }}>
            <span className="marker">よくある</span>ご質問
          </h2>
          <div className="faq-illustration" aria-hidden="true">
            <img className="wc-illust-cut" src="assets/illustrations/watercolor/faq-wondering.webp" alt="" />
          </div>
          {[
            { q: "どこから始めるのが良いですか？", a: "まずは無料の「作業の棚卸し相談」からで大丈夫です。何を減らせばいいか決まっていなくても、どこに時間を取られているかを一緒に確認します。そのうえで、最終的にどうなったら楽になるかという到達点と、そこへ進む段階をご提案します。いきなり全部を決める必要はありません。" },
            { q: "いくらぐらいかかりますか？", a: "手作業をなくす仕組みづくりの場合、全体で20万円〜50万円が中心です。ただし一度にまとめてお支払いいただく形ではなく、段階に分けて進められます。まず一段目を作って実際に使っていただき、効果を確かめてから次に進む形が多いです。着手前に必ずお見積りをお出しします。" },
            { q: "なぜ「まず小さく1つだけ」ではないのですか？", a: "小さく1つ整えるだけだと、手で打ち直す作業がそのまま残って、負担があまり変わらないことがあるためです。たとえば台帳を整えても、請求書を見ながら手入力する工程が残っていれば、確認の手間は減りません。なので最初に「最終的にこうなったら楽になる」という形を決めてから、そこへ向かって段階的に進めます。始め方自体は小さくて大丈夫です。" },
            { q: "全部やらないと意味がないということですか？", a: "そんなことはありません。一段目だけで止めることもできますし、実際にそうされる場合もあります。ただ、どこまで行けば本当に楽になるのかを先にお伝えしたうえで選んでいただきたい、というだけです。あとから「思ったより変わらなかった」となるのが一番もったいないと思っています。" },
            { q: "「業務に合わせた個別構築（50万円〜）」では、どんなことができますか？", a: "複数の業務が関係する作業や、帳票読取、照合、複数人での運用、外部システム連携を含む仕組み化です。たとえば、複数業務にまたがる管理、複数担当者で使う業務アプリ、工程・進捗・案件の管理、既存システム・外部サービスとの連携、帳票・伝票の読み取りや照合（AI/OCRの活用）などです。現状の流れと運用方法を整理したうえで、個別にお見積りします。" },
            { q: "「追加実装（3万円〜）」は、はじめての依頼でも使えますか？", a: "こちらはすでに一度仕組みを作らせていただいた会社さま向けのメニューです。現場の流れも、いま動いている仕組みの中身も分かっている状態からの作業になるので、確認の時間が要らない分、小さい単位でお受けできます。はじめてのご依頼の場合は、現場を見て流れを整理するところからになるため、上のメニューでご案内しています。" },
            { q: "「伴走顧問」と「保守サポート」は何が違いますか？", a: "役割がまったく別です。保守サポート（月3万円〜）は、お作りした仕組みがこれからも動き続けるようにお預かりするもので、不具合対応やGoogle側の仕様変更への追随が中心です。伴走顧問（月15万円〜）は、毎月の打ち合わせで現場の状況を確認し、次にどこへ手をつけるかを決め続ける役割で、実装は含みません。「壊れないようにしておきたい」なら保守、「改善を止めずに前へ進めたい」なら顧問、という選び方になります。" },
            { q: "伴走顧問に、実装は含まれないのですか？", a: "含みません。顧問料の中に実装まで入れてしまうと、どこまで対応するのかの線が引けなくなり、お互いに気持ちよく進められなくなるためです。整えたい仕組みが出てきた場合は、「手作業をなくす仕組みづくり」または「追加実装」として、その都度お見積りします。判断する役と、作る役を分けておくほうが結果的にうまくいくと考えています。" },
            { q: "顧問は月4回でないとお願いできませんか？", a: "月2回（月10万円〜）でもお受けしています。標準は月4回（1回2〜3時間）で月15万円〜ですが、まずは月2回から始めて、必要になれば増やす形でも大丈夫です。訪問は月1回程度で、それ以外はオンラインで対応しています。" },
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
