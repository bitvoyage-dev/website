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

          <h2>1. 個人情報の取得について</h2>
          <p>当社は、お問い合わせ、打ち合わせ、契約手続き、サービス提供等を通じて、業務上必要な範囲で個人情報を取得することがあります。</p>
          <p>個人情報の取得にあたっては、利用目的を明確にし、適正な手段により取得いたします。</p>

          <h2>2. 取得する情報</h2>
          <p>当社が取得する個人情報は、主に以下のとおりです。</p>
          <ul>
            <li>会社名</li>
            <li>ご担当者名</li>
            <li>役職</li>
            <li>メールアドレス</li>
            <li>電話番号</li>
            <li>所在地</li>
            <li>お問い合わせ内容</li>
            <li>ご希望日時</li>
            <li>打ち合わせ・ヒアリングの内容</li>
            <li>見積、契約、請求に必要な情報</li>
            <li>業務改善支援に必要な範囲で共有いただく業務情報</li>
          </ul>

          <h2>3. 利用目的</h2>
          <p>当社は、取得した個人情報を以下の目的で利用いたします。</p>
          <ul>
            <li>お問い合わせへの対応およびご連絡</li>
            <li>ご相談・打ち合わせ日程の調整</li>
            <li>ヒアリング、業務整理、課題分析等の実施</li>
            <li>見積書、契約書、請求書等の作成および送付</li>
            <li>当社サービスの提供、運用、保守</li>
            <li>サービス提供後のご連絡、確認、サポート</li>
            <li>当社サービスに関するご案内</li>
            <li>サービス品質の改善および業務改善提案の検討</li>
            <li>法令または契約に基づく対応</li>
          </ul>

          <h2>4. 第三者提供について</h2>
          <p>当社は、お客様の個人情報を、法令に基づく場合を除き、ご本人の同意なく第三者に提供いたしません。</p>
          <p>ただし、利用目的の達成に必要な範囲で、外部サービスまたは業務委託先に個人情報の取り扱いを委託する場合があります。この場合、当社は委託先に対して必要かつ適切な管理を行います。</p>

          <h2>5. 外部サービスの利用について</h2>
          <p>当社は、業務遂行上必要な範囲で、以下を含む外部サービスを利用する場合があります。</p>
          <ul>
            <li>Web3Forms</li>
            <li>Google Workspace</li>
            <li>Gmail</li>
            <li>Google Meet</li>
            <li>Google Calendar</li>
            <li>TimeRex</li>
            <li>その他、業務連絡、日程調整、契約、請求、サービス提供に必要なクラウドサービス</li>
          </ul>
          <p>お問い合わせフォームの送信処理には、外部サービス「Web3Forms」を利用しています。送信されたデータは、同サービスを経由して当社に転送されます。</p>

          <h2>6. 個人情報の管理</h2>
          <p>当社は、お客様の個人情報を正確かつ最新の状態に保つよう努め、不正アクセス、紛失、破損、改ざん、漏洩等を防止するため、必要かつ適切な安全管理措置を講じます。</p>
          <p>また、個人情報を取り扱う外部サービスまたは業務委託先を利用する場合は、必要な範囲で適切な管理を行います。</p>

          <h2>7. Cookie・アクセス解析について</h2>
          <p>現時点では、当社ウェブサイトにおいてCookieを利用したアクセス解析ツール等は使用しておりません。</p>
          <p>今後、アクセス解析ツール等を導入する場合は、本ポリシーを更新し、必要な事項を本ページに記載いたします。</p>

          <h2>8. 開示・訂正・削除等の請求について</h2>
          <p>お客様ご自身の個人情報について、開示、訂正、利用停止、削除等をご希望される場合は、以下の連絡先までお申し出ください。</p>
          <p>ご本人確認のうえ、法令に従い、合理的な範囲で速やかに対応いたします。</p>
          <p>連絡先：<a href="mailto:contact@bitvoyage.co.jp" style={{ color: "var(--navy-800)" }}>contact@bitvoyage.co.jp</a></p>

          <h2>9. プライバシーポリシーの変更</h2>
          <p>当社は、法令の変更、サービス内容の変更、その他必要に応じて、本プライバシーポリシーの内容を変更することがあります。</p>
          <p>変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。</p>

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
