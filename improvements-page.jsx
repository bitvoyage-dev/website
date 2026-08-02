// improvements-page.jsx — 改善例ページ（ImprovementsPage）

/* ===== 改善例カード ===== */
function KaizenCard({ card }) {
  return (
    <article className="kaizen-card fade-up">
      <div className="kaizen-card-head">
        {card.icon && <img className="kaizen-card-icon" src={card.icon} alt="" />}
        <h3 className="kaizen-card-title">{card.title}</h3>
      </div>

      {card.outcomeEmotion && (
        <p className="kaizen-lead-emotion">{card.outcomeEmotion}</p>
      )}

      <hr className="kaizen-divider" />

      <div className="kaizen-field">
        <span className="kaizen-field-label">課題</span>
        <p className="kaizen-field-text">{card.problem}</p>
      </div>

      <div className="kaizen-field">
        <span className="kaizen-field-label kaizen-field-label-can">できること</span>
        <p className="kaizen-field-text">{card.can}</p>
      </div>

      <div className="kaizen-reduce">
        <span className="kaizen-reduce-label">減らせる作業</span>
        <p className="kaizen-reduce-text">{card.reduce}</p>
      </div>

      {card.note && <p className="kaizen-card-note">{card.note}</p>}
    </article>
  );
}

function ImprovementsPage() {
  useRevealOnScroll();

  const categories = [
    {
      id: "accounting",
      eyebrow: "back office",
      label: "経理・事務まわり",
      cards: [
        {
          title: "入金確認・売上表作成をラクにする仕組み",
          icon: "assets/illustrations/watercolor/icon-nyukin.webp",
          problem: "銀行明細を見ながら入金を手作業で確認し、売上表に転記。確認漏れや転記ミスが起きやすい。",
          can: "銀行の明細データから入金状況を一覧化し、売上表の作成を補助。入金済み・未入金の確認をしやすくします。",
          reduce: "銀行明細の確認、売上表への転記、入金チェック、未入金確認",
          outcomeEmotion: "『見落としてないかな』の不安が、「一覧を見れば分かる」に変わります。",
          price: "4万円〜",
        },
        {
          title: "見積書・請求書などの定型書類を、台帳から作る仕組み",
          icon: "assets/illustrations/watercolor/icon-teikei.webp",
          problem: "見積書や請求書を前回ファイルのコピーで作成。打ち替え漏れや古い情報の消し忘れに気を使う。",
          can: "台帳に入力した値を、決まった書式の書類に差し込んで出力。よく使う書類から小さく始められます。",
          reduce: "前回ファイル探し、コピー＆打ち替え、打ち替え漏れの確認、書式の手直し",
          outcomeEmotion: "前回のコピーで作る緊張感がなくなり、いつもの書類を落ち着いて出せます。",
          price: "5万円〜",
          note: "定型書類に台帳の値を差し込むだけなら小さく始められます。複数の帳票、手続き別の分岐、印刷位置の調整、出力履歴の管理まで含める場合は費用が上がります。",
        },
        {
          title: "振込データ作成をラクにする仕組み",
          icon: "assets/illustrations/watercolor/icon-furikomi.webp",
          problem: "支払先ごとに金額や口座を確認しながらネットバンキングへ手入力。件数が増えると入力ミスが不安。",
          can: "支払先や金額を一覧で整理し、銀行に取り込める振込用データの作成を補助します。",
          reduce: "振込先の確認、金額入力、口座情報の転記、支払一覧の整理",
          outcomeEmotion: "手入力の緊張感を減らし、支払い前の確認を落ち着いて。",
          price: "6万円",
        },
        {
          title: "会計ソフトへの「二重入力」をなくす仕組み",
          icon: "assets/illustrations/watercolor/icon-nijyu.webp",
          problem: "スプレッドシートに入力した数字を、あらためて会計ソフトにも入力。二度打ちの手間で月次把握も遅れがち。",
          can: "入力済みデータを会計ソフトの取込形式（CSVなど）に整え、二重入力を削減。月次の確認もしやすくします。",
          reduce: "会計ソフトへの再入力、転記ミスの確認、月次集計、現金と領収書の突き合わせ",
          outcomeEmotion: "同じ数字を二度打たなくてよくなり、月の数字も早めに見えてきます。",
          price: "8万円〜",
          note: "会計ソフト側の取込形式や、税理士さんの運用にあわせて確定します。税務判断そのものは対象外で、最終確認はご担当者・税理士さんが行う前提です。",
        },
        {
          title: "領収書・支出記録を整理する仕組み",
          icon: "assets/illustrations/watercolor/icon-ryoshu.webp",
          problem: "領収書の写真・PDF・カード明細・現金記録がバラバラで後から確認しづらく、税理士へ渡す前の整理に時間がかかる。",
          can: "フォルダに入れた領収書を一覧化し、日付・支払先・金額・用途を記録。確認済み・未確認も管理できます。",
          reduce: "領収書探し、支出メモ、税理士提出前の確認、経費の用途整理",
          outcomeEmotion: "後から探す焦りを減らし、税理士に渡す前の整理を楽に。",
          price: "8万円〜",
        },
      ],
    },
    {
      id: "sales",
      eyebrow: "sales & inquiry",
      label: "営業・問い合わせまわり",
      cards: [
        {
          title: "名刺交換後のフォローを忘れない仕組み",
          icon: "assets/illustrations/watercolor/icon-meishi.webp",
          problem: "名刺交換しても、誰とどこで会い何を話したか思い出しにくく、フォロー連絡のタイミングも逃しやすい。",
          can: "名刺情報・出会った場所・会話メモ・次回アクションを記録し、必要なタイミングで確認できるようにします。",
          reduce: "名刺探し、会話内容の思い出し、フォロー漏れ、紹介先の整理",
          outcomeEmotion: "『どこで会った方だっけ』がなくなり、次の連絡を忘れなくなります。",
          price: "3万円〜",
          note: "簡易版は、名刺情報・出会った場所・会話メモ・次回アクションを一覧で管理する形を想定しています。フォーム入力、検索、フォロー通知、イベント連携まで含める場合は8万円〜が目安です。",
        },
        {
          title: "問い合わせ対応を見落とさない仕組み",
          icon: "assets/illustrations/watercolor/icon-toiawase.webp",
          problem: "電話・メール・LINE・フォームと入口が複数で対応状況が見えにくく、誰が対応・次に何をが曖昧になりやすい。",
          can: "問い合わせを一覧化し、対応状況・担当・次回対応を管理。通知も組み合わせ、見落としを防ぎます。",
          reduce: "問い合わせ確認、対応漏れ確認、担当者への共有、対応履歴の確認",
          outcomeEmotion: "対応漏れの心配が減り、次にやることがパッと見えます。",
          price: "10万円〜",
        },
        {
          title: "メールを起点に、案件情報を台帳に残す仕組み",
          icon: "assets/illustrations/watercolor/icon-mail.webp",
          problem: "見積依頼や注文メールが複数アドレスに分散し、図面や添付も埋もれる。過去案件探しに時間がかかり、対応は記憶頼みになりがち。",
          can: "メールを転送（BCC）するだけで案件として台帳に登録し、添付・進捗・過去の見積を蓄積。難しいものだけ「要確認」として人が確認します。",
          reduce: "過去見積・過去案件探し、メール確認、案件の手入力、進捗の記憶、添付の探し物",
          outcomeEmotion: "メールに埋もれていたやり取りが台帳に残り、『あの件どうだっけ』で探さなくてよくなります。",
          price: "30万円〜",
          note: "生成AIは使わず、ルールとテンプレートで運用する形を想定しています。図面の自動読み取りや見積金額の自動決定は範囲外で、判断は人が行います。",
        },
      ],
    },
    {
      id: "notify",
      eyebrow: "notification & check",
      label: "通知・確認まわり",
      cards: [
        {
          title: "重要メールだけ通知する仕組み",
          icon: "assets/illustrations/watercolor/icon-tsuchi.webp",
          problem: "メールが多く全部の確認に時間がかかる。重要なものだけ早く気づきたいが、受信箱に張り付くのは負担。",
          can: "条件に合うメールだけを抽出し、チャットなどに通知。必要に応じて返信案や対応メモも残せます。",
          reduce: "メール確認、重要メールの見落とし、対応判断、社内共有",
          outcomeEmotion: "受信箱に張り付く負担を減らし、大事な連絡に早く気づく。",
          price: "8万円〜",
        },
      ],
    },
    {
      id: "field",
      eyebrow: "field & management",
      label: "現場・業務管理まわり",
      cards: [
        {
          title: "紙の書類やPDFを一覧化する仕組み",
          icon: "assets/illustrations/watercolor/icon-kami.webp",
          problem: "請求書・伝票・申込書・作業記録が紙やPDFで届き、内容確認や一覧化に時間がかかる。",
          can: "書類の内容を読み取り、確認用の一覧を作成。確認済み・未確認の管理や通知も組み合わせられます。",
          reduce: "書類確認、転記、一覧作成、確認漏れ、担当者への共有",
          outcomeEmotion: "紙を見返す手間を減らし、必要な情報をすぐ確認できる。",
          price: "15万円〜",
        },
        {
          title: "案件・工程・書類・期限をまとめて管理する仕組み",
          icon: "assets/illustrations/watercolor/icon-dashboard.webp",
          problem: "案件や工程の進み具合・必要書類・期限が、紙・Excel・口頭・記憶に分かれている。今どこまで進んでいるか、書類は揃っているか、期限は大丈夫かを都度 人に聞いて確認し、期限超過や書類不備が損失につながりやすい。",
          can: "案件ごとの状態・担当・次の対応・期限に加え、工程の履歴・必要書類・期限アラートをひとつの台帳にまとめます。簡易ダッシュボードや通知（Google Chatなど）も組み合わせ、誰が見ても状況が分かる形に設計します。",
          reduce: "進捗の口頭確認、書類の揃い確認、期限の見張り、状況の聞き回り、対応漏れ確認",
          outcomeEmotion: "『今どこまで？』『書類そろってる？』と聞き回らなくても、一覧で分かるようになります。",
          price: "30万円〜",
          note: "案件・工程・書類・期限が関連するため、どこに何があるかを整理したデータ設計が土台になります。工程数・扱うデータ・利用人数によって変わるため、内容を確認のうえ個別にお見積りします。判断や押印は従来どおり人が行います。",
        },
      ],
    },
    {
      id: "self",
      eyebrow: "our own case",
      label: "自社改善事例",
      cards: [
        {
          title: "外出・領収書・営業活動をまとめて記録する仕組み",
          icon: "assets/illustrations/watercolor/icon-gaishutsu.webp",
          problem: "外出予定・移動距離・駐車場代・懇親会費・領収書・面談相手の記録がバラバラで、後から確認しづらい。営業活動の振り返りや税理士への説明にも手間がかかる。",
          can: "カレンダーの予定をもとに、移動・駐車場代・懇親会費・領収書をイベント単位で記録。「誰と、どこで、何のために会ったか」を後から確認できる形で残します。",
          reduce: "走行距離メモ、駐車場代の確認、懇親会記録、領収書整理、営業活動の振り返り",
          outcomeEmotion: "『あの支出、何だったっけ』と思い出す手間がなくなります。",
          price: "15万円〜",
          note: "BitVoyage自身の業務でも、外出や領収書の記録を減らすために、このような仕組みを活用しています。",
        },
      ],
    },
  ];

  return (
    <div className="page bg-grid">
      <TopNav currentPage="improvements" />

      <section className="page-hero">
        <div className="container-narrow fade-up" style={{ textAlign: "center" }}>
          <div className="section-eyebrow">examples</div>
          <h1 className="page-hero-title kaizen-hero-title">
            たとえば、こんな<br className="mobile-only" />
            作業を<span className="underline-hand">減らせます</span>。
          </h1>
          <p className="page-hero-lead">
            「業務改善」と言われても、最初はイメージしづらいものです。<br />
            BitVoyageでは、日々の事務作業や確認作業の中から、<br className="mobile-only" />
            小さく減らせる手間を見つけ、現場に合う形で仕組みにします。
          </p>
          <p className="kaizen-hero-note">
            ここでは、これまでに作ったもの・自社で使っているもの・<br className="mobile-only" />
            構築可能な改善例を紹介します。
          </p>
        </div>
      </section>

      {/* カテゴリ内ジャンプ */}
      <section className="kaizen-jump-section">
        <div className="container-narrow fade-up">
          <div className="kaizen-jump-row">
            {categories.map(cat => (
              <a key={cat.id} href={`#${cat.id}`} className="kaizen-jump-chip">
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* カテゴリごとのカード */}
      {categories.map((cat, i) => (
        <section
          key={cat.id}
          id={cat.id}
          className="section kaizen-category"
          style={{ background: i % 2 === 0 ? "transparent" : "var(--paper-2)" }}
        >
          <div className="container fade-up">
            <div className="kaizen-category-head">
              <div className="section-eyebrow">{cat.eyebrow}</div>
              <h2 className="kaizen-category-title">
                <span className="marker">{cat.label}</span>
              </h2>
            </div>
            <div className="kaizen-grid">
              {cat.cards.map(card => (
                <KaizenCard key={card.title} card={card} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* 価格についての注記 */}
      <section className="section" style={{ padding: "8px 0 56px" }}>
        <div className="container-narrow fade-up">
          <div className="kaizen-price-note-box">
            <p style={{ margin: 0 }}>
              ここに挙げた作業は、ひとつだけ整えることもできます。<br className="mobile-only" />
              ただ、手で打ち直す工程が残ったままだと、負担があまり変わらないこともあります。
            </p>
            <p style={{ margin: "10px 0 0" }}>
              なので最初に「最終的にこうなったら楽になる」という形を一緒に決めて、<br className="mobile-only" />
              そこへ段階的に進めます。<strong>全体で20万円〜50万円</strong>が中心です。
            </p>
            <p style={{ margin: "8px 0 0", fontSize: 13, color: "var(--ink-500)" }}>
              ※ 税別・目安です。段階に分けて進められるので、はじめから全額を決める必要はありません。まずは無料の作業の棚卸し相談で、内容に合わせてお見積りします。
            </p>
          </div>
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <a href="service.html" className="btn btn-outline">
              サービス内容を見る <Icon.ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <CTARibbon />
      <SiteFooter />
    </div>
  );
}

window.ImprovementsPage = ImprovementsPage;
