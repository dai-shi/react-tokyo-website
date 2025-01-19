import { Link } from 'waku';
import { JoinDiscordServer } from './joinDiscordServer';

// TODO: 関数化？
// const menuPaths: Extract<RouteConfig['paths'], '/ourTeams'>[] = ['/ourTeams'];
// const getStaticPaths = async () => {
//   return ['/ourTeams'];
// };

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between gap-3 bg-white/80 p-6 backdrop-blur-md lg:fixed lg:left-0 lg:top-0">
      <div className="flex flex-col gap-3 tracking-tight sm:flex-row">
        <h2 className="text-xl font-bold sm:text-2xl">
          <Link to="/">React Tokyo</Link>
        </h2>
        <nav className="self-start text-sm sm:self-end sm:text-base">
          <ul className="flex gap-3">
            <li>
              <Link to="/our-teams">Our Teams</Link>
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
