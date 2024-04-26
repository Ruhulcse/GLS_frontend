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
    <div>
      <h1 className='text-xl font-medium'>{guideblog?.title}</h1>
      <div className="flex justify-between">
            <p className="text-xs font-medium tracking-wide">Author Name: Owner</p>
            <p className="text-xs font-medium tracking-wide">Published Date: {publishDate}</p>
          </div>
          <div className='my-10'>
            <p className='text-base font-normal'>{guideblog?.body}</p>
          </div>
    </div>
  )
}

export default GuideDetailsPage