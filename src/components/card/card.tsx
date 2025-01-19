/**
 * カードUIを返す
 */
export const Card = async () => {
  return (
    <div className="grid place-items-center gap-4 rounded-lg bg-stone-100 p-10">
      <img className="h-32" src="/images/react-tokyo-logo.png" alt="Avatar" />
      <div className="grid place-items-center gap-3 text-gray-700">
        <h3 className="text-2xl font-bold">Cordelia</h3>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
          soluta.
        </p>
        <a href="https://x.com/cordelia_sixth" target="_blank" rel="noreferrer">
          <img src="/images/x-logo.png" alt="X logo" className="h-4" />
        </a>
      </div>
    </div>
  );
};
