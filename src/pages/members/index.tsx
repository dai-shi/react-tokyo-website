import { Card } from '../../components/card/card';
import { ComingSoon } from '../../components/card/comingSoon';
import { Head } from '../../components/head';

export default async function MembersPage() {
  return (
    <section className="w-full max-w-7xl space-y-28 pt-10 lg:pt-40">
      <Head title="Team - React Tokyo" />

      <div className="space-y-6">
        <h2 className="text-center text-4xl font-bold sm:text-5xl">
          Initiator
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card />
          <Card />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-center text-4xl font-bold sm:text-5xl">
          Support team
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ComingSoon />
          <ComingSoon />
          <ComingSoon />
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
