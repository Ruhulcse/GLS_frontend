import React from "react";
import ShipBanner from "../../components/Shippers/ShipBanner";
import ShipperBg from "../../assets/home/shipper.jpg";
import ShipperPlaning from "../../components/Shippers/ShipperPlaning";
import ManageCost from "../../components/Shippers/ManageCost";
import Resources from "../../components/Brokers/Resources";
import SingleAthourity from "../../components/CarrierSections/SingleAthourity";
import Staticstics from "../../assets/solutions/Staticstics.jpg";
import Barchart from "../../assets/solutions/barchart.jpg";
import ReversDesign from "../../components/Shippers/ReversDesign";
import ClientReview from "../../components/ClientReview/ClientReview";

const Shippers = () => {
  return (
    <div className=" overflow-hidden">
      <ShipBanner
        bgImage={ShipperBg}
        heading="Solutions for"
        heroSpan="Shippers"
        paragraph="Take charge of your transportation network, adding predictability and flexibility to your strategy and operations."
      ></ShipBanner>
      <ShipperPlaning></ShipperPlaning>
      <ManageCost></ManageCost>
      <Resources></Resources>
      <SingleAthourity
        heading="Need to build a strong carrier network?"
        phonNo="Call Today - 800.551.8847"
        headTitle2="Carrier analysis"
        feture01="Compare current costs to market benchmarks to identify potential cost savings"
        feture02="Identify carriers you can rely on to deliver quality service"
        feture03="Streamline the annual or mini-bid RFP process by eliminating time-consuming manual analysis"
        btnText01="Request a demo"
        btnText02="learn more"
        btnLink1="/register"
        btnLink02="/learn"
        bgImg={Staticstics}
      ></SingleAthourity>
      <ReversDesign
        heading1="Want to optimize your transportation network design?"
        paragraph="Expand or adjust your supply chain with clear insights into costs and performance."
        headingTitle1="Network"
        headTitle2="insights"
        feture01="Network cost analysis"
        feture02="Complete freight rates data"
        feture03="Identify new sources of capacity"
        btnText02="Learn more"
        btnLink02="/learn"
        RevImg={Barchart}
      ></ReversDesign>
      <ClientReview></ClientReview>
    </div>
  );
};

export default Shippers;
