import { React, Fragment } from 'react'


const layerCakes = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'LayerCakes au chocolat'
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1551879400-111a9087cd86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGxheWVyJTIwY2FrZXN8ZW58MHx8MHx8fDA%3D',
        alt: 'Layer Cakes'
    },
    {
        id: 3,
        imageUrl: 'https://plus.unsplash.com/premium_photo-1664391788731-8b6b992dc042?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGxheWVyJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D',
        alt: 'Layer Cakes'
    },
    {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1627247359162-4645d9f8543b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Layer Cakes'
    },
    {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Layer Cakes'
    },
    {
        id: 6,
        imageUrl: 'https://images.unsplash.com/photo-1604866973367-580068bb3a34?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Layer Cakes'
    },
]

export default function LayerCakes() {
    return (
        <Fragment>
            {
                layerCakes.map((layerCake) => (
                    <img
                        data-aos="zoom-in"
                        data-aos-duration="500"
                        data-aos-delay="300"
                        key={layerCake.id}
                        src={layerCake.imageUrl}
                        alt={layerCake.alt}
                        className='w-full max-w-sm rounded-md h-56 sm:h-40 object-cover'
                    />
                ))}
        </Fragment>
    )
}
