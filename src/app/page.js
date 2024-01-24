import Link from "next/link";
import { AiTwotoneStar } from "react-icons/ai";
import data from "../../data/home.json";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-dvh  flex-col items-center justify-between overflow-x-hidden">
      <div className="w-full h-dvh md:h-[780px] items-center justify-center  font-mono text-sm flex flex-col flex-wrap gap-3 bg-center bg-cover bg-fixed bg-[url('https://images.unsplash.com/photo-1611497406092-4bc22c54b322?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] md:bg-[url('https://images.unsplash.com/photo-1512223792601-592a9809eed4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
        <div className="hero-wrapper-overlay  py-24 px-24 sm:px-[20px]   w-full h-dvh md:h-[780px] items-center justify-center  font-mono text-sm flex flex-col bg-gray-950/50">
          <div class=" max-w-2xl md:w-full  text-pretty  text-slate-50 flex flex-col items-center gap-5 text-center ">
            <h1
              className="  text-7xl md:text-[49px] font-bold tracking-tighter leading-[1em] "
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              {data?.hero.titre.colossal}
              <span className="text-yellow-500"> {data?.hero.titre.mind} </span>
              {"and "}
              <span className="text-yellow-500"> {data?.hero.titre.cake} </span>
            </h1>
            <p
              className=" text-slate-300 text-[24px] leading-[1.2em] "
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              {data?.hero.sousTitre}
            </p>
            <Link
              href={data?.hero.boutton.link}
              className=" rounded-md font-semibold text-gray-950 px-3 py-2 bg-slate-50 w-max hover:bg-pink-950 duration-500  hover:text-slate-50 hover:shadow-xl hover:shadow-pink-200/30 "
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              {data?.hero.boutton.text}
            </Link>
          </div>
        </div>
      </div>

      <div
        className="about-section w-full flex flex-col items-center"
        id="apropos"
      >
        <div className="about-wrapper max-w-5xl py-20 md:py-20 px-24 sm:px-[20px]   w-full">
          <div className="w-full flex justify-start flex-col gap-6 ">
            <h2
              className="text-4xl text-slate-900 md:text-[40px] font-semibold tracking-tighter leading-[1em]"
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              {data?.about.titre}
            </h2>

            <p
              className="text-[18px] text-slate-900  leading-[1.5em] font-normal "
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              {data?.about.intro}
            </p>

            <div className="pt-5">
              <h4
                className="text-gray-950 text-xl"
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                {data?.about.sousTitre1}
              </h4>
              <ul className="py-3 flex flex-col gap-2 text-slate-900 text-[16px]">
                <li
                  className="flex gap-4 items-center"
                  data-aos="fade-in"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <AiTwotoneStar className="text-2xl text-pink-900" />
                  {data?.about.pensees.pensee1}
                </li>
                <li
                  className="flex gap-4 items-center"
                  data-aos="fade-in"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <AiTwotoneStar className="text-2xl text-pink-900" />
                  {data?.about.pensees.pensee2}
                </li>
                <li
                  className="flex gap-4 items-start "
                  data-aos="fade-in"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <AiTwotoneStar className="text-3xl sm:text-6xl text-pink-900" />

                  {data?.about.pensees.pensee3}
                </li>
              </ul>
            </div>

            <div className="mt-4 grid grid-cols-3 md:grid-cols-1 gap-5 border border-solid border-gray-300 px-5 sm:px-3 py-8 rounded-lg">
              <div className="w-full flex justify-start flex-col gap-4 col-span-2">
                <h2
                  className="text-4xl text-slate-900  md:text-[40px] font-semibold tracking-tighter leading-[1em]"
                  data-aos="fade-in"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  {data?.about.cake.titre.colossal}
                  <span className="text-yellow-500">
                    
                    {data?.about.cake.titre.cake}
                  </span>
                  {data?.about.cake.titre.suite}
                </h2>

                <p
                  className="text-[18px] text-slate-900  leading-[1.5em] font-normal "
                  data-aos="fade-in"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  {data?.about.cake.content.debut}
                  <Link className="text-pink-900" href={"/patisserie"}>
                    {data?.about.cake.content.lien}
                  </Link>
                  {data?.about.cake.content.fin}
                </p>
              </div>
              <div
                className="image"
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <Image
                  src={data?.about.cake.imageUrl}
                  width={300}
                  height={300}
                  className="md:w-full md:h-56 h-full   md:block rounded-md object-cover"
                />
              </div>
            </div>

            <div className="mt-5 grid  g md:grid-cols-1 gap-5 border border-solid border-gray-300 px-5 sm:px-3 py-8 rounded-lg">
              <div className="w-full flex justify-start flex-col gap-4 col-span-2">
                <h2
                  className="text-4xl text-slate-900  md:text-[40px] font-semibold tracking-tighter leading-[1em]"
                  data-aos="fade-in"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  {data?.about.mind.titre.colossal}
                  <span className="text-yellow-500">
                    
                    {data?.about.mind.titre.mind}
                  </span>
                  {data?.about.mind.titre.suite}
                </h2>

                <p
                  className="text-[18px] text-slate-900  leading-[1.5em] font-normal "
                  data-aos="fade-in"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  {data?.about.mind.content.debut}
                  <Link className="text-pink-900" href={"/programme"}>
                    {data?.about.mind.content.lien}
                  </Link>
                  {data?.about.mind.content.fin}
                </p>

                <div
                  data-aos="fade-in"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <Image
                    src={data?.about.mind.imageUrl}
                    width={600}
                    height={300}
                    className="md:w-full h-56  md:h-56  object-cover  md:block rounded-md "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 flex flex-col gap-5">
            <p
              className="text-[18px] text-slate-900  leading-[1.5em] font-normal "
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              {data?.about.endAbout.content.one}
              <br />
              {data?.about.endAbout.content.two}
            </p>
            <Link
              href={data?.about.endAbout.boutton.link}
              className=" rounded-md font-semibold hover:text-gray-950 px-3 py-2 hover:bg-slate-50 w-max bg-pink-950 duration-500  text-slate-50 hover:shadow-xl hover:shadow-pink-200/30 "
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              {data?.about.endAbout.boutton.text}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
