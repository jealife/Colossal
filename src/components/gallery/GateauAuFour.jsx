import { React, Fragment } from 'react'


const gateauAuxFour = [
    {
        id: 1,
        imageUrl: 'https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F33af35ef-9cf5-4519-9c20-957940ae0697%2F805C19DA-E297-4529-B57A-630C02700D57.jpeg?table=block&id=13c68b25-7c52-4be5-91f4-355cf9026f79&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2',
        alt: 'Gateau au four au chocolat'
    },
    {
        id: 2,
        imageUrl: 'https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F5c468e92-f87b-4be9-923c-ab105be92e8e%2F6B499725-7D46-46B2-890F-EE9F77519763.jpeg?table=block&id=11f86634-e6ea-4ebb-884f-e7b21769784a&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2',
        alt: 'Gateau au four'
    },
    {
        id: 3,
        imageUrl: 'https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F0b4127ce-2f9d-4bd4-bada-04f004296bce%2FA2150E3D-5264-47D7-AF05-D5D8D2AD679C.jpeg?table=block&id=4b955e99-df85-46b2-80bd-73e036b46b14&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2',
        alt: 'Gateau au four marbré au chocolat'
    },
    {
        id: 4,
        imageUrl: 'https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F29d4cea4-4dda-4f6a-a7c4-85a6cc33a260%2FFE6A8C5C-91BC-496D-909A-FA703420BD96.jpeg?table=block&id=606a0fec-939d-4753-845f-acfacec51086&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2',
        alt: 'Gateau au four rond'
    },
]

export default function GateauAuFour() {
    return (
        <Fragment
        >
            {
                gateauAuxFour.map((gateauAuFour) => (
                    <img
                        data-aos="fade-in"
                        data-aos-duration="800"
                        data-aos-delay="100"
                        key={gateauAuFour.id}
                        src={gateauAuFour.imageUrl}
                        alt={gateauAuFour.alt}
                        className='w-full max-w-sm rounded-md h-56 sm:h-40 object-cover'
                    />
                ))}
        </Fragment>
    )
}
