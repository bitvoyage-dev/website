// トップページ — 名刺とつながる、時間と知見の二つの価値。
const HOME_ART = "assets/illustrations/watercolor/";
const HOME_CARD_ART = HOME_ART + "namecard-20260919/";

function HomeA() {
  useRevealOnScroll();
  return (
    <div className="page bg-grid home-renewal">
      <TopNav currentPage="home" />
      <main>
        <section className="home-hero renewal-hero">
          <div className="container fade-up">
            <p className="renewal-eyebrow">IT担当がいない会社の、業務システム構築・運用支援</p>
            <h1 className="renewal-title"><span>AIとITで、</span><br/>毎日の手間を<span className="renewal-underline">減らす。</span></h1>
            <p className="renewal-answer">手間は減らす。<br className="mobile-only"/>経験は、会社の力に変える。</p>
            <p className="renewal-lead">現場の仕事を一緒に整理し、会社に合うシステムをつくります。<br/>本業に使える時間と、誰かに任せられる仕事を増やしていきます。</p>
            <div className="home-hero-actions">
              <a href="#contact" className="btn btn-primary">うちの仕事も変えられる？を相談する <Icon.ArrowRight /></a>
              <a href="#benefits" className="btn btn-outline">導入すると、どう変わる？ <span aria-hidden="true">↓</span></a>
            </div>
            <p className="renewal-small">相談無料・オンライン全国対応 ／ 広島市・東広島・呉は対面も</p>
            <div className="renewal-illustrations" aria-label="お手伝いできること">
              {[
                ["transfer2.webp", "転記・集計の手間を減らす"],
                ["search1.webp", "探す時間を減らす"],
                ["progress2.webp", "進捗を見えるように"],
                ["ai2.webp", "AIを活かせる土台づくり"],
              ].map(([img, title], i) => <div className="renewal-illustration" key={img} style={{"--item-index": i}}><img src={HOME_CARD_ART + img} alt="" width="120" height="110"/><span>{title}</span></div>)}
            </div>
          </div>
        </section>

        <section id="benefits" className="section section-plain renewal-section">
          <div className="container">
            <div className="renewal-heading fade-up"><div className="section-eyebrow">two changes</div><h2>仕組みにすると、<br className="mobile-only"/><span className="underline-hand">二つの価値</span>が残ります。</h2><p>目の前の仕事がラクになること。<br className="mobile-only"/>そして、次の仕事が進めやすくなること。</p></div>
            <div className="renewal-benefits">
              <article className="renewal-benefit fade-up">
                <div className="renewal-benefit-top"><span className="renewal-number">01</span><span>作業の効率化</span></div>
                <img src={HOME_ART + "outcome-coffee.webp"} alt="" loading="lazy" className="wc-illust-cut" width="180" height="140"/>
                <h3>毎日の作業が減り、<br/>本業に使える時間が増える。</h3>
                <p>同じ情報の入力、書類探し、毎月の集計。繰り返す作業を仕組みに任せて、人は確認やお客さまへの対応に集中できるように。</p>
                <div className="renewal-benefit-example">確かめること <strong>作業時間・確認回数・手戻りの変化</strong></div>
              </article>
              <article className="renewal-benefit fade-up">
                <div className="renewal-benefit-top"><span className="renewal-number">02</span><span>知見の蓄積</span></div>
                <img src={HOME_ART + "case-tejun.webp"} alt="" loading="lazy" className="wc-illust-cut" width="180" height="140"/>
                <h3>一人の経験が残り、<br/>みんなが使える財産になる。</h3>
                <p>「なぜこの見積もりにしたか」「どう対応して解決したか」。頭の中にあった判断の根拠や工夫を、日々の仕事と一緒に記録。次の担当者が参考にできます。</p>
                <div className="renewal-benefit-example">確かめること <strong>過去の対応を探せる・任せられる仕事が増える</strong></div>
              </article>
            </div>
            <div className="renewal-capacity fade-up"><span className="renewal-connector" aria-hidden="true">↓</span><h3>今いる人で、<span className="underline-hand">引き受けられる仕事</span>を増やす。</h3><p>手作業が減り、判断の根拠を共有できれば、仕事が一人に集中しにくくなります。<br/>社長やベテランの手を空けながら、会社全体で対応できる範囲を広げていきます。</p></div>
          </div>
        </section>

        <HomeWorkExamples />
        <HomeTimeEstimate />

        <section className="section renewal-section renewal-knowledge">
          <div className="container-narrow fade-up">
            <div className="renewal-heading"><div className="section-eyebrow">experience becomes an asset</div><h2>その場で終わっていた経験を、<br/><span className="underline-hand">次の仕事の出発点</span>に。</h2><p>見積もりの根拠も、トラブルを解決した工夫も。<br/>仕事をするたび、会社の中に使える知見が増えていく仕組みへ。</p></div>
            <ol className="renewal-knowledge-flow">
              <li><span>01 ／ 残す</span><h3>仕事と一緒に記録する</h3><p>案件・図面・対応履歴に、判断した理由や注意点も紐づけます。</p></li>
              <li><span>02 ／ 使う</span><h3>次の人が見つけられる</h3><p>似た案件の進め方が分かり、毎回ゼロから考える手間を減らします。</p></li>
              <li><span>03 ／ 活かす</span><h3>AIにも活かせる土台へ</h3><p>整理した情報をもとに、検索や文案作成を支援。大切な判断は人が確認します。</p></li>
            </ol>
            <p className="renewal-knowledge-note">記録する作業ばかり増えないよう、普段の仕事の流れに組み込みます。</p>
          </div>
        </section>

        <section className="section section-plain renewal-section">
          <div className="container fade-up">
            <div className="renewal-heading"><div className="section-eyebrow">small steps, big change</div><h2>「費用に見合うのか」を、<br/><span className="underline-hand">一緒に確かめながら。</span></h2><p>どの作業が、どう変われば意味があるか。<br/>導入前に確かめるポイントを決め、一つの業務から始めます。</p></div>
            <ol id="process" className="renewal-process">
              {[
                ["業務整理", "今の手間を見える形に", "かかっている時間、件数、誰に確認しているかを整理。減らす作業と、残したい知見を一緒に見つけます。"],
                ["システム構築", "一つの業務で試す", "今の道具も活かしながら、小さくつくって現場で確認。使いやすさと費用のバランスを見て進めます。"],
                ["運用・改善", "変化を確かめ、育てる", "導入前後の作業時間や引き継ぎやすさを確認。使って分かったことを反映し、必要な範囲へ広げます。"],
              ].map(([label,title,desc],i)=><li key={label}>
                  <div className="renewal-process-label">
                    <span className="renewal-process-number">0{i+1}</span>
                    <span className="renewal-process-name">{label}</span>
                    <svg className="renewal-process-sketch" viewBox="0 0 320 86" preserveAspectRatio="none" aria-hidden="true">
                      <path d={[
                        "M14 12 Q83 5 161 10 T307 9 Q313 37 306 72 Q237 80 153 74 T11 77 Q5 43 14 12 M20 15 Q132 10 220 14",
                        "M12 9 Q91 13 171 7 T305 13 Q311 43 308 75 Q226 70 154 77 T9 72 Q14 41 12 9 M19 77 Q117 80 197 75",
                        "M15 11 Q109 5 191 11 T308 8 Q304 35 310 73 Q225 80 144 74 T12 77 Q7 41 15 11 M17 8 Q100 4 163 8"
                      ][i]} />
                    </svg>
                  </div>
                  {i < 2 && <svg className="renewal-process-arrow" viewBox="0 0 60 28" aria-hidden="true"><path d="M3 17 Q23 5 51 13 M43 5 Q48 9 53 13 L43 21"/></svg>}
                  <h3>{title}</h3><p>{desc}</p>
                </li>)}
            </ol>
            <div className="renewal-center"><a href="service.html" className="btn btn-outline">支援内容・料金の目安を見る <Icon.ArrowRight /></a></div>
          </div>
        </section>

        <section className="section renewal-partner">
          <div className="container-narrow fade-up">
            <div className="renewal-heading"><div className="section-eyebrow">your IT partner</div><h2>中小企業の、<br className="mobile-only"/>ずっと頼れる<span className="underline-hand">外部ITパートナー</span>に。</h2><p>現場の仕事を一緒に整理し、つくって、使いながら整える。<br/>今の仕事をラクにしながら、未来の可能性も広げていきます。</p></div>
            <div className="position-block" style={{ marginBottom: 32 }}>
              <h3 className="position-title">社内にITに詳しい人がいなくても、<br/>一緒に仕事を進めます。</h3>
              <p className="position-text">日々の事務や、慣れないシステムの操作を、担当の方と一緒に。<br/>実際の仕事を進めながら、今ある道具やAIを活かせるところを見つけます。<br/>紙や手書きが中心の会社も、今のやり方から始められます。</p>
              <a href="service.html#advisor" className="btn btn-outline">一緒に手を動かす「伴走サポート」を見る <Icon.ArrowRight /></a>
            </div>
            <div className="home-rep-strip">
              <img className="home-rep-photo" src="assets/picture/1X8A4633.JPG" alt="株式会社BitVoyage 代表 北束 優花" loading="lazy"/>
              <div className="home-rep-body"><div className="home-rep-name">代表・北束 優花<span>（きたづか ゆうか）</span></div><p className="home-rep-text">前職は半導体メーカーの生産技術職で、業務改善に携わっていました。<br/>現場の流れと人の判断を大切に、無理なく使い続けられる仕組みをつくります。</p><a href="company.html" className="home-rep-link">代表の紹介を見る →</a></div>
            </div>
          </div>
        </section>
        <CTARibbon />
      </main>
      <SiteFooter />
    </div>
  );
}

