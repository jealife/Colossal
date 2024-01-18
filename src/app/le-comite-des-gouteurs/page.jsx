import React from 'react'
import comiteHero from '../../../public/assets/images/comite-hero.jpg'
import Image from 'next/image'
export default function page() {
    return (
        <main className="flex min-h-dvh  flex-col items-center justify-center p-24 md:pt-24 md:px-5 bg-pink-950">

            <div className="max-w-5xl w-full items-center justify-center font-mono text-sm grid grid-cols-2 md:grid-cols-1 gap-4">
                <div className="flex flex-col pr-4 gap-4">
                    <h1 className='text-6xl text-slate-50 md:text-[49px] font-bold tracking-tighter leading-[1.20em] '>
                        Le comité des <span className='text-yellow-500' >Gouteurs</span>
                    </h1>
                    <p className='text-slate-50 text-[20px] leading-[1.5em] font-light'>
                        Le comité des gouteurs est une activité que Colossal dans son volet Colossal Cake organise au moins une fois dans l’année.
                    </p>
                </div>
                <div className="content py-2 flex h-full items-center gap-4">
                    <Image
                        src={comiteHero}
                        width={500}
                        alt="Le comité es gouteurs"
                        className="rounded-md w-full"
                    />
                </div>
            </div>

            <div className="max-w-5xl mt-8 w-full items-center justify-center font-mono text-sm grid  gap-4">
                <div className="flex flex-col  gap-4">

                    <p className='text-slate-50 text-[18px] leading-[1.5em] font-light'>
                        Cette activité fera de vous le <span className='text-yellow-500 font-bold'>MAÎTRE DES GOUTEURS</span> de l’année puisque vous aurez l’opportunité de goûter nos créations.
                        <br />
                        <br />
                        C’est une expérience unique à ne pas rater !
                        <br />
                        <br />
                        Vous aurez l’opportunité de goûter à des saveurs uniques que vous n’avez jamais goûter auparavant ou dont vous ne pouviez imaginer la combinaison🤭                    </p>
                </div>
            </div>

        </main>
    )
}
