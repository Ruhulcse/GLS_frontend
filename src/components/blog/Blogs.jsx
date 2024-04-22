import { getAllBlogs } from "@/store/api/blog/blogSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import Blog from "./Blog";

function Blogs({item,filter=false}) {
  const dispatch = useDispatch();
	const { blogs, loading } = useSelector(state => state.blogs);

	useEffect(() => {
		dispatch(getAllBlogs());
	}, [dispatch]);

  if(loading){
    return(
      <Loading/>
    )
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 xl:grid-cols-3 mt-24">
      {filter?item
      .filter((item)=>item.category===filter)
      
      .map((item, i) => (
        <Blog key={i} item={item} />
      )):
      blogs?.map((item, i) => (
        <Blog key={i} item={item} />
      ))}
    </div>
  );
}

export default Blogs;
