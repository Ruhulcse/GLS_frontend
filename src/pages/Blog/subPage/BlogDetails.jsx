import Loading from '@/components/Loading';
import { getBlog } from '@/store/api/blogs/blogsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function BlogDetails() {
  const {id} = useParams()
  const dispatch = useDispatch();
	const { blog, loading } = useSelector(state => state.blog);
	useEffect(() => {
		dispatch(getBlog({ id }));
	}, [id, dispatch]);
  if(loading){
    return (
    <Loading/>
  )
  }
  return (
    <div className='container mx-auto'>
      <div className='text-3xl font-bold'>
       <h1 className='text-3xl font-bold'>{blog?.title}</h1>
      </div>
      <div className='flex mx-auto my-12 justify-center w-1/2 h-4/6'>
        <img src={blog?.image}className='h-full w-full' alt="" />
      </div>
      <div className='flex justify-between'>
      <p>Author: Ahsan</p>
      {/* <p>Published <br /><span>{publishedDate}</span></p> */}
      </div>
      <div className="font-normal text-xl text-justify mb-24 mx-4 md:mx-0">
        {blog?.body}
      </div>
    </div>
  );
}

export default BlogDetails;
