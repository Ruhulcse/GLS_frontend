import { data } from ".";
import Blog from "./Blog";

function Blogs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 xl:grid-cols-3 mt-24">
      {data.map((item, i) => (
        <Blog key={i} item={item} />
      ))}
    </div>
  );
}

export default Blogs;
