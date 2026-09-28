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
            毎日の手間を減らし、<br/><span className="underline-hand">経験を会社の力</span>に。
          </h1>
          <p className="company-hero-lead">
            AIとITで、現場の仕事に合う仕組みをつくる。<br/>
            業務整理からシステム構築、運用・改善まで、<br/>
            IT担当がいない中小企業を支える外部ITパートナーです。
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
            <p className="company-mission-tagline" lang="en">Small steps, big change</p>
            <h2 className="company-mission-title">
              小さな改善を、<br className="mobile-only"/>
              <span className="underline-hand">大きな未来</span>へ。
            </h2>
            <div className="mission-illustration" aria-hidden="true">
              <img className="wc-illust-cut" src="assets/illustrations/watercolor/mission-workplace.webp" alt="" />
            </div>
            <p className="company-mission-lead">
              繰り返す手間が減れば、本業に使える時間が増える。<br/>
              判断の根拠や工夫が残れば、次の人がそれを使える。<br/><br/>
              一人に集中していた仕事を、少しずつ任せられる形に。<br/>
              今いる人で引き受けられる仕事と、<br/>
              会社のこれからの選択肢を広げていきます。
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
                  以前は大手半導体メーカーの生産技術職として、工程のばらつきを抑え、担当者が変わっても同じ品質で作業できる仕組みづくりに取り組んでいました。<br/>
                  製造履歴を一気通貫で残し、現場で必要な情報を確認できる仕組みの設計も、その一つです。
                </p>
                <p>
                  そこで培ったのは、仕事の流れを整理し、<br/>
                  必要な情報が必要なところにつながるように設計する力です。<br/>
                  そもそも、その作業は必要か。<br/>
                  どこまで仕組みに任せ、どこを人が判断するか。<br/>
                  現場で無理なく使い続けられるか。
                </p>
                <p>
                  使う道具が変わっても、この考え方は今の仕事の土台になっています。
                </p>
                <p>
                  毎日の転記や確認が減ることには、目に見える価値があります。<br/>
                  もう一つ大切にしたいのは、仕事の中で生まれた判断や工夫を、<br/>
                  その場限りにせず、次に使える形で残すことです。
                </p>
                <p>
                  「なぜこの条件にしたか」「どう対応して解決したか」。<br/>
                  そうした経験が案件や記録と一緒に残れば、<br/>
                  別の人も過去の経緯をたどり、仕事を引き受けやすくなります。
                </p>
                <p>
                  そのために、まず現場の仕事の流れを一緒に整理します。<br/>
                  システムの間を人が転記してつないでいるなら、その情報をつなぐ。<br/>
                  特定の人に聞かないと進まないなら、判断の根拠を共有できる形にする。<br/>
                  AIやITは、こうした変化を支える道具として使います。
                </p>
                <p>
                  つくって終わりではなく、使いながら、現場に合う形へ整えていく。<br/>
                  広島を拠点に、地域でもオンラインでも、<br/>
                  日々の仕事を一緒に考えられるパートナーでありたいと思っています。
                </p>
                <p className="representative-closing">
                  <span className="marker">「うちの仕事も変えられる？」から、お聞かせください。</span><br/>
                  減らせる手間と、会社に残したい経験を、一緒に見つけていきます。
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
              ["対応エリア", "広島市・東広島市・呉市を中心に対面対応。オンラインは全国対応。"],
              ["代表者", "北束 優花（きたづか ゆうか）"],
              ["事業内容", "中小企業向けの業務システム構築・運用支援。業務整理、AI・ITを活用した作業の効率化、システム間の情報連携、知見を蓄積・共有する仕組みづくり。"],
              ["インボイス登録番号", "T4240001063357（適格請求書発行事業者）"],
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
      <section className="section section-plain" style={{ padding: "40px 0 80px" }}>
        <div className="container fade-up">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-eyebrow">our values</div>
            <h2 className="section-title" style={{ fontSize: 28 }}>大切にしていること</h2>
          </div>
          <div className="value-grid">
            {[
              { n: "01", t: "全体を見て、小さく始める", d: "仕事の流れと、今使っている道具を一緒に確認します。前後の工程とのつながりを見ながら、変化を確かめられる一つの業務から整えます。" },
              { n: "02", t: "経験を、次に使える形に", d: "現場の判断や工夫を大切に、案件や対応履歴と一緒に残します。記録の負担ばかり増えないよう、普段の仕事の流れに組み込みます。" },
              { n: "03", t: "使いながら、一緒に育てる", d: "作業時間や引き継ぎやすさの変化を確かめ、使って分かったことを反映します。費用と運用の負担も見ながら、無理なく続けられる形を考えます。" },
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
