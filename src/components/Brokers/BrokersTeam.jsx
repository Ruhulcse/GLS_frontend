import Container from "../../shared/Container/Container";
import Team from "../../assets/solutions/team.jpg";

const BrokersTeam = ({ contentId4 }) => {
  return (
    <div
      id={contentId4}
      className="py-10 md:py-16 min-h-screen lg:py-20 bg-indigo-950 text-white"
    >
      <div className="max-w-6xl mx-auto  flex flex-col justify-center items-center ">
        <h1 className="text-3xl md:text-5xl font-bold md:font-extrabold text-center ">
          Ready to simplify your operations?
        </h1>
        <p className="font-semibold py-6 text-center">
          Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
        </p>
        <div className="flex gap-6 md:gap-10 flex-col md:flex-row p-3 mt-10 ">
          <div className="flex-1 p-3">
            <h1 className="text-3xl md:text-5xl font-bold md:font-extrabold">
              Broker TMS
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              cum odio iure necessitatibus id assumenda numquam rerum nemo quis
              officiis, doloremque quasi a corporis sunt obcaecati fugit ipsam
              voluptatum recusandae?
            </p>
          </div>
          <div className=" flex-1 card  w-72  relative pl-10 justify-center items-center ">
            <img className="" src={Team} alt="" />
            <div className=" w-36 md:w-48  absolute text-[8px]  md:text-xs bg-slate-100 text-gray-600 p-3 top-[60%] lg:right-[80%] right-[50%]">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              praesentium suscipit ab eum. Voluptatum ipsam ad doloribus placeat
              corporis laudantium? Earum quibusdam praesentium explicabo laborum
              quia impedit pariatur asperiores maiores.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokersTeam;
