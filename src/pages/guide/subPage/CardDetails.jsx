import Loading from '@/components/Loading';
import { getGuideBlog } from '@/store/api/guideblog/guidesblogSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function CardDetails() {
  const {id} = useParams()
  const dispatch = useDispatch();
  const { guideblog, loading } = useSelector(state => state.guideblog);
  const { title, body, caterory, createdAt } = guideblog
  useEffect(()=>{
    dispatch(getGuideBlog({ id }))
  },[id, dispatch])
  
  if(loading){
    return(
      <Loading/>
    )
  }
  return (
    <div className='container mx-auto py-10'>
      <div className='text-3xl font-bold'>
        <h1 className='text-xl text-black-500 font-medium'>{title}</h1>
      </div>
      <div className='flex mx-auto my-12 justify-center'>
      <p>{body}</p>
      </div>
    </div>
  )
}

export default CardDetails