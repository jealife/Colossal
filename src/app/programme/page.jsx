import React from 'react'
import design from '../../../public/assets/images/design.png'
import Image from 'next/image'
export default function page() {
  return (
    <main  className="flex min-h-dvh  flex-col items-center justify-between p-24 md:pt-24 md:px-5 bg-white">

      <div className="max-w-5xl w-full items-center justify-center font-mono text-sm flex flex-col gap-3">

        <div className="content py-2 grid grid-cols-1 sm:grid-cols-1 items-center gap-4">
          <Image
            src={design}
            width={400}
            alt="Gif"
          />
          {/* <p className='text-slate-900 text-xl ' >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, enim voluptatum. Officiis excepturi quo est vitae in praesentium temporibus consectetur!

          </p> */}
        </div>
      </div>

    </main>
  )
}
