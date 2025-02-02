import { type Profile } from './memberProfiles';

/**
 * MembersページのカードUI
 */
export const Card = ({ profile }: { profile: Profile }) => {
  return (
    <div className="grid w-full place-items-center gap-4 rounded-lg bg-stone-100 p-12 text-gray-700 lg:p-8">
      <img
        className="h-32 rounded-full"
        src={profile.imageUrl}
        alt={profile.name}
      />
      <h3 className="text-2xl font-bold">{profile.name}</h3>
      <p>{profile.title}</p>
      {profile.description && (
        <p className="max-w-72 break-keep text-center">{profile.description}</p>
      )}
      {profile.snsUrl && (
        <a href={profile.snsUrl} target="_blank" rel="noreferrer">
          <img src="/images/x-logo.png" alt="X" className="h-4" />
        </a>
      )}
    </div>
  );
};
