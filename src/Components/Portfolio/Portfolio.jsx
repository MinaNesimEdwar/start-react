import Line from "../Line/Line";
import post1 from "../../assets/poert1.png"
import post2 from "../../assets/port2.png"
import post3 from "../../assets/port3.png"

export default function Portfolio() {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">
            PORTFOLIO COMPONENT
          </h2>
          <Line />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 px-6">
            <div className="relative after:inset-0 after:absolute after:bg-[#1abc9ce6] after:content-['+'] after:text-white after:font-bold after:text-8xl  after:justify-center after:items-center after:rounded after:hidden hover:after:flex after:transition-all after:duration-700">
              <img
                className="h-auto max-w-full rounded-lg"
                src={post1}
              />
            </div>
            <div className="relative after:inset-0 after:absolute after:bg-[#1abc9ce6] after:content-['+'] after:text-white after:font-bold after:text-8xl  after:justify-center after:items-center after:rounded after:hidden hover:after:flex after:transition-all after:duration-700">
              <img
                className="h-auto max-w-full rounded-lg"
                src={post2}
              />
            </div>
            <div className="relative after:inset-0 after:absolute after:bg-[#1abc9ce6] after:content-['+'] after:text-white after:font-bold after:text-8xl  after:justify-center after:items-center after:rounded after:hidden hover:after:flex after:transition-all after:duration-700">
              <img
                className="h-auto max-w-full rounded-lg"
                src={post3}
              />
            </div>
            <div className="relative after:inset-0 after:absolute after:bg-[#1abc9ce6] after:content-['+'] after:text-white after:font-bold after:text-8xl  after:justify-center after:items-center after:rounded after:hidden hover:after:flex after:transition-all after:duration-700">
              <img
                className="h-auto max-w-full rounded-lg"
                src={post1}
              />
            </div>
            <div className="relative after:inset-0 after:absolute after:bg-[#1abc9ce6] after:content-['+'] after:text-white after:font-bold after:text-8xl  after:justify-center after:items-center after:rounded after:hidden hover:after:flex after:transition-all after:duration-700">
              <img
                className="h-auto max-w-full rounded-lg"
                src={post2}
              />
            </div>
            <div className="relative after:inset-0 after:absolute after:bg-[#1abc9ce6] after:content-['+'] after:text-white after:font-bold after:text-8xl  after:justify-center after:items-center after:rounded after:hidden hover:after:flex after:transition-all after:duration-700">
              <img
                className="h-auto max-w-full rounded-lg"
                src={post3}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
