import { Link } from 'waku';
import { JoinDiscordServer } from './joinDiscordServer';

// TODO: 関数化？
// const menuPaths: Extract<RouteConfig['paths'], '/ourTeams'>[] = ['/ourTeams'];
// const getStaticPaths = async () => {
//   return ['/ourTeams'];
// };

export const Header = () => {
  return (
    <header className="z-10 flex w-full items-start justify-between bg-white/80 p-6 backdrop-blur-md sm:items-center lg:fixed lg:left-0 lg:top-0">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-4">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
          <Link to="/">React Tokyo</Link>
        </h2>
        <nav>
          <ul className="flex gap-2">
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <JoinDiscordServer isHeader />
      </div>
    </header>
  );
};
