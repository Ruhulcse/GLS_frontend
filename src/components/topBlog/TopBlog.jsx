import { Link } from 'react-router-dom';
import { road } from '../../assets';
import TopList from './../top_blog/TopList'

function TopBlog({item}) {
    const topData = item.slice(1,4)
    const firstData = item.slice(0,1)
    console.log(firstData);
    // console.log(topData);
  return (
    <div className="grid mx-5 mt-16 lg:mx-auto lg:grid-cols-2 grid-cols-1 space-y-10 lg:space-y-0 lg:space-x-10 lg:container lg:min-h-[500px] ">
        <Link to={`/blog/${firstData[0].id}`} state={firstData[0]} className="h-[400px] relative lg:h-[100%] rounded-xl shadow-xl cursor-pointer hover:scale-95">
          <img
            src={firstData[0].image}
            alt=""
            className="h-full  absolute w-full object-cover rounded-xl"
          />
        <div className='absolute bottom-8 text-white text-2xl mx-4 md:text-4xl text-center'>{firstData[0].title}</div>
        </Link>

        <TopList item= {topData} />
      </div>
  )
}

export default TopBlog