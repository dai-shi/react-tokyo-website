import { Card } from '../../components/card/card';
import { Head } from '../../components/head';

export default async function OurTeamsPage() {
  return (
    <section>
      <Head title="Our Teams" />
      <div className="grid max-w-5xl gap-4 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:px-11 lg:pt-40">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
