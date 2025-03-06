import { GATHERED_BLOGS } from '../../blogs.gen';

export const BlogCounter = () => {
  return (
    <div className="text-sm mb-1">
      全 {GATHERED_BLOGS.length} 件
    </div>
  )
}
