export type Profile = {
  key: number;
  imageUrl: string;
  name: string;
  descriptions?: string[];
  xUrl?: string;
};

export const INITIATOR_PROFILES: Profile[] = [
  {
    key: 0,
    imageUrl:
      'https://pbs.twimg.com/profile_images/1853633897558589440/Nuy9mou5_400x400.jpg',
    name: 'Daishi Kato',
    descriptions: [
      'オープンソース開発者',
      'Reactのステート管理ライブラリ',
      'Zustand🐻 Jotai👻 Valtio🧙 ',
      'が有名。近年はReact',
      'フレームワーク Waku⛩️ の開発に注力。React Tokyoの活動が盛り上がることに期待。',
    ],
    xUrl: 'https://x.com/dai_shi',
  },
  {
    key: 1,
    imageUrl:
      'https://pbs.twimg.com/profile_images/1405036980690247684/A-Q3iOjM_400x400.jpg',
    name: 'Teruhisa Yamamoto',
    descriptions: [
      'React中心のフロントエンド開発に従事。クライアント寄りのアプリ開発が好み。現在警備ロボット開発のチームに参画中。React Tokyo',
      'メンバーのより良い交流の場を提供できるよう頑張ります！',
    ],
    xUrl: 'https://x.com/t6adev',
  },
];

export const COLLABORATOR_PROFILES: Profile[] = [
  {
    key: 0,
    imageUrl:
      'https://pbs.twimg.com/profile_images/1883341436617441280/vaE-JwnH_400x400.jpg',
    name: 'Yusuke Kikuta',
    descriptions: [
      'フリーランスフルスタックエンジニア',
      '普段はAIエージェントの制作やweb3領域、Blockchainなどの開発を行なっております。',
      'Reactのコンポーネント指向が好きです！お仕事のご連絡いつでもお待ちしております！',
    ],
    xUrl: 'https://x.com/yusuke_05092005',
  },
  {
    key: 1,
    imageUrl:
      'https://pbs.twimg.com/profile_images/1624662455682215936/d6fJLpgm_400x400.jpg',
    name: 'ytaisei',
    descriptions: [
      'Webフロントエンドエンジニア',
      '普段はtoB向けの生成AIアプリケーション開発に従事しています。Reactのエコシステムと設計を考えることが好きです！',
    ],
    xUrl: 'https://x.com/ytaisei_',
  },
  {
    key: 2,
    imageUrl:
      'https://pbs.twimg.com/profile_images/1077028031074455552/cXJ2nucc_400x400.jpg',
    name: 'SolitudeRA',
    descriptions: [
      '情報系修士2年生フルスタックエンジニアを目指しています。',
      '普段は興味のある分野で幅広く開発に取り組んでいます。フロントエンドではReactを使うことが多く、学びを楽しんでいます。',
    ],
    xUrl: 'https://x.com/SolitudeRA',
  },
  {
    key: 3,
    imageUrl:
      'https://pbs.twimg.com/profile_images/1888927761454227456/BLz1aFZm_400x400.jpg',
    name: 'tamu',
    descriptions: [
      'Webエンジニア',
      'ToC向けのWebアプリをフロントエンドはNext.js、Reactを用いて開発しています。SESでエンジニアスタートして、今は自社開発の会社で働いています。Reactが好きな方、Next.jsが好きな方、フロントエンドが好きな方、',
      'いろんな方がこのコミュニティを通じて繋がっていただけるといいなと思っています。',
      'そのためのお手伝いをしていきたいです！皆さんで、React Tokyoを盛り上げていきましょう！',
    ],
    xUrl: 'https://x.com/tamu_engineer',
  },
  {
    key: 4,
    imageUrl:
      'https://cdn.discordapp.com/avatars/1240512986360057897/2fa555d5384049e7c8cedab02366d21f.webp?size=240',
    name: 'ジャック',
    descriptions: [
      'フロントエンドエンジニア',
      '普段はWebアプリケーションをReact.jsを用いて開発しています。デザインシステムやアニメーションの実装などに興味があります。',
      'React.jsが好きな方、これから触っていこうと思っている方など、いろいろな方に参加していただきたいと思っています。',
    ],
    xUrl: 'https://x.com/jackmiwamiwa',
  },
  {
    key: 5,
    imageUrl:
      'https://pbs.twimg.com/profile_images/1635878143579013120/EFedSC6O_400x400.jpg',
    name: 'cordelia',
    descriptions: [
      'Web Developer',
      'サイト、アプリケーション、ライブラリなど様々な開発に興味あり！フロントエンドもバックエンドもデキる開発者を目指しています。React Tokyoでお会いしましょう👋',
    ],
    xUrl: 'https://x.com/cordelia_sixth',
  },
  {
    key: 6,
    imageUrl:
      'https://pbs.twimg.com/profile_images/1018548906379001857/MlgEdhSP_400x400.jpg',
    name: 'Ntaka',
    descriptions: [
      'Webエンジニア',
      '普段はサーバー・フロントエンド開発やクラウドアーキテクチャ設計など、幅広く取り組んでいます。',
      'ReactTokyoでは、Reactを通じて多様なバックグラウンドを持つ方々と交流し、技術的な知見を深めていければと思っています！',
    ],
    xUrl: 'https://x.com/aTakatoNakamura',
  },
];
