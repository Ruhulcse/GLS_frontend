import { getGuideBlog } from '@/store/api/guideblog/guidesblogSlice';
import moment from 'moment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const GuideDetailsPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
	const { guideblog } = useSelector(state => state.guideblog);
  const publishDate = moment(guideblog.createdAt).format("MMM Do YY");
    console.log(guideblog)
	useEffect(() => {
		dispatch(getGuideBlog({ id }));
	}, [id, dispatch]);
     return (
      <div className='container mx-auto py-10 space-y-5'>
      <div className='text-3xl font-bold'>
        <h1 className='text-xl text-black-500 font-medium'>{guideblog?.title}</h1>
      </div>
      {
        guideblog.type === "Guide Video" ?  <iframe
        className="h-auto w-auto min-w-[20rem] min-h-[20rem] mx-auto rounded-md relative z-50"
        src={guideblog?.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      :
      
      <img src={guideblog?.image} alt="" className='h-auto w-auto min-w-[20rem] min-h-[20rem] object-cover mx-auto' />
      }
      <div className='flex justify-between'>
        <div>
        <p className='text-sm font-medium text-black-800'>Author: Owner</p>
        <p className='text-xs font-medium text-black-800'>Published: {publishDate}</p>
        </div>
        <p className='text-sm font-medium text-black-800'>{guideblog?.category}</p>
      </div>
      <div className='flex mx-auto my-12 justify-center'>
      <p className='text-base font-normal tracking-normal leading-normal text-black-500'>{guideblog?.body}</p>
      </div>
    </div>
  )
}

export default GuideDetailsPage