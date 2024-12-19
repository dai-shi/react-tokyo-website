type JoinDiscordServerProps = {
  isResponsive?: boolean;
};

export const JoinDiscordServer = ({
  isResponsive = false,
}: JoinDiscordServerProps) => (
  <a
    className="px-4 py-2 rounded-md bg-[#5865F2] flex items-center gap-4"
    href="https://discord.gg/5B9jYpABUy"
    target="_blank"
    rel="noreferrer"
  >
    <img
      className={`${isResponsive ? `h-4` : `h-5`}`}
      src="/images/discord-logo-white.svg"
      alt="Discord logo"
    />
    <span
      className={`text-white ${isResponsive ? `text-sm hidden sm:block` : `block`}`}
    >
      Join Discord Server
    </span>
    <span
      className={`text-white ${isResponsive ? `text-sm block sm:hidden` : `hidden`}`}
    >
      Join Us
    </span>
  </a>
);
