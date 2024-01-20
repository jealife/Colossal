import { React, Fragment } from 'react'


const gateauxCrepes = [
    {
        id: 1,
        imageUrl: 'https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2Fdda99998-cc70-4bae-9cea-059e2e7b9afc%2FF37B243F-810D-4B38-8DE7-6CE985C57257.jpeg?table=block&id=d2a3926a-0d4b-4fb4-bcef-daa0af0fc48a&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2',
        alt: 'Gateau crêpes au chocolat'
    },
]

export default function GateauCrepes() {
    return (
        <Fragment>
            {
                gateauxCrepes.map((gateauCrepes) => (
                    <img
                        key={gateauCrepes.id}
                        src={gateauCrepes.imageUrl}
                        alt={gateauCrepes.alt}
                        className='w-full max-w-sm rounded-md h-56 sm:h-40 object-cover'
                    />
                ))}
        </Fragment>
    )
}
