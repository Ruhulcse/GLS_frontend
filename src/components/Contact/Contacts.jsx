import React, { useState } from "react";

const Contacts = () => {
  const [userName, setUserName] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(" ");
  const [msg, setMsg] = useState("");
  const [errMsg, setMessage] = useState("");
  const [successMsg, setSuccesMsg] = useState("");

  const formData = { userName, last, email, subject, msg };
  // email valided
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const hideMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  // Hide success message after 3 seconds
  const hideSuccessMessage = () => {
    setTimeout(() => {
      setSuccesMsg("");
    }, 4000);
  };
  const handleSent = (e) => {
    e.preventDefault();
    if (userName === "") {
      setMessage("Fast Name is required!");
    } else if (last === "") {
      setMessage("Last is required!");
    } else if (email === "") {
      setMessage("Please give your Email!");
    } else if (!emailValidation(email)) {
      setMessage("Give a valid Email!");
    } else if (subject === "") {
      setMessage("Plese give your Subject!");
    } else if (msg === "") {
      setMessage("Message is required!");
    } else if (msg.length < 10) {
      setMessage("Message must be at least 10 characters.");
    } else if (msg.length > 250) {
      setMessage("Message cannot exceed 250 characters.");
    } else {
      setSuccesMsg(
        `Thank you dear ${userName}, Your Messages has been sent Successfully!`
      );
      console.log(formData);
      setMessage("");
      setUserName("");
      setLast("");
      setEmail("");
      setSubject("");
      setMsg("");
      hideSuccessMessage();
      hideMessage();
    }
  };
  return (
    <section className="w-full ">
      <div className="w-full py-20  ">
        <div className="w-full  h-full py-10 bg-gradient-to-r shadow-lg shadow-gray-900 from-[#1e2024] to-[#23272b] flex flex-col justify-center items-center gap-8 p-8 rounded-lg shadow-shadowOne">
          <form className="w-full flex flex-col gap-6 py-2 ">
            {errMsg && (
              <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base trackig-wide animate-bounce">
                {errMsg}
              </p>
            )}
            {successMsg && (
              <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                {successMsg}
              </p>
            )}
            <div className="flex flex-col md:flex-row  gap-10">
              <div className="w-full md:w-1/2 flex flex-col gap-2 ">
                <label
                  htmlFor=""
                  className="uppercase text-sm text-gray-400 tracking-wide text-start "
                >
                  First Name{" "}
                </label>
                <input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className={`${
                    errMsg === "Username is required!" && "outline-designColor"
                  }  w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`}
                  type="text"
                  required
                />
              </div>
              <div className=" w-full md:w-1/2 flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="uppercase text-sm text-gray-400 tracking-wide text-start "
                >
                  Last Name
                </label>
                <input
                  onChange={(e) => setLast(e.target.value)}
                  value={last}
                  className={`${
                    errMsg === "Phone number is required!" &&
                    "outline-designColor"
                  }  w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`}
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="uppercase text-sm text-gray-400 tracking-wide text-start "
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`${
                  errMsg === "Please give your Email!" && "outline-designColor"
                }  w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`}
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="uppercase text-sm text-gray-400 tracking-wide text-start"
              >
                Subject
              </label>
              <input
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                className={`${
                  errMsg === "Plese give your Subject!" && "outline-designColor"
                }  w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`}
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="uppercase text-sm text-gray-400   tracking-wide text-start "
              >
                Your message
              </label>
              <textarea
                className={`${
                  (msg === "Message must be at least 10 characters." ||
                    msg === "Message cannot exceed 250 characters.") &&
                  "outline-designColor"
                } w-full rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 py-2 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300 resize-none`}
                cols={30}
                rows={8}
                onChange={(e) => setMsg(e.target.value)}
                value={msg}
              ></textarea>
            </div>
            <div className="w-full">
              <button
                onClick={handleSent}
                className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent "
              >
                Sent Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
