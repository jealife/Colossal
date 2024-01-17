import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



export default function page() {
  return (
    <main className="flex min-h-screen  flex-col items-center gap-14 pb-20">

      <div className="w-full h-auto items-center justify-center  font-mono text-sm flex flex-col flex-wrap gap-3 bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1670541196589-745e07d27739?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  ">
        <div className="hero-wrapper-overlay  py-28 px-24 sm:px-[20px]   w-full h-auto items-center justify-center  font-mono text-sm flex flex-col bg-gray-950/50">
          <div class=" max-w-2xl md:w-full  text-pretty  text-slate-50 flex flex-col items-center gap-5 text-center ">
            <h1 className="  text-7xl md:text-[49px] font-bold tracking-tighter leading-[1em] "
            >
              Patisserie </h1>
            <p className="text-slate-300 text-[24px] leading-[1.2em] ">
              Réserves ton dessert dès maintenant !
            </p>
          </div>
        </div>
      </div>

      <div className="annoce px-24 sm:px-[20px] ">
        <div className="annonc-wrapper w-96 md:w-auto shadow-lg p-3 rounded-md -mt-24 bg-white flex flex-col gap-3 items-center text-center">
          <p className='text-slate-900'>
            Réserves ton dessert dès maintenant et
            reçois ton formulaire pour personnaliser ta commande.
          </p>
          <Link href='/programme' className=" rounded-md font-semibold text-gray-50 px-3 py-2 bg-pink-950 w-max hover:bg-slate-50 duration-500 hover:text-slate-950 hover:shadow-lg">
            Je commande
          </Link>
        </div>
      </div>

      <div className="gallery px-24 sm:px-[20px]">
        <div className="gallery-wrapper grid grid-cols-3 sm:grid-cols-1 gap-4 " >

          
        </div>
      </div>




    </main>
  )
}
