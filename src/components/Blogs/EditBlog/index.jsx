import { useParams } from 'react-router-dom'
import UpdateBlogForm from './EditBlogForm'

const index = () => {
  const {id} = useParams()
  return (
   <>
   <UpdateBlogForm id={id} />
   </>
  )
}

export default index