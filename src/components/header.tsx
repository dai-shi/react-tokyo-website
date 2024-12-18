import { Link } from 'waku';
import { JoinDiscordServer } from './joinDiscordServer';

export const Header = () => {
  return (
    <header className="flex items-center gap-4 p-6 lg:fixed lg:left-0 lg:top-0 lg:w-full bg-white/80 backdrop-blur-md">
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
        <Link to="/">React Tokyo</Link>
      </h2>
      <div>
        <JoinDiscordServer />
      </div>
    </header>
  );
};
