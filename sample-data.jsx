// sample-data.jsx — ブログ記事サンプルデータ & PostCard

window.SAMPLE_POSTS = [
  /* 下書き保留（2026-06-09）：「手作業を減らす」系が連続し単調になるため公開を後ろ倒し。
     新テーマの記事と交互に並ぶよう、別ネタを書いてから再公開する。本文は blog-pages.jsx に保持。
  {
    slug: "customer-info-scattered",
    title: "お客様の情報、あちこちに散らばっていませんか",
    category: "手作業を減らす",
    date: "2026.06.08",
    readMin: 4,
    image: "assets/images/customer-info-scattered-eyecatch.png?v=5",
    excerpt: "お客様の連絡先はExcel、やりとりはLINE、名刺は引き出し、見積はメールの中。一人のお客様の情報が、いくつもの場所に分かれていないでしょうか。確認のたびに探し回り、最新がどれかも毎回確かめている。足りないのではなく、ばらばらに置かれているだけかもしれません。集める場所を決めるところから、探す手間は減らせます。",
    tags: ["顧客管理", "情報の散在"],
  },
  {
    slug: "fax-order-entry",
    title: "FAXや電話の注文を、手で入力していませんか",
    category: "手作業を減らす",
    date: "2026.06.01",
    readMin: 4,
    image: "assets/images/fax-order-entry-eyecatch.png?v=5",
    excerpt: "FAXで届いた注文書を見ながら、品番と数量を打ち込む。電話で受けた注文を、メモしてからまた入力する。紙や電話で来るんだから仕方ない、と思っているうちに、見直す対象から外れていないでしょうか。やっているのは、注文を社内が読める形に手で移す作業です。受け取り方を少し変えるだけで、その手間は減らせるかもしれません。",
    tags: ["手入力・転記", "受発注"],
  },
  */
  /* 下書き（A案：①は単独では出さず、②クラウドとは へ統合検討中。前提"USB/メールで最新版わからない"は要再検討）
  {
    slug: "excel-usb-mail",
    title: "そのExcel、USBとメールで配っていませんか",
    category: "ITの基礎",
    date: "2026.06.13",
    readMin: 4,
    excerpt: "作った表を、USBメモリに入れて持ち運ぶ。メールに添付して送る。Excelをこうやって配っていないでしょうか。引っかかるのは、たいていExcelそのものではなく、手元に置いてUSBやメールで配る「配り方」のほうです。最新がどれか分からなくなる前に、まずどう配っているかを書き出してみる話です。",
    tags: ["ITの基礎", "クラウド"],
  },
  {
    slug: "data-backup",
    title: "そのデータ、PCが壊れたら戻りますか",
    category: "ITの基礎",
    date: "2026.07.06",
    readMin: 4,
    excerpt: "毎日使っているExcel。それが入っているPCが、ある日突然動かなくなったら、戻せるでしょうか。手元1台だけに置くのは、コピーが1つしかない状態です。バックアップとは、控えをもう1つ別の場所に持っておくこと。クラウドだと、その控えが自動で残ります。まず、消えたら困るデータはどれかを書き出す話です。",
    tags: ["ITの基礎", "バックアップ"],
  },
  {
    slug: "share-access",
    title: "「誰でも見られる」と「誰も触れない」のあいだ",
    category: "ITの基礎",
    date: "2026.07.13",
    readMin: 4,
    excerpt: "表を共有すると、全部を見せてしまう気がする。かといって手元に抱えると、休んだとき誰も開けない。共有は、全公開でも抱え込みでもありません。誰に・どこまで見せるか、見るだけか直せるかまで、細かく分けられます。属人化も少しほどける、ちょうどいい分け方を整理しました。",
    tags: ["ITの基礎", "共有・権限"],
  },
  {
    slug: "cloud-myths",
    title: "「クラウドは危ない」と思っていませんか",
    category: "ITの基礎",
    date: "2026.07.20",
    readMin: 4,
    excerpt: "クラウドはなんとなく不安。危なそうだし、お金もかかりそうだし、乗り換えも大変そう。その不安を、安全・費用・手間の3つに分けて見てみます。手元のUSBの方がむしろ危ないこともあり、小さく始めれば少額から、Excelはそのまま置き場所だけ変えられる。「なんとなく危ない」を、自分で判断できる材料に変える話です。",
    tags: ["ITの基礎", "クラウド"],
  },
  */
  {
    slug: "what-is-cloud",
    title: "クラウドって、結局何？",
    category: "ITの基礎",
    date: "2026.06.15",
    readMin: 5,
    image: "assets/images/what-is-cloud-eyecatch.png?v=6",
    excerpt: "「クラウドにすれば楽になりますよ」と言われても、何のことか分からないまま、で止まっていないでしょうか。クラウドとは、ファイルを自分のパソコンの中ではなく、インターネット上に置いておく「置き場所」のこと。スマホの写真や銀行アプリで、もう身近に使っている仕組みです。仕事のファイルにも使うと、最新が1つにまとまり、どこからでも開け、パソコンが壊れても消えない。クラウドの正体と、使うと何が変わるかまで整理しました。",
    tags: ["ITの基礎", "クラウド"],
  },
  {
    slug: "duplicate-entry",
    title: "同じ情報を、何度も入力していませんか",
    category: "手作業を減らす",
    date: "2026.05.25",
    readMin: 4,
    image: "assets/images/duplicate-entry-eyecatch.png?v=5",
    excerpt: "見積書に入力した金額を、納品書にもう一度入力する。請求書でも、また入力する。書類が違うから当たり前、と思っているうちに、見直す対象から外れていないでしょうか。打ち直しているのは、すでにどこかに入っている情報です。その入力、減らせる余地があるかもしれません。",
    tags: ["手入力・転記", "二重入力"],
  },
  {
    slug: "where-to-start",
    title: "業務改善は、どこから手をつければいいか",
    category: "進め方",
    date: "2026.05.18",
    readMin: 5,
    image: "assets/images/where-to-start-eyecatch.png?v=5",
    excerpt: "業務を見直したいけれど、どこから手をつければいいか分からない。やることは山ほどあって、どれも大事に見えて、結局すべて後回しになる。「いきなり大きく作り変える」でも「目の前の作業だけ直す」でもない、まず流れを見てから小さく始める4つのステップを整理しました。",
    tags: ["進め方", "小さく始める"],
  },
  {
    slug: "manual-work-reduction",
    title: "手作業が減らない理由",
    category: "手作業を減らす",
    date: "2026.05.11",
    readMin: 4,
    image: "assets/images/manual-work-reduction-eyecatch.png?v=5",
    excerpt: "毎月続く手作業を、いつか減らしたいと思いつつ、半年・1年がそのままになっていないでしょうか。減らない手作業の多くは、そもそも「減らす対象」として見られていないところから始まっています。手作業が残り続ける会社で同時に起きている4つのことを整理しました。",
    tags: ["手作業を減らす", "手入力・転記"],
  },
  {
    slug: "business-clog-identify",
    title: "忙しいのに進まない会社の共通点",
    category: "止まる仕事",
    date: "2026.04.27",
    readMin: 4,
    image: "assets/images/business-clog-identify-eyecatch.png?v=6",
    excerpt: "業務自体は回っているのに、月末の締めも請求書発行も、毎月ぎりぎりまでもつれ込む。原因は、人ではなく業務の流れの側にあります。進まない会社で同時に起きている4つの「詰まり」を整理しました。",
    tags: ["止まる仕事", "属人化"],
  },
];

