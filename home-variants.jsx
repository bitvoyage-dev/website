// home-variants.jsx — トップページ（HomeA）

/* ===== トップページ（HomeA） ===== */
function HomeA() {
  useRevealOnScroll();
  return (
    <div className="page bg-grid">
      <TopNav currentPage="home" />
      {/* ヒーロー：中央寄せ、コピー一本勝負 */}
      <section className="home-hero">
        <div className="container-narrow fade-up draw-line-trigger" style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-hand)", color: "var(--navy-700)", fontSize: 14, marginBottom: 16, letterSpacing: "0.1em" }}>
            — 東広島・呉の中小企業へ —
          </div>
          <h1 className="home-hero-title">
            <span className="home-hero-title-desktop">
              「あの人しか分からない」仕事、<br/>
              社内にありませんか？
            </span>
            <span className="home-hero-title-mobile">
              「あの人しか<br/>
              分からない」仕事、<br/>
              社内にありませんか？
            </span>
          </h1>
          <p className="home-hero-answer">
            誰かが休んでも、<span className="underline-hand">回りつづける</span>会社へ。
          </p>
          <p className="home-hero-lead">
            特定の人に頼っている仕事や判断を、<br className="mobile-only" />
            仕組みに置き換えます。<br/>
            同じ数字の入力、入金や支払いの確認、<br className="mobile-only" />
            書類探し。<br/>
            毎日少しずつ時間を奪う作業を減らして、<br className="mobile-only" />
            会社が前に進むための余力をつくります。
          </p>
          <div className="home-hero-actions">
            <a href="#contact" className="btn btn-primary">
              <Icon.Clock /> <span>まずは困っている作業を相談する</span>
            </a>
            <a href="service.html" className="btn btn-outline">
              サービスを見る <Icon.ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* こんな状態、ありませんか？ */}
      <section className="section section-plain" style={{ paddingTop: 52, paddingBottom: 44 }}>
        <div className="container-narrow fade-up">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 className="problem-heading" style={{ fontSize: 28, color: "var(--navy-900)", margin: "0 0 12px", fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 24, height: 24, border: "2px solid var(--navy-800)", borderRadius: 4, position: "relative" }}>
                <span style={{ position: "absolute", left: 5, top: -2, width: 8, height: 15, borderRight: "3px solid var(--navy-800)", borderBottom: "3px solid var(--navy-800)", transform: "rotate(42deg)" }}></span>
              </span>
              <span>こんな<span className="marker">作業</span>に、時間を取られていませんか？</span>
            </h2>
          </div>
          <div className="problem-with-illustration">
            <div className="problem-illustration" aria-hidden="true">
              <img className="wc-illust-cut" src="assets/illustrations/watercolor/problem-desk.webp" alt="" />
            </div>
            <ul className="problem-list">
              {[
                "同じ数字を何度も入力し、間違っていないか何度も見直している",
                "請求・入金・支払いの確認に、毎月神経を使っている",
                "社長や特定の事務担当者しか分からない作業がある",
                "「これで合っているかな」という不安を抱えたまま進めている",
                "人を増やす前に、今ある作業を減らせないか考えている",
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
            <div className="loss-cost-eyebrow">積み重なると</div>
            <p className="loss-cost-text">
              1日 <strong>2時間</strong> の手作業 →
              年間 <strong className="loss-cost-highlight">約500時間</strong>。
            </p>
            <p className="loss-cost-note">
              その時間を売上につながる仕事に使えたら、と思うともったいないですよね。
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
              人を増やす前に、<br className="mobile-only"/>
              <span className="marker">減らせる作業</span>があります。
            </h2>
            <p style={{ fontSize: 15, color: "var(--ink-700)", lineHeight: 1.9, margin: 0 }}>
              「人が足りない」「業務が多すぎる」と感じる背景には、<br className="mobile-only"/>
              毎日少しずつ時間を奪っている作業が隠れていることがあります。
            </p>
          </div>
          <div className="gap-grid">
            <div className="gap-card gap-card-macro">
              <div className="gap-card-label">最初に<br/>見えている問題</div>
              <ul className="gap-list">
                <li>人手が足りない</li>
                <li>業務が多すぎる</li>
                <li>毎日忙しいのに進まない</li>
                <li>何とかしたいが手が回らない</li>
              </ul>
              <div className="gap-card-tag">大きな話になりがち</div>
            </div>
            <div className="gap-arrow"><Icon.ArrowRight size={28} /></div>
            <div className="gap-card gap-card-micro">
              <div className="gap-card-label">見直せるかもしれない<br/>部分</div>
              <ul className="gap-list">
                <li>同じ情報を何度も入力している</li>
                <li>探す・聞く・確認する時間が多い</li>
                <li>紙・Excel・メールの間を人がつないでいる</li>
                <li>特定の人だけが分かる状態になっている</li>
              </ul>
              <div className="gap-card-tag gap-card-tag-accent">減らせるのはここ</div>
            </div>
          </div>
        </div>
      </section>

      {/* 詰まりが取れると、こう変わる（結果ベース） */}
      <section className="section section-plain" style={{ padding: "48px 0" }}>
        <div className="container-narrow fade-up">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="section-eyebrow">outcome</div>
            <h2 style={{ fontSize: 28, color: "var(--navy-900)", margin: "0 0 14px", fontWeight: 800 }}>
              <span className="marker">「見れば分かる」</span>ようになると、<br className="mobile-only"/>
              こう変わります。
            </h2>
            <p style={{ fontSize: 15, color: "var(--ink-700)", lineHeight: 1.9, margin: 0 }}>
              手入力や確認作業が減ると、<br className="mobile-only"/>
              「ちゃんと見たかな」と気を張る時間が減ります。その分、今いる人の手が本来の仕事に回ります。
            </p>
          </div>
          <div className="outcome-with-illustration">
            <div className="outcome-illustration" aria-hidden="true">
              <img className="wc-illust-cut" src="assets/illustrations/watercolor/outcome-coffee.webp" alt="" />
            </div>
            <div className="outcome-grid">
              {[
                { t: "毎日の手作業に取られる時間が減る", d: "くり返していた入力・転記・集計が少なくなります。" },
                { t: "確認や探し物で止まる時間が減る", d: "情報の置き場や流れが整い、聞きにいかなくても進みやすくなります。" },
                { t: "特定の人に頼りきりの状態が減る", d: "社長や〇〇さんしか分からない仕事を、引き継げる形に近づけます。" },
                { t: "急な休みでも仕事が止まりにくくなる", d: "やり方や情報が整理されることで、周囲が対応しやすくなります。" },
                { t: "本業に使える時間が増える", d: "売上につながる仕事に、人と時間を回しやすくなります。" },
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
      <section className="section" style={{ padding: "48px 0" }}>
        <div className="container-narrow fade-up">
          <div className="position-block">
            <div className="position-eyebrow">our role</div>
            <h2 className="position-title">
              BitVoyage の考え方
            </h2>
            <div className="position-illustration" aria-hidden="true">
              <img className="wc-illust-cut" src="assets/illustrations/watercolor/position-together.webp" alt="" />
            </div>
            <p style={{ fontSize: 16, fontWeight: 500, color: "var(--ink-700)", lineHeight: 1.95, margin: "0 0 22px" }}>
              忙しい現場では、改善したくても後回しになりがちです。<br/>
              日々の対応に追われて、「見直した方がいい」と分かっている作業ほど、そのまま残ってしまう。
            </p>
            <p className="position-text" style={{ margin: 0 }}>
              現場の流れを一緒に整理し、<span className="underline-hand">後回し</span>になっていた改善を前へ進めます。<br/>
              売上につながらない作業を一緒に見つけて減らし、<br/>
              会社が前に進むための余力をつくります。
            </p>
          </div>
        </div>
      </section>

      {/* 改善例への導線 */}
      <section className="section" style={{ padding: "8px 0 56px" }}>
        <div className="container-narrow fade-up">
          <div className="home-kaizen-cta">
            <div className="section-eyebrow">examples</div>
            <h2 className="home-kaizen-cta-title">
              具体的に、どんな作業を<br className="mobile-only" />
              <span className="marker">減らせる</span>のか
            </h2>
            <p className="home-kaizen-cta-text">
              入金確認、振込データ作成、領収書整理、問い合わせ管理、名刺フォロー、進捗確認。<br/>
              日々の小さな手間を、現場に合う形で減らします。
            </p>
            <a href="improvements.html" className="btn btn-primary">
              改善例を見る <Icon.ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* サービスの流れ（4ステップ） */}
      <ServiceSteps />

      {/* 代表の顔 */}
      <section className="section" style={{ padding: "8px 0 40px" }}>
        <div className="container-narrow fade-up">
          <div className="home-rep-strip">
            <img className="home-rep-photo" src="assets/picture/1X8A4633.JPG" alt="株式会社BitVoyage 代表 北束 優花" />
            <div className="home-rep-body">
              <div className="home-rep-name">代表・北束 優花<span>（きたづか ゆうか）</span></div>
              <p className="home-rep-text">
                前職は半導体メーカーの生産技術職で、業務改善に携わっていました。<br/>
                現在は、人の判断を仕組みに乗せて、業務がスムーズに回る形を構築しています。
              </p>
              <a href="company.html" className="home-rep-link">代表の紹介を見る →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA リボン */}
      <CTARibbon />

      <SiteFooter />
    </div>
  );
}

