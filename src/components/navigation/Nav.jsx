'use client'
import React, { useState } from "react";
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../../public/assets/images/logo.png'

export default function Nav() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    return (
        <>
            <nav className='text-slate-50 relative flex justify-between items-center px-5 w-full gap-4 max-w-3xl  '>

                <div className="logo">
                    <Link href="/">
                        <Image
                            src={logo}
                            width={100}
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className="menu flex items-center gap-3 md:hidden ">
                    <Link href="/" className={`link hover:text-yellow-500 duration-300 ${pathname === '/' ? 'active' : ''}`} >Accueil</Link>
                    <Link href="/patisserie" className={`link hover:text-yellow-500 duration-300 ${pathname === '/patisserie' ? 'active' : ''}`}>Pâtisserie</Link>
                    <Link href="/programme" className={`link hover:text-yellow-500 duration-300 ${pathname === '/programme' ? 'active' : ''}`}>Programme</Link>
                    <Link href="/reconnect.me" className={`link hover:text-yellow-500 duration-300 ${pathname === '/reconnect.me' ? 'active' : ''}`}>Reconect.me</Link>
                    <Link href="/a-propos" className={`link hover:text-yellow-500 duration-300 ${pathname === '/a-propos' ? 'active' : ''}`}>A propos</Link>

                </div>
                <div className="menu-icon hidden  md:flex justify-center gap-3" >
                    <Link href='https://wa.me/629109414' className=" flex gap-2 rounded-md font-semibold text-gray-50 px-3 py-2  w-max  duration-500 hover:text-slate-950 hover:shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>

                    </Link>

                    <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </div>
            </nav>
            <MobileNav open={open} setOpen={setOpen} />
        </>
    )


}
function MobileNav({ open, setOpen }) {

    const pathname = usePathname()
    return (
        <div className={`z-[999] absolute top-0 left-0 h-dvh w-screen bg-pink-950 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-sm px-5)  `}>
            <div className="flex items-center justify-end filter drop-shadow-md h-20 px-6"> {/*logo container*/}
                <div className="menu-icon" >
                    <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E5E5E5" className="w-8 h-8 cursor-pointer">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>


                </div>
            </div>

            <div className="menu h-full flex flex-col  justify-center px-5  gap-3 text-slate-50">
                <div className="links flex flex-col items-center justify-center gap-3  text-2xl">
                    <Link href="/" className={`link hover:text-yellow-500 duration-300 ${pathname === '/' ? 'active' : ''}`} >Accueil</Link>
                    <Link href="/patisserie" className={`link hover:text-yellow-500 duration-300 ${pathname === '/patisserie' ? 'active' : ''}`}>Pâtisserie</Link>
                    <Link href="/programme" className={`link hover:text-yellow-500 duration-300 ${pathname === '/programme' ? 'active' : ''}`}>Programme</Link>
                    <Link href="/reconnect.me" className={`link hover:text-yellow-500 duration-300 ${pathname === '/reconnect.me' ? 'active' : ''}`}>Reconect.me</Link>
                    <Link href="/a-propos" className={`link hover:text-yellow-500 duration-300 ${pathname === '/a-propos' ? 'active' : ''}`}>A-propos</Link>

                </div>
                <div className="social flex gap-3 items-center justify-center pb-14 pt-5 mt-24  px-5 border-solid border-t text-slate-50">

                    <Link href='https://www.instagram.com/colossal_mindandcake?igsh=MzRlODBiNWFlZA=='>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" /><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" /></svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}