import moment from "moment";
import { Link } from "react-router-dom";

function GuideItem({ item }) {
  const publishDate = moment(item.createdAt).format("MMM Do YY");
  return (
    <div>
      {/* <Link to={`/guide/${item._id}`} state={item}>
        <div className="min-h-96 max-w-2xl mx-auto rounded-md shadow-xl relative z-50">
          <div className="h-64 w-full cursor-pointer relative overflow-hidden rounded-md ">
            <div className="bg-black-500 absolute inset-0 translate-y-52 opacity-80 "></div>
            <div className="absolute inset-0 translate-y-52 ">
              <div className="flex items-center mx-4 mt-2">
                <div className="text-white flex-1">{item?.title}</div>
                <div className="text-white">{item?.type}</div>
              </div>
            </div>
          </div>
          <div className="text-black-500 mx-2 ">
            <div className="cardTitle ">{item?.body}</div>
            <div className="text-xl font-medium">
              {sliceText(item.info, 100)}
            </div>
          </div>
        </div>
      </Link> */}
      <div className="h-auto min-h-48 w-auto rounded-md bg-[#dfdfdf]">
        <div className="p-5 space-y-4">
          <h1 className="text-xl text-black-500 font-medium">{item?.title}</h1>
          <div className="flex justify-between">
            <p className="text-xs font-medium tracking-wide">Author Name: Owner</p>
            <p className="text-xs font-medium tracking-wide">Published Date: {publishDate}</p>
          </div>
          <div className="relative z-50">
          <Link to={`/guide/${item._id}`} ><button className="p-2 rounded-md bg-black-900 text-white">Read More</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideItem;
