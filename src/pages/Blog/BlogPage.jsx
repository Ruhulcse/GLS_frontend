
import PageTitle from "../../components/PageTitle/PageTitle";
import TopBlog from "../../components/topBlog/TopBlog";
import { blogData } from "../../data/blogData";
import Blogs from "./../../components/blog/Blogs";

import Services from "./../../components/service/Services";

const about = ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo magnam
expedita nostrum aliquam, veritatis earum odit blanditiis id quasi`

function BlogPage() {
  return (
    <div className="mb-12">
      {/* title */}
     <PageTitle title={'Blog'} about={about}/>
      {/* top Blog */}
     <TopBlog item={blogData}/>
      {/* service */}
      <Services />
      {/* blogs */}
      <Blogs  item={blogData}/>
    </div>
  );
}

export default BlogPage;