function HomeWorkExamples() {
  const examples = [
    {title:"見積もり・請求", image:"transfer2.webp", before:"前のファイルを探して、同じ情報を何度も入力。", after:"案件の情報から書類をつくり、人は内容の確認へ。", asset:"見積もりの条件や変更理由も残り、次の案件で参考にできる。"},
    {title:"案件・図面探し", image:"search1.webp", before:"「あの案件、どうしたっけ？」と分かる人を探す。", after:"案件・図面・やり取りをまとめて、必要な情報にたどり着ける。", asset:"似た案件の注意点が分かり、担当が変わっても進めやすくなる。"},
    {title:"進捗・引き継ぎ", image:"progress2.webp", before:"社長や担当者に聞かないと、今の状況が分からない。", after:"誰が・何を・どこまで進めているか、同じ画面で確認。", asset:"対応の経緯が残り、ほかの人も続きを引き受けやすくなる。"},
  ];
  const [selected, setSelected] = React.useState(0);
  const current = examples[selected];
  return <section id="examples" className="section renewal-section">
    <div className="container-narrow fade-up">
      <div className="renewal-heading"><div className="section-eyebrow">from everyday work</div><h2>たとえば、いつもの仕事が<br/><span className="underline-hand">こう変わります。</span></h2><p>自社に近い仕事を選んでみてください。</p></div>
      <div className="renewal-example-buttons" role="group" aria-label="仕事の例を選ぶ">{examples.map((example,i)=><button key={example.title} type="button" aria-pressed={selected===i} aria-controls="work-example" onClick={()=>setSelected(i)}>{example.title}</button>)}</div>
      <div id="work-example" className="renewal-example" aria-live="polite" aria-atomic="true">
        <div className="renewal-example-image"><img src={HOME_CARD_ART + current.image} alt="" width="170" height="170" loading="lazy"/><h3>{current.title}</h3></div>
        <div key={selected} className="renewal-example-body"><div className="renewal-before"><span>今まで</span><p>{current.before}</p></div><div className="renewal-after"><span>仕組みにすると</span><p>{current.after}</p></div><div className="renewal-asset"><strong>さらに、会社に残るもの</strong><p>{current.asset}</p></div></div>
      </div>
      <div className="renewal-example-footer"><p className="renewal-small">※ 想定される活用例です。実際の対応範囲は業務を確認してご提案します。</p><a href="improvements.html">ほかの改善例も見る →</a></div>
    </div>
  </section>;
}

