

function PageTitle({title,about}) {
  return (
    <div className="w-full min-h-72 bg-gradient-to-r from-blue-950 to-blue-500">
        <div className="flex flex-col justify-center my-auto min-h-72 items-center container mx-auto space-y-10 text-white">
          <h1 className="md:text-8xl text-5xl  font-extrabold ">{title}</h1>
          <p className="font-semibold text-xl  text-center">
           {about}
          </p>
        </div>
      </div>
  )
}

export default PageTitle