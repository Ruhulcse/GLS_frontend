import { getAllGuideBlogs } from "@/store/api/guideblogs/guideblogsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import GuideItem from "./GuideItem";

function GuideList({ type, category, search }) {
  const dispatch = useDispatch();
  const { guideblogs, loading } = useSelector((state) => state.guideblogs);
  useEffect(() => {
    dispatch(getAllGuideBlogs());
  }, [dispatch]);
  const filterByType = (item) => {
    //const { type } = guideblogs;
    if (type.length > 0) {
      return item.type === type;
    }
    return true;
  };
  const filterByCategory = (item) => {
    if (category.length > 0) {
      return item.category === category;
    }
    return true;
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 mx-6 xl:grid-cols-3">
      {guideblogs
        .filter(filterByType)
        .filter(filterByCategory)
        .filter((item) => item.title.toLowerCase().includes(search))
        .map((item, i) => (
          <GuideItem item={item} key={i} />
        ))}
    </div>
  );
}

export default GuideList;
