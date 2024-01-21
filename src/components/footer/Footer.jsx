import Image from 'next/image'
import React from 'react'
import logo from '../../../public/assets/images/logo.png'
import Link from 'next/link'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='overflow-x-hidden  flex flex-col items-center gap-20 justify-center w-full py-14'>
      <div className="w-full max-w-4xl flex flex-col items-center gap-14 px-4 "
        x-data="{}"
        x-init="$nextTick(() => {
          let ul = $refs.logos;
          ul.insertAdjacentHTML('afterend', ul.outerHTML);
          ul.nextSibling.setAttribute('aria-hidden', 'true');})">
        <div class="w-full inline-flex flex-nowrap items-center ">
          <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2Fdda99998-cc70-4bae-9cea-059e2e7b9afc%2FF37B243F-810D-4B38-8DE7-6CE985C57257.jpeg?table=block&id=d2a3926a-0d4b-4fb4-bcef-daa0af0fc48a&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2" alt="Gateau crêpes au chocolat"
                className='object-cover w-72 h-24 sm:w-56 sm:h-20 rounded-full' />
            </li>
            <li>
              <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F5c468e92-f87b-4be9-923c-ab105be92e8e%2F6B499725-7D46-46B2-890F-EE9F77519763.jpeg?table=block&id=11f86634-e6ea-4ebb-884f-e7b21769784a&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2" alt="Patisserie"
                className='object-cover w-72 h-24 sm:w-56 sm:h-20 rounded-full' />
            </li>
            <li>
              <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F33af35ef-9cf5-4519-9c20-957940ae0697%2F805C19DA-E297-4529-B57A-630C02700D57.jpeg?table=block&id=13c68b25-7c52-4be5-91f4-355cf9026f79&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2" alt="Patisserie"
                className='object-cover w-72 h-24 sm:w-56 sm:h-20 rounded-full' />
            </li>
            <li>
              <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F5112b16b-3061-44b8-b301-41672d702e29%2F3B71E19D-5284-4BF7-9F60-2BEC25B5B48B.jpeg?table=block&id=848e9245-1307-4811-8d25-7625b1142274&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2" alt="Patisserie"
                className='object-cover w-72 h-24 sm:w-56 sm:h-20 rounded-full' />
            </li>
            <li>
              <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F980e547c-6d8e-46b1-9ff5-8887be752bc5%2F00047A4B-2B6D-4A14-A0FC-34ED04BF91AF.jpeg?table=block&id=e71ae7db-f5af-47c7-ad8a-b46d5d9b6a94&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2" alt="Quora"
                className='object-cover w-72 h-24 sm:w-56 sm:h-20 rounded-full' />
            </li>
            <li>
              <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F0b4127ce-2f9d-4bd4-bada-04f004296bce%2FA2150E3D-5264-47D7-AF05-D5D8D2AD679C.jpeg?table=block&id=4b955e99-df85-46b2-80bd-73e036b46b14&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2" alt="Sass"
                className='object-cover w-72 h-24 sm:w-56 sm:h-20 rounded-full' />
            </li>
          </ul>
          <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2Fdda99998-cc70-4bae-9cea-059e2e7b9afc%2FF37B243F-810D-4B38-8DE7-6CE985C57257.jpeg?table=block&id=d2a3926a-0d4b-4fb4-bcef-daa0af0fc48a&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2" alt="Gateau crêpes au chocolat"
                className='object-cover w-72 h-24 sm:w-56 sm:h-20 rounded-full' />
            </li>
            <li>
              <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F5c468e92-f87b-4be9-923c-ab105be92e8e%2F6B499725-7D46-46B2-890F-EE9F77519763.jpeg?table=block&id=11f86634-e6ea-4ebb-884f-e7b21769784a&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2" alt="Patisserie"
                className='object-cover w-72 h-24 sm:w-56 sm:h-20 rounded-full' />
            </li>
            <li>
              <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F33af35ef-9cf5-4519-9c20-957940ae0697%2F805C19DA-E297-4529-B57A-630C02700D57.jpeg?table=block&id=13c68b25-7c52-4be5-91f4-355cf9026f79&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2" alt="Patisserie"
                className='object-cover w-72 h-24 sm:w-56 sm:h-20 rounded-full' />
            </li>
            <li>
              <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F5112b16b-3061-44b8-b301-41672d702e29%2F3B71E19D-5284-4BF7-9F60-2BEC25B5B48B.jpeg?table=block&id=848e9245-1307-4811-8d25-7625b1142274&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2" alt="Patisserie"
                className='object-cover w-72 h-24 sm:w-56 sm:h-20 rounded-full' />
            </li>
            <li>
              <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F980e547c-6d8e-46b1-9ff5-8887be752bc5%2F00047A4B-2B6D-4A14-A0FC-34ED04BF91AF.jpeg?table=block&id=e71ae7db-f5af-47c7-ad8a-b46d5d9b6a94&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2" alt="Quora"
                className='object-cover w-72 h-24 sm:w-56 sm:h-20 rounded-full' />
            </li>
            <li>
              <img src="https://pushy-mapusaurus-373.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F00f15a6e-8673-4a04-a350-f95d3c2ce384%2F0b4127ce-2f9d-4bd4-bada-04f004296bce%2FA2150E3D-5264-47D7-AF05-D5D8D2AD679C.jpeg?table=block&id=4b955e99-df85-46b2-80bd-73e036b46b14&spaceId=00f15a6e-8673-4a04-a350-f95d3c2ce384&width=2000&userId=&cache=v2" alt="Sass"
                className='object-cover w-72 h-24 sm:w-56 sm:h-20 rounded-full' />
            </li>
          </ul>
        </div>

        <div className="footer grid grid-cols-3 gap-4 py-5 sm:grid-cols-1 border-t  border-slate-500/30">

          <div className="flex flex-col gap-3">
            <div className="logo">
              <Image
                src={logo}
                width={100}
                alt="Logo Clossal"
                className='invert'
              />
            </div>
            <div className="">
              <p className='text-slate-900 text-md'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aliquam?
              </p>
            </div>
          </div>


          <div className="links flex flex-col items-start text-left gap-3">
            <h5 className='font-bold text-slate-950'>Liens</h5>
            <ul className='text-md text-slate-900 '>
              <li>
                <Link href='/'
                  className='hover:text-pink-900 hover:underline underline-offset-1  duration-500'
                > Accueil</Link>
              </li>
              <li>
                <Link href='/patisserie'
                  className='hover:text-pink-900 hover:underline underline-offset-1  duration-500'
                > Pâtisserie</Link>
              </li>
              <li>
                <Link href='/programme'
                  className='hover:text-pink-900 hover:underline underline-offset-1  duration-500'
                > Programme</Link>
              </li>
              <li>
                <Link href='/reconnect.me'
                  className='hover:text-pink-900 hover:underline underline-offset-1  duration-500'
                > Reconnect.me</Link>
              </li>
              <li>
                <Link href='/#apropos'
                  className='hover:text-pink-900 hover:underline underline-offset-1  duration-500'
                > A propos</Link>
              </li>
            </ul>
          </div>

          <div className="links flex flex-col items-start text-left gap-3">
            <h5 className='font-bold text-slate-950'>Contact</h5>
            <ul className=' flex gap-3 text-sm text-slate-900 '>
              <li>
                <Link href='https://wa.me/629109414'>
                  <FaWhatsapp className='text-xl hover:text-pink-900 ' />
                </Link>
              </li>
              <li>
                <Link href='https://www.instagram.com/colossal_mindandcake?igsh=MzRlODBiNWFlZA=='>
                  <FaInstagram className='text-xl hover:text-pink-900 ' />
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}
