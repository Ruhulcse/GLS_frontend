import { useGetBlogsByIDQuery } from '@/store/api/blogs/blogsApi';
import dateFormat from "dateformat";
import { useParams } from 'react-router-dom';
function BlogDetails() {
  const {id} = useParams()
  const { data } = useGetBlogsByIDQuery(id)
  const publishedDate = dateFormat(data?.createdAt, "mmmm dS, yyyy")
  return (
    <div className='container mx-auto'>
      <div className='text-3xl font-bold'>{data?.title}</div>
      <div className='flex mx-auto my-12 justify-center w-1/2 h-4/6'>
        <img src={data?.image}className='h-full w-full' alt="" />
      </div>
      <div className='flex justify-between'>
      <p>Author: Ahsan</p>
      <p>Published <br /><span>{publishedDate}</span></p>
      </div>
      <div className="font-normal text-xl text-justify mb-24 mx-4 md:mx-0">
        {data?.body}
      </div>
    </div>
  );
}

export default BlogDetails;
