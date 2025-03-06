import { GATHERED_BLOGS } from '../../blogs.gen';

export const BlogCounter = () => {
  return <div className="mb-1 text-sm">全 {GATHERED_BLOGS.length} 件</div>;
};
