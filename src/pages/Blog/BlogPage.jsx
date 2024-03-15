
import BlogTitle from "../../components/BlogTitle/BlogTitle";
import TopBlog from "../../components/topBlog/TopBlog";
import { blogData } from "../../data/blogData";
import Blogs from "./../../components/blog/Blogs";

import Services from "./../../components/service/Services";

function BlogPage() {
  return (
    <div className="mb-12">
      {/* title */}
     <BlogTitle/>
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
