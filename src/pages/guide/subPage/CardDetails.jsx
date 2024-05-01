import Loading from '@/components/Loading';
import { getGuideBlog } from '@/store/api/guideblog/guidesblogSlice';
import moment from 'moment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function CardDetails() {
  const {id} = useParams()
  const dispatch = useDispatch();
  const { guideblog, loading } = useSelector(state => state.guideblog);
  const { title, body, category, createdAt, image } = guideblog
  const publishDate = moment(createdAt).format("MMM Do YY");
  // const description = Jodit.modules.Helpers.stripTags(body);
  useEffect(()=>{
    dispatch(getGuideBlog({ id }))
  },[id, dispatch])
  
  if(loading){
    return(
      <Loading/>
    )
  }
  return (
    <div className='container mx-auto py-10 space-y-5'>
      <div className='text-3xl font-bold'>
        <h1 className='text-xl text-black-500 font-medium'>{title}</h1>
      </div>
      <img src={image} alt="" className='h-auto w-auto min-w-[20rem] min-h-[20rem] object-cover mx-auto' />
      <div className='flex justify-between'>
        <div>
        <p className='text-sm font-medium text-black-800'>Author: Owner</p>
        <p className='text-xs font-medium text-black-800'>Published: {publishDate}</p>
        </div>
        <p className='text-sm font-medium text-black-800'>{category}</p>
      </div>
      <div className='flex mx-auto my-12 justify-center'>
      <p className='text-base font-normal tracking-normal leading-normal text-black-500'>{body}</p>
      </div>
    </div>
  )
}

export default CardDetails