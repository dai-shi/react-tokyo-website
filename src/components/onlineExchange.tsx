const texts = [
  'Discordを通じた情報交換や、交流の場を提供します。',
  'Reactに関する議論や質問をしていたり、気になった記事や動画をシェアしています。',
  '東京在住じゃなくてもOK！',
  '職種や技術レベルに関係なく自由に楽しんでください！',
  'イベントでの交流を継続しましょう。',
];

export const OnlineExchange = () => {
  return (
    <div className="relative mt-12 w-[calc(100vw-40px)] max-w-[1300px] lg:mt-24">
      <div className="absolute bottom-[-85px] left-[-140px] w-[300px] rotate-[100deg] select-none lg:bottom-[-100px] lg:left-[-290px] lg:w-[680px]">
        <img src="/images/atom-symbol-pink.png" alt="" />
      </div>
      <div className="absolute right-[-150px] top-[-150px] w-[300px] rotate-[45deg] select-none lg:right-[-310px] lg:top-[-240px] lg:w-[680px]">
        <img src="/images/atom-symbol-pink.png" alt="" />
      </div>
      <div className="relative space-y-4 lg:space-y-8">
        <h2 className="text-2xl font-bold lg:text-3xl">オンライン交流</h2>
        <div>
          {texts.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <div className="mx-auto max-w-[900px]">
          <img src="/images/discord-group.png" alt="Discord Group" />
        </div>
      </div>
    </div>
  );
};