function PostCard({ post, featured = false }) {
  return (
    <a href={`article.html?slug=${post.slug}`} className="card" style={{ display: "block", textDecoration: "none", color: "inherit", padding: 0, overflow: "hidden" }}>
      {post.image ? (
        <div className="post-card-image-frame" style={{ height: featured ? 220 : 160 }}>
          <img src={post.image} alt="" className="post-card-image" />
        </div>
      ) : (
        <div className="ph" style={{ height: featured ? 220 : 160, borderRadius: 0, borderLeft: 0, borderRight: 0, borderTop: 0 }}>
          <span>{post.category} — 記事イメージ</span>
        </div>
      )}
      <div style={{ padding: 20 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "center", fontSize: 12 }}>
          <span className="tag">{post.category}</span>
          <span style={{ color: "var(--ink-500)" }}>{post.date}</span>
          <span style={{ color: "var(--ink-500)" }}>· {post.readMin}分で読める</span>
        </div>
        <h3 style={{ fontSize: featured ? 20 : 17, margin: "0 0 10px", color: "var(--navy-900)", lineHeight: 1.5, fontWeight: 700 }}>
          {post.title}
        </h3>
        <p style={{ fontSize: 14, color: "var(--ink-700)", margin: 0, lineHeight: 1.7 }}>
          {post.excerpt}
        </p>
      </div>
    </a>
  );
}

window.PostCard = PostCard;
