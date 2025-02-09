import { Contact } from '../components/contact/contact';

export default async function SponsorsPage() {
  return (
    <section className="max-w-6xl space-y-16 pt-10 text-gray-900 md:space-y-16 lg:pt-40">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight break-all lg:text-5xl">
          React Tokyoとともに、学び合い・つながる場を
        </h1>
        <p className="flex flex-col items-start justify-center gap-8 lg:col-span-2 lg:row-span-2">
          React
          Tokyoは、「Reactを楽しむ仲間を増やし、学び合える環境を作る」ことを目的としたコミュニティです。
          <br />
          初心者から経験者まで、職種や技術レベルを問わず、多様なメンバーが自由に交流できる場を提供しています。
        </p>
        <p>
          オフラインイベントを中心に、オンラインでも活発な議論が生まれるこのコミュニティを、より多くの人にとって有意義なものにするため、
          <br />
          スポンサーとしてご支援いただける企業・団体を募集しています。ともにReactの未来を盛り上げていきませんか？
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <div>
          <h2 className="text-xl font-bold lg:text-2xl">Sponsors</h2>
        </div>
        <div className="space-y-12">
          <div className="space-y-2">
            <h3 className="flex items-center px-0.5 text-xs text-yellow-500 after:ml-1.5 after:w-full after:border-t lg:text-lg">
              Gold
            </h3>
            <div className="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-3">
              <img src="/images/react-tokyo-logo-opg.png" alt="" />
              <img src="/images/react-tokyo-logo-opg.png" alt="" />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="flex items-center px-0.5 text-xs text-zinc-500 after:ml-1.5 after:w-full after:border-t lg:text-lg">
              Silver
            </h3>
            <div className="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-4">
              <img src="/images/react-tokyo-logo-opg.png" alt="" />
              <img src="/images/react-tokyo-logo-opg.png" alt="" />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="flex items-center px-0.5 text-xs text-amber-700 after:ml-1.5 after:w-full after:border-t lg:text-lg">
              Bronze
            </h3>
            <div className="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-6">
              <img src="/images/react-tokyo-logo-opg.png" alt="" />
              <img src="/images/react-tokyo-logo-opg.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold break-all">
            スポンサーをご検討の皆様へ
          </h2>
          <p>
            React
            Tokyoでは、コミュニティの成長と継続的な活動を支えていただけるスポンサーを募集しています。
            <br />
            スポンサーとしてご支援いただくことで、Reactエンジニアやデザイナー、学生など、
            <br />
            多様な層に向けたブランディングや採用活動の機会を得ることができます。
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">スポンサーのメリット</h3>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <div className="space-y-10 rounded-lg bg-stone-100 p-8">
              <div className="space-y-5">
                <h4 className="ml-[-10px] flex items-center">
                  <span className='h-[50px] w-[50px] shrink-0 bg-[#00dd34] [mask-image:url("/images/sponsors/premium.svg")] [mask-position:center] [mask-repeat:no-repeat] [mask-size:cover]'></span>
                  <span className="font-semibold">ブランドの認知向上</span>
                </h4>
                <ul className="list-disc space-y-3 px-2.5">
                  <li>HPにて1年間ロゴ掲載</li>
                  <li>イベント時のスライドにてロゴ掲載・紹介</li>
                </ul>
              </div>

              <div className="space-y-5">
                <h4 className="ml-[-9px] flex items-center gap-1.5">
                  <span className='h-[45px] w-[45px] shrink-0 bg-[#28d942] [mask-image:url("/images/sponsors/handshake.svg")] [mask-position:center] [mask-repeat:no-repeat] [mask-size:cover]'></span>
                  <span className="mt-1 font-semibold">
                    ターゲット層への直接的なアプローチ
                  </span>
                </h4>
                <ul className="list-disc space-y-3 px-2.5">
                  <li>
                    Reactエンジニア・デザイナー・学生など、多様な層へのPRが可能
                  </li>
                  <li>イベントやDiscordを通じた交流機会</li>
                </ul>
              </div>

              <div className="space-y-5">
                <h4 className="ml-[-9px] flex items-center gap-2">
                  <span className='h-[45px] w-[45px] shrink-0 bg-[#28d942] [mask-image:url("/images/sponsors/heart.svg")] [mask-position:center] [mask-repeat:no-repeat] [mask-size:cover]'></span>
                  <span className="mt-1 font-semibold break-all">
                    コミュニティへの貢献を通じた企業イメージ向上
                  </span>
                </h4>
                <ul className="list-disc space-y-3 px-2.5">
                  <li>ITコミュニティの発展を支援する企業としての認知</li>
                  <li>採用活動やブランディングにも活用可能</li>
                </ul>
              </div>
            </div>

            <div className="space-y-10 rounded-lg bg-stone-100 p-8">
              <div className="space-y-5">
                <h4 className="ml-[-11px] flex items-center gap-1.5">
                  <span className='h-[48px] w-[48px] shrink-0 bg-[#28d942] [mask-image:url("/images/sponsors/monitoring.svg")] [mask-position:center] [mask-repeat:no-repeat] [mask-size:cover]'></span>
                  <span className="font-semibold">これまでの実績</span>
                </h4>
                <ul className="space-y-8">
                  <li className="space-y-5">
                    <p>累計イベント参加人数（参加希望含む）</p>
                    <p className="flex items-end text-6xl font-semibold">
                      <span>176</span>
                      <span className='mb-[5px] ml-[-8px] h-[45px] w-[45px] bg-[#a5a5a5] [mask-image:url("/images/sponsors/person.svg")] [mask-position:center] [mask-repeat:no-repeat] [mask-size:cover]'></span>
                    </p>
                  </li>
                  <li className="space-y-2">
                    <p>開催イベント数</p>
                    <p className="flex items-end text-6xl font-semibold">
                      <span>2</span>
                      <span className='mb-[5px] ml-[-3px] h-[36px] w-[36px] bg-[#a5a5a5] [mask-image:url("/images/sponsors/flag.svg")] [mask-position:center] [mask-repeat:no-repeat] [mask-size:cover]'></span>
                    </p>
                  </li>
                  <li className="space-y-2">
                    <p>Discord参加人数</p>
                    <p className="flex items-end text-6xl font-semibold">
                      <span>854</span>
                      <span className='mb-[5px] ml-[-8px] h-[45px] w-[45px] bg-[#a5a5a5] [mask-image:url("/images/sponsors/person.svg")] [mask-position:center] [mask-repeat:no-repeat] [mask-size:cover]'></span>
                    </p>
                  </li>
                </ul>
                <small>*2025年2月現在</small>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-7">
          <div className="space-y-3">
            <h3 className="text-xl font-bold">スポンサー枠について</h3>
            <p>
              スポンサー枠は、コミュニティスポンサーとイベントスポンサーに分けられます。
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="font-bold">コミュニティスポンサー</h3>
              <p>
                コミュニティスポンサーとは、React
                Tokyoコミュニティを年間通してご支援して頂くスポンサー枠です。
                ご支援への感謝の気持ちを込めて、以下の特典をご用意しております。
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 text-black lg:grid-cols-3">
              <div className="space-y-4 rounded-lg bg-yellow-500/15 p-5 lg:p-10">
                <div className="space-y-2 lg:self-center">
                  <h4 className="text-xl font-bold lg:text-3xl">
                    Goldスポンサー
                  </h4>
                  <p>
                    <span className="mr-1 text-4xl font-semibold lg:text-6xl">
                      60
                    </span>
                    万円 / 年
                  </p>
                </div>
                <ul className="list-disc space-y-2 px-3 text-sm lg:text-base">
                  <li>
                    <span className="">websiteにロゴ掲載</span>
                  </li>
                  <li>connpassイベントページにロゴ掲載</li>
                  <li>イベント時のノベルティ配布権利</li>
                  <li>イベント時の運営スライドや印刷物にロゴ掲載</li>
                </ul>
              </div>

              <div className="space-y-4 rounded-lg bg-zinc-500/20 p-5 lg:p-10">
                <div className="space-y-2 lg:self-center">
                  <h4 className="text-xl font-bold lg:text-3xl">
                    Silverスポンサー
                  </h4>
                  <p>
                    <span className="mr-1 text-4xl font-semibold lg:text-6xl">
                      30
                    </span>
                    万円 / 年
                  </p>
                </div>
                <ul className="list-disc space-y-2 px-3 text-sm lg:text-base">
                  <li>
                    <span className="">websiteにロゴ掲載</span>
                  </li>
                  <li>connpassイベントページにロゴ掲載</li>
                  <li>イベント時のノベルティ配布権利</li>
                </ul>
              </div>

              <div className="space-y-4 rounded-lg bg-amber-700/15 p-5 lg:p-10">
                <div className="space-y-2">
                  <h4 className="text-xl font-bold lg:text-3xl">
                    Bronzeスポンサー
                  </h4>
                  <p>
                    <span className="mr-1 text-4xl font-semibold lg:text-6xl">
                      10
                    </span>
                    万円 / 年
                  </p>
                </div>
                <ul className="list-disc space-y-2 px-3 text-sm lg:text-base">
                  <li>
                    <span className="">websiteにロゴ掲載</span>
                  </li>
                  <li>connpassイベントページにロゴ掲載</li>
                </ul>
              </div>
            </div>

            <small>*表示価格は全て税込みです。</small>
          </div>

          <div className="space-y-5">
            <div className="space-y-1">
              <h3 className="font-bold">イベントスポンサー</h3>
              <p>
                イベントスポンサーとは、React
                Tokyoが開催するイベントの会場提供や飲食提供をご支援頂くスポンサー枠です。
                イベントの様子は
                <a
                  className="underline decoration-sky-500 decoration-2"
                  href="https://zenn.dev/react_tokyo/articles/e487712a1629d7"
                >
                  こちら
                </a>
                を御覧ください。
                ご支援への感謝の気持ちを込めて、以下の特典をご用意しております。
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="space-y-4 rounded-lg bg-stone-100 p-5 lg:p-10">
                <div className="space-y-2">
                  <h4 className="text-xl font-bold lg:text-3xl">
                    会場スポンサー
                  </h4>
                </div>
                <ul className="list-disc space-y-2 px-3 text-sm lg:text-base">
                  <li>connpassイベントページにロゴ掲載</li>
                  <li>会社紹介トーク</li>
                  <li>イベント時のノベルティ配布権利</li>
                </ul>
              </div>

              <div className="space-y-4 rounded-lg bg-stone-100 p-5 lg:p-10">
                <div className="space-y-2">
                  <h4 className="text-xl font-bold lg:text-3xl">
                    飲食スポンサー
                  </h4>
                </div>
                <ul className="list-disc space-y-2 px-3 text-sm lg:text-base">
                  <li>connpassイベントページにロゴ掲載</li>
                  <li>会社紹介トーク</li>
                  <li>イベント時のノベルティ配布権利</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p>
          React
          Tokyoとともに、コミュニティを盛り上げていきませんか？ご興味のある企業様は、ぜひお気軽にDiscordまたはフォームからお問い合わせください。
        </p>
        <Contact />
      </div>
    </section>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
