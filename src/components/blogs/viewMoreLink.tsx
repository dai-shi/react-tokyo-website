import { Link } from 'waku';

export const ViewMoreLink = () => {
  return (
    <Link
      to="/blogs"
      className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-gray-700 hover:bg-gray-50"
    >
      <span>もっと見る</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
};
