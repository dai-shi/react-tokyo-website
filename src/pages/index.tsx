import { JoinDiscordServer } from '../components/joinDiscordServer';
import { Head } from '../components/head/head';
import { Link } from 'waku';
import { Blogs } from '../components/blogs/blogs';
import { Faq } from '../components/faq';
import { Descriptions } from '../components/descriptions';
import { Contact } from '../components/contact/contact';
import { ViewMoreLink } from '../components/blogs/viewMoreLink';

export default async function HomePage() {
  return (
    <div className="space-y-10 text-gray-900 md:space-y-16 lg:pt-40">
      <Head />
      <div className="grid grid-rows-[auto_auto_auto] gap-x-8 gap-y-2 lg:grid-flow-row lg:grid-cols-3">
        <div className="order-1 flex items-center justify-center lg:order-2 lg:row-span-3">
          <div className="w-40 rounded-full bg-[#F45554] lg:w-80">
            <img src="/images/react-tokyo-logo.png" alt="react tokyo logo" />
          </div>
        </div>
        <div className="order-2 flex flex-col items-start justify-center py-6 lg:order-1 lg:col-span-2">
          <h1 className="text-2xl font-bold tracking-tight break-keep lg:text-4xl">
            分からないを分かち合う、
            <wbr />
            広げようReactの世界。
          </h1>
        </div>
        <div className="order-3 flex flex-col items-start justify-center gap-8 lg:col-span-2 lg:row-span-2">
          <Descriptions />
          <div>
            <JoinDiscordServer />
          </div>
        </div>
      </div>
      <div className="space-y-4 lg:space-y-8">
        <h2 className="text-3xl font-bold">
          <Link to="/blogs">Blogs</Link>
        </h2>
        <Blogs />
        <div className="mt-8 text-center">
          <ViewMoreLink />
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
