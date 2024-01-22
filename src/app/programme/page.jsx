import Image from "next/image";
import Link from "next/link";
import React from "react";
// import woman from "../../../public/assets/images/Woman.png";

export default function page() {
  return (
    <main className="flex min-h-screen  flex-col items-center gap-14 pb-20 0">
      <div className="w-full h-auto items-center justify-center  font-mono text-sm flex flex-col flex-wrap gap-3 bg-center bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  ">
        <div className="hero-wrapper-overlay  py-32 px-24 sm:px-[20px]   w-full h-auto items-center justify-center  font-mono text-sm flex flex-col bg-gray-950/50">
          <div class=" max-w-2xl md:w-full  text-pretty  text-slate flex flex-col items-center gap-5 text-center ">
            <h1
              className="text-slate-50  text-7xl md:text-[49px] font-bold tracking-tighter leading-[1em] "
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              Atteindre son sommet.
            </h1>
          </div>
        </div>
      </div>

      <div className="px-24 py-4 sm:px-[20px] max-w-5xl flex flex-col gap-10 ">
        <div className="text-center  font-semibold text-[16px] leading-[1.2em]">
          <h3
            className=" text-2xl text-pink-900  "
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            Bienvenue dans le Programme "Atteindre Son Sommet"!
          </h3>
        </div>

        <div className="w-full ">
          <div className="flex ">
            <p
              className="text-[18px] text-slate-800  leading-[1.5em] font-normal"
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              Tu dois savoir que je ne suis pas une agence de marketing &
              réseaux sociaux ou encore social media manager. L’agence de
              marketing et réseaux sociaux taide à avoir de l’impact sur les
              réseaux sociaux , gère ton compte pour toi et crée des visuels
              pour toi.
              <br />
              <br />
              Or , Ici je t’aide à te redécouvrir, à faire grandir ou ressortir
              ton potentiel et à développer ta vision. Aussi, te donner toutes
              les bases nécessaires pour le mettre en lumière sur Instagram.
              <br />
              Je souhaite t’aider à propulser ton idée de base en utilisant
              divers stratégies d’Instagram qui t’aideront aussi à mieux vendre.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-3 items-center justify-center w-full py-5 border-t  border-slate0/50 ">
          <div className="flex flex-col gap-2 ">
            <h3
              className="text-2xl text-slate-900  font-semibold "
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              À qui ce programme s’adresse t-il ?
            </h3>
            <Image
              src={"/assets/images/Woman.png"}
              width={500}
              height={500}
              className="w-full md:w-52 h-full hidden md:block"
            />
            <p
              className="text-[18px] text-slate-950  leading-[1.5em] font-normal mt-3"
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              Le programme{" "}
              <span className="font-semibold text-pink-900">
                "Atteindre son sommet"
              </span>{" "}
              s’adresse aux entrepreneurs débutants qui souhaitent faire
              décoller leur activité sur Instagram.
            </p>
            <ul class="max-w-md space-y-1 text-pink-900 list-disc list-inside  ">
              <li
                className="mt-2"
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                Si tu as un projet que tu aimerais mettre en lumière sur
                Instagram mais tu ne sais pas comment t’y prendre
              </li>
              <li
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                Si tu as une idée que tu n’arrives pas à développer
              </li>
              <li
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                Si tu ne comprends rien du fonctionnement de l’algorithme
                Instagram
              </li>
              <li
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                Si tu n’arrives pas à créer tes propres visuels avec Canva ou
                que tu aimerais approfondir tes compétences en création de
                visuel
              </li>
              <li
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                Si tu as l’impression de stagner malgré tous tes efforts
              </li>
            </ul>
            <p
              className="text-[18px] text-slate-950  leading-[1.5em] font-normal mt-3"
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              Tu es au bon endroit !
            </p>
          </div>
          <div className="block">
            <Image
              src={"/assets/images/Woman.png"}
              height={500}
              width={500}
              className="w-full h-full md:hidden"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
