import { GATHERED_BLOGS } from '../blogs.gen';

export const Blogs = () => {
  return (
    <ul className="grid grid-cols-1 place-items-stretch justify-items-center gap-4 md:grid-cols-2">
      {GATHERED_BLOGS.map((blog) => (
        <li key={blog.url} className="max-w-lg">
          <a href={blog.url} target="_blank" rel="noreferrer">
            <img src={blog.imageUrl} alt={blog.title} />
          </a>
        </li>
      ))}
    </ul>
  );
};
