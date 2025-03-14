import { clsx } from 'clsx';

type JoinDiscordServerProps = {
  isHeader?: boolean;
};

export const JoinDiscordServer = ({
  isHeader = false,
}: JoinDiscordServerProps) => (
  <a
    className="flex items-center gap-4 rounded-md bg-[#5865F2] px-4 py-2"
    href="https://discord.gg/5B9jYpABUy"
    target="_blank"
    rel="noreferrer"
  >
    <img
      className={clsx({
        'h-4': isHeader,
        'h-5': !isHeader,
      })}
      src="/images/discord-logo-white.svg"
      alt="Discord logo"
    />
    <span
      className={clsx('text-white', {
        'hidden text-sm sm:block': isHeader,
        block: !isHeader,
      })}
    >
      Join Discord Server
    </span>
  </a>
);
