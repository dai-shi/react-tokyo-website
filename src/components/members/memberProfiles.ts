export type Profile = {
  key: number;
  imageUrl: string;
  name: string;
  description?: string;
  xUrl?: string;
};

export const INITIATOR_PROFILES: Profile[] = [
  {
    key: 0,
    imageUrl:
      'https://pbs.twimg.com/profile_images/1853633897558589440/Nuy9mou5_400x400.jpg',
    name: 'Daishi Kato',
    description:
      'オープンソース開発者。Reactのステート管理ライブラリ Zustand🐻 Jotai👻 Valtio🧙 が有名。近年はReactフレームワーク Waku⛩️ の開発に注力。React Tokyoの活動が 盛り上がることに期待。',
    xUrl: 'https://x.com/dai_shi',
  },
  {
    key: 1,
    imageUrl:
      'https://pbs.twimg.com/profile_images/1405036980690247684/A-Q3iOjM_400x400.jpg',
    name: 'Teruhisa Yamamoto',
    description: '',
    xUrl: 'https://x.com/t6adev',
  },
];

export const SUPPORTER_PROFILES: Profile[] = [
  {
    key: 0,
    imageUrl: '/images/react-tokyo-logo.png',
    name: '???',
    description: 'Coming soon...',
  },
  {
    key: 1,
    imageUrl: '/images/react-tokyo-logo.png',
    name: '???',
    description: 'Coming soon...',
  },
  {
    key: 2,
    imageUrl: '/images/react-tokyo-logo.png',
    name: '???',
    description: 'Coming soon...',
  },
];
