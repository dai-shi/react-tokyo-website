export default async function RootElement({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VQNGS1YC35"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VQNGS1YC35');
          `
        }}>
        </script>
      </head>
      <body>{children}</body>
    </html>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  };
};
