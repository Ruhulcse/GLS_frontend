import { useParams } from 'react-router-dom'
import Blogs from './../../../components/blog/Blogs'
import {blogData} from './../../../data/blogData'

function BlogListPage() {
    const {category} = useParams()
    // console.log(category);
    const filter = category.toLowerCase()
  return (
    <div className='mt-24 mb-24'>
        <div className='md:text-5xl  text-3xl md:font-extrabold font-bold mx-4'>{category}</div>
       <Blogs  item={blogData} filter={filter}/>
    </div>
  )
}

export default BlogListPage