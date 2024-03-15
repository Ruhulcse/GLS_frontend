import Planing from "../../assets/home/broker.jpg";

const ShipperPlaning = () => {
  return (
    <div
      className=" max-w-6xl mx-auto my-20 min-h-[300px] lg:min-h-[400px] "
      style={{
        backgroundImage: `url(${Planing})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>

      <div className=" hero-content  p-3 text-black py-20">
        <div className="max-w-md">
          <h1 className="text-3xl font-extrabold">
            Take uncertainty out of <br /> transportation
          </h1>
          <p className="text-xl "> - Cost management</p>
          <p className="text-xl"> - Network design</p>
          <p className="text-xl"> -RFP preparation and evaluation</p>
          <p className="text-xl"> -Performance benchmarking</p>
          <p className="text-xl"> -Routing guide optimization</p>
        </div>
      </div>
    </div>
  );
};

export default ShipperPlaning;
