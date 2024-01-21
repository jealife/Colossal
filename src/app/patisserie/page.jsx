"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import gouteurs from "../../../public/assets/images/gouteurs.jpg";
import { Tab, Tabs } from "@/components/tab patisserie/TabPatisserie";
import Gallery from "@/components/gallery/Gallery";
import Crepres from "@/components/gallery/Crepres";
import GateauAuFour from "@/components/gallery/GateauAuFour";
import GateauCrepes from "@/components/gallery/GateauCrepes";
import Cupcakes from "@/components/gallery/Cupcakes";
import LayerCakes from "@/components/gallery/LayerCakes";

export default function page() {
  return (
    <main className="flex min-h-screen  flex-col items-center gap-14 pb-20">
      {/* Hero */}
      <div className="w-full h-auto items-center justify-center  font-mono text-sm flex flex-col flex-wrap gap-3 bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1670541196589-745e07d27739?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  ">
        <div className="hero-wrapper-overlay  py-28 px-24 sm:px-[20px]   w-full h-auto items-center justify-center  font-mono text-sm flex flex-col bg-gray-950/50">
          <div class=" max-w-2xl md:w-full  text-pretty  text-slate-50 flex flex-col items-center gap-5 text-center ">
            <h1 className="  text-7xl md:text-[49px] font-bold tracking-tighter leading-[1em] "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Patisserie
            </h1>
            <p className="text-slate-300 text-[24px] leading-[1.2em] "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200">
              Réserves ton dessert dès maintenant !
            </p>
          </div>
        </div>
      </div>

      <div className="annoce px-24 sm:px-[20px] ">
        <div className="annonc-wrapper w-[400px] md:w-auto shadow-lg p-3 rounded-md -mt-24 bg-white flex flex-col gap-3 items-center text-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <p className="text-slate-900 text-xl">
            Les précommandes se font sous 24h/72h à l’avance.
          </p>
          <Link
            href="https://wa.me/629109414"
            className=" flex gap-2 rounded-md font-semibold text-gray-50 px-3 py-2 bg-pink-950 w-max hover:bg-slate-50 duration-500 hover:text-slate-950 hover:shadow-lg"
          >
            Je commande
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Tab gallery */}

      <Tabs>
        <Tab label="Gateaux au four">
          <Gallery>
            <GateauAuFour />
          </Gallery>
        </Tab>

        <Tab label="Gateaux crêpes">
          <Gallery>
            <GateauCrepes />
          </Gallery>
        </Tab>

        <Tab label="Layer cakes">
          <Gallery>
            <LayerCakes />
          </Gallery>
        </Tab>

        <Tab label="Crêpes">
          <Gallery>
            <Crepres />
          </Gallery>
        </Tab>

        <Tab label="Cupcakes">
          <Gallery>
            <Cupcakes />
          </Gallery>
        </Tab>


      </Tabs>

      {/* event section  */}

      <div className="annoce px-24 sm:px-[20px]   ">
        <div className="annonc-wrapper py-12 sm:py-6 w-full max-w-md sm:max-w-sm md:w-auto border border-solid border-gray-600 p-3 rounded-md text-center">
          <Link
            href="/patisserie//le-comite-des-gouteurs"
            className="overflow-hidden w-96 object-cover "
          >
            <Image
              src={gouteurs}
              width={500}
              className="rounded-md  object-cover duration-300"
            />
          </Link>
          <div className="content flex flex-col gap-4 items-center py-2 w-full max-w-md sm:max-w-sm">
            <h2 className="text-slate-900 font-bold text-2xl">
              Le commité des gouteurs
            </h2>
            <Link
              href="/patisserie/le-comite-des-gouteurs"
              className="rounded-md font-semibold text-gray-50 px-3 py-2 bg-pink-950 w-max hover:bg-slate-50 duration-500 hover:text-slate-950 hover:shadow-lg"
            >
              Voir l'évènement
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
