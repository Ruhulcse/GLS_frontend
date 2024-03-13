const SingleCard = ({ imageUrl, title, buttonText, onClick }) => {
  return (
    <div>
      <div className=" justify-center items-center card  w-96  md:w-80 lg:w-96 card_one bg-slate-900 shadow-xl rounded-none">
        <figure>
          <img src={imageUrl} alt="" />
        </figure>
        <div className="card-body ">
          <h2 className=" pb-3 text-white text-center text-2xl font-bold">
            {title}
          </h2>
          <div className="card-actions  justify-center">
            <button
              onClick={onClick}
              className=" font-bold py-1 px-8 bg-blue-700 uppercase text-white rounded-full hover:bg-white hover:text-blue-700 text-sm"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
