const descriptions = [
  '東京を中心に、オンラインとオフラインの両方で活動するReactコミュニティです。',
  'オンラインでは、Discordを通じた情報交換や交流の場を提供し、オフラインではReactに関するイベントを開催します。',
  '初心者から経験者まで、職種や技術力を問わず、誰でも気軽に参加できるのが特徴です。',
  'Reactを学びたい人、新しいつながりを作りたい人、初めてコミュニティに参加する人も大歓迎です！',
  '一緒にReactを楽しみましょう！',
];

export const Descriptions = () => {
  return (
    <div>
      {descriptions.map((description, index) => (
        <p key={index}>{description}</p>
      ))}
    </div>
  );
};
