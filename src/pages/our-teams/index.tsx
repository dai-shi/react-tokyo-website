import { Head } from '../../components/head';

export default async function OurTeamsPage() {
  return (
    <>
      <Head title="Our Teams" />
      <h1>Our Teams</h1>
    </>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
