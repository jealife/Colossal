import React from 'react'
import gouteur from '../../../public/assets/images/gouteur-comite.png'
import Image from 'next/image'
export default function page() {
  return (
    <main  className="flex min-h-dvh  flex-col items-center justify-center p-24 md:pt-24 md:px-5 bg-pink-950">

      <div className="max-w-5xl w-full items-center justify-center font-mono text-sm grid grid-cols-2 md:grid-cols-1 gap-3">
        <div className="flex flex-col">
            <h1 className='text-7xl text-slate-50 md:text-[49px] font-bold tracking-tighter leading-[1.25em] '>
                Le comité des <span>Gouteurs</span>
            </h1>
        </div>
        <div className="content py-2 flex h-full items-center gap-4">
          <Image
            src={gouteur}
            width={400}
            alt="Le comité es gouteurs"
          />
        </div>
      </div>

    </main>
  )
}
