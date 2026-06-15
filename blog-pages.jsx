// blog-pages.jsx — ブログ一覧 & 記事詳細

function BlogPage() {
  useRevealOnScroll();
  const [category, setCategory] = React.useState("すべて");
  const categories = ["すべて", "進め方", "手作業を減らす", "止まる仕事", "属人化"];
  const posts = window.SAMPLE_POSTS;
  const filtered = category === "すべて" ? posts : posts.filter(p => p.category === category);
  const gridPosts = filtered.filter(p => p.slug !== posts[0].slug);

  return (
    <div className="page bg-grid">
      <TopNav currentPage="blog" />
      <section className="blog-hero">
        <div className="container fade-up" style={{ textAlign: "center" }}>
          <div className="section-eyebrow">blog</div>
          <h1 className="blog-hero-title">
            売上につながらない作業を、<br className="mobile-only" /><span className="marker">減らす</span>ヒント
          </h1>
          <p className="blog-hero-lead">
            手入力・転記・整理・連絡など、<br className="mobile-only" />毎日 時間を奪っている作業を、<br/>
            どう見つけて減らすか。<br className="mobile-only" />その考え方と実例をまとめています。
          </p>
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: "32px 0" }}>
        <div className="container fade-up">
          <a href={`article.html?slug=${posts[0].slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <div className="card blog-feature-card">
              {posts[0].image ? (
                <div className="blog-feature-image">
                  <img src={posts[0].image} alt="" />
                </div>
              ) : (
                <div className="ph blog-feature-image">
                  <span>特集記事イメージ</span>
                </div>
              )}
              <div className="blog-feature-body">
                <div style={{ display: "flex", gap: 8, marginBottom: 16, alignItems: "center" }}>
                  <span className="tag tag-yellow">Featured</span>
                  <span className="tag">{posts[0].category}</span>
                  <span style={{ color: "var(--ink-500)", fontSize: 12 }}>{posts[0].date}</span>
                </div>
                <h2 className="blog-feature-title">
                  {posts[0].title}
                </h2>
                <p style={{ fontSize: 15, color: "var(--ink-700)", lineHeight: 1.9, margin: "0 0 20px" }}>
                  {posts[0].excerpt}
                </p>
                <div style={{ color: "var(--navy-800)", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                  続きを読む <Icon.ArrowRight />
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* カテゴリフィルタ・記事グリッドは記事数が増えてから表示 */}
      {posts.length > 1 && (
        <section style={{ padding: "32px 0 16px" }}>
          <div className="container fade-up">
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", borderBottom: "1px solid var(--line)", paddingBottom: 16 }}>
              {categories.map(c => (
                <button key={c} onClick={() => setCategory(c)}
                  style={{
                    padding: "8px 18px", borderRadius: 999, border: "1px solid",
                    borderColor: category === c ? "var(--navy-800)" : "var(--line)",
                    background: category === c ? "var(--navy-800)" : "transparent",
                    color: category === c ? "#fff" : "var(--ink-700)",
                    fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
                    transition: "all .15s"
                  }}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {gridPosts.length > 0 && (
        <section style={{ padding: "32px 0 80px" }}>
          <div className="container">
            <div className="post-grid">
              {gridPosts.map(p => <PostCard key={p.slug} post={p} />)}
            </div>
          </div>
        </section>
      )}

      {posts.length <= 1 && (
        <section style={{ padding: "32px 0 80px" }}>
          <div className="container fade-up" style={{ textAlign: "center", color: "var(--ink-500)", fontSize: 14 }}>
            新しい記事を順次追加していきます。
          </div>
        </section>
      )}

      <CTARibbon />
      <SiteFooter />
    </div>
  );
}

function ArticlePage() {
  useRevealOnScroll();
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || window.SAMPLE_POSTS[0].slug;
  const post = window.SAMPLE_POSTS.find(p => p.slug === slug) || window.SAMPLE_POSTS[0];
  const related = window.SAMPLE_POSTS.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="page" style={{ background: "var(--paper)" }}>
      <TopNav currentPage="blog" />

      {/* 記事ヘッダー */}
      <section style={{ padding: "56px 0 32px" }}>
        <div className="container-narrow fade-up">
          <div style={{ fontSize: 13, color: "var(--ink-500)", marginBottom: 16 }}>
            <a href="blog.html" style={{ color: "var(--navy-800)", textDecoration: "none" }}>ブログ</a> / {post.category}
          </div>
          <div style={{ display: "flex", gap: 10, marginBottom: 20, alignItems: "center" }}>
            <span className="tag">{post.category}</span>
            <span style={{ color: "var(--ink-500)", fontSize: 13 }}>{post.date}</span>
            <span style={{ color: "var(--ink-500)", fontSize: 13 }}>· {post.readMin}分で読める</span>
          </div>
          <h1 style={{ fontSize: 38, fontWeight: 800, color: "var(--navy-900)", margin: "0 0 24px", lineHeight: 1.45 }}>
            {post.title}
          </h1>
          <p style={{ fontSize: 17, color: "var(--ink-700)", lineHeight: 1.9, margin: 0 }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* アイキャッチ */}
      <section style={{ padding: "16px 0 40px" }}>
        <div className="container-narrow">
          {post.image ? (
            <div className="article-eyecatch-frame">
              <img src={post.image} alt="" />
            </div>
          ) : (
            <div className="ph" style={{ height: 360 }}>
              <span>記事アイキャッチ画像</span>
            </div>
          )}
        </div>
      </section>

      {/* 本文 */}
      <article style={{ padding: "16px 0 64px" }}>
        <div className="container-narrow fade-up" style={{ fontSize: 16, lineHeight: 2, color: "var(--ink-900)" }}>
          <ArticleBody slug={slug} />
        </div>
      </article>

      {/* タグ */}
      <section style={{ padding: "0 0 48px" }}>
        <div className="container-narrow">
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontSize: 13, color: "var(--ink-500)" }}>タグ:</span>
            {post.tags.map(t => <span key={t} className="tag">#{t}</span>)}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      {related.length > 0 && (
        <section style={{ padding: "56px 0 80px", background: "var(--paper-2)", borderTop: "1px solid var(--line)" }}>
          <div className="container">
            <h2 style={{ fontSize: 22, color: "var(--navy-900)", margin: "0 0 24px", fontWeight: 800 }}>
              関連する記事
            </h2>
            <div className="post-grid">
              {related.map(p => <PostCard key={p.slug} post={p} />)}
            </div>
          </div>
        </section>
      )}

      <CTARibbon />
      <SiteFooter />
    </div>
  );
}

const H2_STYLE = { fontSize: 26, color: "var(--navy-900)", margin: "40px 0 16px", fontWeight: 800, borderLeft: "5px solid var(--yellow-500)", paddingLeft: 16 };
const H3_STYLE = { fontSize: 19, color: "var(--navy-900)", margin: "32px 0 10px", fontWeight: 800 };
const QUOTE_STYLE = { borderLeft: "4px solid var(--yellow-500)", background: "var(--yellow-100)", padding: "16px 24px", margin: "20px 0", borderRadius: "0 10px 10px 0" };
const QUOTE_P_STYLE = { margin: 0, fontSize: 16, color: "var(--navy-900)" };
const LIST_BOX_STYLE = { background: "var(--paper-2)", borderRadius: 12, padding: 28, margin: "24px 0", border: "1px solid var(--line)" };
const NOTE_BOX_STYLE = { marginTop: 56, paddingTop: 32, borderTop: "1px solid var(--line)", fontSize: 14, color: "var(--ink-700)", lineHeight: 1.9 };
const NOTE_LEAD_STYLE = { margin: "0 0 12px", fontWeight: 700, color: "var(--navy-900)", fontSize: 15 };
const ALINK_STYLE = { color: "var(--navy-800)", fontWeight: 600, textDecoration: "underline" };

function ArticleBody({ slug }) {
  if (slug === "excel-usb-mail") {
    return <ArticleBody_ExcelUsbMail />;
  }
  if (slug === "what-is-cloud") {
    return <ArticleBody_WhatIsCloud />;
  }
  if (slug === "data-backup") {
    return <ArticleBody_DataBackup />;
  }
  if (slug === "share-access") {
    return <ArticleBody_ShareAccess />;
  }
  if (slug === "cloud-myths") {
    return <ArticleBody_CloudMyths />;
  }
  if (slug === "customer-info-scattered") {
    return <ArticleBody_CustomerInfoScattered />;
  }
  if (slug === "fax-order-entry") {
    return <ArticleBody_FaxOrderEntry />;
  }
  if (slug === "duplicate-entry") {
    return <ArticleBody_DuplicateEntry />;
  }
  if (slug === "where-to-start") {
    return <ArticleBody_WhereToStart />;
  }
  if (slug === "manual-work-reduction") {
    return <ArticleBody_ManualWorkReduction />;
  }
  return <ArticleBody_BusinessClogIdentify />;
}

function ArticleBody_ExcelUsbMail() {
  return (
    <>
      <p>作った表を、USBメモリに入れて持ち運ぶ。メールに添付して送る。</p>
      <p>中小企業で、Excelをこうやって配っていないでしょうか。</p>
      <p>在庫表も、日報も、見積も。誰かが手元で作って、必要な人に渡す。それが当たり前になっている。</p>

      <h2 style={H2_STYLE}>困っているのは、Excelではない</h2>
      <p>Excelが悪いわけではありません。表計算の道具として、これほど身近で使えるものはありません。</p>
      <p>引っかかるのは、たいてい配り方のほうです。</p>
      <p>手元の1台に置いて、USBやメールで渡す。この運び方に、小さな手間がいくつもくっついています。</p>

      <h2 style={H2_STYLE}>「最新がどれか」が、分からなくなる</h2>
      <p>同じ表が、何人もの手元にコピーされていきます。</p>
      <blockquote style={QUOTE_STYLE}>
        <p style={QUOTE_P_STYLE}>「これ、先週の版だっけ」<br/>「私が直したの、どっちに入れたかな」</p>
      </blockquote>
      <p>誰かが直すたびに、別の版が増える。どれが正しいのか、開いて見比べないと分からなくなります。</p>

      <h2 style={H2_STYLE}>渡したあとは、追いかけられない</h2>
      <p>メールで送った表は、送った時点のものです。あとからこちらで直しても、相手の手元は古いまま。</p>
      <p>USBで渡せば、その1本が無いと誰も開けません。</p>
      <p>つまり、<span className="marker">配って回している間に、情報がばらばらの場所に散っていく</span>ということです。</p>
      <p>日報を現場のPCごとに作っていて、月末にそれを集めて1つにまとめ直す。製造の現場では、こういうことも起きます。</p>

      <h2 style={H2_STYLE}>まず、どう配っているかを書き出す</h2>
      <p>すぐにツールを入れ替える必要はありません。</p>
      <p>先にやるのは、その表が今どうやって配られているかを、見てみることです。</p>
      <div style={LIST_BOX_STYLE}>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>その表は、何人の手元にコピーされているか</li>
          <li>最新がどれか、すぐ分かるか</li>
          <li>誰かが直したとき、他の人にどう伝わるか</li>
        </ul>
      </div>
      <p>書き出すと、「Excelの問題」だと思っていたことが、「配り方の問題」に見えてきます。</p>
      <p>次回は、その配り方を変える「クラウド」という置き場所の話をします。</p>

      <div style={NOTE_BOX_STYLE}>
        <p style={NOTE_LEAD_STYLE}>
          BitVoyage では、その表が今どこに置かれ、どう配られているかを、一緒に書き出すところから始めています。
        </p>
        <p style={{ margin: "0 0 12px" }}>
          いきなりExcelをやめるのではなく、いま使っているものを活かして、置き方・配り方から整えます。
        </p>
        <p style={{ margin: 0 }}>
          東広島・呉を中心に、売上につながらない作業を減らし、会社が前に進む余力を一緒につくります。
        </p>
      </div>
    </>
  );
}

function ArticleBody_WhatIsCloud() {
  return (
    <>
      <p>「クラウドにすれば楽になりますよ」。そう言われても、何のことか分からないまま、話が終わってしまう。そんな経験はないでしょうか。</p>
      <p>言葉だけは、あちこちで耳にします。でも、中身をかみ砕いて説明してくれる人は、意外と少ない。</p>
      <p>今回は「クラウドとは何か」、そして「使うと何が変わるのか」を、できるだけシンプルに、私なりに整理します。</p>

      <h2 style={H2_STYLE}>一言でいうと「データの置き場所」</h2>
      <p>クラウドとは、写真やファイルを、自分のパソコンの中ではなく、インターネット上に置いておく仕組みです。</p>
      <p>机の引き出しにしまうか、ネット上の貸し倉庫に預けるか。違いは、その置き場所だけです。</p>
      <p>例えば、いつも使っているExcelファイル。これをパソコンの中ではなく、ネット上に置く。開けば、いつものExcelのままです。中身も、操作も、変わりません。変わるのは、<span className="marker">どこに置いてあるか、だけ</span>。</p>
      <p>そしてネット上に置いておけば、別のパソコンからでも、スマホからでも開けます。</p>

      <h2 style={H2_STYLE}>日常では、もう使っている</h2>
      <p>クラウドという仕組み自体は、日常でもう使っています。</p>
      <div style={LIST_BOX_STYLE}>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>機種変しても、前の写真がそのまま新しいスマホに入っている</li>
          <li>銀行の残高を、アプリでいつでも見られる</li>
          <li>メールが、機種を変えても消えずに残っている</li>
        </ul>
      </div>
      <p>どれも、データが手元の機械ではなく、ネット上に置いてあるから成り立っています。これがクラウドです。</p>
      <p>スマホでできているこの仕組みを、仕事で使うファイルにも使う。クラウドにする、というのは、そういうことです。</p>

      <h2 style={H2_STYLE}>仕事で使うと、何が変わるのか</h2>
      <p>では、仕事のファイルをネット上に置くと、何が変わるのか。大きいのは、3つです。</p>

      <h3 style={H3_STYLE}>1. 最新が、常に1つになる</h3>
      <p>今までは、同じ表が人それぞれの手元にあって、どれが最新か分からなくなりがちでした。</p>
      <p>ネット上の1か所に置けば、みんなが同じものを開きます。誰かが直せば、その場で全員に反映される。「どれが最新?」と確かめる手間が、まず消えます。</p>

      <h3 style={H3_STYLE}>2. どこからでも、開ける</h3>
      <p>会社のパソコンでなくても、家でも、出先でも、スマホからでも開けます。</p>
      <p>「事務所に戻らないと確認できない」が、なくなります。</p>

      <h3 style={H3_STYLE}>3. パソコンが壊れても、消えない</h3>
      <p>ネット上に控えが残るので、手元のパソコンが動かなくなっても、データはそのまま。</p>
      <p>この「消える・消えない」は大事な話なので、別の回でもう少し詳しく書きます。</p>

      <h2 style={H2_STYLE}>ためた情報を、後からAIに活かせる</h2>
      <p>これは少し先の話ですが、一番大きいところかもしれません。</p>
      <p>会社の中では、情報がそれぞれの人のパソコンに分かれて置かれています。これがネット上の1か所に集まっていれば、ためた情報を、後からAIに手伝ってもらって調べたり、まとめたりできます。</p>
      <p>逆に、あちこちに散らばったままだと、AIに渡すことすら難しい。会社の単位でやるなら、なおさらです。「みんなのデータを、ネット上にためておく」ことが、これから効いてきます。</p>

      <h2 style={H2_STYLE}>もちろん、気をつけることもある</h2>
      <p>いいことばかりではありません。</p>
      <p>ネットがつながっていないと開けない。多くは、月いくら、という形で費用がかかる。最初は、操作に少し慣れがいります。</p>
      <p>どれも、手元に置き続けたときの手間やリスクと、並べて考える話です。全部をクラウドにするのが正解、というわけでもありません。</p>

      <h2 style={H2_STYLE}>全部やらなくていい。向いている1つから</h2>
      <p>いきなり会社中のファイルを移す必要はありません。</p>
      <p>まずは、よく使うファイルを1つ。複数人で見るもの、出先で開きたいものは、特に向いています。逆に、自分一人しか使わないファイルなら、急がなくていい。</p>
      <p>1つ試して、楽になった実感があれば、そこから広げればいい。それで十分です。</p>

      <div style={NOTE_BOX_STYLE}>
        <p style={NOTE_LEAD_STYLE}>
          BitVoyage では、難しい言葉を持ち込むのではなく、いまの置き方を一緒に確認するところから始めています。
        </p>
        <p style={{ margin: "0 0 12px" }}>
          会社の環境に合わせて、Excelはそのまま、置き場所だけ変える、といった小さな一歩から探します。
        </p>
        <p style={{ margin: 0 }}>
          東広島・呉を中心に、売上につながらない作業を減らし、会社が前に進む余力を一緒につくります。
        </p>
      </div>
    </>
  );
}

function ArticleBody_DataBackup() {
  return (
    <>
      <p>毎日使っているExcelファイル。請求書のデータ。お客様の一覧。</p>
      <p>それが入っているPCが、ある日突然動かなくなったら。</p>
      <p>戻せるかどうか、すぐに答えられるでしょうか。</p>

      <h2 style={H2_STYLE}>手元1台に置く、ということ</h2>
      <p>PCの中だけにデータがある状態は、コピーが1つしかない、ということです。</p>
      <p>そのPCが壊れる、無くす、ウイルスにやられる。どれか1つでも起きれば、中身ごと消えます。</p>
      <p>USBにも入れている、という場合も、そのUSBが壊れたら同じです。</p>

      <h2 style={H2_STYLE}>バックアップは、「もう1つ控えを持つ」こと</h2>
      <p>難しい言葉に聞こえますが、やっていることは単純です。</p>
      <p>大事なデータの控えを、別の場所にもう1つ持っておく。それだけ。</p>
      <blockquote style={QUOTE_STYLE}>
        <p style={QUOTE_P_STYLE}>「うちは、ときどきUSBにコピーしてるから大丈夫」</p>
      </blockquote>
      <p>その手作業のコピーを、忘れず続けられているか。最後にとったのは、いつか。そこが弱点になります。</p>

      <h2 style={H2_STYLE}>クラウドだと、控えが自動で残る</h2>
      <p>ネット上に置いておくと、控えは自動で別の場所にも保たれます。</p>
      <p>手でUSBに移す作業も、「とり忘れ」もなくなる。</p>
      <p><span className="marker">消えてから気づくのでは、間に合わない</span>。これが一番こわいところです。</p>
      <p>図面や点検記録、何年分もの日報。作り直せないものほど、控えが要ります。</p>

      <h2 style={H2_STYLE}>まず、消えたら困るものを挙げてみる</h2>
      <p>全部を守ろうとしなくて大丈夫です。</p>
      <p>先にやるのは、消えたら本当に困るデータはどれかを、書き出すことです。</p>
      <div style={LIST_BOX_STYLE}>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>それは今、何台のPC・USBに入っているか</li>
          <li>1つ壊れたら、戻せるか</li>
          <li>最後に控えをとったのは、いつか</li>
        </ul>
      </div>
      <p>挙げてみると、本当に守るべきものは、思ったより絞れることに気づきます。</p>

      <div style={NOTE_BOX_STYLE}>
        <p style={NOTE_LEAD_STYLE}>
          BitVoyage では、消えたら困るデータがどこに、いくつ置かれているかを、一緒に確認するところから始めています。
        </p>
        <p style={{ margin: "0 0 12px" }}>
          大がかりな仕組みを入れるのではなく、いまの環境のまま、控えが残る形に整えます。
        </p>
        <p style={{ margin: 0 }}>
          東広島・呉を中心に、売上につながらない作業を減らし、会社が前に進む余力を一緒につくります。
        </p>
      </div>
    </>
  );
}

function ArticleBody_ShareAccess() {
  return (
    <>
      <p>この表、あの人にも見せたい。でも、全部を見られるのは、ちょっと困る。</p>
      <p>かといって自分の手元に抱えると、休んだとき、誰も開けない。</p>
      <p>見せるか、抱えるか。その二択のあいだに、ちょうどいい分け方があります。</p>

      <h2 style={H2_STYLE}>「共有」は、全部見せることではない</h2>
      <p>ファイルを共有する＝中身を全員に公開する、と思われがちです。</p>
      <p>でも実際は、誰に・どこまで見せるかを、細かく決められます。</p>
      <p>見せたい人にだけ、見せたい分だけ。それが共有の中身です。</p>

      <h2 style={H2_STYLE}>「見るだけ」と「直せる」を、分けられる</h2>
      <p>同じ表でも、人によって扱える範囲を変えられます。</p>
      <p>ある人は見るだけ。ある人は入力もできる。ある人は、そもそも開けない。</p>
      <blockquote style={QUOTE_STYLE}>
        <p style={QUOTE_P_STYLE}>「金額の欄は、見せたいけど、触られたくない」</p>
      </blockquote>
      <p>メールに添付して配ってしまうと、こうした線引きはもうできません。渡した先で誰がどう扱うかは、分からなくなります。</p>

      <h2 style={H2_STYLE}>属人化も、ここで少しほどける</h2>
      <p>一人の手元にだけある表は、その人が休むと止まります。</p>
      <p>置き場所を共有にして、見る人・直す人を決めておけば、本人がいなくても回る。</p>
      <p>大事なのは、<span className="marker">抱え込むのではなく、線を引いて渡す</span>ことです。</p>
      <p>点検表を現場の全員が入力し、確認は責任者だけ。製造の現場なら、こんな分け方もできます。</p>

      <h2 style={H2_STYLE}>まず、誰が何を見られるべきかを整理する</h2>
      <p>仕組みを入れる前に、いまの状態を見てみます。</p>
      <div style={LIST_BOX_STYLE}>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>その表は今、誰が見られて、誰が直せるか</li>
          <li>本当は、誰に見せて、誰に触らせたいか</li>
          <li>担当が休んだとき、代わりに開ける人はいるか</li>
        </ul>
      </div>
      <p>整理すると、「全公開か、抱え込みか」の二択ではない、と分かります。</p>

      <div style={NOTE_BOX_STYLE}>
        <p style={NOTE_LEAD_STYLE}>
          BitVoyage では、誰が何を見られるべきかを、いまのやりとりを見ながら一緒に整理するところから始めています。
        </p>
        <p style={{ margin: "0 0 12px" }}>
          大きな権限の仕組みを作るのではなく、必要な線引きから、小さく整えていきます。
        </p>
        <p style={{ margin: 0 }}>
          東広島・呉を中心に、売上につながらない作業を減らし、会社が前に進む余力を一緒につくります。
        </p>
      </div>
    </>
  );
}

function ArticleBody_CloudMyths() {
  return (
    <>
      <p>クラウドは、なんとなく不安。危なそうだし、お金もかかりそうだし、乗り換えも大変そう。</p>
      <p>その「なんとなく」のまま、一歩手前で止まっていないでしょうか。</p>
      <p>不安の中身を、安全・費用・手間の3つに分けて見てみます。</p>

      <h2 style={H2_STYLE}>「セキュリティが心配」について</h2>
      <p>ネット上に置くと危ない、と感じるのは自然なことです。</p>
      <p>ただ、手元のPCやUSBも、壊れる・無くす・持ち出される、というリスクを抱えています。</p>
      <p>クラウドを提供する側は、その対策に専門の人とお金をかけています。手元の1台で守るより、むしろ守りが厚いこともあります。</p>

      <h2 style={H2_STYLE}>「高いのでは」について</h2>
      <p>費用がかかるのは本当です。多くは、月額で払う形になります。</p>
      <p>ただ、人数や容量に応じて選べて、小さく始めれば少額から。無料の範囲で足りることもあります。</p>
      <p>大事なのは、<span className="marker">高いかどうかを、減らせる手間と並べて考える</span>ことです。</p>
      <p>最新版を探す時間、集め直す時間、消えたデータを作り直す時間。いまかかっている見えない手間と、見比べる話です。</p>

      <h2 style={H2_STYLE}>「乗り換えが大変では」について</h2>
      <p>全部を一気に移す、と考えると気が重くなります。</p>
      <p>でも、これまで書いてきたとおり、Excelはそのまま、置き場所だけ変えられます。中身を作り直す必要はありません。</p>
      <p>よく使うファイルを1つ、ネット上に移す。そこから始められます。</p>

      <h2 style={H2_STYLE}>不安の中身が分かれば、選べる</h2>
      <p>「なんとなく危ない」のままだと、ずっと手をつけられません。</p>
      <p>中身を分けて見れば、自分の会社に必要かどうかを、自分で判断できます。</p>
      <div style={LIST_BOX_STYLE}>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>心配なのは、安全・費用・手間のどれか</li>
          <li>その心配は、いまの置き方と比べて、どうか</li>
          <li>まず1つだけ試すなら、どのファイルか</li>
        </ul>
      </div>
      <p>不安は、正体が分かると、判断の材料に変わります。</p>

      <div style={NOTE_BOX_STYLE}>
        <p style={NOTE_LEAD_STYLE}>
          BitVoyage では、その不安が安全・費用・手間のどこにあるのかを、一緒にほどくところから始めています。
        </p>
        <p style={{ margin: "0 0 12px" }}>
          無理に乗り換えをすすめるのではなく、会社に合うかどうかを、いまの状態から一緒に考えます。
        </p>
        <p style={{ margin: 0 }}>
          東広島・呉を中心に、売上につながらない作業を減らし、会社が前に進む余力を一緒につくります。
        </p>
      </div>
    </>
  );
}

function ArticleBody_CustomerInfoScattered() {
  return (
    <>
      <p>お客様の連絡先はExcel、やりとりはLINE、名刺は引き出し、見積はメールの中。</p>
      <p>一人のお客様の情報が、いくつもの場所に分かれていないでしょうか。</p>
      <p>何かを確認するたびに、あちこちを開いて探しに行く。</p>

      <h2 style={H2_STYLE}>「その都度探す」が、当たり前になっていないか</h2>
      <p>情報がどこにあるか分かっていれば、探すのは一瞬。そう思いがちです。</p>
      <p>でも毎回確かめているのは、最新がどれか、そして誰が持っているか。</p>
      <p>探すこと自体より、「どこを見ればいいか」を考える時間が積み上がります。</p>

      <h2 style={H2_STYLE}>散らばると、人によって"最新"が変わる</h2>
      <p>同じお客様でも、担当者ごとに見ている場所が違うことがあります。</p>
      <blockquote style={QUOTE_STYLE}>
        <p style={QUOTE_P_STYLE}>「その番号、古いほうかもしれません」<br/>「LINEで聞いた住所、まだExcelに入れてなかった」</p>
      </blockquote>
      <p>どれが最新か決まっていないと、確認の電話やメールが一往復増えます。</p>
      <p>そして、その人が休むと、情報のありかごと分からなくなります。</p>

      <h2 style={H2_STYLE}>足りないのではなく、ばらばらなだけ</h2>
      <p>落ち着いて見ると、<span className="marker">情報が無いのではなく、ばらばらに置かれている</span>だけのことが多いです。</p>
      <p>必要なことは、もう社内のどこかにある。一か所にまとまっていないだけ。</p>
      <p>集める場所を決めるだけで、探す手間の多くは消えます。</p>

      <h2 style={H2_STYLE}>まず、どこに散らばっているかを書き出す</h2>
      <p>すぐに顧客管理システムを入れる必要はありません。</p>
      <p>先にやるのは、一人のお客様の情報が、いま何か所にあるかを書き出すことです。</p>
      <div style={LIST_BOX_STYLE}>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>連絡先・やりとり・名刺・見積は、それぞれどこにあるか</li>
          <li>最新がどれか、すぐ分かるか</li>
          <li>担当が休んだとき、他の人がたどり着けるか</li>
        </ul>
      </div>
      <p>書き出すと、「探すのが面倒」は、「集めれば済む」に近づきます。</p>

      <div style={NOTE_BOX_STYLE}>
        <p style={NOTE_LEAD_STYLE}>
          BitVoyage では、お客様の情報がどこに散らばっているかを、一緒に書き出すところから始めています。
        </p>
        <p style={{ margin: "0 0 12px" }}>
          いきなり大きな仕組みを入れるのではなく、いま使っているExcelやLINEを活かして、集め方から整えます。
        </p>
        <p style={{ margin: 0 }}>
          東広島・呉を中心に、売上につながらない作業を減らし、会社が前に進む余力を一緒につくります。
        </p>
      </div>
    </>
  );
}

function ArticleBody_FaxOrderEntry() {
  return (
    <>
      <p>FAXで届いた注文書を見ながら、品番と数量を、受注システムに打ち込む。</p>
      <p>電話で受けた注文を、メモしてから、あらためて入力する。</p>
      <p>こうした入力を、毎日のように続けていないでしょうか。</p>

      <h2 style={H2_STYLE}>「紙や電話で来るから」で、止まっていないか</h2>
      <p>この入力は、たいてい仕方ないものとして扱われます。</p>
      <p>「取引先がFAXで送ってくるんだから、こっちで打つしかない」。<br/>そう思っていると、見直す対象から外れたままになります。</p>
      <p>でも、引っかかるのは、ただ打つことではありません。</p>

      <h2 style={H2_STYLE}>打ち込みには、判断も混ざっている</h2>
      <p>注文書の品名が、社内の品番とそのまま一致しないことがあります。</p>
      <blockquote style={QUOTE_STYLE}>
        <p style={QUOTE_P_STYLE}>「"4号缶"は、うちのどの商品か」<br/>「いつもの数量は、ケースか、バラか」</p>
      </blockquote>
      <p>読み替えながら打つので、単純作業のようでいて、手も頭も止まります。</p>
      <p>そのうち、慣れた人でないと正確に打てない、という状態にもなります。</p>

      <h2 style={H2_STYLE}>打ち込んでいるのは、新しい注文ではない</h2>
      <p>一度、見方を変えてみます。</p>
      <p>手を動かしているのは、<span className="marker">注文を社内が読める形に移す作業</span>です。</p>
      <p>取引先が持っている注文の中身を、こちらの様式に置き換えているだけ。</p>
      <p>受け取り方を変えれば、この移し替えの多くは要らなくなります。</p>

      <h2 style={H2_STYLE}>まず、どこで手が止まるかを見てみる</h2>
      <p>すぐに受発注のシステムを入れ替える必要はありません。</p>
      <p>先に見るのは、注文が届いてから社内に登録されるまで、どこで手が止まっているかです。</p>
      <div style={LIST_BOX_STYLE}>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>注文は、どんな形で届いているか（FAX・電話・メール・取引先ごとの様式）</li>
          <li>打ち込むとき、どこで読み替えや確認が要るか</li>
          <li>それは、月に何件あるか</li>
        </ul>
      </div>
      <p>そこが見えると、「仕方ない」で済ませていた入力に、変えられる余地が見つかります。</p>

      <div style={NOTE_BOX_STYLE}>
        <p style={NOTE_LEAD_STYLE}>
          BitVoyage では、注文がどんな形で届いて、どこで手が止まっているかを、一緒に見るところから始めています。
        </p>
        <p style={{ margin: "0 0 12px" }}>
          いきなり大きなシステムに替えるのではなく、いまの受け取り方のまま減らせる方法から探します。
        </p>
        <p style={{ margin: 0 }}>
          東広島・呉を中心に、売上につながらない作業を減らし、会社が前に進む余力を一緒につくります。
        </p>
      </div>
    </>
  );
}

function ArticleBody_DuplicateEntry() {
  return (
    <>
      <p>見積書に入力した金額を、納品書にもう一度入力する。請求書でも、また入力する。</p>
      <p>こうした作業を、毎日のように繰り返していないでしょうか。</p>
      <p>同じ取引先名、同じ品番、同じ数量。一度どこかに入れた情報を、別の書類でもう一度、手で打ち直す。</p>

      <h2 style={H2_STYLE}>「そういうもの」になっていないか</h2>
      <p>この手の入力は、たいてい問題として意識されません。</p>
      <p>「書類が違うんだから、それぞれ入力するのは当たり前」。<br/>そう思っていると、見直す対象から外れたままになります。</p>
      <p>でも、よく見ると、打ち込んでいるのは毎回ほとんど同じ情報です。</p>

      <h2 style={H2_STYLE}>なぜ、同じ入力が残り続けるのか</h2>
      <p>理由は、2つあります。</p>
      <p>ひとつは、書類ごとに置き場所が分かれていること。見積はExcel、納品は別のソフト、請求はまた別。場所が違うと、「つなげる」という発想自体が出てきません。</p>
      <p>もうひとつは、1回が数分で済むこと。一度きりなら、大した手間には見えない。</p>
      <p>ただ、それが書類の数だけ、件数だけ、毎月くり返されます。足し合わせると、ばかにならない時間になります。</p>

      <h2 style={H2_STYLE}>打ち直しているのは、「新しい情報」ではない</h2>
      <p>2回目・3回目に入力している情報は、<span className="marker">すでにどこかに入っている情報</span>です。</p>
      <p>新しく考えて入れているのではなく、すでにある数字を、別の書類へ手で移しているだけ。</p>
      <p>一度入れたものを使い回せれば、打ち直しはゼロにできます。</p>

      <h2 style={H2_STYLE}>まずは、数えてみるだけでいい</h2>
      <p>先にやるのは、同じ情報を何回打ち直しているかを、数えてみることです。</p>
      <div style={LIST_BOX_STYLE}>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>一度入れた情報を、何種類の書類に再入力しているか</li>
          <li>それは、月に何件あるか</li>
          <li>1件あたり、何分かかっているか</li>
        </ul>
      </div>
      <p>やってみると、「当たり前」が、減らせる作業に見えてきます。</p>

      <div style={NOTE_BOX_STYLE}>
        <p style={NOTE_LEAD_STYLE}>
          BitVoyage では、こうした同じ入力がどこで重なっているかを、一緒に見つけるところから始めています。
        </p>
        <p style={{ margin: "0 0 12px" }}>
          いきなり大きなシステムを入れるのではなく、いま使っているExcelのまま、小さく減らせる方法から探します。
        </p>
        <p style={{ margin: 0 }}>
          東広島・呉を中心に、売上につながらない作業を減らし、会社が前に進む余力を一緒につくります。
        </p>
      </div>
    </>
  );
}

function ArticleBody_WhereToStart() {
  return (
    <>
      <p>業務を見直したい。でも、どこから手をつければいいか分からない。</p>
      <p>経営者・部門長の方で、こうした感覚を抱えたことはないでしょうか。</p>
      <p>手入力も、転記も、確認作業も、気になるところはいくつもある。どれも大事に見えて、結局どれも後回しになる。</p>

      <h2 style={H2_STYLE}>手をつける入口は、たいてい2つに割れる</h2>
      <p>「何から」を決めようとすると、入口は2つに分かれがちです。</p>
      <p>ひとつは、いっそ全部まとめて作り変えようとする入口。<br/>もうひとつは、いま一番困っている作業だけに手をつける入口。</p>
      <p>ただ、この2つは、どちらもつまずきやすい。</p>
      <p>全部まとめて作り変えようとすると、決めることが多すぎて、動き出す前で止まります。費用も時間も大きくなり、合わなかったときの作り直しも大きくなる。</p>
      <p>かといって目の前の作業だけ直すと、その場は楽になっても、あとで他の作業とつながらず、似た仕組みがばらばらに増えます。</p>
      <p>だから、その間をとります。まず流れを見て、そこから小さく始める。</p>

      <h2 style={H2_STYLE}>まず流れを見て、小さく始める</h2>
      <p>BitVoyage が手をつけるときの順番は、4つです。</p>

      <h3 style={H3_STYLE}>1. まず、全体の流れをざっと見る</h3>
      <p>受注から請求まで、仕事がどう流れているかを一度ざっと見ます。</p>
      <p>たとえば、FAXで来た注文を見積に打ち込み、納品書に書き写し、請求でまた入力する。同じ数字を手で何度も移している箇所が、流れの中に見えてきます。</p>
      <p>どこで手入力や転記、確認が増えているか。どこに作業が溜まりやすいか。<br/>細かく分析するのではなく、ざっくり地図を描く感覚です。</p>

      <h3 style={H3_STYLE}>2. その中から、最初に減らす作業を1つ決める</h3>
      <p>全部を一度に変えようとしない。負担が大きく、効果が出やすい作業を1つ選びます。</p>
      <blockquote style={QUOTE_STYLE}>
        <p style={QUOTE_P_STYLE}>「毎月いちばん時間を取られているのは、どれか」</p>
      </blockquote>

      <h3 style={H3_STYLE}>3. 小さく作って、使って、直す</h3>
      <p>最初から完成形を目指しません。小さく作って、実際に使ってみる。</p>
      <p>使うと、机の上では見えなかったズレが出ます。そこを直す。短く回すほど、ズレに早く気づけます。</p>

      <h3 style={H3_STYLE}>4. 必要なものだけ、あとからつなげる</h3>
      <p>小さく始めても、ばらばらにしない。</p>
      <p>他の作業とつなげた方がいい部分だけ、あとからつなげていきます。</p>

      <h2 style={H2_STYLE}>「大きく」でも「その場しのぎ」でもなく</h2>
      <p>この順番の芯は、ひとつです。</p>
      <p>大事なのは、<span className="marker">全体を見たうえで、小さく作る</span>こと。</p>
      <p>大きく賭けない。その場しのぎにもしない。</p>

      <h2 style={H2_STYLE}>最初の一歩は、作業選びではありません</h2>
      <p>何から手をつけるかを、急いで1つに絞らなくて大丈夫です。</p>
      <p>先にやるのは、流れをざっと見ること。</p>
      <div style={LIST_BOX_STYLE}>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>仕事は、どこからどこへ流れているか</li>
          <li>どこで手入力・転記が増えているか</li>
          <li>どこに作業が溜まりやすいか</li>
        </ul>
      </div>
      <p>全体が見えると、「何から」が「ここから」に決まります。</p>

      <div style={NOTE_BOX_STYLE}>
        <p style={NOTE_LEAD_STYLE}>
          BitVoyage では、まず業務の流れを見て、最初に減らす作業を一緒に決めるところから始めています。
        </p>
        <p style={{ margin: "0 0 12px" }}>
          いきなり大きな仕組みを作るのではなく、小さく試して、使いながら直していくスタイルです。
        </p>
        <p style={{ margin: 0 }}>
          東広島・呉を中心に、売上につながらない作業を減らし、会社が前に進む余力を一緒につくります。
        </p>
      </div>
    </>
  );
}

function ArticleBody_BusinessClogIdentify() {
  return (
    <>
      <p>忙しいのに、業務が進まない。</p>
      <p>経営者・部門長の方で、こうした感覚を抱えたことはないでしょうか。</p>
      <p>業務自体は、毎日回ってはいる。でも、月末の締めも、請求書発行も、毎月ぎりぎりまでもつれ込む。</p>

      <h2 style={H2_STYLE}>「人の問題」だけでは説明がつかない</h2>
      <p>多くの場合、最初に疑われるのは「人」です。</p>
      <p>段取りが悪い。<br/>主体性が足りない。<br/>育成が追いついていない。</p>
      <p>ただ、人の判断や努力でカバーしているということは、その時点で、仕組み側がそれを要求している、ということです。</p>
      <p>仕組みが、人の判断と努力を前提に組まれている、ということでもあります。</p>
      <p>つまり、見るべきは人ではなく、仕事の運ばれ方の側です。</p>

      <h2 style={H2_STYLE}>進まない会社で同時に起きている4つのこと</h2>
      <p>進まない会社では、4つのことが同時に起きています。</p>

      <h3 style={H3_STYLE}>1. 判断が多すぎる</h3>
      <p>手作業や属人作業が多いと、一つひとつで「どうするか」の判断が発生します。</p>
      <p>そのたびに、業務は短く止まる。<br/>それが日に何十回と積み重なっていくのです。</p>

      <h3 style={H3_STYLE}>2. 判断できる人が偏っている</h3>
      <blockquote style={QUOTE_STYLE}>
        <p style={QUOTE_P_STYLE}>「これはこの人しか決められない」</p>
      </blockquote>
      <p>これが増えると、判断は一部に集中していきます。</p>
      <p>一人に仕事が集まって、周囲は手が空いたまま待つ、ということが起こります。</p>

      <h3 style={H3_STYLE}>3. 工程がつながりすぎている</h3>
      <p>一つの工程が終わらないと、次に進めない。</p>
      <p>例えば、シフト作成が終わらないと、現場の配置も決まらない。</p>
      <p>一箇所止まると、後ろがすべて止まります。</p>

      <h3 style={H3_STYLE}>4. 処理量がそろっていない</h3>
      <p>前の工程は早いのに、後ろが遅い。<br/>またはその逆。</p>
      <p>例えば、受注は毎日入ってくるのに、社内の処理は週単位でしか動かない、というような差です。</p>
      <p>この差がある限り、結果として、どこかに必ず仕事の溜まり場ができる。</p>

      <h2 style={H2_STYLE}>「忙しい」のではなく「詰まっている」</h2>
      <p>この4つが重なると、業務は流れません。</p>
      <p>ここで重要なのは、<span className="marker">「忙しい」のではなく、「詰まっている」</span>ということです。</p>
      <p>処理はしているのに、流れていない。<br/>これでは、いくら頑張ったところで前には進みません。</p>

      <h2 style={H2_STYLE}>まずやることは、解決策の選定ではありません</h2>
      <p>この状態を変えるには、いきなり解決策を探してはいけません。</p>
      <p>まずやるべきは、</p>
      <div style={LIST_BOX_STYLE}>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>どこで止まっているのか</li>
          <li>誰の前で詰まっているのか</li>
          <li>どこに仕事が溜まっているのか</li>
        </ul>
      </div>
      <p>これを把握することです。</p>
      <p>地味な作業ですが、ここが見えると「忙しい」という感覚が、「ここが詰まっている」という具体に変わります。</p>
      <p>そこから初めて、改善の打ち手が現実的になります。</p>

      <div style={NOTE_BOX_STYLE}>
        <p style={NOTE_LEAD_STYLE}>
          BitVoyage では、業務の流れを見て、詰まっているところを書き出すところから始めています。
        </p>
        <p style={{ margin: "0 0 12px" }}>
          いきなり仕組みを変えるのではなく、小さな改善から積み重ねていくスタイルです。
        </p>
        <p style={{ margin: 0 }}>
          東広島・呉を中心に、売上につながらない作業を減らし、会社が前に進む余力を一緒につくります。
        </p>
      </div>
    </>
  );
}

function ArticleBody_ManualWorkReduction() {
  return (
    <>
      <p>毎月、同じ作業を繰り返している。</p>
      <p>Excelに数字を打ち込み、印刷して判子を押す。戻ってきた書類を、また手で入力する。</p>
      <p>「いつかこれを減らしたい」と思いながら、何も変わらないまま半年・1年が経つ。経営者・部門長の方で、こうした感覚を抱えたことはないでしょうか。</p>

      <h2 style={H2_STYLE}>「いつもの業務」として固定されている</h2>
      <p>手作業が減らないとき、原因を考える前の段階で、そもそも「減らす対象」として認識されていない場合があります。</p>
      <p>「これはずっとそうしてきた」<br/>「うちの業界はこれが普通」<br/>「人がやるしかない作業」</p>
      <p>そう認識された作業は、改善対象になりません。検討の手前で、業務として固定されている状態です。</p>
      <p>つまり、減らない理由の前に、「減らす対象として見られていない」という前提があります。</p>

      <h2 style={H2_STYLE}>手作業が減らない会社で同時に起きている4つのこと</h2>
      <p>手作業が減らない会社では、4つのことが同時に起きています。</p>

      <h3 style={H3_STYLE}>1. 一つひとつの作業に、判断と記憶が混ざっている</h3>
      <p>単純なコピペで終わる作業は、それほど多くありません。</p>
      <blockquote style={QUOTE_STYLE}>
        <p style={QUOTE_P_STYLE}>
          「この得意先だけ締め日が違う」<br/>
          「前回どうしたかを毎回確認する」<br/>
          「担当者の記憶に頼っている」
        </p>
      </blockquote>
      <p>毎回、こうした判断と記憶頼みが混ざります。判断や記憶に頼る作業は自動化しにくく、人がやり続けることになります。</p>

      <h3 style={H3_STYLE}>2. 入ってくる情報の形がそろっていない</h3>
      <p>社内のフォーマットを整えても、社外から届くものはバラバラのままです。</p>
      <p>FAXで届く発注書、メール本文に直書きされた数量、手書きのスキャン画像、取引先ごとの独自Excel。</p>
      <p>これらを社内のフォーマットに揃える作業が、日々発生する。揃えるところが、手作業の大きな部分です。</p>

      <h3 style={H3_STYLE}>3. やめる判断をする人が決まっていない</h3>
      <p>過去から続いてきた作業は、誰の判断で続いているのかが曖昧なまま残っていきます。</p>
      <blockquote style={QUOTE_STYLE}>
        <p style={QUOTE_P_STYLE}>
          「これ、まだ必要なんでしたっけ?」<br/>
          「念のため残しておきましょう」
        </p>
      </blockquote>
      <p>止める権限が決まっていないので、不要かもしれない作業もそのまま残ります。</p>

      <h3 style={H3_STYLE}>4. 改善する時間が業務時間に入っていない</h3>
      <p>改善は、毎回「今月の業務」に後回しにされます。</p>
      <p>請求書発行、月次締め、給与計算、納品対応。これらの締切が並んでいるなかで、改善の時間は最後にまわされる。</p>
      <p>「落ち着いたら整理しよう」と思ったまま、次の月末が来る。</p>
      <p>改善のための時間が業務時間として確保されない限り、減らす作業は始まりません。</p>

      <h2 style={H2_STYLE}>「人で吸収する」から「仕組みで減らす」へ</h2>
      <p>ここまでの4つは、これまで人の頑張りで吸収されてきたものです。</p>
      <p>残業して片付ける、慣れた人がまとめて処理する、繁忙期だけパートを増やす。誰かが余裕を削って、業務を回している状態です。</p>
      <p>減らすには、吸収する場所を、<span className="marker">人の側から仕組みの側に移す</span>必要があります。</p>

      <h2 style={H2_STYLE}>減らす前に、まず書き出してみる</h2>
      <p>「何を減らすか」を考える前に、やることがあります。</p>
      <div style={LIST_BOX_STYLE}>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>どの作業に</li>
          <li>1回あたり何分かかっていて</li>
          <li>月で何回発生しているか</li>
        </ul>
      </div>
      <p>これを書き出すだけです。</p>
      <p>地味な作業ですが、これだけで「めんどう」という感覚が、「この作業に月10時間かけている」という具体に変わります。</p>
      <p>そこから、減らす作業の優先順位がはっきりしてきます。</p>

      <div style={NOTE_BOX_STYLE}>
        <p style={NOTE_LEAD_STYLE}>
          BitVoyageでは、何が一番負担になっているかを一緒に整理し、小さく減らせるところから順番に取り組んでいます。
        </p>
        <p style={{ margin: 0 }}>
          ツール導入の前に、減らす順序を整えることを大切にしています。
        </p>
      </div>
    </>
  );
}

window.BlogPage = BlogPage;
window.ArticlePage = ArticlePage;
