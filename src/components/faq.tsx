export const Faq = () => {
  const faqs = [
    {
      question: "費用はかかりますか？",
      answer: "一切かかりません。",
    },
    {
      question: "フロントエンドエンジニアではないのですが参加はできますか？",
      answer:
        "もちろんご参加いただけます。職種や技術力を問わず、誰でも気軽に参加できるのが特徴です。",
    },
    {
      question: "東京在住ではないですが参加はできますか？",
      answer: "もちろんご参加いただけます。",
    },
    {
      question: "Reactについて初心者ですが大丈夫ですか？",
      answer:
        "もちろん大丈夫です。質問部屋でたくさん質問できるので安心してください。",
    },
    {
      question: "普段はどんな活動をしていますか？",
      answer:
        "オンラインではDiscord上でReactに関する議論や質問をしていたり、気になった記事や動画をシェアしたりしてます。オフラインではコミュニティメンバー同士がつながれるイベントを行っています。",
    },
    {
      question: "ノルマやタスク等はありますか？",
      answer:
        "もちろんございません。他のメンバーのやりとりを覗き見したいだけの方の参加も大歓迎です。",
    },
  ];

  return (
    <div className="max-w-5xl space-y-4 lg:space-y-8">
      <h2 className="text-3xl font-bold">FAQ</h2>
      <dl className="space-y-5">
        {faqs.map((faq, index) => (
          <div key={index} className="space-y-1 tracking-wider text-xl">
            <dt className="font-semibold">
              <span className="text-[#F45554]">Q:</span> {faq.question}
            </dt>
            <dd className="text-pretty">A: {faq.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
