const faqs = [
  {
    question: 'コミュニティへの参加費用は？',
    answer:
      'コミュニティへの参加は完全無料です！どなたでも費用を気にせず、気軽にご参加いただけます。ただし、オフラインイベントに関しては、会場費や飲食代など実費がかかる場合があります。その際は事前にご案内いたします。',
  },
  {
    question: 'どういう人が対象？',
    answer:
      'エンジニア以外にも、デザイナー、マーケター、学生、そしてReactをこれから学びたい初心者の方など、誰でも大歓迎です！職種や技術レベルに関係なく、幅広い方々に楽しんでいただける場を目指しています。',
  },
  {
    question: '東京在住ではなくても問題ない？',
    answer:
      'はい、問題ありません！私たちの活動はオフラインイベントを中心にしつつ、オンラインでも交流するコミュニティなので、どこからでもご参加いただけます。',
  },
  {
    question: 'React初心者でもついていける？',
    answer:
      'もちろん大丈夫です！初学者を含め幅広い層を対象にしたコミュニティです。質問部屋でたくさん質問できるので安心してください。',
  },
  {
    question: '普段はどんな活動をしているの？',
    answer:
      'オンラインではDiscord上でReactに関する議論や質問をしていたり、気になった記事や動画をシェアしたりしてます。オフラインではコミュニティメンバー同士がつながれるイベントを行っています。',
  },
  {
    question: '参加後は何をしたらいいの？',
    answer:
      '特に決まったタスクやノルマはありません。質問したり、他のメンバーのやりとりを見て学んだり、気になるトピックを共有したりと、自由に楽しんでください！まずは気軽にDiscordに参加してみてください。',
  },
];

export const Faq = () => {
  return (
    <div className="space-y-4 lg:space-y-8">
      <h2 className="text-3xl font-bold">FAQ</h2>
      <dl className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="max-w-3xl space-y-4 tracking-wider">
            <dt className="grid grid-cols-[1.5rem_1fr] gap-1 text-xl font-semibold">
              <span
                className="justify-self-end text-[#F45554]"
                aria-hidden="true"
              >
                Q:
              </span>
              <span className="sr-only">質問</span>
              <span>{faq.question}</span>
            </dt>
            <dd className="grid grid-cols-[1.5rem_1fr] gap-1 text-pretty">
              <span className="justify-self-end" aria-hidden="true">
                A:
              </span>
              <span className="sr-only">回答</span>
              <span>{faq.answer}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
