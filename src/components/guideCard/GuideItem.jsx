import { sliceText } from "@/util/textSlice";
import moment from "moment";
import { Link } from "react-router-dom";
import Modal from "../ui/Modal";

function GuideItem({ item }) {
  console.log(item.tags);
  const publishDate = moment(item.createdAt).format("MMM Do YY");

  return (
    <div>
      {item.type === "Guide Video" ? (
        <div className="h-auto min-h-48 w-auto min-w-80 rounded-md bg-white shadow-md">
         <div className="p-5 space-y-4">
         <iframe
            className="w-full h-60 rounded-md relative z-50"
            src={item.video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="space-y-2">
              <div className="flex gap-2">
                {item.tags.map((tag, i) => (
                  <button
                    className="bg-pink-500 text-xs text-slate-200 font-medium tracking-wide rounded-md px-2 py-1"
                    key={i}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <p className="text-sm font-bold tracking-tight text-black-600">
                Published {publishDate}
              </p>
            </div>
          <p className="text-base text-black-800 font-medium">{item.title}</p>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              <p className="text-xs font-medium tracking-wide">
                Owner
              </p>
              </div>
              <span className="text-xs font-medium tracking-wide">{item?.category}</span>
            </div>
        <div className="relative z-50">
        <Modal
         title="Watch Video"
         label="Watch Video"
         uncontrol={true}
         >
       <iframe
            className="h-96 w-full rounded-md"
            src={item.video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Modal>
        </div>
         </div>
        </div>
      ) : (
        <div className="h-auto min-h-48 w-auto min-w-80 rounded-md bg-white shadow-md">
          <div className="p-5 space-y-4">
            <img
              src={item?.id ? item?.image : "https://static.vecteezy.com/system/resources/thumbnails/008/344/623/small/aerial-side-view-of-cargo-ship-carrying-container-and-running-on-blue-sea-for-export-goods-from-cargo-yard-port-to-custom-ocean-concept-technology-transportation-customs-clearance-photo.jpg"}
              alt="image"
              className="rounded-lg min-h-40 w-full object-cover"
            />
            <div className="space-y-2">
              <div className="flex gap-2">
                {item.tags.map((tag, i) => (
                  <button
                    className="bg-pink-500 text-xs text-slate-200 font-medium tracking-wide rounded-md px-2 py-1"
                    key={i}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <p className="text-sm font-bold tracking-tight text-black-600">
                Published {publishDate}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              <p className="text-xs font-medium tracking-wide">
                Owner
              </p>
              </div>
              <span className="text-xs font-medium tracking-wide">{item?.category}</span>
            </div>
            <h1 className="text-xl text-black-500 font-medium">
              {item?.title}
            </h1>
            <p className="text-sm font-normal tracking-tight leading-normal text-black-500">{sliceText(item?.body, 100)}</p>
           
            <div className="relative z-50">
              <Link to={`/guide/${item._id}`}>
                <span className="text-sm font-bold text-sky-500">
                  Read More
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GuideItem;
