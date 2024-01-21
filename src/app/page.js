// import Image from 'next/image'
import Link from "next/link";
import { AiTwotoneStar } from "react-icons/ai";

export default function Home() {
  return (
    <main className="flex min-h-dvh  flex-col items-center justify-between overflow-x-hidden">
      <div className="   w-full h-dvh md:h-[780px] items-center justify-center  font-mono text-sm flex flex-col flex-wrap gap-3 bg-center bg-cover bg-fixed bg-[url('https://images.unsplash.com/photo-1667503313783-6999f778a995?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] md:bg-[url('https://images.unsplash.com/photo-1512223792601-592a9809eed4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
        <div className="hero-wrapper-overlay  py-24 px-24 sm:px-[20px]   w-full h-dvh md:h-[780px] items-center justify-center  font-mono text-sm flex flex-col bg-gray-950/50">
          <div class=" max-w-2xl md:w-full  text-pretty  text-slate-50 flex flex-col items-center gap-5 text-center ">
            <h1 className="  text-7xl md:text-[49px] font-bold tracking-tighter leading-[1em] ">
              Colossal <span className="text-yellow-500">mind</span> and{" "}
              <span className="text-yellow-500">cake</span>
            </h1>
            <p className=" text-slate-300 text-[24px] leading-[1.2em] ">
              Pâtisserie & croissance personelle
            </p>
            <Link
              href="/programme"
              className=" rounded-md font-semibold text-gray-950 px-3 py-2 bg-slate-50 w-max hover:bg-pink-950 duration-500  hover:text-slate-50 hover:shadow-xl hover:shadow-pink-200/30 "
            >
              Programme
            </Link>
          </div>
        </div>
      </div>

      <div className="about-section w-full flex flex-col items-center">
        <div className="about-wrapper max-w-4xl py-20 md:py-16 px-24 sm:px-[20px]   w-full">
          <div className="w-full flex justify-start flex-col gap-4 ">
            <h2 className="text-4xl text-gray-950 md:text-[40px] font-semibold tracking-tighter leading-[1em]">
              Hello chers Honorable !
            </h2>

            <p className="text-[18px] text-slate-900 dark:text-slate-50 leading-[1.5em] font-normal ">
              Bienvenue dans l’univers de Colossal Mind And Cake. J’ai créé un
              espace où deux de mes passions, la pâtisserie et le développement
              personnel se fusionnent pour vous offrir une expérience absolument
              unique.
            </p>
            <div className="">
              <h4 className="text-gray-950 text-xl">
                Avant tout vous devez connaître ces 3 façons de penser qui vous
                accompagneront ici :
              </h4>
              <ul className="py-3 flex flex-col gap-2">
                <li className="flex gap-4 items-center">
                  <AiTwotoneStar className="text-2xl text-pink-900" />
                  Vous êtes le sel de la terre et la lumière du monde
                </li>
                <li className="flex gap-4 items-center">
                  <AiTwotoneStar className="text-2xl text-pink-900" />
                  Une ville située sur une montagne ne peut être cachée
                </li>
                <li className="flex gap-4 items-start ">
                  <AiTwotoneStar className="text-4xl text-pink-900" />
                  On allume pas une lampe pour la mettre sous le boisseau , mais
                  sur le chandelier et elle éclaire tout ceux qui sont dans la
                  maison.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
