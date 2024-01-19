import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import woman from '../../../public/assets/images/Woman.png'


export default function page() {
  return (
    <main className="flex min-h-screen  flex-col items-center gap-14 pb-20">

      <div className="w-full h-auto items-center justify-center  font-mono text-sm flex flex-col flex-wrap gap-3 bg-center bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  ">
        <div className="hero-wrapper-overlay  py-32 px-24 sm:px-[20px]   w-full h-auto items-center justify-center  font-mono text-sm flex flex-col bg-gray-950/50">
          <div class=" max-w-2xl md:w-full  text-pretty  text-slate-50 flex flex-col items-center gap-5 text-center ">
            <h1 className="  text-7xl md:text-[49px] font-bold tracking-tighter leading-[1em] ">
              Atteindre son sommet.
            </h1>
          </div>
        </div>
      </div>

      <div className="px-24 sm:px-[20px] max-w-5xl flex flex-col gap-10">
        <div className="text-center text-slate-900 font-semibold text-[16px] leading-[1.2em]">
          <h3 className=' text-2xl' >Bienvenue dans le Programme "Atteindre Son Sommet"! </h3>
        </div>
        <div className="grid">
          <div className="flex">
            <pc className='text-[18px] leading-[1.5em] font-light' >
              Tu dois savoir que je ne suis pas une agence de marketing & réseaux sociaux ou encore social media manager.

              L’agence de marketing et réseaux sociaux taide à  à avoir de l’impact sur les réseaux sociaux , gère ton compte pour toi et crée des visuels pour toi.
              <br />
              Or ,  Ici je t’aide à te redécouvrir, à faire grandir ou ressortir ton potentiel et à développer ta vision. Aussi, te donne toutes les bases nécessaires pour le mettre en lumière sur Instagram.
              <br />
              Je souhaite t’aider à propulser ton idée de base en utilisant divers stratégies d’Instagram qui t’aideront aussi à mieux vendre.
            </pc>
          </div>
          {/* <div className="block">
            <Image src={woman} whi />
          </div> */}
        </div>
      </div>







    </main>
  )
}
