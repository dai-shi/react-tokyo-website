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
      <h3 className="break-keep text-xl font-bold lg:text-2xl">
        {profile.name}
      </h3>
      {profile.description && (
        <p className="max-w-72 break-keep text-center">{profile.description}</p>
      )}
      {profile.snsUrl && (
        <a
          href={profile.snsUrl}
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
