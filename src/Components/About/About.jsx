import Line from "../Line/Line";

export default function About() {
  return (
    <>
      <div className='bg-[#1abc9c] py-40'>
        <div className="container text-white text-center ">
          <h2 className="text-3xl font-bold mb-4">ABOUT COMPONENT</h2>
          <Line />
          <div className="grid md:grid-cols-12 w-2/3 mx-auto md:w-full  my-4">
            <p className=" text-start md:col-span-6 p-4">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className=" text-start md:col-span-6 p-4">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </>
  )
}
