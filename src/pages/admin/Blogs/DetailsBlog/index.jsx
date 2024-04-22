
// import { useGetBlogsByIDQuery } from "@/store/api/blogs/blogsApi";
// import dateFormat from "dateformat";
import { getBlog } from "@/store/api/blogs/blogsSlice";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const DetailsBlogPage = () => {
  const {id} = useParams()
  const dispatch = useDispatch();
	const { blog } = useSelector(state => state.blog);
 console.log(blog)
	useEffect(() => {
		dispatch(getBlog({ id }));
	}, [id, dispatch]);
  const publishDate = moment(blog.createdAt).format("MMM Do YY");
  return (
    <div className="space-y-8">
     <div className="flex justify-center items-center">
     <img src={blog?.image} alt="" className="h-1/2 w-1/2" />
     </div>
     <div className="flex justify-between">
      <p>Category:{blog?.category}</p>
      <p>Published At <br /> <span>{publishDate}</span></p>
     </div>
     <div className="space-y-6">
      <h1 className="text-xl font-semibold">
      {blog?.title}
      </h1>
      <p className="text-sm font-normal">
        {blog?.body}
        </p>
     </div>
    </div>
  )
}

export default DetailsBlogPage