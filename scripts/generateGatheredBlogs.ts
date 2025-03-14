import fs from 'node:fs/promises';
import ogs from 'open-graph-scraper';
import prettier from 'prettier';

const list = [
  'https://zenn.dev/react_tokyo/articles/04d1af4b4a3abc',
  'https://zenn.dev/react_tokyo/articles/f590adb2345c67',
  'https://zenn.dev/react_tokyo/articles/fa97b98a527439',
  'https://zenn.dev/react_tokyo/articles/77375d84125b76',
  'https://zenn.dev/react_tokyo/articles/e487712a1629d7',
  'https://zenn.dev/react_tokyo/articles/db90a5397364aa',
  'https://zenn.dev/react_tokyo/articles/6aaea6220a2c3e',
  'https://zenn.dev/react_tokyo/articles/37d79b1b2a7487',
  'https://zenn.dev/react_tokyo/articles/ba82415acc2c04',
  'https://zenn.dev/react_tokyo/articles/38a76f948c0d2f',
  'https://zenn.dev/tell_y/articles/f013a03370ee27',
  'https://zenn.dev/dai_shi/articles/9f2760086fb31a',
];

const gatherBlogs = async () => {
  const results = await Promise.all(
    list.map(async (url) => {
      const result = await ogs({ url });
      if (result.error) {
        throw new Error(`Failed to fetch ${url}`);
      }
      const {
        result: { ogTitle, ogImage },
      } = result;
      if (!ogTitle || !ogImage || ogImage.length === 0 || !ogImage[0]?.url) {
        throw new Error(
          `Not exist: ogTitle or ogImage, ${ogTitle} or ${ogImage}`,
        );
      }
      return { url, title: ogTitle, imageUrl: ogImage[0]?.url };
    }),
  );
  return results;
};

const generateCode = async (
  blogs: { url: string; title: string; imageUrl: string }[],
) => {
  const code = `export const GATHERED_BLOGS = ${JSON.stringify(blogs)};`;
  const options = await prettier.resolveConfig('package.json');
  const formatted = await prettier.format(code, {
    ...options,
    parser: 'typescript',
  });
  await fs.writeFile('src/blogs.gen.ts', formatted, 'utf8');
};

const main = async () => {
  const blogs = await gatherBlogs();
  await generateCode(blogs);
};

await main();
