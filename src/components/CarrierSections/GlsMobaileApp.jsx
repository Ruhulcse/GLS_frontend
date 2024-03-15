import Apple from "../../assets/solutions/icons/apple_app.png";
import Android from "../../assets/solutions/icons/google-playstore.png";
import mobile from "../../assets/solutions/Mobail_app.jpg";
import { SlCheck } from "react-icons/sl";

const GlsMobaileApp = ({ contentID2 }) => {
  return (
    <div id={contentID2} className="min-h-screen bg-slate-400">
      <div className="w-full max-w-6xl mx-auto p-2 md:p-20 text-white">
        <div>
          <h1 className="text-3xl font-extrabold text-start md:text-center text-white p-2 md:p-10 py-10 ">
            The GLS One app is included in your subscription
          </h1>
        </div>
        <div className="flex  flex-col-reverse md:flex-row gap-6 md:10 lg:gap-16 mt-6 ">
          <div className="flex-1">
            <h3 className="text-3xl font-extrabold  text-white">
              The Single Source for All Things Freight
            </h3>
            <p>
              DAT One mobile combines 15 apps into one fast and easy set of
              tools to:
            </p>
            <div>
              <div className="flex items-center gap-2 mt-3">
                <p className="text-xl text-green-700  font-semibold">
                  <SlCheck></SlCheck>
                </p>
                <h1 className="  font-semibold">
                  Run under your own MC number
                </h1>
              </div>
              <p className=" text-xs pl-7 py-1 leading- ">
                Use our experts to set up your authority so you can hit the
                ground running.
              </p>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-2 mt-3">
                <p className="text-xl text-green-700 font-semibold">
                  <SlCheck></SlCheck>
                </p>
                <h1 className="  font-semibold">Avoid process delays</h1>
              </div>
              <h3 className="text-xs pl-7 py-1  leading-2">
                Don’t worry about road bumps. We streamline completing Federal,
                State and BOC-3 requirements.
              </h3>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-2 mt-3">
                <p className="text-xl  font-semibold text-green-700">
                  <SlCheck></SlCheck>
                </p>
                <h1 className="  font-semibold">Get the right permitting</h1>
              </div>
              <p className=" text-xs pl-7 py-1 leading-2 ">
                Get support even after you’re up and running.
              </p>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-2 mt-3">
                <p className="text-xl  font-semibold text-green-700">
                  <SlCheck></SlCheck>
                </p>
                <h1 className="  font-semibold">Get the right permitting</h1>
              </div>
              <p className=" text-xs pl-7 py-1 leading-2 ">
                Get support even after you’re up and running.
              </p>
            </div>
            <div className="flex flex-col gap-6 pl-4 mt-6">
              <div className="flex bg-black w-[60%] lg:w-[40%] rounded-lg  border-2 border-white ">
                <div>
                  <img className="w-10 h-10 m-2" src={Apple} alt="" />
                </div>
                <div>
                  <p className="text-sm text-">download on the</p>
                  <h1 className="text-xl text-white">App Store</h1>
                </div>
              </div>
              <div>
                <div className="flex bg-black w-[60%] lg:w-[40%] rounded-lg  border-2 border-white ">
                  <div>
                    <img className="w-10 h-10 m-2" src={Android} alt="" />
                  </div>
                  <div>
                    <p className="text-sm text-">download on the</p>
                    <h1 className="text-xl text-white">App Store</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img className="rounded-lg" src={mobile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlsMobaileApp;