/* ===== 単発メニュー ＋ 月額メニュー別枠 ===== */
function ServiceSteps() {
  const steps = [
    { n: "1", t: "作業の棚卸し相談", feeling: "「何から手をつければ」が、「ここから減らせそう」に変わります。", sub: "どこから減らせるかを整理し、漠然とした忙しさを見える形にします", price: "無料", href: "service.html#consult" },
    { n: "2", t: "手作業をなくす仕組みづくり", feeling: "「今月もこれをやらなきゃ」が、見て確認するだけに変わります。", sub: "先に「こうなったら楽になる」形を決めて、そこへ段階的に進めます", price: "20万円〜", href: "service.html#core" },
    { n: "3", t: "業務に合わせた個別構築", feeling: "休む人がいても業務が止まらない。そこまで整えます。", sub: "人に頼りきりの業務を、任せやすく続けられる形に整えます", price: "80万円〜／個別見積り", href: "service.html#custom" },
    { n: "4", t: "追加実装", feeling: "「これも足せる？」が、その都度かなえられます。", sub: "すでにお取引のある会社さま向け。一度整えた仕組みに機能を足します", price: "3万円〜", href: "service.html#addon" },
  ];
  const continuous = [
    {
      t: "伴走顧問",
      price: "月15万円〜",
      feeling: "「あとで考えよう」が、毎月ちゃんと前に進みます。",
      body: "毎月の打ち合わせで現場の状況を確認し、次にどこへ手をつけるかを決め続ける役割です。標準は月4回（1回2〜3時間）。オンラインでも、ご訪問でも対応します。",
      note: "続けるとどこかで仕組みごと作り直す話になります。そこは別にお見積りしますが、流れの整理と設計は毎月の中で済んでいるので、実装ぶんだけの費用になります。",
      items: ["現場の状況の確認", "詰まっている作業の洗い出し", "手をつける順番の整理", "その場でできる範囲の手直し", "仕組みごと作り直すタイミングの見きわめ", "次に何をするかの決定"],
    },
    {
      t: "保守サポート",
      price: "月3万円〜",
      feeling: "「急に動かなくなったらどうしよう」が、なくなります。",
      body: "お作りした仕組みが、これからも問題なく使い続けられるようにお預かりします。動かなくなってから慌てるのではなく、気づいた時点で直せる状態にしておきます。",
      note: "新しい機能を足す場合は「追加実装」として別途お見積りします。",
      items: ["不具合が出たときの対応", "Google側の仕様変更への追随", "項目名や表示まわりの細かい直し", "使い方の質問へのお答え", "動作の定期確認"],
    },
  ];
  return (
    <section className="section" style={{ paddingTop: 60, paddingBottom: 80 }}>
      <div className="container-narrow fade-up">
        <div className="home-service-heading">
          <div className="section-eyebrow">service</div>
          <h2>
            まず相談から、<span className="marker">継続</span>まで。
          </h2>
          <p style={{ fontSize: 18, color: "var(--navy-900)", fontWeight: 800, lineHeight: 1.85, letterSpacing: "0.02em", margin: "10px 0 4px" }}>
            全体を見て、小さく作る。<br className="mobile-only"/>使いながら、つなげていく。
          </p>
          <p style={{ fontFamily: "var(--font-hand)", fontSize: 13, color: "var(--navy-700)", margin: "0 0 14px" }}>
            — これが BitVoyage の進め方の核です —
          </p>
          <p>
            「何を減らせばいいか分からない」状態からで大丈夫。<br className="mobile-only"/>
            まず最終的にどうなったら楽になるかを一緒に決めて、そこへ段階的に進めます。
          </p>
        </div>
        <div className="service-five-grid">
          {steps.map(s => (
            <a key={s.n} href={s.href} className="service-five-row">
              <div className="service-five-tab">{s.n}</div>
              <div className="service-five-content">
                <h3 className="service-five-title">{s.t}</h3>
                {s.feeling && <p className="service-five-feeling">{s.feeling}</p>}
                <p className="service-five-sub">{s.sub}</p>
              </div>
              <div className="service-five-price">{s.price}</div>
            </a>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: 12, color: "var(--ink-500)", margin: "14px 0 0" }}>
          ※ 表示価格はすべて税別・目安です。仕組みづくりは段階に分けて進めるため、上の金額はまず作る一段目のものです。
        </p>

        {/* 継続サポート別枠 */}
        <div className="service-cont-block">
          <div className="service-cont-head">
            <div className="section-eyebrow">monthly support</div>
            <h3 className="service-cont-title">毎月おつきあいする場合</h3>
            <p className="service-cont-lead">
              改善を止めずに前へ進めたい場合と、<br className="mobile-only"/>
              作った仕組みを安心して使い続けたい場合で、役割を分けています。
            </p>
          </div>
          <div className="service-cont-grid">
            {continuous.map(c => (
              <div key={c.t} className="service-cont-card">
                <div className="service-cont-card-head">
                  <h4 className="service-cont-card-title">{c.t}</h4>
                  <div className="service-cont-card-price">
                    {c.price}<span className="service-cont-card-tax">（税別）</span>
                  </div>
                </div>
                {c.feeling && <p className="service-cont-card-feeling">{c.feeling}</p>}
                <p className="service-cont-card-body">{c.body}</p>
                <div className="service-cont-card-items">
                  {c.items.map(it => (
                    <span key={it} className="service-cont-item">
                      <span className="service-cont-item-dot" aria-hidden="true"></span>{it}
                    </span>
                  ))}
                </div>
                <p className="service-cont-card-note">{c.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a href="service.html" className="btn btn-outline">
            サービス詳細を見る <Icon.ArrowRight />
          </a>
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
    <section id="contact" className="section" style={{ padding: minimal ? "48px 0" : "28px 0 44px" }}>
      <div className="container-narrow">
        <p style={{ textAlign: "center", fontSize: 16, color: "var(--ink-700)", marginBottom: 24 }}>
          まずは、今いちばん時間を取られている作業をお聞かせください。
        </p>
        <div style={{ background: "var(--yellow-500) url('assets/illustrations/watercolor/cta-wash.webp') center/cover", padding: "36px 40px", borderRadius: 16, textAlign: "center", boxShadow: "var(--shadow-md)", position: "relative" }}>
          <div style={{ position: "absolute", top: 10, left: 20, fontSize: 11, fontFamily: "var(--font-hand)", color: "var(--navy-900)", opacity: 0.7 }}>お気軽にどうぞ</div>
          <h2 className="cta-ribbon-title" style={{ margin: 0, fontWeight: 800, color: "var(--navy-900)", letterSpacing: "0.02em" }}>
            作業の棚卸し相談<br/>
            （無料・60分）。
          </h2>
          <div style={{ margin: "16px auto 24px", width: 80, height: 2, background: "var(--navy-900)" }}></div>
          <p style={{ margin: 0, fontSize: 16, color: "var(--navy-900)", fontWeight: 600, lineHeight: 1.85 }}>
            今の作業を一緒に整理すると、<br className="mobile-only"/>
            どこから減らせそうかが見えてきます。
          </p>
          <div className="cta-feature-row">
            <div className="cta-feature">整理メモ付き</div>
            <div className="cta-feature">オンライン全国対応</div>
            <div className="cta-feature">広島市・東広島・呉は対面無料</div>
          </div>

          <p style={{ margin: "18px 0 0", fontSize: 13.5, color: "var(--navy-900)", fontWeight: 600, lineHeight: 1.8 }}>
            その場で契約をおすすめすることはありません。<br className="mobile-only"/>
            整理メモをお渡しして、改善できそうなことがあれば、あらためてご提案します。
          </p>

          <div className="contact-box" style={{ marginTop: 28 }}>
            <button
              type="button"
              className="btn btn-contact"
              aria-expanded={open}
              aria-controls="timerex-embed-wrap"
              onClick={() => setOpen(v => !v)}
              style={{ background: "var(--navy-900)", color: "#fff" }}
            >
              {open ? "カレンダーを閉じる" : "作業の棚卸し相談を予約する（無料）"}
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

        <div className="sns-follow">
          <p className="sns-follow-lead">
            Instagramを始めました。<br className="mobile-only"/>
            ぜひ覗いてみてください。
          </p>
          <div className="sns-follow-actions">
            <a
              href="https://www.instagram.com/bitvoyage_hiroshima/"
              target="_blank"
              rel="noopener noreferrer"
              className="sns-follow-btn"
            >
              <Icon.Instagram size={20} />
              <span>Instagramを見る　@bitvoyage_hiroshima</span>
            </a>
            <a
              href="https://www.instagram.com/bitvoyage_hiroshima/"
              target="_blank"
              rel="noopener noreferrer"
              className="sns-follow-qr"
              aria-label="Instagram QRコード"
            >
              <img src="assets/images/instagram-qr.png" alt="BitVoyage Instagram QRコード" />
              <span>スマホでQRを読み取る</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.HomeA = HomeA;
window.ServiceSteps = ServiceSteps;
window.CTARibbon = CTARibbon;
