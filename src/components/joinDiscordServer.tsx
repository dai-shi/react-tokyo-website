import { clsx } from "clsx";

type JoinDiscordServerProps = {
  isHeader?: boolean;
};

export const JoinDiscordServer = ({
  isHeader = false,
}: JoinDiscordServerProps) => (
  <a
    className="px-4 py-2 rounded-md bg-[#5865F2] flex items-center gap-4"
    href="https://discord.gg/5B9jYpABUy"
    target="_blank"
    rel="noreferrer"
  >
    <img
      className={clsx({
        "h-4": isHeader,
        "h-5": !isHeader,
      })}
      src="/images/discord-logo-white.svg"
      alt="Discord logo"
    />
    <span
      className={clsx("text-white", {
        "text-sm hidden sm:block": isHeader,
        block: !isHeader,
      })}
    >
      Join Discord Server
    </span>
    <span
      className={clsx("text-white", {
        "text-sm block sm:hidden": isHeader,
        hidden: !isHeader,
      })}
    >
      Join Us
    </span>
  </a>
);
