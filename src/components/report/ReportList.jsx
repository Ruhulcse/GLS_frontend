import ReportItem from "./ReportItem";
import { data } from "./index";

function ReportList() {
  return (
    <div className="">
      {data.map((item, i) => (
        <ReportItem key={i} item={item} />
      ))}
    </div>
  );
}

export default ReportList;
