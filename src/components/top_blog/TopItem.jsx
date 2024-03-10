import { Link } from 'react-router-dom'

function TopItem({item}) {
  return (
    <Link to={`/blog/${item.id}`} state={item} className='sm:flex bg-gray-300 my-6 lg:my-2 min-w-full rounded-xl shadow-lg hover:scale-95'>
    <div className=' md:w-5/12 w-full rounded-lg'>
        <img src={item.image} className='h-full w-full object-cover rounded-lg'  alt="" />
    </div>
    <div className='md:flex md:w-2/3 w-5/6 md:h-full  my-auto md:p-10'>
     <div>
     <p className='font-medium text-lg mb-3'>{item.publish_date}</p>
        <p className='md:text-xl md:font-bold text-xl font-bold '>{item.title}</p>
     </div>
    </div>
</Link>
  )
}

export default TopItem