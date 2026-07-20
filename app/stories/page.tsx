import Link from "next/link";

const categories = [
  {
    title: "Case Files",
    description: "Unsolved cases and mysterious investigations.",
    link: "/stories/case-files",
  },
  {
    title: "Drama Stories",
    description: "Emotional stories filled with human moments.",
    link: "#",
  },
  {
    title: "Horror Stories",
    description: "Dark tales that hide terrifying secrets.",
    link: "#",
  },
  {
    title: "Love Stories",
    description: "Stories of love, memories and emotions.",
    link: "#",
  },
  {
    title: "Mystery Stories",
    description: "Uncover secrets hidden between the pages.",
    link: "#",
  },
  {
    title: "Mythology Stories",
    description: "Ancient legends and forgotten tales.",
    link: "#",
  },
];


export default function StoriesPage() {

  return (

    <main className="min-h-screen bg-[#050505] text-white px-6 py-10">


      <div className="max-w-6xl mx-auto">


        {/* BACK BUTTON */}

        <Link
          href="/"
          className="text-gray-400 hover:text-[#F5D76E] transition"
        >
          ← Back
        </Link>




        {/* TITLE */}

        <h1
          className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#F5D76E]
          text-center
          mt-10
          mb-12
          "
        >
          Categories
        </h1>




        {/* CATEGORY CARDS */}


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          {categories.map((category,index)=>(


            <Link
              href={category.link}
              key={index}
              className="
              bg-[#111]
              border
              border-white/10
              rounded-xl
              p-8
              hover:border-[#F5D76E]
              transition
              block
              "
            >


              <h2
                className="
                text-2xl
                font-bold
                text-[#F5D76E]
                mb-3
                "
              >
                {category.title}
              </h2>


              <p className="text-gray-400">
                {category.description}
              </p>


            </Link>


          ))}


        </div>


      </div>


    </main>

  );
}