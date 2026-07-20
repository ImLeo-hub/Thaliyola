import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* NAVBAR */}

      <header className="w-full px-6 py-5">

        <div className="max-w-7xl mx-auto flex justify-end items-center gap-8 text-gray-300">

          <Link
            href="/search"
            className="hover:text-[#F5D76E] transition"
          >
            Search
          </Link>


          <Link
            href="/about"
            className="hover:text-[#F5D76E] transition"
          >
            About
          </Link>


        </div>

      </header>



      {/* HERO IMAGE WITH BUTTON */}


      <section className="relative w-full">


        <img
          src="/images/hero.png"
          alt="Thaliyola"
          className="w-full h-auto object-cover"
        />


        {/* READ STORY BUTTON CENTER */}

        <div className="absolute inset-0 flex items-center justify-center">


          <Link
            href="/stories"
            className="
            px-10 py-4
            rounded-full
            border border-[#F5D76E]
            text-[#F5D76E]
            text-lg
            bg-black/40
            backdrop-blur-sm
            hover:bg-[#F5D76E]
            hover:text-black
            transition duration-300
            "
          >
            Read Story
          </Link>


        </div>


      </section>





      {/* DISCLAIMER */}


      <section className="max-w-3xl mx-auto px-6 py-12 text-center">


        <h2 className="text-xl font-semibold text-[#F5D76E] mb-4">
          Disclaimer
        </h2>


        <p className="text-gray-400 leading-7">

          The stories published on Thaliyola are created for
          storytelling and entertainment purposes. Some stories
          may contain fictional characters, events, and places.

        </p>


      </section>





      {/* FOOTER */}


      <footer className="border-t border-white/10 py-6 text-center">


        <p className="text-gray-500">
          © Thaliyola. All rights reserved.
        </p>


      </footer>


    </main>
  );
}