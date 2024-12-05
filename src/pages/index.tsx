const meta = {
  title: 'React Tokyo',
};

export default async function HomePage() {
  return (
    <div>
      <title>{meta.title}</title>
      <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-flow-row gap-8">
        <div className="lg:col-span-2 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold tracking-tight">We are React Tokyo Community</h1>
        </div>
        <div className="lg:row-span-3 flex items-center justify-center">
          <div className="w-40 lg:w-80 rounded-full bg-[#F45554]">
            <img src="/images/react-tokyo-logo.png" alt="react tokyo logo" />
          </div>
        </div>
        <div className="lg:row-span-2 lg:col-span-2 flex flex-col items-center justify-center">
          Join us!!
        </div>
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
