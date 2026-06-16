// tokushoho-page.jsx — 特定商取引法に基づく表記

function TokushohoPage() {
  useRevealOnScroll();

  // 値が配列の場合は箇条書き（・）として縦に並べる
  const renderValue = (v) => {
    if (Array.isArray(v)) {
      return v.map((line, i) => (
        <div key={i} style={{ marginTop: i > 0 ? 6 : 0 }}>・{line}</div>
      ));
    }
    return v;
  };

  const rows = [
    ["販売事業者", "株式会社BitVoyage"],
    ["運営責任者", "北束 優花"],
    ["所在地", "広島県広島市中区大手町１丁目１番２０号 相生橋ビル７階Ａ号室"],
    ["電話番号", "請求があった場合、遅滞なく開示いたします。"],
    ["メールアドレス", <a href="mailto:contact@bitvoyage.co.jp" style={{ color: "var(--navy-800)", fontWeight: 600 }}>contact@bitvoyage.co.jp</a>],
    ["販売価格", "各サービスページまたは個別の見積書に記載しております。"],
    ["商品代金以外の必要料金", ["消費税", "銀行振込手数料", "訪問対応時の交通費（必要な場合）"]],
    ["支払方法", ["銀行振込", "その他、個別契約で定める方法"]],
    ["支払時期", "個別契約または請求書に記載する期日までにお支払いください。"],
    ["サービス提供時期", "個別契約または見積書に定める時期に提供いたします。"],
    ["キャンセル・解約について", <React.Fragment>
      契約前のキャンセルは可能です。<br/>
      契約成立後のキャンセル・解約については、個別契約または見積書等で定める条件に従います。
    </React.Fragment>],
    ["返品・返金について", "サービスの性質上、提供後の返品・返金はお受けできません。"],
    ["動作環境", <React.Fragment>
      <div>オンラインで提供するサービスについては、利用者側で以下をご用意ください。</div>
      <div style={{ marginTop: 6 }}>・インターネット接続環境</div>
      <div style={{ marginTop: 6 }}>・最新のWebブラウザ</div>
      <div style={{ marginTop: 6 }}>・Google Workspace等、サービス利用に必要な環境</div>
    </React.Fragment>],
  ];

  return (
    <div className="page" style={{ background: "var(--paper)" }}>
      <TopNav currentPage="" />

      <section className="page-hero">
        <div className="container-narrow fade-up" style={{ textAlign: "center" }}>
          <div className="section-eyebrow">legal notice</div>
          <h1 className="page-hero-title">特定商取引法に基づく表記</h1>
        </div>
      </section>

      <article style={{ padding: "16px 0 80px" }}>
        <div className="container-narrow fade-up">
          <div className="company-info-box">
            {rows.map(([k, v], i, arr) => (
              <div key={k} className="company-info-row" style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none" }}>
                <div className="company-info-label">{k}</div>
                <div className="company-info-value">{renderValue(v)}</div>
              </div>
            ))}
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}

window.TokushohoPage = TokushohoPage;
