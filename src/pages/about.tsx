import { Head } from '../components/head';
import { Descriptions } from '../components/descriptions';
import { OnlineExchange } from '../components/online-exchange';
import { EventOfflineExchange } from '../components/event-offline-exchange';

export default async function AboutPage() {
  return (
    <div className="text-gray-900 lg:pt-40">
      <Head title="About - React Tokyo" />
      <div className="mx-auto w-[calc(100vw-40px)] max-w-[1300px]">
        <div className="py-8 lg:py-14">
          <h1 className="text-2xl font-bold tracking-tight break-keep lg:text-4xl">
            React Tokyoとは
          </h1>
        </div>
        <Descriptions />
      </div>
      <OnlineExchange />
      <EventOfflineExchange />
      <div className="py-20 lg:py-40">
        <p className="text-center text-xl font-bold lg:text-4xl">
          オフラインイベントとオンラインで持続可能な交流を
        </p>
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
