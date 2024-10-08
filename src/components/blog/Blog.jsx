import { sliceText } from "@/util/textSlice";
import { Link } from "react-router-dom";
function Blog({ item }) {
  return (
    <Link
      to={`/blog/${item?._id}`}
      state={item}
      className="group cursor-pointer"
    >
      <div className="h-96 w-full relative overflow-hidden rounded-xl shadow-xl group-hover:scale-105">
        <img src={item?.image} className="h-full w-full object-fill" alt="" />
        <div className="bg-black absolute inset-0 opacity-60  translate-y-64 group-hover:translate-y-36 transition sm:block hidden"></div>
        <div className="absolute  top-0 mx-2 text-white translate-y-64 group-hover:translate-y-36 transition-all">
          <div className="sm:text-xl text-lg font-extrabold mb-4 hidden sm:block">
            {item?.createdAt}
          </div>
          <div className="cardTitle">{item?.title}</div>
          <div className="cardInfo">{sliceText(item?.body, 100)}</div>
        </div>
      </div>
      <div className="my-4 mx-2 sm:hidden">
        <div className="text-lg">{item?.createdAt}</div>
        <div className="text-xl font-bold">{item?.title}</div>
        <div className="text-lg">{sliceText(item?.body)}</div>
        <Link
          to={`/blog/${item?._id}`}
          state={item}
          className="uppercase bg-gray-400 p-2 flex justify-center mt-4 hover:bg-gray-600 text-white"
        >
          read more
        </Link>
      </div>
    </Link>
  );
}

export default Blog;
