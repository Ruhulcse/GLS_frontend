const ShipBanner = ({ bgImage, heroSpan, heading, paragraph }) => {
  return (
    <div
      className="hero min-h-96 md:min-h-[500px] lg:min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" hero-content text-white">
        <div className="max-w-md">
          <h1 className="mb-5 mt-10 py-2 text-3xl  md:text-5xl font-bold">
            {heading} <br /> <span>{heroSpan}</span>
          </h1>
          <p className="mb-5">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default ShipBanner;
