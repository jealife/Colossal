import { React, Fragment } from 'react'

const crepes = [
    {
        id: 1,
        imageUrl: 'https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2Fea494dfd-2d02-4784-aec7-af27b45bbb78%2F030F6FCE-4BE0-40D1-A8B6-282F3132F30D.jpeg?table=block&id=1b393415-b61c-4076-b73a-5f0775edfad8&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2',
        alt: 'Crepes au chocolat'
    },
    {
        id: 2,
        imageUrl: 'https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F5e82b8c3-d2ba-44ce-84fe-61593b1bbe10%2F3EBF63A2-2551-4D08-840D-9BF4E0E60B4C.jpeg?table=block&id=8e0ba739-d15d-4017-ac72-1ca5a61f3553&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2',
        alt: 'Crêpse colorées'
    },
    {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1665105649617-69dbcf320456?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Crêpe '
    },
    {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1690267780363-342025f3cd71?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Crêpe '
    },
    {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1607096022706-e7e7d5fce811?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Crêpe '
    },
    {
        id: 6,
        imageUrl: 'https://images.unsplash.com/photo-1515467837915-15c4777ba46a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Crêpe '
    },
]

export default function Crepres() {
    return (
        <Fragment>
            {
                crepes.map((crepe) => (
                    <img
                        
                        key={crepe.id}
                        src={crepe.imageUrl}
                        alt={crepe.alt}
                        className='w-full max-w-sm rounded-md h-56 sm:h-40 object-cover'
                    />
                ))}
        </Fragment>
    )
}
