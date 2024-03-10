import { Link } from "react-router-dom";
function Blog({ item }) {
  const sliceText = (text, size) => {
    if (text.length > size) {
      return text.slice(0, size) + "...";
    } else {
      return text;
    }
  };
  return (
    <Link to={`/blog/${item.id}`} state={item} className="group cursor-pointer">
      <div className="h-96 w-full relative overflow-hidden rounded-xl shadow-xl group-hover:scale-105">
        <img src={item.image} className="h-full w-full object-fill" alt="" />
      <div className="bg-black absolute inset-0 opacity-60  translate-y-64 group-hover:translate-y-36 transition sm:block hidden">
      </div>
      <div className="absolute  top-0 mx-2 text-white translate-y-64 group-hover:translate-y-36 transition-all">
        <div className="sm:text-xl text-lg font-extrabold mb-4 hidden sm:block">{item.publish_date}</div>
        <div className="sm:text-2xl text-xl font-bold mb-2 hidden sm:block">{item.title}</div>
        <div className="text-xl font-medium sm:group-hover:block hidden">{sliceText(item.info,100)}</div>
       

      </div>
      </div>
      <div className="my-4 mx-2 sm:hidden">
        <div className="text-lg">{item.publish_date}</div>
        <div className="text-xl font-bold">{item.title}</div>
        <div className="text-lg">{sliceText(item.info,100)}</div>
        <Link to={`/blog/${item.id}`} state={item} className="uppercase bg-gray-400 p-2 flex justify-center mt-4 hover:bg-gray-600 text-white">read more</Link>
      </div>
    </Link>
  );
}

export default Blog;
