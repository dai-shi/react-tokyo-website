type MetaData = {
  title: string;
  description: string;
  icon: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterSite?: string;
};

const DEFAULT_META_DATA: MetaData = {
  title: "React Tokyo",
  description: "A React community in Tokyo",
  icon: "/images/favicon.png",
  ogImage: "/images/react-tokyo-logo-opg.png",
  ogUrl: "https://react-tokyo.vercel.app",
  twitterCard: "summary_large_image",
  twitterSite: "@ReactTokyo",
};

/**
 * ページのメタデータ設定用のコンポーネント
 */
export const Head = (metaProps: Partial<MetaData>) => {
  const meta: MetaData = {
    ...DEFAULT_META_DATA,
    ...metaProps,
  };
  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="icon" type="image/png" href={meta.icon} />

      {/* OGP Basic Tags */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.ogImage} />
      <meta property="og:url" content={meta.ogUrl} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={meta.twitterCard} />
      <meta name="twitter:site" content={meta.twitterSite} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.ogImage} />
    </>
  );
};
