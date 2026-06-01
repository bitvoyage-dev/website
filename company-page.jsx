// company-page.jsx — 会社概要ページ

function CompanyPage() {
  useRevealOnScroll();
  return (
    <div className="page bg-grid">
      <TopNav currentPage="company" />
      <section className="company-hero">
        <div className="container-narrow fade-up" style={{ textAlign: "center" }}>
          <div className="section-eyebrow">about us</div>
          <h1 className="company-hero-title">
            現場が前に進むための<span className="marker marker-thick">余力</span>をつくる。
          </h1>
          <p className="company-hero-lead">
            毎日 時間を奪っている手作業や、<br/>
            特定の人しか分からない仕事を減らし、<br/>
            本業に使える時間を取り戻していきます。
          </p>
        </div>
      </section>

      {/* ミッション */}
      <section className="company-mission-section">
        <div className="container fade-up">
          <div className="company-mission-card">
            <div style={{ position: "absolute", top: -18, left: 48, background: "var(--yellow-500)", padding: "4px 16px", borderRadius: 999, fontSize: 13, fontWeight: 700, color: "var(--navy-900)" }}>
              Mission
            </div>
            <h2 className="company-mission-title">
              現場の手で、<br className="mobile-only"/>
              <span className="underline-hand">続けられる形</span>に整える。
            </h2>
            <p className="company-mission-lead">
              売上につながらない作業は、減らして終わりではありません。<br/>
              空いた時間が本業に向いて、はじめて意味が出る。<br/><br/>
              だから BitVoyage は、<br/>
              現場の人が無理なく続けられる形に整えます。
            </p>
          </div>
        </div>
      </section>

      {/* 代表ご挨拶 */}
      <section className="section representative-section">
        <div className="container fade-up">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div className="section-eyebrow">representative</div>
            <h2 className="section-title" style={{ fontSize: 28 }}>
              <span className="marker">代表</span>からのご挨拶
            </h2>
          </div>
          <div className="representative-grid">
            <div className="representative-aside">
              <div className="representative-photo">
                {/* TODO: クロップ済み写真に差し替え予定 */}
                <img src="assets/picture/1X8A4633.JPG" alt="株式会社BitVoyage 代表 北束 優花" />
              </div>
              <div className="representative-name">
                <div className="representative-role">株式会社BitVoyage 代表</div>
                <div className="representative-name-jp">北束 優花</div>
                <div className="representative-name-furi">きたづか ゆうか</div>
              </div>
            </div>
            <div className="representative-body">
              <div className="representative-message">
                <p>
                  以前は大手半導体メーカーで、生産技術を担当していました。<br/>
                  「間違いが起きにくい工程をどう作るか」を毎日考える仕事で、<br/>
                  工程のばらつきや属人化を、仕組みで抑えていく日々でした。
                </p>
                <p>
                  当時から Excel マクロを使って、<br/>
                  工程の記録を一気通貫で残す仕組みを作っていました。
                </p>
                <p>
                  業務を人の頑張りだけで支えていると、いつか限界がきます。<br/>
                  売上につながらない作業に、貴重な人件費を使い続けるのはもったいない。<br/>
                  その思いが、今の仕事の軸になっています。
                </p>
                <p>
                  独立後、自動化や AI まわりの技術を広げるなかで、<br/>
                  ずっと頭にあったのは、東広島や呉のような地域の企業ほど、<br/>
                  この知識が役に立つはずだ、ということでした。
                </p>
                <p>
                  人手が足りないなかで、限られた人数で業務を回していく。<br/>
                  それを外側から、現場に近い距離で支えるパートナーでありたい。<br/>
                  そう思って BitVoyage を始めました。
                </p>
                <p className="representative-closing">
                  <span className="marker">まずは、今いちばん時間を取られている作業を聞かせてください。</span><br/>
                  売上につながらない作業を、一緒に減らしていきます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 会社情報 */}
      <section className="section" style={{ padding: "40px 0 60px" }}>
        <div className="container-narrow fade-up">
          <h2 className="section-title" style={{ fontSize: 26, marginBottom: 24 }}>会社概要</h2>
          <div className="company-info-box">
            {[
              ["会社名", "株式会社BitVoyage"],
              ["所在地", "広島県広島市（登記住所）"],
              ["活動拠点", "東広島市・呉市を中心に広島県内対応"],
              ["代表者", "北束 優花（きたづか ゆうか）"],
              ["事業内容", "中小企業向けに、売上につながらない作業を減らす支援。作業の相談から、削減・現場整理・継続サポートまで。"],
              ["お問い合わせ", <a href="mailto:contact@bitvoyage.co.jp" style={{ color: "var(--navy-800)", fontWeight: 600 }}>contact@bitvoyage.co.jp</a>],
            ].map(([k, v], i, arr) => (
              <div key={k} className="company-info-row" style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none" }}>
                <div className="company-info-label">{k}</div>
                <div className="company-info-value">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 大切にしていること */}
      <section className="section" style={{ padding: "40px 0 80px", background: "var(--paper-2)" }}>
        <div className="container fade-up">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-eyebrow">our values</div>
            <h2 className="section-title" style={{ fontSize: 28 }}>大切にしていること</h2>
          </div>
          <div className="value-grid">
            {[
              { n: "01", t: "作業を見る", d: "現場や画面を見ながら、売上につながらないのに時間を奪っている作業を見つけます。" },
              { n: "02", t: "小さく減らす", d: "大きく作り替える前に、数時間〜数日で減らせる作業から手をつけます。" },
              { n: "03", t: "続く形にする", d: "減らして終わりにしない。現場の人が自分で続けられるところまで一緒にやります。" },
            ].map(v => (
              <div key={v.n} className="card" style={{ background: "#fff" }}>
                <div style={{ fontFamily: "var(--font-hand)", fontSize: 28, color: "var(--yellow-500)", fontWeight: 700, marginBottom: 8 }}>{v.n}</div>
                <h3 style={{ fontSize: 19, color: "var(--navy-900)", margin: "0 0 12px", fontWeight: 800 }}>{v.t}</h3>
                <p style={{ fontSize: 14, color: "var(--ink-700)", lineHeight: 1.9, margin: 0 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTARibbon />
      <SiteFooter />
    </div>
  );
}

window.CompanyPage = CompanyPage;
