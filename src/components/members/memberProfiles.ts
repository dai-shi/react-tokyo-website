export type Profile = {
  imageUrl: string;
  name: string;
  title: string;
  description?: string;
  snsUrl?: string;
};

export const INITIATOR_PROFILES: Profile[] = [
  {
    imageUrl:
      'https://pbs.twimg.com/profile_images/1853633897558589440/Nuy9mou5_400x400.jpg',
    name: 'Daishi Kato',
    title: 'オープンソース開発者',
    description: 'Zustand🐻 Jotai👻 Valtio🧙 Waku⛩️ を開発。',
    snsUrl: 'https://x.com/dai_shi',
  },
  {
    imageUrl:
      'https://pbs.twimg.com/profile_images/1405036980690247684/A-Q3iOjM_400x400.jpg',
    name: 'Teruhisa Yamamoto',
    title: '',
    description: '',
    snsUrl: 'https://x.com/t6adev',
  },
];

export const SUPPORTER_PROFILES: Profile[] = [
  {
    imageUrl: '/images/react-tokyo-logo.png',
    name: '???',
    title: 'Coming soon...',
  },
  {
    imageUrl: '/images/react-tokyo-logo.png',
    name: '???',
    title: 'Coming soon...',
  },
  {
    imageUrl: '/images/react-tokyo-logo.png',
    name: '???',
    title: 'Coming soon...',
  },
];
