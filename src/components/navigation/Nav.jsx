'use client'
import React, { useState } from "react";
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../../public/assets/images/logo.png'
import { FaInstagram,FaWhatsapp } from "react-icons/fa";


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
                            alt="Logo Clossal"
                        />
                    </Link>
                </div>
                <div className="menu flex items-center gap-3 md:hidden ">
                    <Link href="/" className={`link hover:text-yellow-500 duration-300 ${pathname === '/' ? 'active' : ''}`} >Accueil</Link>
                    <Link href="/patisserie" className={`link hover:text-yellow-500 duration-300 ${pathname === '/patisserie' ? 'active' : ''}`}>Pâtisserie</Link>
                    <Link href="/programme" className={`link hover:text-yellow-500 duration-300 ${pathname === '/programme' ? 'active' : ''}`}>Programme</Link>
                    <Link href="/reconnect.me" className={`link hover:text-yellow-500 duration-300 ${pathname === '/reconnect.me' ? 'active' : ''}`}>Reconect.me</Link>
                    <Link href="/#apropos" className={`link hover:text-yellow-500 duration-300 ${pathname === '/a-propos' ? 'active' : ''}`}>A propos</Link>

                </div>
                <div className="menu-icon hidden  md:block" >
                    <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </div>
            </nav>
            <MobileNav open={open} setOpen={setOpen} className='z-[9999]' />
        </>
    )


}
function MobileNav({ open, setOpen }) {

    const pathname = usePathname()
    return (
        <div className={`absolute top-0 left-0 h-dvh w-screen bg-pink-950 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-sm px-5)  `}>
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
                    <Link href="/#apropos" className={`link hover:text-yellow-500 duration-300 ${pathname === '/a-propos' ? 'active' : ''}`}>A-propos</Link>

                </div>
                <div className="social flex gap-3 items-center justify-center pb-14 pt-5 mt-24  px-5 border-solid border-t text-slate-50">

                    <Link href='https://www.instagram.com/colossal_mindandcake?igsh=MzRlODBiNWFlZA=='>
                        <FaInstagram className='text-2xl' />
                    </Link>
                    <Link href='https://wa.me/629109414'>
                        <FaWhatsapp className='text-2xl' />
                    </Link>
                </div>
            </div>
        </div>
    )
}