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
    description:
      'React中心のフロントエンド開発に従事。クライアント寄りのアプリ開発が好み。現在警備ロボット開発のチームに参画中。React Tokyoメンバーのより良い 交流の場を提供できるよう頑張ります！',
    xUrl: 'https://x.com/t6adev',
  },
];

export const SUPPORTER_PROFILES: Profile[] = [
  {
    key: 0,
    imageUrl:
      'https://pbs.twimg.com/profile_images/1883341436617441280/vaE-JwnH_400x400.jpg',
    name: 'Yusuke Kikuta',
    description:
      'フリーランスフルスタックエンジニア。普段はAIエージェントの制作やweb3領域、Blockchainなどの開発を行なっております。Reactのコンポーネント指向が好きです！お仕事のご連絡いつでもお待ちしております！',
    xUrl: 'https://x.com/yusuke_05092005',
  },
  {
    key: 1,
    imageUrl:
      'https://pbs.twimg.com/profile_images/1624662455682215936/d6fJLpgm_400x400.jpg',
    name: 'ytaisei（たいせー）',
    description:
      'Webフロントエンドエンジニア。普段はtoB向けの生成AIアプリケーション開発に従事しています。Reactのエコシステムと設計を考えることが好きです！',
    xUrl: 'https://x.com/ytaisei_',
  },
];
