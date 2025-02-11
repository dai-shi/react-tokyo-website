import { type Profile } from './memberProfiles';

/**
 * MembersページのカードUI
 */
export const Card = ({ profile }: { profile: Profile }) => {
  return (
    <div className="flex w-full flex-col items-center gap-5 rounded-lg bg-stone-100 p-11 text-gray-700">
      <img
        className="h-32 rounded-full"
        src={profile.imageUrl}
        alt={profile.name}
      />
      <h3 className="text-xl font-bold break-keep lg:text-2xl">
        {profile.name}
      </h3>
      {profile.descriptions && (
        <div className="max-w-72 text-center text-xs leading-relaxed lg:text-base">
          {profile.descriptions.map((description, index) => (
            <>
              {index > 0 && <br />}
              {description}
            </>
          ))}
        </div>
      )}
      {profile.xUrl && (
        <a
          href={profile.xUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-auto"
        >
          <img src="/images/x-logo.png" alt="X" className="h-4" />
        </a>
      )}
    </div>
  );
};
