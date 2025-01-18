import { Link } from 'waku';
import { JoinDiscordServer } from './joinDiscordServer';

export const Header = () => {
  return (
    <header className="z-10 flex w-full items-center justify-between bg-white/80 p-6 backdrop-blur-md lg:fixed lg:left-0 lg:top-0">
      <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
        <Link to="/">React Tokyo</Link>
      </h2>
      <div>
        <JoinDiscordServer isHeader />
      </div>
    </header>
  );
};
