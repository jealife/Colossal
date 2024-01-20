import React from 'react'
import Gallery from './Gallery'
import Image from 'next/image'


const crepes = [
    {
        id: 1,
        imageUrl: '',
        alt: ''
    },
    {
        id: 2,
        imageUrl: '',
        alt: ''
    },
]

export default function Crepres() {
    return (
        <div>
            {
                crepes.map((crepe) => (
                    <Image
                        id={id}
                        src={imageUrl}
                        width={500}
                        height={500}
                        alt={alt}
                        className='w-full max-w-sm rounded-md h-56 sm:h-40 object-cover'
                    />
                ))}
        </div>
    )
}
