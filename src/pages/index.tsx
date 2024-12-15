import { JoinDiscordServer } from '../components/joinDiscordServer';

const meta = {
  title: 'React Tokyo',
};

const faqs = [
  {
    question: '費用はかかりますか？',
    answer: '一切かかりません。',
  },
  {
    question: 'フロントエンドエンジニアではないのですが参加はできますか？',
    answer: 'もちろんご参加いただけます。職種や技術力を問わず、誰でも気軽に参加できるのが特徴です。',
  },
  {
    question: '東京在住ではないですが参加はできますか？',
    answer: 'もちろんご参加いただけます。',
  },
  {
    question: 'Reactについて初心者ですが大丈夫ですか？',
    answer: 'もちろん大丈夫です。質問部屋でたくさん質問できるので安心してください。',
  },
  {
    question: '普段はどんな活動をしていますか？',
    answer: 'オンラインではDiscord上でReactに関する議論や質問をしていたり、気になった記事や動画をシェアしたりしてます。オフラインではコミュニティメンバー同士がつながれるイベントを行っています。',
  },
  {
    question: 'ノルマやタスク等はありますか？',
    answer: 'もちろんございません。他のメンバーのやりとりを覗き見したいだけの方の参加も大歓迎です。',
  },
];

export default async function HomePage() {
  return (
    <div className='space-y-10 lg:space-y-0'>
      <title>{meta.title}</title>
    <div className='lg:h-[calc(100vh-100px)] lg:flex lg:flex-col lg:justify-center lg:items-center'>
    <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-flow-row gap-y-2 gap-x-8">
        <div className="lg:col-span-2 flex flex-col items-start justify-center">
          <h1 className="text-4xl font-bold tracking-tight">We are React Tokyo Community</h1>
        </div>
        <div className="lg:row-span-3 flex items-center justify-center">
          <div className="w-40 lg:w-80 rounded-full bg-[#F45554]">
            <img src="/images/react-tokyo-logo.png" alt="react tokyo logo" />
          </div>
        </div>
        <div className="lg:row-span-2 lg:col-span-2 flex flex-col items-start justify-center gap-8">
          <div>
            <p>東京を中心としたReactのオンライン＆オフラインコミュニティです。</p>
            <p>
              オンラインでは、Discordを交流の場として活動し、オフラインでは、Reactのイベントを開催します。
            </p>
          </div>
          <div>
            <JoinDiscordServer />
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-5xl space-y-4 lg:space-y-8">
      <h2 className="text-3xl font-bold">FAQ</h2>
      <dl className="space-y-5">
        {faqs.map((faq, index) => (
          <div key={index} className='space-y-1 tracking-wider text-xl'>
            <dt className="font-semibold"><span className='text-[#F45554]'>Q:</span> {faq.question}</dt>
            <dd className="text-pretty">A: {faq.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
