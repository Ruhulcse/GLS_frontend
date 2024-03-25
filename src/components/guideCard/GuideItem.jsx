import { sliceText } from "@/util/textSlice";
import { Link } from "react-router-dom";

function GuideItem({ item }) {
  return (
    <div>
      <Link to={`/guide/${item.id}`} state={item}>
        <div className="min-h-96 max-w-2xl mx-auto bg-gray-200 rounded-md shadow-xl relative z-50">
          <div className="h-64 w-full cursor-pointer relative overflow-hidden rounded-md ">
            <img
              src={item.image}
              className="h-full w-full  rounded-md"
              alt=""
            />
            <div className="bg-black-500 absolute inset-0 translate-y-52 opacity-80 "></div>
            <div className="absolute inset-0 translate-y-52 ">
              <div className="flex items-center mx-4 mt-2">
                <div className="text-white flex-1">{item.date}</div>
                <div className="text-white">{item.type}</div>
              </div>
            </div>
          </div>
          <div className="text-black-500 mx-2 ">
            <div className="cardTitle ">{item.title}</div>
            <div className="text-xl font-medium">
              {sliceText(item.info, 100)}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default GuideItem;