/**
 * カードUIを返す
 * これは仮です。
 */
export const ComingSoon = () => {
  return (
    <div className="grid w-full place-items-center gap-4 rounded-lg bg-stone-100 p-12 text-gray-700">
      <img
        className="h-32 rounded-full"
        src="/images/react-tokyo-logo.png"
        alt="Unknown"
      />
      <h3 className="text-2xl font-bold">???</h3>
      <p className="max-w-72 break-keep text-center">Coming soon...</p>
    </div>
  );
};
