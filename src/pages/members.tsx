import { Head } from '../components/head';
import { Card } from '../components/members/card';
import {
  INITIATOR_PROFILES,
  SUPPORTER_PROFILES,
} from '../components/members/memberProfiles';

export default async function MembersPage() {
  return (
    <section className="w-full max-w-7xl space-y-28 pt-10 lg:pt-40">
      <Head title="Members - React Tokyo" />
      <div className="space-y-6">
        <h2 className="text-center text-4xl font-bold sm:text-5xl">
          Initiator
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,33%)] lg:justify-center">
          {INITIATOR_PROFILES.map((profile) => (
            <Card key={profile.name} profile={profile} />
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-center text-4xl font-bold sm:text-5xl">
          Support team
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPORTER_PROFILES.map((profile) => (
            <Card key={profile.name} profile={profile} />
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
