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
    imageUrl: '/images/members/Daishi-Kato.webp',
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
    imageUrl: '/images/members/Teruhisa-Yamamoto.webp',
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
    imageUrl: '/images/members/Yusuke-Kikuta.webp',
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
    imageUrl: '/images/members/ytaisei.webp',
    name: 'ytaisei',
    descriptions: [
      'Webフロントエンドエンジニア',
      '普段はtoB向けの生成AIアプリケーション開発に従事しています。Reactのエコシステムと設計を考えることが好きです！',
    ],
    xUrl: 'https://x.com/ytaisei_',
  },
  {
    key: 2,
    imageUrl: '/images/members/SolitudeRA.webp',
    name: 'SolitudeRA',
    descriptions: [
      '情報系修士2年生フルスタックエンジニアを目指しています。',
      '普段は興味のある分野で幅広く開発に取り組んでいます。フロントエンドではReactを使うことが多く、学びを楽しんでいます。',
    ],
    xUrl: 'https://x.com/SolitudeRA',
  },
  {
    key: 3,
    imageUrl: '/images/members/tamu.webp',
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
    imageUrl: '/images/members/jack.webp',
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
    imageUrl: '/images/members/cordelia.webp',
    name: 'cordelia',
    descriptions: [
      'Web Developer',
      'サイト、アプリケーション、ライブラリなど様々な開発に興味あり！フロントエンドもバックエンドもデキる開発者を目指しています。React Tokyoでお会いしましょう👋',
    ],
    xUrl: 'https://x.com/cordelia_sixth',
  },
  {
    key: 6,
    imageUrl: '/images/members/Ntaka.webp',
    name: 'Ntaka',
    descriptions: [
      'Webエンジニア',
      '普段はサーバー・フロントエンド開発やクラウドアーキテクチャ設計など、幅広く取り組んでいます。',
      'ReactTokyoでは、Reactを通じて多様なバックグラウンドを持つ方々と交流し、技術的な知見を深めていければと思っています！',
    ],
    xUrl: 'https://x.com/aTakatoNakamura',
  },
  {
    key: 7,
    imageUrl: '/images/members/akfm_sato.webp',
    name: 'akfm_sato(あっきー)',
    descriptions: [
      'Next.jsの話をよくZennで記事にしています。Rust、テスト、アジャイルが好きです。[「Next.jsの考え方」](https://zenn.dev/akfm/books/nextjs-basic-principle)を執筆。',
    ],
    xUrl: 'https://x.com/akfm_sato',
  },
  {
    key: 8,
    imageUrl: '/images/members/jogen.webp',
    name: 'じょうげん',
    descriptions: [
      'Webエンジニア',
      '趣味や業務でReactを使っています。バックエンドも書きますが、Reactは特に好きなライブラリです。可読性や保守性の高い設計を考え、より良いものにしていくことに喜びを感じます。一緒にReactの世界を楽しみましょう！',
    ],
    xUrl: 'https://x.com/j_ktwr',
  },
  {
    key: 9,
    imageUrl: '/images/members/furusho.webp',
    name: 'ふるしょう',
    descriptions: [
      'Dress Code株式会社 テックリード',
      '創業期のスタートアップでBtoBアプリケーションの開発に従事。趣味はReact・ゴルフ・競馬です。',
    ],
    xUrl: 'https://x.com/k_furusho_',
  },
  {
    key: 10,
    imageUrl: '/images/members/wonder.webp',
    name: 'Wonder',
    descriptions: [
      'Webエンジニアとして、フロントエンド、バックエンド、クラウドインフラなど手広くやってます。フロントエンドでは、Reactを中心に日々技術を深めながら邁進しています。',
      'シンプル、軽量、小型、ハイパワーをモットーにスリムでぜい肉のないシステムを作るのが好きです。',
    ],
    xUrl: 'https://x.com/iwonder118',
  },
  {
    key: 11,
    imageUrl: '/images/members/locol.webp',
    name: 'locol',
    descriptions: [
      'Software Engineer',
      'Reactを用いたフロントエンド開発を中心にバックエンドやインフラ等、幅広い技術領域で開発しています。',
      'デザインシステム、アーキテクチャ設計、テスト、DevOps、スクラムなどが好きです。React Tokyoには様々なバックグラウンドの方がいらっしゃるので、一緒に切磋琢磨して盛り上げていければと思います！',
    ],
    xUrl: 'https://x.com/locol23',
  },
];
