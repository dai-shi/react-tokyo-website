import { Blogs } from '../components/blogs';
import { Head } from '../components/head';

export default async function BlogsPage() {
  return (
    <section className="text-gray-900 lg:pt-40">
      <Head title="Blogs - React Tokyo" />
      <div className="mx-auto max-w-[1300px]">
        <div className="space-y-4 lg:space-y-8">
          <h1 className="text-3xl font-bold">BLOGS</h1>
          <div className="space-y-4 lg:text-lg">
            <p>イベントレポートやZennのpublicationブログなど</p>
          </div>
          <Blogs />
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
