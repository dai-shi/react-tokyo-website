import { ChevronRight } from 'lucide-react';
import { Link } from 'waku';

export const ViewMoreLink = () => {
  return (
    <Link
      to="/blogs"
      className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-gray-700 hover:bg-gray-50"
    >
      <span>もっと見る</span>
      <ChevronRight />
    </Link>
  );
};
