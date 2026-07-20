import Link from "next/link";

const cases = [
  {
    name: "3:12 AM",
    image: "/images/case-001.png",
    link: "/stories/case-files/3-12-am",
  },
];

export default function CaseFilesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-10">

      <div className="max-w-7xl mx-auto">


        {/* BACK BUTTON */}

        <Link
          href="/stories"
          className="text-gray-400 hover:text-[#F5D76E] transition"
        >
          ← Back
        </Link>



        {/* TITLE */}

        <h1 className="text-4xl md:text-5xl font-bold text-[#F5D76E] text-center mt-10 mb-12">
          Case Files
        </h1>




        {/* CASE CARD */}

        <div className="flex justify-center">


          {cases.map((item,index)=>(

            <div
              key={index}
              className="
              w-full
              max-w-md
              bg-[#111]
              rounded-xl
              overflow-hidden
              border
              border-white/10
              hover:border-[#F5D76E]
              transition
              "
            >


              <img
                src={item.image}
                alt={item.name}
                className="w-full aspect-[16/9] object-cover"
              />



              <div className="p-6 text-center">


                <h2 className="text-3xl font-bold text-[#F5D76E] mb-6">
                  {item.name}
                </h2>



                <Link
                  href={item.link}
                  className="
                  inline-block
                  px-8
                  py-3
                  rounded-full
                  border
                  border-[#F5D76E]
                  text-[#F5D76E]
                  hover:bg-[#F5D76E]
                  hover:text-black
                  transition
                  "
                >
                  Read Case
                </Link>


              </div>


            </div>

          ))}


        </div>


      </div>

    </main>
  );
}