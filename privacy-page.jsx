// privacy-page.jsx — プライバシーポリシー

function PrivacyPage() {
  useRevealOnScroll();
  return (
    <div className="page" style={{ background: "var(--paper)" }}>
      <TopNav currentPage="" />

      <section className="page-hero">
        <div className="container-narrow fade-up" style={{ textAlign: "center" }}>
          <div className="section-eyebrow">privacy policy</div>
          <h1 className="page-hero-title">プライバシーポリシー</h1>
        </div>
      </section>

      <article style={{ padding: "16px 0 80px" }}>
        <div className="container-narrow fade-up privacy-body" style={{ fontSize: 16, lineHeight: 2, color: "var(--ink-900)" }}>
          <p>
            株式会社BitVoyage（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、以下のとおりプライバシーポリシーを定めます。
          </p>

          <h2>1. 個人情報の収集について</h2>
          <p>当社は、お問い合わせフォームを通じて、業務上必要な範囲で個人情報を収集いたします。収集にあたっては、利用目的を明示し、適正な手段により行います。</p>

          <h2>2. 収集する情報</h2>
          <p>当社が収集する個人情報は以下のとおりです。</p>
          <ul>
            <li>会社名</li>
            <li>ご担当者名</li>
            <li>メールアドレス</li>
            <li>電話番号</li>
            <li>お問い合わせ内容</li>
            <li>ご希望日時</li>
          </ul>

          <h2>3. 利用目的</h2>
          <p>収集した個人情報は、以下の目的で利用いたします。</p>
          <ul>
            <li>お問い合わせへの対応・ご連絡</li>
            <li>ご相談日程の調整</li>
            <li>当社サービスに関するご案内</li>
          </ul>

          <h2>4. 第三者提供について</h2>
          <p>当社は、お客様の個人情報を第三者に提供いたしません。ただし、以下の場合を除きます。</p>
          <ul>
            <li>お客様ご本人の同意がある場合</li>
            <li>法令に基づき開示が求められた場合</li>
          </ul>
          <p>なお、お問い合わせフォームの送信処理には外部サービス「Web3Forms」を利用しており、送信データは同サービスを経由して当社に届きます。</p>

          <h2>5. 個人情報の管理</h2>
          <p>当社は、お客様の個人情報を正確かつ最新の状態に保つよう努め、不正アクセス・紛失・破損・改ざん・漏洩などの防止のため、適切な安全管理措置を講じます。</p>

          <h2>6. 外部サービスの利用</h2>
          <p>当社のウェブサイトでは、以下の外部サービスを利用しています。</p>
          <ul>
            <li><strong>Web3Forms</strong>：お問い合わせフォームの送信処理に利用しています。送信されたデータはWeb3Formsのサーバーを経由して当社に転送されます。</li>
          </ul>
          <p>現時点では、Cookie を利用したアクセス解析ツール等は使用しておりません。今後導入する場合は、本ポリシーを更新してお知らせいたします。</p>

          <h2>7. 開示・訂正・削除の請求</h2>
          <p>お客様ご自身の個人情報について、開示・訂正・削除をご希望される場合は、以下の連絡先までお申し出ください。ご本人確認のうえ、合理的な範囲で速やかに対応いたします。</p>
          <p>連絡先：<a href="mailto:contact@bitvoyage.co.jp" style={{ color: "var(--navy-800)" }}>contact@bitvoyage.co.jp</a></p>

          <h2>8. プライバシーポリシーの変更</h2>
          <p>当社は、必要に応じて本プライバシーポリシーの内容を変更することがあります。変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。</p>

          <p style={{ marginTop: 48, fontSize: 14, color: "var(--ink-500)" }}>
            制定日：2026年3月4日<br/>株式会社BitVoyage
          </p>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}

window.PrivacyPage = PrivacyPage;
