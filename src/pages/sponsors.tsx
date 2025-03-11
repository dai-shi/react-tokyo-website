import {
  Award,
  HeartHandshake,
  TrendingUp,
  ChartNoAxesCombined,
} from 'lucide-react';

import { ContactForm } from '../components/contact/contactForm';

type Sponsor = {
  label: string;
  src: string;
  url: string;
};

export const goldSponsors: Sponsor[] = [
  {
    label: '株式会社キッカケクリエイション',
    src: '/images/sponsors/kikkakecreation.png',
    url: 'https://kikkakecreation.com/',
  },
];

export default async function SponsorsPage() {
  return (
    <section className="max-w-6xl space-y-18 pt-10 text-gray-900 md:space-y-24 lg:pt-40">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold tracking-tight break-all lg:mb-12 lg:text-5xl">
          React Tokyoとともに、学び合い・つながる場を。
        </h1>
        <div className="space-y-4 lg:text-lg">
          <p>
            React
            Tokyoは、「Reactを楽しむ仲間を増やし、学び合える環境を作る」ことを目的としたコミュニティです。
            <br />
            初心者から経験者まで、職種や技術レベルを問わず、多様なメンバーが自由に交流できる場を提供しています。
          </p>
          <p>
            オフラインイベントを中心に、オンラインでも活発な議論が生まれるこのコミュニティをより多くの人にとって有意義なものにするため、スポンサーとしてご支援いただける企業・団体を募集しています。
          </p>
          <p>ともにReactの未来を盛り上げていきませんか?</p>
        </div>
      </div>

      <div className="grid grid-cols-1">
        <h2 className="text-3xl font-bold lg:text-4xl">Sponsors</h2>
        <div className="mt-6 space-y-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <h2 className="text-xs whitespace-nowrap text-yellow-500 lg:text-lg">
                Goldスポンサー
              </h2>
              <div className="ml-4 flex-grow border-t border-yellow-500" />
            </div>
            <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
              {goldSponsors.map((sponsor) => (
                <a
                  key={sponsor.label}
                  href={sponsor.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={sponsor.src} alt={sponsor.label} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <h2 className="text-xs whitespace-nowrap text-zinc-500 lg:text-lg">
                Silverスポンサー
              </h2>
              <div className="ml-4 flex-grow border-t border-zinc-500" />
            </div>
            <div className="grid grid-cols-2 justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
              <img
                className="blur-xs"
                src="/images/react-tokyo-logo-opg.png"
                alt="Sample"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <h2 className="text-xs whitespace-nowrap text-amber-700 lg:text-lg">
                Bronzeスポンサー
              </h2>
              <div className="ml-4 flex-grow border-t border-amber-700" />
            </div>
            <div className="grid grid-cols-3 justify-items-center gap-4 md:grid-cols-4 lg:grid-cols-6">
              <img
                className="blur-xs"
                src="/images/react-tokyo-logo-opg.png"
                alt="Sample"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-14">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold lg:text-4xl">
            スポンサーをご検討の皆様へ
          </h2>
          <p className="lg:text-lg">
            React
            Tokyoでは、コミュニティの成長と継続的な活動を支えていただけるスポンサーを募集しています。
            <br />
            スポンサーとしてご支援いただくことで、Reactエンジニアやデザイナー、学生など、多様な層に向けたブランディングや採用活動の機会を得ることができます。
          </p>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold">スポンサーのメリット</h3>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-3 lg:max-w-none lg:grid-cols-[1fr_auto]">
            <div className="space-y-8 rounded-lg bg-stone-50 px-4 py-8 lg:px-8">
              <div className="grid grid-cols-[auto_1fr] gap-2">
                <div className="col-start-1 row-start-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <Award color="#39837e" size={26} />
                  </div>
                </div>
                <div className="col-start-2 row-start-1 flex items-center">
                  <h4 className="text-lg font-semibold text-teal-900 lg:text-xl">
                    ブランドの認知向上
                  </h4>
                </div>
                <div className="col-start-2 row-start-2">
                  <ul className="mt-2 list-inside list-disc space-y-2 marker:text-teal-900">
                    <li>HPにて1年間ロゴ掲載</li>
                    <li>イベント時のスライドにてロゴ掲載・紹介</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr] gap-2">
                <div className="col-start-1 row-start-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <HeartHandshake color="#39837e" size={26} />
                  </div>
                </div>
                <div className="col-start-2 row-start-1 flex items-center">
                  <h4 className="text-lg font-semibold text-teal-900 lg:text-xl">
                    ターゲット層への直接的なアプローチ
                  </h4>
                </div>
                <div className="col-start-2 row-start-2">
                  <ul className="mt-2 list-inside list-disc space-y-2 marker:text-teal-900">
                    <li>
                      Reactエンジニア・デザイナー・学生など、多様な層へのPRが可能
                    </li>
                    <li>イベントやDiscordを通じた交流機会</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr] gap-2">
                <div className="col-start-1 row-start-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <TrendingUp color="#39837e" size={24} />
                  </div>
                </div>
                <div className="col-start-2 row-start-1 flex items-center">
                  <h4 className="text-lg font-semibold text-teal-900 lg:text-xl">
                    コミュニティへの貢献を通じた企業イメージ向上
                  </h4>
                </div>
                <div className="col-start-2 row-start-2">
                  <ul className="mt-2 list-inside list-disc space-y-2 marker:text-teal-900">
                    <li>ITコミュニティの発展を支援する企業としての認知</li>
                    <li>採用活動やブランディングにも活用可能</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-10 rounded-lg bg-stone-50 p-8">
              <div className="space-y-5 px-4">
                <h4 className="ml-[-11px] flex items-center gap-1.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <ChartNoAxesCombined color="#39837e" size={24} />
                  </div>
                  <span className="text-lg font-semibold text-teal-900 lg:text-xl">
                    これまでの活動内容
                  </span>
                </h4>
                <ul className="space-y-6">
                  <li className="space-y-3">
                    <p className="text-xs text-gray-700">開催イベント数</p>
                    <p className="flex items-end justify-end text-5xl font-semibold">
                      <span>2</span>
                      <span className='mr-4 mb-[5px] ml-[14px] h-[30px] w-[30px] bg-[#a5a5a5] [mask-image:url("/images/sponsors/flag.svg")] [mask-position:center] [mask-repeat:no-repeat] [mask-size:cover]'></span>
                    </p>
                  </li>
                  <li className="space-y-3">
                    <p className="text-xs text-gray-700">
                      累計イベント参加人数（参加希望含む）
                    </p>
                    <p className="flex items-end justify-end text-5xl font-semibold">
                      <span>176</span>
                      <span className='mr-4 mb-[5px] h-[45px] w-[45px] bg-[#a5a5a5] [mask-image:url("/images/sponsors/person.svg")] [mask-position:center] [mask-repeat:no-repeat] [mask-size:cover]'></span>
                    </p>
                  </li>
                  <li className="space-y-3">
                    <p className="text-xs text-gray-700">Discord参加人数</p>
                    <p className="flex items-end justify-end text-5xl font-semibold">
                      <span>854</span>
                      <span className='mr-4 mb-[5px] h-[45px] w-[45px] bg-[#a5a5a5] [mask-image:url("/images/sponsors/person.svg")] [mask-position:center] [mask-repeat:no-repeat] [mask-size:cover]'></span>
                    </p>
                  </li>
                  <li>
                    <p className="text-right text-xs">*2025年2月現在</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">スポンサー枠について</h3>
            <p>
              スポンサー枠は、コミュニティスポンサーとイベントスポンサーに分けられます。
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-6">
              <h4 className="text-xl font-bold">コミュニティスポンサー</h4>
              <p>
                コミュニティスポンサーとは、React
                Tokyoコミュニティを年間通してご支援して頂くスポンサー枠です。
                <br />
                ご支援への感謝の気持ちを込めて、以下の特典をご用意しております。
              </p>
            </div>

            <div className="grid gap-3 text-black lg:grid-cols-3">
              <div className="space-y-6 rounded-lg bg-yellow-500/15 px-5 py-8 lg:px-10 lg:py-12">
                <div className="flex justify-between">
                  <h5 className="text-2xl font-bold text-yellow-700">
                    Goldスポンサー
                  </h5>
                  <p className="text-zinc-800">
                    <span className="mr-1 text-lg font-semibold">60</span>
                    <span className="text-xs">万円 / 年</span>
                  </p>
                </div>
                <ul className="list-disc space-y-2 px-3 text-sm marker:text-yellow-700 lg:text-base">
                  <li>websiteにロゴ掲載</li>
                  <li>connpassイベントページにロゴ掲載</li>
                  <li>イベント時のノベルティ配布権利</li>
                  <li>イベント時の運営スライドや印刷物にロゴ掲載</li>
                </ul>
              </div>

              <div className="space-y-6 rounded-lg bg-zinc-100 px-5 py-8 lg:px-10 lg:py-12">
                <div className="flex justify-between">
                  <h5 className="text-2xl font-bold text-zinc-700">
                    Silverスポンサー
                  </h5>
                  <p className="text-zinc-800">
                    <span className="mr-1 text-lg font-semibold">30</span>
                    <span className="text-xs">万円 / 年</span>
                  </p>
                </div>
                <ul className="list-disc space-y-2 px-3 text-sm marker:text-zinc-700 lg:text-base">
                  <li>websiteにロゴ掲載</li>
                  <li>connpassイベントページにロゴ掲載</li>
                  <li>イベント時のノベルティ配布権利</li>
                </ul>
              </div>

              <div className="space-y-6 rounded-lg bg-amber-700/10 px-5 py-8 lg:px-10 lg:py-12">
                <div className="flex justify-between">
                  <h5 className="text-2xl font-bold text-amber-900">
                    Bronzeスポンサー
                  </h5>
                  <p className="text-zinc-800">
                    <span className="mr-1 text-lg font-semibold">10</span>
                    <span className="text-xs">万円 / 年</span>
                  </p>
                </div>
                <ul className="list-disc space-y-2 px-3 text-sm marker:text-amber-900 lg:text-base">
                  <li>websiteにロゴ掲載</li>
                  <li>connpassイベントページにロゴ掲載</li>
                </ul>
              </div>
            </div>
            <p className="text-right text-xs">*表示価格は全て税込みです。</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-6">
              <h4 className="text-xl font-bold">イベントスポンサー</h4>
              <p>
                イベントスポンサーとは、React
                Tokyoが開催するイベントへご支援頂くスポンサー枠です。
              </p>
            </div>

            <div className="space-y-6">
              <h5 className="text-lg font-bold">
                会場提供スポンサー・飲食提供スポンサー
              </h5>
              <p>
                イベントは主に都内で開催します。そのイベント毎に、会場や飲食提供に関するスポンサーを募集しています。
                <br />
                会場スポンサーと飲食スポンサーはそれぞれ募集しておりますが、もし会場と飲食の両方をご提供いただける場合は大変助かります。可能な場合はその旨合わせてお知らせください。
                <br />
                イベントの様子は
                <a
                  className="underline decoration-sky-500 decoration-2"
                  href="https://zenn.dev/react_tokyo/articles/e487712a1629d7"
                >
                  こちら
                </a>
                を御覧ください。
                <br />
                ご支援への感謝の気持ちを込めて、以下の特典をご用意しております。
              </p>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="space-y-6 rounded-lg bg-sky-50/60 px-5 py-8 lg:px-10 lg:py-12">
                  <div className="space-y-2">
                    <h5 className="text-2xl font-bold text-sky-900">
                      会場スポンサー
                    </h5>
                  </div>
                  <ul className="list-disc space-y-2 px-3 text-sm marker:text-sky-900 lg:text-base">
                    <li>connpassイベントページにロゴ掲載</li>
                    <li>イベント時の会社紹介トーク</li>
                    <li>イベント時のノベルティ配布権利</li>
                  </ul>
                </div>

                <div className="space-y-6 rounded-lg bg-sky-50/60 px-5 py-8 lg:px-10 lg:py-12">
                  <div className="space-y-2">
                    <h5 className="text-2xl font-bold text-sky-900">
                      飲食スポンサー
                    </h5>
                  </div>
                  <ul className="list-disc space-y-2 px-3 text-sm marker:text-sky-900 lg:text-base">
                    <li>connpassイベントページにロゴ掲載</li>
                    <li>イベント時の会社紹介トーク</li>
                    <li>イベント時のノベルティ配布権利</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="text-lg font-bold">地方開催スポンサー</h5>
              <p>
                React
                Tokyoは現在、都内でミートアップを開催していますが、全国各地での開催にも挑戦したいと考えています。
                <br />
                そのため、地方開催に伴う費用を全面的にサポートいただけるスポンサー様を募集しております。
                <br />
                具体的な企画や進め方については、ご支援いただく企業様とともに最適な形を模索できればと考えています。
                <br />
                ご興味のある企業様は、ぜひお気軽にDiscordまたはフォームよりお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <p>
          React Tokyoとともに、コミュニティを盛り上げていきませんか？
          <br />
          ご興味のある企業様は、ぜひお気軽にDiscordまたはフォームからお問い合わせください。
        </p>
        <ContactForm />
      </div>
    </section>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
