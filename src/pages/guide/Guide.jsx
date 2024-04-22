import PageTitle from "@/components/PageTitle/PageTitle";
import GuideList from "@/components/guideCard/GuideList";
import SearchBar from "@/components/ui/SearchBar";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";

const about = ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo magnam
expedita nostrum aliquam, veritatis earum odit blanditiis id quasi`;

const categoryType = [
  {
    type: "Carrier",
    value: "carrier",
  },
  {
    type: "Brokers",
    value: "brokers",
  },
  {
    type: "Shippers",
    value: "shippers",
  },
];
const guideType = [
  {
    type: "Blog",
    value: "blog",
  },
  {
    type: "Video",
    value: "video",
  },
];

function Guide() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");

  const handleOpen = () => {
    setOpen(!open);
  };

  const handelCategory = (value) => {
    if (value === category) {
      setCategory("");
    } else {
      setCategory(value);
    }
  };
  const handelType = (value) => {
    if (value === type) {
      setType("");
    } else {
      setType(value);
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  // console.log(category);
  return (
    <div className="mb-24 relative min-h-screen">
      {/* title */}
      <PageTitle title={"Resource"} about={about} />
      {/* search bar */}
      <div className="sticky top-24 z-[80]">
        <div className="flex justify-center md:mt-6 mt-3 md:w-2/3 mx-auto w-96 ">
          <input
            type="text"
            value={search}
            onChange={handleChange}
            className="bg-gray-300 md:h-12 h-6 w-full rounded-md px-6 md:text-xl text-sm"
          />
          <button className="bg-blue-600 px-6 mx-2 rounded-md shadow-md text-white">
            search
          </button>
        </div>
      </div>
      {/* filter  */}
      <button
        className="bg-blue-600 px-6 mx-2 rounded-md shadow-md text-white mt-5 sticky top-36 z-40 md:hidden"
        onClick={handleOpen}
      >
        Filter
      </button>
      <div
        className={`sticky md:top-40 top-56 z-50  md:translate-x-0 ${
          open ? "block" : "-translate-x-96"
        } transition-all`}
      >
        <div className="bg-gray-200 shadow-xl rounded-lg ml-3 min-h-96 w-44 mt-10">
          <div>
            <p className="font-bold text-2xl text-black-500">Category</p>
            <div className="flex flex-col  mx-9 p-2">
              {categoryType.map((item, i) => (
                <button
                  className={`filterBtn ${
                    category === item.value
                      ? "bg-black-500 text-white"
                      : "bg-red-50"
                  }`}
                  onClick={() => handelCategory(item.value)}
                >
                  {item.type}
                </button>
              ))}
            </div>
            <p className="font-bold text-2xl text-black-500">Type</p>
            <div className="flex flex-col  mx-9 p-2">
              {guideType.map((item, i) => (
                <button
                  className={`filterBtn ${
                    type === item.value
                      ? "bg-black-500 text-white"
                      : "bg-red-50"
                  }`}
                  onClick={() => handelType(item.value)}
                >
                  {item.type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:ml-44 ml-0 mt-[-375px] ">
        <GuideList category={category} type={type} search={search} />
      </div>
    </div>
  );
}

export default Guide;
