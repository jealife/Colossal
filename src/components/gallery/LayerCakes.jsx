import { React, Fragment } from 'react'


const layerCakes = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'LayerCakes au chocolat'
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1566704298383-2925e1277298?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxheWVyJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D',
        alt: 'Layer Cakes'
    },
    {
        id: 3,
        imageUrl: 'https://plus.unsplash.com/premium_photo-1664391788731-8b6b992dc042?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGxheWVyJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D',
        alt: 'Layer Cakes'
    },
    {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1490126125528-a0c3b2998dcd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Layer Cakes'
    },
    {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1540337706094-da10342c93d8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Layer Cakes'
    },
    {
        id: 6,
        imageUrl: 'https://images.unsplash.com/photo-1597083722160-c31d67d4af44?q=80&w=1832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Layer Cakes'
    },
]

export default function LayerCakes() {
    return (
        <Fragment>
            {
                layerCakes.map((layerCake) => (
                    <img
                        key={layerCake.id}
                        src={layerCake.imageUrl}
                        alt={layerCake.alt}
                        className='w-full max-w-sm rounded-md h-56 sm:h-40 object-cover'
                    />
                ))}
        </Fragment>
    )
}
