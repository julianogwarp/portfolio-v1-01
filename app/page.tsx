import { allProjects } from 'contentlayer/generated';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Card } from './components/card';
import { Navigation } from './components/nav';
import { Article } from './projects/article';
import Particles from './components/particles';
import { LucideChevronDown } from "lucide-react";

export const revalidate = 60;
export default async function Home() {

return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-24 mx-auto  space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="main-lettering max-w-6xl pb-80 md:pb-24 mx-auto lg:mx-0">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            I am Juliano Grendene.
          </h1>
          <div className="flex items-center">
            <h1 className="text-xl font-semi-bold tracking-tight align-middle text-zinc-500 md:text-4xl">
              Software Developer & Product Designer.
            </h1>
          </div>
        </div>
        <div className="flex pt-80 md:pt-42 justify-center"></div>

       
      </div>
    </div>
  );
}
