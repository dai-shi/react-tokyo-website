/**
 * カードUIを返す
 */
export const Card = () => {
  return (
    <div className="grid w-full place-items-center gap-4 rounded-lg bg-stone-100 p-12 text-gray-700">
      <img
        className="h-32 rounded-full"
        src="/images/daishi_avator.jpg"
        alt="Daishi Kato"
      />
      <h3 className="text-2xl font-bold">Daishi Kato</h3>
      <p>オープンソース開発者</p>
      <p className="max-w-72 break-keep text-center">
        Zustand🐻 Jotai👻 Valtio🧙‍♀️ Waku⛩️ を開発。
      </p>
      <a href="https://x.com/dai_shi" target="_blank" rel="noreferrer">
        <img src="/images/x-logo.png" alt="X" className="h-4" />
      </a>
    </div>
  );
};
