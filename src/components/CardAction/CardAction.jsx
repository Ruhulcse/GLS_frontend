import truck01 from "../../assets/solutions/truck01.jpg";
import truck02 from "../../assets/solutions/truck02.jpg";
import truck03 from "../../assets/solutions/truck03.jpg";
import SingleCard from "./SingleCard";
const CardAction = ({ contentID, sectinId1, sectinId2, sectinId3 }) => {
  const handleScroll1 = () => {
    const element = document.getElementById(sectinId1);
    element.scrollIntoView({ behavior: "smooth" });
  };
  const handleScroll2 = () => {
    const element = document.getElementById(sectinId2);
    element.scrollIntoView({ behavior: "smooth" });
  };
  const handleScroll3 = () => {
    const element = document.getElementById(sectinId3);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      id={contentID}
      className=" w-full padding max-w-6xl mx-auto grid gap-6 lg:gap-8 py-10 px-3 md:px-10 lg:px-0 lg:py-16 my-8 lg:my-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center"
    >
      <SingleCard
        imageUrl={truck01}
        title="Start a Strong Business"
        buttonText="get started"
        onClick={handleScroll1}
      ></SingleCard>
      <SingleCard
        imageUrl={truck02}
        title="Find the Best Loads"
        buttonText="unlock the best load"
        onClick={handleScroll2}
      ></SingleCard>
      <SingleCard
        imageUrl={truck03}
        title="Elevate Your Business"
        buttonText="Empower fleet"
        onClick={handleScroll3}
      ></SingleCard>
    </div>
  );
};

export default CardAction;
