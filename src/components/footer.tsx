export const Footer = () => {
  return (
    <footer className="p-6 lg:fixed lg:bottom-0 lg:left-0">
      <div className="flex flex-row space-x-2">
        <a
          href="https://discord.gg/5B9jYpABUy"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block underline"
        >
          Discord
        </a>
        <a
          href="https://x.com/ReactTokyo"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block underline"
        >
          X(Twitter)
        </a>
        <a
          href="https://bsky.app/profile/react-tokyo.bsky.social"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block underline"
        >
          BlueSky
        </a>
        <a
          href="https://react-tokyo.connpass.com/"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block underline"
        >
          Connpass
        </a>
      </div>
    </footer>
  );
};
