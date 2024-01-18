import React from 'react'
import AboutUs from '../../../public/assets/images/AboutUs.png'
import Image from 'next/image'
export default function page() {
  return (
    <main  className="flex min-h-dvh  flex-col items-center justify-center p-24 md:pt-24 md:px-5">

      <div className="max-w-5xl w-full items-center justify-center font-mono text-sm flex flex-col gap-3">

        <div className="content py-2 flex h-full items-center gap-4">
          <Image
            src={AboutUs}
            width={400}
            alt="About Us"
          />
        </div>
      </div>

    </main>
  )
}
