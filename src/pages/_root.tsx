const code = `
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-VQNGS1YC35");
`;

export default async function RootElement({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VQNGS1YC35"
        ></script>
      </head>
      <body className="has-[#sp-menu[data-expanded='true']]:overflow-hidden">
        <script>{code}</script>
        {children}
      </body>
    </html>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
