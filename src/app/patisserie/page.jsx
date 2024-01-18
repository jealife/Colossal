import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import gouteurs from '../../../public/assets/images/gouteurs.jpg'


export default function page() {
  return (
    <main className="flex min-h-screen  flex-col items-center gap-14 pb-20">

      <div className="w-full h-auto items-center justify-center  font-mono text-sm flex flex-col flex-wrap gap-3 bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1670541196589-745e07d27739?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  ">
        <div className="hero-wrapper-overlay  py-28 px-24 sm:px-[20px]   w-full h-auto items-center justify-center  font-mono text-sm flex flex-col bg-gray-950/50">
          <div class=" max-w-2xl md:w-full  text-pretty  text-slate-50 flex flex-col items-center gap-5 text-center ">
            <h1 className="  text-7xl md:text-[49px] font-bold tracking-tighter leading-[1em] "
            >
              Patisserie </h1>
            <p className="text-slate-300 text-[24px] leading-[1.2em] ">
              Réserves ton dessert dès maintenant !
            </p>
          </div>
        </div>
      </div>

      <div className="annoce px-24 sm:px-[20px] ">
        <div className="annonc-wrapper w-96 md:w-auto shadow-lg p-3 rounded-md -mt-24 bg-white flex flex-col gap-3 items-center text-center">
          <p className='text-slate-900'>
            Réserves ton dessert dès maintenant et
            reçois ton formulaire pour personnaliser ta commande.
          </p>
          <Link href='/programme' className=" rounded-md font-semibold text-gray-50 px-3 py-2 bg-pink-950 w-max hover:bg-slate-50 duration-500 hover:text-slate-950 hover:shadow-lg">
            Je commande
          </Link>
        </div>
      </div>

      <div className="gallery px-24 sm:px-[20px]">
        <div className="gallery-wrapper grid grid-cols-3 sm:grid-cols-2 sm:gap-2 gap-4 " >

          <div className="item">
            <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2Fea494dfd-2d02-4784-aec7-af27b45bbb78%2F030F6FCE-4BE0-40D1-A8B6-282F3132F30D.jpeg?table=block&id=1b393415-b61c-4076-b73a-5f0775edfad8&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2"
              alt="crepes" className='w-full max-w-sm rounded-md h-56 sm:h-40 object-cover' />
          </div>

          <div className="item">
            <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F33af35ef-9cf5-4519-9c20-957940ae0697%2F805C19DA-E297-4529-B57A-630C02700D57.jpeg?table=block&id=13c68b25-7c52-4be5-91f4-355cf9026f79&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2"
              alt="gateau au chocolat" className='w-full max-w-sm rounded-md h-56 sm:h-40 object-cover' />
          </div>

          <div className="item">
            <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F980e547c-6d8e-46b1-9ff5-8887be752bc5%2F00047A4B-2B6D-4A14-A0FC-34ED04BF91AF.jpeg?table=block&id=e71ae7db-f5af-47c7-ad8a-b46d5d9b6a94&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2"
              alt="gateau au chocolat" className='w-full max-w-sm rounded-md h-56 sm:h-40 object-cover' />
          </div>

          <div className="item">
            <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F668bd0f0-6cdf-4b16-b831-64445a5edaa7%2F6ED25E4E-CB60-4A51-8E44-750C497E4030.jpeg?table=block&id=d2d31933-cca9-4f27-b575-83f94c4b431f&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2"
              alt="gateau" className='w-full max-w-sm rounded-md h-56 sm:h-40 object-cover' />
          </div>

          <div className="item">
            <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2Fdda99998-cc70-4bae-9cea-059e2e7b9afc%2FF37B243F-810D-4B38-8DE7-6CE985C57257.jpeg?table=block&id=d2a3926a-0d4b-4fb4-bcef-daa0af0fc48a&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2"
              alt="gateau crepes au chocolat" className='w-full max-w-sm rounded-md h-56 sm:h-40 object-cover' />
          </div>

          <div className="item">
            <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F5112b16b-3061-44b8-b301-41672d702e29%2F3B71E19D-5284-4BF7-9F60-2BEC25B5B48B.jpeg?table=block&id=848e9245-1307-4811-8d25-7625b1142274&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2"
              alt="gateau crepes au chocolat" className='w-full max-w-sm rounded-md h-56 sm:h-40 object-cover' />
          </div>

        </div>
      </div>


      <div className="annoce px-24 sm:px-[20px]   ">
        <div className="annonc-wrapper py-12 sm:py-6 w-full max-w-md sm:max-w-sm md:w-auto border border-solid border-gray-800 p-3 rounded-md text-center">
          <Link href='/programme' className='overflow-hidden w-96 object-cover '>
            <Image
            src={gouteurs}
            width={500}
            className='rounded-md  object-cover duration-300'
            />
          </Link>
          <div className="content flex flex-col gap-4 items-center py-2 w-full max-w-md sm:max-w-sm">
            <h2 className='text-slate-900 font-bold text-2xl'>
              Le comminté des gouteurs
            </h2>
            <Link href='/programme' className=" rounded-md font-semibold text-gray-50 px-3 py-2 bg-pink-950 w-max hover:bg-slate-50 duration-500 hover:text-slate-950 hover:shadow-lg">
              Voir l'évenement
            </Link>
          </div>
        </div>
      </div>




    </main>
  )
}
