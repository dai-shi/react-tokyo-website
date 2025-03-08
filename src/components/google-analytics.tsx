const code = `
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-VQNGS1YC35");
`;

/**
 * Google Analyticsにトラッキングデータを送信するコンポーネント
 * <head>内で使うようにしてください。
 */
export const GoogleAnalytics = () => {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VQNGS1YC35"
      ></script>
      <script>{code}</script>
    </>
  );
};
