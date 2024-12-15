import { FC } from "react";

type MetaData = {
  title: string;
  description: string;
  icon: string;
};

const DEFAULT_META_DATA: MetaData = {
  title: "React Tokyo",
  description: "A React community in Tokyo",
  icon: "/images/favicon.png",
};

/**
 * ページのメタデータ設定用のコンポーネント
 */
export const Head: FC<Partial<MetaData>> = (metaProps) => {
  const meta: MetaData = {
    ...DEFAULT_META_DATA,
    ...metaProps,
  };
  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="icon" type="image/png" href={meta.icon} />
    </>
  );
};
