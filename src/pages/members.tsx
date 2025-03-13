import { Head } from '../components/head';
import { Card } from '../components/members/card';
import {
  INITIATOR_PROFILES,
  COLLABORATOR_PROFILES,
} from '../components/members/member-profiles';

export default async function MembersPage() {
  return (
    <section className="w-full max-w-7xl space-y-28 pt-10 lg:pt-40">
      <Head title="Members - React Tokyo" />
      <div className="space-y-6">
        <h2 className="text-center text-4xl font-bold sm:text-5xl">
          Initiators
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,33%)] lg:justify-center">
          {INITIATOR_PROFILES.map((profile) => (
            <Card key={profile.key} profile={profile} />
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-center text-4xl font-bold sm:text-5xl">
          Collaborators
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:justify-center">
          {COLLABORATOR_PROFILES.map((profile) => (
            <Card key={profile.key} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
