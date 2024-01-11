"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import unicorn from '@/public/images/UNICORE.png'
import badger from '@/public/images/BADGER.png'
import taurus from '@/public/images/TAURUS.png'
import orca from '@/public/images/ORCA.png'
import phoenix from '@/public/images/PHOENIX.png'
import astronaut from '@/public/images/ASTRO.png'
import Image from 'next/image'

const socials = [
  {
    label: "Unicore",
    handle: "GM: Aki",
    pic: unicorn,
  },
  {
    label: "Badger",
    handle: "GM: Marcus",
    pic: badger,

  },
  {
    label: "Taurus",
    handle: "GM: Hector",
    pic: taurus,
  },
  {
    label: "Orca",
    handle: "GM: Yahiko",
    pic: orca,
  },
  {
    label: "Phoenix",
    handle: "GM: Louis",
    pic: phoenix,
  },
  {
    label: "Astronaut",
    handle: "GM: Paul & Daniel",
    pic: astronaut,
  },
];

export default function Guild() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-24 sm:grid-cols-3 lg:gap-16 mt-24 mb-[50px]">
          {socials.map((s) => (
            <Card key={s.label}>
              <div
                // target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-[96px]  md:p-16 pd-[96px]"
              >
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.label}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.handle}
                  </span>
                  <Image
                    alt="Earth: The Ultimate Playground"
                    loading="lazy"
                    width={200}
                    height={200}
                    // fill={true}
                    decoding="async"
                    data-nimg="1"
                    className="rounded-full mt-[30px]"
                    src={s.pic} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