function HomeTimeEstimate() {
  const [minutes, setMinutes] = React.useState(30);
  const [people, setPeople] = React.useState(3);
  const [days, setDays] = React.useState(20);
  const monthly = minutes * people * days / 60;
  const format = value => new Intl.NumberFormat("ja-JP", {maximumFractionDigits:1}).format(value);
  return <section className="section renewal-section renewal-estimate">
    <div className="container-narrow fade-up">
      <div className="renewal-heading"><div className="section-eyebrow">make the change visible</div><h2>1日少しの手間も、<br/><span className="underline-hand">会社全体では大きな時間。</span></h2><p>もし、毎日の作業をこれだけ減らせたら。<br/>自社の人数や稼働日数に変えて、時間の目安を確かめられます。</p></div>
      <div className="renewal-calculator">
        <div className="renewal-inputs">
          <label htmlFor="saved-minutes">1人が1日に減らせたとしたら <span><strong>{minutes}</strong> 分</span></label>
          <input id="saved-minutes" type="range" min="0" max="120" step="5" value={minutes} onChange={e=>setMinutes(Number(e.target.value))} aria-valuetext={minutes + "分"}/>
          <div className="renewal-range-ends" aria-hidden="true"><span>0分</span><span>120分</span></div>
          <div className="renewal-selects"><label htmlFor="estimate-people">対象の人数<select id="estimate-people" value={people} onChange={e=>setPeople(Number(e.target.value))}>{[1,2,3,5,10,20,30,50].map(n=><option key={n} value={n}>{n}人</option>)}</select></label><label htmlFor="estimate-days">月の稼働日数<select id="estimate-days" value={days} onChange={e=>setDays(Number(e.target.value))}>{[5,10,15,20,22,25,30].map(n=><option key={n} value={n}>{n}日</option>)}</select></label></div>
        </div>
        <div className="renewal-result" role="status" aria-live="polite" aria-atomic="true"><span>本業に回せる時間の目安</span><p>月 <strong>{format(monthly)}</strong> 時間</p><div>1年なら <b>{format(monthly*12)}時間</b></div><small>{minutes}分 × {people}人 × {days}日 ÷ 60</small></div>
      </div>
      <p className="renewal-estimate-note">※ 入力条件による単純試算で、導入実績や削減の保証ではありません。年間は同じ条件で12か月として計算。空いた時間が、そのまま現金の支出削減になるわけではありません。</p>
      <p className="renewal-estimate-closing">その時間を、お客さまへの提案や、次の仕事の準備に。<br/>まずは実際の作業を見て、どれくらい減らせそうかを一緒に確かめます。</p>
    </div>
  </section>;
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
      t: "伴走サポート",
      price: "月15万円〜",
      feeling: "日々の事務を、一緒に手を動かしながら、もっと進めやすく。",
      body: "実際の事務作業を一緒に進めながら、慣れない操作や、今あるシステム・AIの活用をサポートします。標準は月4回（1回2〜3時間）。ご訪問・オンラインに対応します。",
      note: "支援時間内の共同作業・操作のサポート・軽微な手直しを含みます。新しいシステムの構築や連携開発などの実装は別途お見積りです。",
      items: ["事務作業を一緒に進める", "慣れない操作のサポート", "今あるシステムの活用", "AIに任せられる作業の試行", "その場でできる軽微な手直し", "業務の流れや残す情報の整理"],
    },
    {
      t: "保守サポート",
      price: "月3万円〜",
      feeling: "「急に動かなくなったらどうしよう」が、なくなります。",
      body: "お作りした仕組みが、これからも問題なく使い続けられるようにお預かりします。動かなくなってから慌てるのではなく、気づいた時点で直せる状態にしておきます。",
      note: "新しい機能を足す場合は「追加実装」として別途お見積りします。",
      items: ["不具合が出たときの対応", "利用ツール・連携先の仕様変更への対応", "項目名や表示まわりの細かい直し", "使い方の質問へのお答え", "動作の定期確認"],
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
          「うちの仕事も変えられる？」から、お聞かせください。
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
            減らせる手間と、残しておきたい知見が見えてきます。
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
