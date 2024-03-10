import React from "react";
import { useLocation } from "react-router-dom";

function BlogDetails() {
  const location = useLocation();
  // const {id} = useParams()

   console.log(location);

  return (
    <div className="mt-24 container mx-auto">
      <div className="text-3xl font-bold">{location.state.title}</div>
      <div className="flex mx-auto my-12 justify-center w-1/2 h-4/6">
        <img src={location.state.image} className="h-full w-full" alt="" />
      </div>
      <div className="font-normal text-xl text-justify mb-24 mx-4 md:mx-0">
        {location.state.info}
      </div>
    </div>
  );
}

export default BlogDetails;
