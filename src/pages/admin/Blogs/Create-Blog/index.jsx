import BlogUploadForm from '@/components/Blogs/form/BlogUploadFrom';
import Card from '@/components/ui/Card';
const CreateBlogPage = () => {
  return (
    <div className='xl:col-span-2 col-span-1'>
    <Card title='Create Blog'>
      <BlogUploadForm/>
    </Card>
  </div>
  )
}

export default CreateBlogPage