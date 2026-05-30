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
              売上につながらない<br/>
              作業を、<span className="underline-hand">減らす</span>。
            </span>
            <span className="home-hero-title-mobile">
              売上に<br/>
              つながらない作業を、<br/>
              <span className="underline-hand">減らす</span>。
            </span>
          </h1>
          <p style={{ fontSize: 17, fontWeight: 700, color: "var(--navy-800)", margin: "18px 0 0", lineHeight: 1.7 }}>
            忙しい現場に代わって、改善を前に進めます。
          </p>
          <p className="home-hero-lead">
            東広島・呉を中心に、忙しくて改善まで<br className="mobile-only" />
            手が回らない中小企業の業務を整理します。<br/>
            手入力・転記・集計・確認連絡など、<br className="mobile-only" />
            毎日時間を奪っている作業をひとつずつ減らします。
          </p>
          <div className="home-hero-actions">
            <a href="#contact" className="btn btn-primary">
              <Icon.Clock /> <span>まずは困っている作業を相談する</span>
            </a>
            <a href="service.html" className="btn btn-outline">
              減らせる仕事を見る <Icon.ArrowRight />
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
              <span>こんな<span className="marker">作業</span>に、時間を取られていませんか？</span>
            </h2>
          </div>
          <div className="problem-with-illustration">
            <div className="problem-illustration" aria-hidden="true">
              <img src="assets/illustrations/01-person-thinking.png" alt="" />
            </div>
            <ul className="problem-list">
              {[
                "同じ数字を、何度も手で入力・転記している",
                "領収書や名刺の整理に、毎月時間を取られている",
                "日程調整や個別連絡のやり取りが、地味に多い",
                "社長や \"〇〇さん\" しか分からない仕事がある",
                "その人が休むと、業務が止まってしまう",
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
              売上を生まない作業ほど、毎日の積み重ねで大きく時間を奪っていきます。
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
              「<span className="marker">人が足りない</span>」の正体は、<br className="mobile-only"/>
              売上につながらない作業の山。
            </h2>
            <p style={{ fontSize: 15, color: "var(--ink-700)", lineHeight: 1.9, margin: 0 }}>
              経営者から見えている問題と、<br className="mobile-only"/>
              現場で実際に時間を奪っている作業には、ギャップがあります。
            </p>
          </div>
          <div className="gap-grid">
            <div className="gap-card gap-card-macro">
              <div className="gap-card-label">経営者・部門長から<br/>見えている問題</div>
              <ul className="gap-list">
                <li>人手が足りない</li>
                <li>業務が多すぎる</li>
                <li>もっと人を採るべき？</li>
                <li>何とかしたいが手が回らない</li>
              </ul>
              <div className="gap-card-tag">大きな話になりがち</div>
            </div>
            <div className="gap-arrow"><Icon.ArrowRight size={28} /></div>
            <div className="gap-card gap-card-micro">
              <div className="gap-card-label">実際に時間を奪っている<br/>"売上につながらない作業"</div>
              <ul className="gap-list">
                <li>同じ数字をExcelに3回入力</li>
                <li>FAX注文書を手で見積に転記</li>
                <li>領収書・名刺の整理に毎月数時間</li>
                <li>在庫表を毎朝 手で集計</li>
                <li>"〇〇さん" が休むと止まる作業</li>
              </ul>
              <div className="gap-card-tag gap-card-tag-accent">減らせるのはここ</div>
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
              売上につながらない作業が減ると、<span className="marker">こう変わります</span>。
            </h2>
          </div>
          <div className="outcome-with-illustration">
            <div className="outcome-illustration" aria-hidden="true">
              <img src="assets/illustrations/03-person-forward.png" alt="" />
            </div>
            <div className="outcome-grid">
              {[
                { t: "手入力・転記・集計の時間が減る", d: "毎日くり返していた手作業が、ぐっと少なくなる。" },
                { t: "その人が休んでも、仕事が止まらない", d: "社長や〇〇さんしか分からない仕事を、引き継げる形に。" },
                { t: "「確認」「探す」「聞く」が減る", d: "情報の置き場が決まり、聞きにいかなくても進む状態に。" },
                { t: "領収書・名刺の整理に追われない", d: "毎月のこまごました整理作業から手が離れる。" },
                { t: "本業に使える時間が増える", d: "売上につながる仕事に、人と時間を回せるようになる。" },
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
            <div className="position-eyebrow">our role</div>
            <h2 className="position-title">
              BitVoyage の考え方
            </h2>
            <p style={{ fontSize: 16, fontWeight: 500, color: "var(--ink-700)", lineHeight: 1.95, margin: "0 0 22px" }}>
              忙しい現場では、改善したくても後回しになりがちです。<br/>
              日々の対応に追われて、「見直した方がいい」と分かっている作業ほど、そのまま残ってしまう。
            </p>
            <p className="position-text" style={{ margin: 0 }}>
              その後回しになった作業を、<span className="underline-hand">代わって</span>前に進めます。<br/>
              売上につながらない作業を一緒に見つけて減らし、<br/>
              会社が前に進むための余力をつくります。
            </p>
          </div>
        </div>
      </section>

      {/* サービスの流れ（4ステップ） */}
      <ServiceSteps />

      {/* CTA リボン */}
      <CTARibbon />

      <SiteFooter />
    </div>
  );
}

/* ===== 5階層サービス（改善ノート行スタイル） ===== */
function ServiceSteps() {
  const steps = [
    { n: "1", t: "まずは作業を見直す", sub: "毎月くり返している作業や、時間を取っている作業を一緒に確認します", price: "無料", href: "service.html#consult" },
    { n: "2", t: "ひとつ減らす", sub: "見つかった作業の中から、まずは小さく1つ減らします", price: "3万円〜", href: "service.html#small" },
    { n: "3", t: "現場を見て整理する", sub: "まずは2〜3時間の現場確認から。減らせる作業と優先順位を整理します", price: "5万円〜", href: "service.html#onsite" },
    { n: "4", t: "継続して減らす", sub: "毎月、改善が止まらないように進捗と次の一手を確認します", price: "月額 5万円〜", href: "service.html#support" },
  ];
  return (
    <section className="section" style={{ paddingTop: 60, paddingBottom: 80 }}>
      <div className="container-narrow fade-up">
        <div className="home-service-heading">
          <div className="section-eyebrow">service</div>
          <h2>
            まず相談から、<span className="marker">継続</span>まで。
          </h2>
          <p>
            「何を減らせばいいか分からない」状態からで大丈夫。<br className="mobile-only"/>
            4つのステップで、無理なく進められます。
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
          まずは、今いちばん時間を取られている作業をお聞かせください。
        </p>
        <div style={{ background: "var(--yellow-500)", padding: "36px 40px", borderRadius: 16, textAlign: "center", boxShadow: "var(--shadow-md)", position: "relative" }}>
          <div style={{ position: "absolute", top: 10, left: 20, fontSize: 11, fontFamily: "var(--font-hand)", color: "var(--navy-900)", opacity: 0.7 }}>お気軽にどうぞ</div>
          <h2 className="cta-ribbon-title" style={{ margin: 0, fontWeight: 800, color: "var(--navy-900)", letterSpacing: "0.02em" }}>
            作業見直し相談<br/>
            （無料・60分）。
          </h2>
          <div style={{ margin: "16px auto 24px", width: 80, height: 2, background: "var(--navy-900)" }}></div>
          <p style={{ margin: 0, fontSize: 16, color: "var(--navy-900)", fontWeight: 600, lineHeight: 1.85 }}>
            今の作業を一緒に整理すると、<br className="mobile-only"/>
            どこから減らせそうかが見えてきます。
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
              {open ? "カレンダーを閉じる" : "作業見直し相談を予約する（無料）"}
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
window.ServiceSteps = ServiceSteps;
window.CTARibbon = CTARibbon;
