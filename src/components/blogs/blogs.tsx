import { GATHERED_BLOGS } from '../../blogs.gen';

export const DISPLAY_BLOGS_LIMIT = 4;

type BlogsProps = {
  displayLimit?: number;
};

export const Blogs = ({ displayLimit = GATHERED_BLOGS.length }: BlogsProps) => {
  return (
    <ul className="grid grid-cols-1 place-items-stretch justify-items-center gap-4 md:grid-cols-2">
      {GATHERED_BLOGS.slice(0, displayLimit).map((blog) => (
        <li key={blog.url} className="max-w-lg">
          <a href={blog.url} target="_blank" rel="noreferrer">
            <img src={blog.imageUrl} alt={blog.title} />
          </a>
        </li>
      ))}
    </ul>
  );
};
