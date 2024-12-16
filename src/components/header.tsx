import { Link } from 'waku';
import { JoinDiscordServer } from './joinDiscordServer';

export const Header = () => {
  return (
    <header className="flex items-center gap-4 p-6 w-full lg:fixed lg:left-0 lg:top-0">
      <h2 className="text-2xl font-bold tracking-tight flex-grow">
        <Link to="/">React Tokyo</Link>
      </h2>
      <div className="ml-auto">
        <JoinDiscordServer />
      </div>
    </header>
  );
};
