import { JoinDiscordServer } from "../components/joinDiscordServer";
import { Faq } from "../components/faq";
const meta = {
  title: "React Tokyo",
};

export default async function HomePage() {
  return (
    <div className="space-y-10 lg:pt-40">
      <title>{meta.title}</title>
      <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-flow-row gap-y-2 gap-x-8">
        <div className="lg:col-span-2 flex flex-col items-start justify-center">
          <h1 className="text-4xl font-bold tracking-tight">
            We are React Tokyo Community
          </h1>
        </div>
        <div className="lg:row-span-3 flex items-center justify-center">
          <div className="w-40 lg:w-80 rounded-full bg-[#F45554]">
            <img src="/images/react-tokyo-logo.png" alt="react tokyo logo" />
          </div>
        </div>
        <div className="lg:row-span-2 lg:col-span-2 flex flex-col items-start justify-center gap-8">
          <div>
            <p>
              東京を中心としたReactのオンライン＆オフラインコミュニティです。
            </p>
            <p>
              オンラインでは、Discordを交流の場として活動し、オフラインでは、Reactのイベントを開催します。
            </p>
          </div>
          <div>
            <JoinDiscordServer />
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
