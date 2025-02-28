import { Fragment } from 'react/jsx-runtime';

/**
 * 文字列の配列を受け取り、それぞれJSXに変換して返す
 *
 * 配列の為、任意の箇所で改行できる。
 * また、[リンク](https://example.com)形式の文字列があれば
 * <a href='https://example.com'>リンク</a>
 * に変換する
 *
 * @param messages 文字列の配列
 */
export const renderTextContents = (contents: string[]) => {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

  return contents.map((content, index) => {
    const converted = [];
    let lastIndex = 0;

    content.replace(linkPattern, (match, linkText, linkUrl, offset) => {
      if (lastIndex < offset) {
        converted.push(
          <Fragment key={lastIndex}>
            {content.slice(lastIndex, offset)}
          </Fragment>,
        );
      }

      converted.push(
        <a
          key={linkUrl}
          className="underline decoration-red-500 decoration-2"
          href={linkUrl}
        >
          {linkText}
        </a>,
      );

      lastIndex = offset + match.length;
      return match;
    });

    if (lastIndex < content.length) {
      converted.push(
        <Fragment key={lastIndex}>{content.slice(lastIndex)}</Fragment>,
      );
    }

    return (
      <span key={index}>
        {converted}
        {index < contents.length - 1 && <br />}
      </span>
    );
  });
};
