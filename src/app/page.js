// import Image from 'next/image'
import Link from "next/link"



export default function Home() {
  return (

    <main className="flex min-h-dvh  flex-col items-center justify-between overflow-x-hidden">

      <div className="   w-full h-dvh items-center justify-center  font-mono text-sm flex flex-col flex-wrap gap-3 bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1667503313783-6999f778a995?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] md:bg-[url('https://images.unsplash.com/photo-1512223792601-592a9809eed4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
        <div className="hero-wrapper-overlay  py-24 px-24 sm:px-[20px]   w-full h-dvh items-center justify-center  font-mono text-sm flex flex-col bg-gray-950/50">
          <div class=" max-w-2xl md:w-full  text-pretty  text-slate-50 flex flex-col items-center gap-5 text-center ">
            <h1 className="  text-7xl md:text-[49px] font-bold tracking-tighter leading-[1em] "
            >
              Colossal mind and cake </h1>
            <p className=" text-slate-300 text-[24px] leading-[1.2em] ">Pâtisserie & croissance personelle</p>
            <Link href='/programme' className=" rounded-md font-semibold text-gray-950 px-3 py-2 bg-slate-50 w-max hover:bg-pink-950 duration-500  hover:text-slate-50 hover:shadow-xl hover:shadow-pink-200/30 ">
              Programme
            </Link>
          </div>
        </div>
      </div>

    </main>
  )
}
