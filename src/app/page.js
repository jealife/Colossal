// import Image from 'next/image'
import Image from "next/image";
import Link from "next/link";
import { AiTwotoneStar } from "react-icons/ai";

import patisserie from "../../public/assets/images/patisserie.jpeg";
import leaves from "../../public/assets/images/leaves.jpg";

export default function Home() {
  return (
    <main className="flex min-h-dvh  flex-col items-center justify-between overflow-x-hidden">
      <div className="w-full h-dvh md:h-[780px] items-center justify-center  font-mono text-sm flex flex-col flex-wrap gap-3 bg-center bg-cover bg-fixed bg-[url('https://images.unsplash.com/photo-1667503313783-6999f778a995?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] md:bg-[url('https://images.unsplash.com/photo-1512223792601-592a9809eed4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
        <div className="hero-wrapper-overlay  py-24 px-24 sm:px-[20px]   w-full h-dvh md:h-[780px] items-center justify-center  font-mono text-sm flex flex-col bg-gray-950/50">
          <div class=" max-w-2xl md:w-full  text-pretty  text-slate-50 flex flex-col items-center gap-5 text-center ">
            <h1
              className="  text-7xl md:text-[49px] font-bold tracking-tighter leading-[1em] "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Colossal <span className="text-yellow-500">mind</span> and{" "}
              <span className="text-yellow-500">cake</span>
            </h1>
            <p
              className=" text-slate-300 text-[24px] leading-[1.2em] "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Pâtisserie & croissance personelle
            </p>
            <Link
              href="/programme"
              className=" rounded-md font-semibold text-gray-950 px-3 py-2 bg-slate-50 w-max hover:bg-pink-950 duration-500  hover:text-slate-50 hover:shadow-xl hover:shadow-pink-200/30 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              Programme
            </Link>
          </div>
        </div>
      </div>

      <div
        className="about-section w-full flex flex-col items-center"
        id="apropos"
      >
        <div className="about-wrapper max-w-5xl py-20 md:py-16 px-24 sm:px-[20px]   w-full">
          <div className="w-full flex justify-start flex-col gap-6 ">
            <h2
              className="text-4xl text-pink-900 md:text-[40px] font-semibold tracking-tighter leading-[1em]"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Hello chers Honorable !
            </h2>

            <p
              className="text-[18px] text-slate-900  leading-[1.5em] font-normal "
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Bienvenue dans l’univers de Colossal Mind And Cake. J’ai créé un
              espace où deux de mes passions, la pâtisserie et le développement
              personnel se fusionnent pour vous offrir une expérience absolument
              unique.
            </p>

            <div className="pt-5">
              <h4
                className="text-gray-950 text-xl"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                Avant tout vous devez connaître ces 3 façons de penser qui vous
                accompagneront ici :
              </h4>
              <ul className="py-3 flex flex-col gap-2 text-slate-900 text-[16px]">
                <li
                  className="flex gap-4 items-center"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <AiTwotoneStar className="text-2xl text-pink-900" />
                  Vous êtes le sel de la terre et la lumière du monde
                </li>
                <li
                  className="flex gap-4 items-center"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <AiTwotoneStar className="text-2xl text-pink-900" />
                  Une ville située sur une montagne ne peut être cachée
                </li>
                <li
                  className="flex gap-4 items-start "
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <AiTwotoneStar className="text-3xl sm:text-6xl text-pink-900" />
                  On allume pas une lampe pour la mettre sous le boisseau , mais
                  sur le chandelier et elle éclaire tout ceux qui sont dans la
                  maison.
                </li>
              </ul>
            </div>

            <div className="mt-4 grid grid-cols-3 md:grid-cols-1 gap-5 border border-solid border-gray-600 px-5 sm:px-3 py-8 rounded-lg">
              <div className="w-full flex justify-start flex-col gap-4 col-span-2">
                <h2
                  className="text-4xl text-pink-900 md:text-[40px] font-semibold tracking-tighter leading-[1em]"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  Colossal<span className="text-yellow-500"> Cake</span> :
                  Patisserie, Plaisirs gourmands
                </h2>

                <p
                  className="text-[18px] text-slate-900  leading-[1.5em] font-normal "
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  Pour commencer , comme tu l’as certainement deviner ,Colossal
                  Cake représente la partie{" "}
                  <Link className="text-pink-900" href={"/patisserie"}>
                    {"pâtisserie"}
                  </Link>{" "}
                  de ta nouvelle maison. Ici, tu découvriras nos créations avec
                  des saveurs uniques et entièrement personnalisables. Sur
                  précommande et sous devis. Vos commandes sont accompagnées de
                  cartes thématiques qui vous servira de compagnon où que vous
                  soyez dans le but de participer à votre développement
                  personnel, à l’augmentation de votre énergie quotidiennement,
                  à un boost…etc
                </p>
              </div>
              <div
                className="image"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <Image
                  src={patisserie}
                  width={300}
                  className="md:w-full md:h-56 h-full   md:block rounded-md object-cover"
                />
              </div>
            </div>

            <div className="mt-5 grid  g md:grid-cols-1 gap-5 border border-solid border-gray-600 px-5 sm:px-3 py-8 rounded-lg">
              <div className="w-full flex justify-start flex-col gap-4 col-span-2">
                <h2
                  className="text-4xl text-pink-900 md:text-[40px] font-semibold tracking-tighter leading-[1em]"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  Colossal<span className="text-yellow-500"> Mind</span> :
                  Croissance personnelle, Glow up, Accomplissement
                </h2>

                <p
                  className="text-[18px] text-slate-900  leading-[1.5em] font-normal "
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  Dans notre univers sucré, nous croyons premièrement en la
                  spiritualité. Mind = Esprit. Mais le mot Mind englobe
                  également les termes tels qu’elle la vision , l’identité, la
                  découverte de soi, business , réussite , accomplissement. Mon
                  engagement va bien au-delà des plaisirs sucrés ! Je crois en
                  l'épanouissement personnel et surtout à l’accomplissement de
                  soi… c’est pourquoi je propose des <Link className="text-pink-900" href={'/programme'}>{'programmes'}</Link>  conçus pour nous
                  aider à atteindre les sommets de nous-mêmes, parfois négligés
                  ou méconnus.
                </p>

                <div
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <Image
                    src={leaves}
                    width={600}
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
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Tu l’as bien compris , Colossal t’aide à effectuer le voyage
              introspectif qui te permettra de te réaligner avec ta vision afin
              de la développer. Cette passion ou aspiration qui fait battre ton
              cœur et qui est lié quelque part à ta mission de vie. Et ce , par
              divers programmes. Alors ? Es-tu prêt(e) à t’embarquer dans cette
              aventure spéciale entre deux mondes uniques ? Découvre nos
              programmes et continuons ensemble la marche vers de nouveaux
              sommets !
            </p>
            <Link
              href="/programme"
              className=" rounded-md font-semibold hover:text-gray-950 px-3 py-2 hover:bg-slate-50 w-max bg-pink-950 duration-500  text-slate-50 hover:shadow-xl hover:shadow-pink-200/30 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              Découvrir Nos Programmes
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
