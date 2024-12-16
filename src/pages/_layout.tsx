import '../styles.css';

import type { ReactNode } from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

type RootLayoutProps = { children: ReactNode };

const meta = {
  title: 'React Tokyo',
  description: 'A React community in Tokyo',
  icon: '/images/favicon.png',
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="font-['Nunito']">
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="icon" type="image/png" href={meta.icon} />
      <Header />
      <main className="m-6 flex justify-center *:min-h-64 *:min-w-64 lg:m-0 lg:min-h-svh lg:pb-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
