import SingleAthourity from "./SingleAthourity";
import Bg_image from "../../assets/solutions/bg-image.jpg";

const GotAthourity = ({ contedID3 }) => {
  return (
    <div>
      <div id={contedID3}>
        <SingleAthourity
          contendIdName="Authority"
          heading="Got Authority"
          phonNo="Call Today - 800.551.8847"
          headingTitle1="Build your carrier"
          headTitle2="business"
          feture01="Run under your own MC number"
          fetureTitle01="Use our experts to set up your authority so you can hit the ground running."
          feture02="Avoid process delays"
          fetureTitle02="Don’t worry about road bumps. We streamline completing Federal, State and BOC-3 requirements."
          feture03="Get the right permitting"
          fetureTitle03="Get support even after you’re up and running."
          btnLink1="/register"
          btnLink02="/learn"
          bgImg={Bg_image}
          btnText01="Get started"
          btnText02="Learn more"
        ></SingleAthourity>
      </div>
    </div>
  );
};

export default GotAthourity;
