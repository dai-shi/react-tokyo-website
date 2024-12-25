import { GATHERED_BLOGS } from '../blogs.gen';

export const Blogs = () => {
  return (
    <div className="space-y-4 lg:space-y-8">
      <h2 className="text-3xl font-bold">BLOGS</h2>
      <ul className="grid grid-cols-1 place-items-stretch justify-items-center gap-4 md:grid-cols-2">
        {GATHERED_BLOGS.map((blog) => (
          <li key={blog.url} className="max-w-lg">
            <a href={blog.url} target="_blank" rel="noreferrer">
              <img src={blog.imageUrl} alt={blog.title} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
