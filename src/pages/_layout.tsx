import '../styles.css';

import type { ReactNode } from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="font-['Nunito']">
      <Header />
      <main className="m-6 flex items-center justify-center *:min-h-64 *:min-w-64 lg:m-0 lg:min-h-svh">
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
