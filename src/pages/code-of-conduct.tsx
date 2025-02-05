export default async function CodeOfConductPage() {
  return (
    <div className="mx-auto max-w-3xl text-gray-900 lg:pt-40">
      <h1 className="py-8 text-2xl font-bold tracking-tight break-keep lg:py-14 lg:text-4xl">
        行動規範 (Code of Conduct)
      </h1>
      <div className="py-4 lg:py-6">
        <h2 className="text-2xl font-bold lg:text-3xl">基本理念</h2>
        <p className="pt-4">
          React
          Tokyoは、東京を中心にオンラインとオフラインの両方で活動するReactコミュニティです。初心者から経験者まで、職種や技術力を問わず誰でも気軽に参加できる場を提供し、Reactを通じて学びや交流を楽しむことを目指しています。
        </p>
        <p>
          このコミュニティおよびイベントでは、すべての参加者が安全で快適に交流し、尊重し合える環境を維持することを重要視しています。他者への敬意を持ち、以下の行動規範を遵守してください。
        </p>
      </div>

      <div className="py-4 lg:py-6">
        <h2 className="text-2xl font-bold lg:text-3xl">禁止事項</h2>
        <p className="py-4">以下の行為を禁止します：</p>
        <ol className="ml-4 list-inside list-decimal space-y-4">
          <li>
            <strong>差別やハラスメント:</strong>
            <ul className="ml-4 list-inside list-disc space-y-2 pt-2">
              <li className="pt-2">
                性別、性的自認、年齢、人種、宗教、性的指向、身体的特徴、障害などに基づく差別的・攻撃的な言動
              </li>
              <li>
                不適切な性的発言、またはジェンダーや性的志向に関連したハラスメント行為
              </li>
              <li>
                繰り返し行われるつきまといや不必要な接触、他者の意思に反する交流
              </li>
            </ul>
          </li>
          <li>
            <strong>暴力や脅迫:</strong>
            <ul className="ml-4 list-inside list-disc space-y-2 pt-2">
              <li>他者を脅迫したり、身体的・精神的な危害を加える行為</li>
            </ul>
          </li>
          <li>
            <strong>無許可の録音・撮影:</strong>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li className="pt-2">
                他者の許可を得ずに録音、写真撮影、動画撮影を行う行為
              </li>
            </ul>
          </li>
          <li>
            <strong>進行妨害:</strong>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li className="pt-2">
                イベントやセッションの進行を妨げる行為（例：不必要な割り込み、大声での会話）
              </li>
            </ul>
          </li>
          <li>
            <strong>違法または危険な行為:</strong>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li className="pt-2">
                違法薬物の使用、過度の飲酒、危険物の持ち込み
              </li>
              <li>法令や施設の規則に違反する行為</li>
            </ul>
          </li>
          <li>
            <strong>過剰な宣伝行為:</strong>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li className="pt-2">
                主催者の許可なく、製品やサービスの宣伝、勧誘する行為
              </li>
            </ul>
          </li>
          <li>
            <strong>飲食物に関する迷惑行為:</strong>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li className="pt-2">
                提供された飲食物を個人で飲食する量の限度を超えて取る行為や、持ち帰ろうとする行為
              </li>
            </ul>
          </li>
          <li>
            <strong>オンラインイベント特有の禁止事項:</strong>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li className="pt-2">
                荒らし行為、スパム投稿、不適切なコンテンツの共有
              </li>
              <li>他者の個人情報を許可なく公開または共有する行為</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="py-4 lg:py-6">
        <h2 className="text-2xl font-bold lg:text-3xl">問題が発生した場合</h2>
        <ul className="ml-4 list-inside list-disc space-y-2 py-2">
          <li className="pt-2">
            ハラスメント行為を受けた場合、または目撃した場合は、速やかにスタッフまたは主催者にご連絡ください。直接口頭での報告、公式サイトの問い合わせフォーム、またはDiscordサーバーでのDMによる報告が可能です
          </li>
          <li>
            匿名でのご報告はフォームをご利用ください。匿名の場合、直接フォローアップすることはできませんが、十分に調査し、再発防止に必要な対応を行います
          </li>
        </ul>

        <p className="pt-4">主催者は、以下のような支援を行います：</p>
        <ul className="ml-4 list-inside list-disc space-y-2">
          <li className="pt-2">会場セキュリティや警察への連絡</li>
          <li>被害者の移動や護衛の手配</li>
          <li>他の関係者との調整や支援</li>
        </ul>
      </div>

      <div className="py-4 lg:py-6">
        <h2 className="text-2xl font-bold lg:text-3xl">参加者へのお願い</h2>
        <ul className="ml-4 list-inside list-disc space-y-2 py-2">
          <li className="pt-2">
            イベントでは、思いやりのある言動を心がけ、他者を尊重してください
          </li>
          <li>
            すべての参加者が安心して参加できる環境作りにご協力をお願いいたします
          </li>
          <li>みなさまの協力が、安全で楽しいコミュニティ運営の鍵となります</li>
        </ul>
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
