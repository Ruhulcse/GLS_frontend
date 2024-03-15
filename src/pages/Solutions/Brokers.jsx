import React from "react";
import Banner from "./Banner";
import TruckOne from "../../assets/solutions/truck01.jpg";
import CardAction from "../../components/CardAction/CardAction";
import GotAthourity from "../../components/CarrierSections/GotAthourity";
import Resources from "../../components/Brokers/Resources";
import Pricing from "../../components/Pricing/Pricing";
import BrokersTeam from "../../components/Brokers/BrokersTeam";
const Brokers = () => {
  return (
    <div className=" overflow-x-hidden">
      <Banner
        bgImage={TruckOne}
        heading="Solutions for"
        heroSpan="Freight Brokers"
        paragraph="Whether you are just starting your brokerage or an industry expert, DAT solutions take your company to the next level with tools to price freight more efficiently and win new business with the largest carrier network in North America.

      "
        btnId="broker-head"
      ></Banner>
      <CardAction
        contentID="broker-head"
        sectinId1="got-authority"
        sectinId2="brokers-resource"
        sectinId3="team"
      ></CardAction>
      <GotAthourity contedID3="got-authority"></GotAthourity>
      <Resources resourcesId="brokers-resource"></Resources>
      <Pricing></Pricing>
      <BrokersTeam contentId4="team"></BrokersTeam>
    </div>
  );
};

export default Brokers;
