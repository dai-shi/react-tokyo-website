import { JoinDiscordServer } from '../components/joinDiscordServer';
import { Head } from '../components/head';
import { Faq } from '../components/faq';
import { Contact } from '../components/contact/contact';

const descriptions = [
  '東京を中心に、オンラインとオフラインの両方で活動するReactコミュニティです。',
  'オンラインでは、Discordを通じた情報交換や交流の場を提供し、オフラインではReactに関するイベントを開催します。',
  '初心者から経験者まで、職種や技術力を問わず、誰でも気軽に参加できるのが特徴です。',
  'Reactを学びたい人、新しいつながりを作りたい人、初めてコミュニティに参加する人も大歓迎です！',
  '一緒にReactを楽しみましょう！',
];

export default async function HomePage() {
  return (
    <div className="space-y-10 lg:pt-40">
      <Head />
      <div className="grid grid-rows-[auto_auto_auto] gap-x-8 gap-y-2 lg:grid-flow-row lg:grid-cols-3">
        <div className="order-1 flex items-center justify-center lg:order-2 lg:row-span-3">
          <div className="w-40 rounded-full bg-[#F45554] lg:w-80">
            <img src="/images/react-tokyo-logo.png" alt="react tokyo logo" />
          </div>
        </div>
        <div className="order-2 flex flex-col items-start justify-center py-6 lg:order-1 lg:col-span-2">
          <h1 className="break-keep text-2xl font-bold tracking-tight lg:text-4xl">
            分からないを分かち合う、
            <wbr />
            広げようReactの世界。
          </h1>
        </div>
        <div className="order-3 flex flex-col items-start justify-center gap-8 lg:col-span-2 lg:row-span-2">
          <div>
            {descriptions.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
          </div>
          <div>
            <JoinDiscordServer />
          </div>
        </div>
      </div>
      <Faq />
      <Contact />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
