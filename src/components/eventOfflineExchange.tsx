const texts = [
  'Reactに関するイベントを開催します。',
  <>
    公開イベントは、
    <a
      className="underline hover:opacity-60"
      href="https://react-tokyo.connpass.com/"
      target="_blank"
      rel="noreferrer"
    >
      react-tokyo.connpass.com
    </a>
    にて参加申込が可能です。
  </>,
  'React Tokyoでは、オフラインイベントでの交流を中心としています。',
  'イベントを通して、Discordでの交流をより深めましょう。',
];

export const EventOfflineExchange = () => {
  return (
    <div className="relative mt-12 w-[calc(100vw-40px)] max-w-[1300px] lg:mt-16">
      <div className="absolute bottom-[-210px] right-[-160px] w-[300px] rotate-[140deg] select-none lg:bottom-[-420px] lg:right-[-260px] lg:w-[680px]">
        <img src="/images/atom-symbol-pink.png" alt="" />
      </div>
      <div className="relative space-y-4 lg:space-y-8">
        <h2 className="text-2xl font-bold lg:text-3xl">
          イベント・オフライン交流
        </h2>
        <div>
          {texts.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <div className="mx-auto flex max-w-[900px] flex-col gap-4 md:flex-row md:gap-8">
          <div className="overflow-hidden rounded-3xl">
            <img src="/images/photo-1.jpg" alt="オフラインイベントでの発表中" />
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/images/photo-2.jpg"
              alt="オフラインイベントでの集合写真"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
