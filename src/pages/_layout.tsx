import type { ReactNode } from 'react';

import '../styles.css';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="overflow-hidden font-['Nunito'] has-[#sp-menu[data-expanded='true']]:overflow-hidden">
      <Header />
      <main className="m-6 flex justify-center *:min-h-64 *:min-w-64 lg:my-0 lg:min-h-svh lg:pb-20">
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
