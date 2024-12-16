import React from "react";

export const Footer = () => {
  return (
    <footer className="p-6 lg:fixed lg:bottom-0 lg:right-0">
      <div className="flex flex-row justify-end space-x-3">
        <a href="https://discord.gg/5B9jYpABUy" target="_blank" rel="noreferrer">
          <img className="h-5" src="/images/discord-logo.png" alt="Discord logo" />
        </a>
        <a href="https://x.com/ReactTokyo" target="_blank" rel="noreferrer">
          <img className="h-5" src="/images/x-logo.png" alt="X(Twitter) logo" />
        </a>
        <a href="https://bsky.app/profile/react-tokyo.bsky.social" target="_blank" rel="noreferrer">
          <img className="h-5" src="/images/bluesky-logo.png" alt="BlueSky logo" />
        </a>
        <a href="https://react-tokyo.connpass.com/" target="_blank" rel="noreferrer">
          <img className="h-5" src="/images/connpass-logo.png" alt="Connpass logo" />
        </a>
      </div>
    </footer>
  );
};
