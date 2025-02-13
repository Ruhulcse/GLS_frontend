import React from "react";

const ProductUse = [
  "Use products in compliance with this agreement and privacy policy.",
  "Only one account per email address.",
  "No automated data extraction without prior written approval.",
];

const feesPayment = [
  "Pay fees within 20 days unless specified otherwise.",
  "Late payments incur 2.5% monthly interest.",
];

const Termination = [
  "Agreement can be terminated for breaches, insolvency, or non-payment.",
  "Access to products ends upon termination.",
];

const sharedData = [
  "You grant GLS a license to use, modify, and distribute shared data.",
  "You warrant ownership of shared data and compliance with privacy laws.",
];

const DataUse = [
  "Provide and improve services, secure websites, manage accounts, process payments, and respond to inquiries.",
  "Marketing, advertising, and compliance with legal obligations."
];

function PrivacyModel({ handleModel }) {
  return (
    <div className="inset-0 fixed bg-black bg-opacity-50 bg-black-900 flex items-center justify-center">
      <div className="max-h-[70%] max-w-[80%] overflow-y-scroll bg-[#A8C4F0]  absolute right-0 top-0 m-auto bottom-0 left-0 rounded-lg ">
        <div className="h-full w-full text-white p-8 text-justify rounded-md">
          <h2 className="text-xl font-bold mb-4">
            User Agreement and Privacy Policy
          </h2>
          <p className="text-sm text-slate-600">
            This document combines the User Agreement and Privacy Policy for GLS
            Freight Solutions, LLC ("GLS"). It outlines the terms governing your
            use of GLS products and services, as well as how your personal data
            is collected, used, and protected.
          </p>
          <h5 className="mt-2 text-base font-semibold">
            User Agreement Summary{" "}
          </h5>
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-black-800">Authority:</span> You must have
            legal authority to enter this agreement (e.g., not a minor or
            authorized to represent an entity).
          </p>
          <h5 className="mt-2 text-base font-semibold">Product Use</h5>
          <ul className="pl-4">
            {ProductUse.map((item, index) => (
              <li key={index} className="text-sm text-slate-600 list-disc ">
                {item}
              </li>
            ))}
          </ul>

          <h5 className="mt-2 text-base font-semibold">Fees & Payment</h5>
          <ul className="pl-4">
            {feesPayment.map((item, index) => (
              <li key={index} className="text-sm text-slate-600 list-disc ">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-black-800">Data Privacy:</span> You agree to
            GLS's Privacy Policy, which may be updated periodically.
          </p>
          <h5 className="mt-2 text-base font-semibold">Termination</h5>
          <ul className="pl-4">
            {Termination.map((item, index) => (
              <li key={index} className="text-sm text-slate-600 list-disc ">
                {item}
              </li>
            ))}
          </ul>
          <h5 className="mt-2 text-base font-semibold">Shared Data</h5>
          <ul className="pl-4">
            {sharedData.map((item, index) => (
              <li key={index} className="text-sm text-slate-600 list-disc ">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-black-800">Confidentiality: </span> You must
            protect GLS's confidential information for 5 years post-termination.
          </p>
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-black-800">Liability:</span> GLS is not liable for indirect damages
            (e.g., lost profits). Liability is limited to fees paid.
          </p>
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-black-800">Disputes:</span> Disputes are resolved through arbitration,
            governed by Delaware law.
          </p>
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-black-800">
              Updates:
            </span> GLS may modify products with prior notice, except in cases
            of security or legal issues
          </p>

          <h5 className="mt-2 text-base font-semibold">Privacy Policy Summary </h5>
          <p className="text-sm text-slate-600"><span className="font-semibold text-black-800">Scope:</span> This policy applies to personal data collected when you use GLS websites, services, or interact with us (e.g., emails, events, or facility visits). It does not apply to data processed on behalf of customers.</p>
          <h5 className="mt-2 text-base font-semibold">Data Collection:          </h5>
          <p className="text-sm text-slate-600"><span className="font-semibold text-black-800">Provided by You:</span> Personal identifiers, professional, financial, or commercial information.
          </p>
          <p className="text-sm text-slate-600"><span className="font-semibold text-black-800">Automated:</span> IP address, browser, geolocation, and activity data via cookies.
          </p>
          <p className="text-sm text-slate-600"><span className="font-semibold text-black-800">Third-Party Sources:</span> Employment, education, or commercial interaction data.</p>

            <h5 className="mt-2 text-base font-semibold">Data Use:
            </h5>
        <ul className="pl-4">
        {DataUse.map((item, index) => (
          <li key={index} className="text-sm text-slate-600 list-disc ">{item}</li>
        ))}
        </ul>
            <p className="text-sm text-slate-600"><span className="font-semibold text-black-800">Data Protection:</span> GLS uses reasonable measures to protect data but cannot guarantee 100% security.
            </p>
            <p className="text-sm text-slate-600"><span className="font-semibold text-black-800">Your Rights:</span> Depending on local laws, you may have rights to access, correct, delete, or restrict the use of your data. You can also object to processing or withdraw consent.
            </p>
            <p className="text-sm text-slate-600"><span className="font-semibold text-black-800">Data Retention:</span> Data is stored as long as necessary for business purposes or legal requirements.
            </p>
            <p className="text-sm text-slate-600"><span className="font-semibold text-black-800">International Transfers:</span> Data may be transferred to and stored in the U.S. or other countries with different data protection standards.
            </p>
            <p className="text-sm text-slate-600"><span className="font-semibold   text-black-800">Third-Party Sharing:</span> Data may be shared with affiliates, service providers, law enforcement, or transactional parties. Geolocation data is shared with brokers/shippers only with your consent.
            </p>
            <p className="text-sm text-slate-600"><span className="font-semibold text-black-800">Marketing:</span> You can opt out of promotional emails at any time.
            </p>
            <p className="text-sm text-slate-600"><span className="font-semibold text-black-800">Cookies:</span> GLS uses cookies and tracking technologies; see the Cookies Policy for details.
            </p>
            <p className="text-sm text-slate-600"><span className="font-semibold text-black-800">Children:</span> GLS does not knowingly collect data from children under 16.</p>
            <p className="text-sm text-slate-600"><span className="font-semibold text-black-800">Data Breaches:</span> GLS has procedures to address breaches and notify affected parties where required.
            </p>
            <p className="text-sm text-slate-600"><span className="font-semibold text-black-800">Policy Updates:</span> GLS may update this policy and will notify users of material changes.
            </p>
            <p className="text-sm text-slate-600">
            <span className="font-semibold text-black-800">Contact:</span> For questions or to exercise your rights, contact GLS at email@GLS.com or 8405 SW Nimbus Ave, Beaverton, OR 97008.</p>
          <div className="flex mt-4 justify-center space-x-5 py-8">
            <button
              className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleModel(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => handleModel(true)}
            >
              I agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyModel;
