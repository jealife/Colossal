import { React, Fragment } from 'react'


const cupcakes = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1426869884541-df7117556757?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VwY2FrZXN8ZW58MHx8MHx8fDA%3D',
        alt: 'Cupcakes au chocolat'
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Cupcakes'
    },
    {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Cupcakes'
    },
    {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1601045263606-b31b202de911?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Cupcakes'
    },
    {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1606188074044-fcd750f6996a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Cupcakes'
    },
    {
        id: 6,
        imageUrl: 'https://images.unsplash.com/photo-1578922794704-7bdd46f70ce0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Cupcakes'
    },
]

export default function Cupcakes() {
    return (
        <Fragment>
            {
                cupcakes.map((Cupcake) => (
                    <img
                        data-aos="fade-in"
                        data-aos-duration="800"
                        data-aos-delay="100"
                        key={Cupcake.id}
                        src={Cupcake.imageUrl}
                        alt={Cupcake.alt}
                        className='w-full max-w-sm rounded-md h-56 sm:h-40 object-cover'
                    />
                ))}
        </Fragment>
    )
}
