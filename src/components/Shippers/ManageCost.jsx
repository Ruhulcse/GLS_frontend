import React from "react";
import Container from "../../shared/Container/Container";
import { SlCheck } from "react-icons/sl";
import { Link } from "react-router-dom";

const ManageCost = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-600">
            Need a better way to manage transportation costs?
          </h1>
          <p className="text-sm font-bold  text-gray-600 py-3">
            Compare your freight spend with the broader market using <br /> the
            deepest, broadest and most accurate data in the industry.
          </p>
        </div>
        <div className="flex flex-col md:flex-row text-gray-600 my-10 gap-10">
          <div className=" w-[95%] md:w-[40%] px-2">
            <h1 className="text-3xl font-bold  ">
              Freight spend <br /> analysis
            </h1>
            <p className="text-sm font-bold my-4">
              Compare your costs to the overall transportation market, with deep
              insights that are relevant to your business.
            </p>
            <div className="flex   items-center my-2 gap-2">
              <SlCheck className="text-green-800"></SlCheck>
              <p>Identify cost savings opportunities</p>
            </div>
            <div className="flex   items-center my-2 gap-2">
              <SlCheck className="text-green-800"></SlCheck>
              <p>Analyse spot premium risks</p>
            </div>
            <div className="flex  items-center my-2 gap-2">
              <SlCheck className="text-green-800"></SlCheck>
              <p>Enable flexible budget strategies</p>
            </div>

            <Link to="/learn">
              <button className=" w-full md:w-[80%] mt-10 px-4 py-1 rounded-full border-2 border-blue-700  text-blue-700 text-sm font-bold uppercase">
                Learn more
              </button>
            </Link>
          </div>
          <div className=" w-[95%] md:w-[50%] card bg-neutral-50 shadow-2xl shadow-black p-4">
            <p className=" text-xl md:text-3xl font-semibold text-center text-gray-500">
              “ Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem libero odit rerum pariatur iure quas eius dolore,
              quia placeat ratione cum nam, vitae nihil blanditiis! Recusandae
              officiis reiciendis id harum! ”
            </p>
            <p className="mt-6 text-xl font-semibold text-gray-600 text-center">
              Queentin wedian
            </p>
            <p className="text-center">
              Senior Manager and Supply Chain Sourcing , <br /> Donane North
              America
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ManageCost;
