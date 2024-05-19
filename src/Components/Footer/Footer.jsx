
export default function Footer() {
  return (
    <>
      <footer className="bg-[#2c3e50] ">
        <div className=" container text-white flex items-baseline py-12">
          <div className="text-center w-1/3">
            <h3 className="font-bold text-lg md:text-2xl">LOCATION</h3>
            <p className="my-2 text-xs">2215 John Daniel Drive</p>
            <p className="text-xs">Clark, MO 65243</p>
          </div>
          <div className="text-center w-1/3 flex flex-col justify-center items-center">
            <h3 className="font-bold text-lg md:text-2xl">AROUND THE WEB</h3>
            <div className=" flex gap-2 mt-3">
              <div className="flex justify-center items-center w-8 h-8 p-3 border border-1 border-white rounded-full">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="flex justify-center items-center w-8 h-8 p-3 border border-1 border-white rounded-full">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="flex justify-center items-center w-8 h-8 p-3 border border-1 border-white rounded-full">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="flex justify-center items-center w-8 h-8 p-3 border border-1 border-white rounded-full">
                <i className="fa-solid fa-globe"></i>
              </div>
            </div>
          </div>

          <div className="text-center w-1/3 ">
            <h3 className="font-bold text-lg md:text-2xl">ABOUT FREELANCER</h3>
            <p className=" text-xs mt-3">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      <div className=" bg-[#1a252f] py-4 text-white">
        <p className="text-center text-xs">
          Copyright © Your Website 2021
        </p>

      </div>
      </footer>
    </>
  );
}
// fixed bottom-0 left-0 right-0