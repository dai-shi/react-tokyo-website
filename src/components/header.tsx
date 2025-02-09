'use client';

import { Link, useRouter_UNSTABLE as useRouter } from 'waku';
import { JoinDiscordServer } from './joinDiscordServer';
import { RouteConfig } from 'waku/router';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

const HEADER_MENUS: { path: RouteConfig['paths']; label: string }[] = [
  {
    path: '/about',
    label: 'About',
  },
  {
    path: '/members',
    label: 'Members',
  },
  {
    path: '/sponsors',
    label: 'Sponsors',
  },
] as const;

export const Header = () => {
  const [buttonLabel, setButtonLabel] = useState<string>('メニューを開く');
  const [expanded, setExpanded] = useState<boolean>(false);
  const { path } = useRouter();

  const toggleSpMenu = () => {
    setExpanded(!expanded);
  };

  const closeSpMenu = () => {
    setExpanded(false);
  };

  useEffect(() => {
    setButtonLabel(expanded ? 'メニューを閉じる' : 'メニューを開く');
  }, [expanded]);

  useEffect(() => {
    closeSpMenu();
  }, [path]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeSpMenu();
      }
    };
    window.addEventListener('resize', closeSpMenu);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('resize', closeSpMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className="relative z-10 flex w-full items-start justify-between p-6 sm:items-center lg:fixed lg:top-0 lg:left-0">
      <div
        aria-hidden
        onClick={closeSpMenu}
        className={clsx(
          'absolute top-0 left-0 h-screen w-screen cursor-default bg-white/40 backdrop-blur-xl transition-opacity duration-200 lg:hidden',
          {
            'opacity-100': expanded,
            'pointer-events-none opacity-0': !expanded,
          },
        )}
      />
      <div className="absolute top-0 left-0 h-full w-full bg-white lg:bg-white/80 lg:backdrop-blur-md" />
      <div className="relative flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-4">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
          <Link to="/" onClick={path === '/' ? closeSpMenu : undefined}>
            React Tokyo
          </Link>
        </h2>
      </div>
      <div className="relative flex items-center gap-8">
        <nav className="hidden lg:block">
          <ul className="flex gap-6">
            {HEADER_MENUS.map((menu) => (
              <li key={menu.path}>
                <Link to={menu.path} className="text-xl">
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <JoinDiscordServer isHeader />
        <button
          onClick={menuClick}
          type="button"
          aria-label={expanded ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={expanded}
          className="flex h-6 w-6 flex-col justify-between lg:hidden"
        >
          <span
            className={clsx(
              'block h-0.5 w-full origin-right rounded bg-black transition-transform duration-200',
              {
                '-translate-x-0.5 translate-y-0.5 -rotate-45': expanded,
              },
            )}
          />
          <span
            className={clsx(
              'block h-0.5 w-full rounded bg-black transition-opacity',
              {
                'opacity-0 duration-0': expanded,
              },
            )}
          />
          <span
            className={clsx(
              'block h-0.5 w-full origin-right rounded bg-black transition-transform duration-200',
              {
                '-translate-x-0.5 -translate-y-0.5 rotate-45': expanded,
              },
            )}
          />
        </button>
      </div>
      <nav
        id="sp-menu"
        data-expanded={expanded}
        className={clsx(
          'absolute top-full left-0 w-full bg-white px-6 pb-6 transition-opacity duration-200 lg:hidden',
          {
            'opacity-100': expanded,
            'invisible opacity-0': !expanded,
          },
        )}
      >
        <ul>
          {HEADER_MENUS.map((menu) => (
            <li key={menu.path}>
              <Link
                to={menu.path}
                onClick={path === menu.path ? closeSpMenu : undefined}
                className="block py-4 text-xl font-bold"
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
