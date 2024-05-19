import avatar from "../../assets/avataaars.svg"
import Line from "../Line/Line";

export default function Home() {
  return (
    <>
      <div className="bg-[#1abc9c] py-28">
        <div className="container">
          <img src={avatar} className="w-1/2 md:w-1/5 m-auto" />
          <div className="text-center text-white">
            <h1 className="  text-3xl font-bold my-4">START FRAMEWORK</h1>
            <Line />
            <p className="mt-4">Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </>
  );
}
