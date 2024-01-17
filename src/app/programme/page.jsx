import React from 'react'
import design from '../../../public/assets/images/design.png'
import Image from 'next/image'
export default function page() {
  return (
    <main  className="flex min-h-dvh  flex-col items-center justify-center p-24 md:pt-24 md:px-5 bg-white">

      <div className="max-w-5xl w-full items-center justify-center font-mono text-sm flex flex-col gap-3">

        <div className="content py-2 flex h-full items-center gap-4">
          <Image
            src={design}
            width={400}
            alt="Gif"
          />
        </div>
      </div>

    </main>
  )
}
