import React from "react";

const ProductSupport = () => {
  return (
    <div className=" text-white text-start">
      <h1 className="border-b-2 border-white  p-2 text-3xl font-bold ">
        Product Support
      </h1>
      <div className="p-2  mb-10">
        <div className="flex flex-col md:flex-row gap-10   py-3 justify-evenly">
          <div>
            <h1 className="text-2xl font-bold  ">Load Board Services</h1>
            <div className="flex gap-2">
              <p>Phone:</p>
              <p className="text-blue-600"> (800) 547-5417</p>
            </div>
            <div className="flex gap-2">
              <p>Fax:</p>
              <p className="text-blue-600"> (800) 551-8821</p>
            </div>
            <div className="flex gap-2">
              <p>Email:</p>
              <p className="text-blue-600"> Customer Service</p>
            </div>
            <div className="flex gap-2">
              <p>Hours:</p>
              <p> Mon – Fri: 6 AM to 8 PM</p>
            </div>
            <div className="flex gap-2">
              <p>Weekends:</p>
              <p> 7 AM to 4 PM</p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold  ">GLS Keypoint® TMS</h1>
            <div className="flex gap-2">
              <p>Phone:</p>
              <p className="text-blue-600"> (800) 547-5417</p>
            </div>
            <div className="flex gap-2">
              <p>Fax:</p>
              <p className="text-blue-600"> (800) 551-8821</p>
            </div>
            <div className="flex gap-2">
              <p>Email:</p>
              <p className="text-blue-600"> Customer Service</p>
            </div>
            <div className="flex gap-2">
              <p>Hours:</p>
              <p> Mon – Fri: 6 AM to 8 PM</p>
            </div>
          </div>
        </div>
      </div>
      {/* payment & billing section */}
      <h1 className="border-b-2 border-white  p-2 text-3xl font-bold ">
        Billing & Payments
      </h1>
      <div className="p-2 mb-10 justify-between">
        <h1 className="text-2xl font-bold py-3 ">Billing Information</h1>
        <div className="flex gap-2">
          <p>DAT Solutions, LLC Box 3801</p>
        </div>
        <div className="flex gap-2">
          <p>PO Box 783801</p>
        </div>
        <div className="flex gap-2">
          <p>PHILADELPHIA, PA 19178-3801</p>
        </div>
        <div className="flex gap-2">
          <p>Phone:</p>
          <p className="text-blue-600">(800) 547-5417</p>
        </div>
      </div>
      {/* General marketing pr partnerships */}
      <h1 className="border-b-2 border-white  p-2 text-3xl font-bold ">
        General Marketing, PR & Partnerships
      </h1>
      <div className="flex flex-col md:flex-row pb-20 justify-between">
        <div className="p-2 mb-10">
          <h1 className="text-2xl font-bold py-3 ">
            General Marketing Inquiries
          </h1>
          <div className="flex gap-2">
            <p>Phone:</p>
            <p className="text-blue-600"> (800) 547-5417</p>
          </div>
          <div className="flex gap-2">
            <p>Email:</p>
            <p className="text-blue-600"> Marketing Inquires</p>
          </div>
          <div className="flex gap-2">
            <p>Hours:</p>
            <p>Mon.-Fri. 8 AM to 5 PM (PST)</p>
          </div>
        </div>
        <div className="px-4 md:px-6 pb-10">
          <h1 className="text-2xl font-bold py-3 ">Partnership Inquiries</h1>
          <div className="flex gap-2">
            <p>Phone:</p>
            <p className="text-blue-600"> (800) 547-5417</p>
          </div>
          <div className="flex gap-2">
            <p>Email:</p>
            <p className="text-blue-600"> Partnership Inquires</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSupport;
