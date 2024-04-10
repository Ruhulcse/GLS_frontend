
import { useGetBlogsByIDQuery } from "@/store/api/blogs/blogsApi";
import dateFormat from "dateformat";
import { useParams } from "react-router-dom";
const DetailsBlogPage = () => {
  const {id} = useParams()
  const { data } = useGetBlogsByIDQuery(id)
  const date = dateFormat(data?.createdAt, "mmmm dS, yyyy")
  return (
    <div className="space-y-8">
     <div className="flex justify-center items-center">
     <img src={data?.image} alt="" className="h-1/2 w-1/2" />
     </div>
     <div className="flex justify-between">
      <p>Category:{data?.category}</p>
      <p>Published At <br /> <span>{date}</span></p>
     </div>
     <div className="space-y-6">
      <h1 className="text-xl font-semibold">
      {data?.title}
      </h1>
      <p className="text-sm font-normal">{data?.body}</p>
     </div>
    </div>
  )
}

export default DetailsBlogPage