import { React, Fragment } from 'react'


const gateauxCrepes = [
    {
        id: 1,
        imageUrl: 'https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2Fdda99998-cc70-4bae-9cea-059e2e7b9afc%2FF37B243F-810D-4B38-8DE7-6CE985C57257.jpeg?table=block&id=d2a3926a-0d4b-4fb4-bcef-daa0af0fc48a&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2',
        alt: 'Gateau crêpes au chocolat'
    },
    {
        id: 2,
        imageUrl: 'https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F668bd0f0-6cdf-4b16-b831-64445a5edaa7%2F6ED25E4E-CB60-4A51-8E44-750C497E4030.jpeg?table=block&id=d2d31933-cca9-4f27-b575-83f94c4b431f&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2',
        alt: 'Gateau crêpes'
    },
    {
        id: 3,
        imageUrl: 'https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F35365db0-a4d0-4fd0-8174-8f553f17edae%2F5CEAA6B2-53DE-49C3-8982-86026B84C946.jpeg?table=block&id=025582df-bf30-4326-b909-302089305077&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2',
        alt: 'Gateau crêpes'
    },
]

export default function GateauCrepes() {
    return (
        <Fragment>
            {
                gateauxCrepes.map((gateauCrepes) => (
                    <img
                        data-aos="zoom-in"
                        data-aos-duration="500"
                        data-aos-delay="300"
                        key={gateauCrepes.id}
                        src={gateauCrepes.imageUrl}
                        alt={gateauCrepes.alt}
                        className='w-full max-w-sm rounded-md h-56 sm:h-40 object-cover'
                    />
                ))}
        </Fragment>
    )
}
