
import Blog from "./Blog";

function Blogs({item,filter=false}) {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 xl:grid-cols-3 mt-24">
      {filter?item
      .filter((item)=>item.category===filter)
      
      .map((item, i) => (
        <Blog key={i} item={item} />
      )):
      item.map((item, i) => (
        <Blog key={i} item={item} />
      ))}
    </div>
  );
}

export default Blogs;
