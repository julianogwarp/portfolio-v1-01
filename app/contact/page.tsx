"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";


const socials = [
	
	{
		icon: <Mail size={20} />,
		href: "mailto:dev@chronark.com",
		label: "Email",
		handle: "julianogwarp@gmail.com",
	},
	
];

export default function Example() {
	return (
    <div className=" ">
      <Navigation />
      <div className="container flex  justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto pt-20 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Link
              href={s.href}
              target="_blank"
              className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
            >
              <div className="pt-22 mx-auto pt-12lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="flex items-center main-lettering max-w-6xl pb-80 md:pb-24 mx-auto lg:mx-0">
                  <span className="text-2xl  font-bold tracking-tight text-zinc-900 md:text-4xl">
                    {s.handle}
                  </span>
                  <span className="text-xl ml-4 font-semi-bold tracking-tight align-middle text-zinc-500 md:text-4xl">
                    {s.icon}
                  </span>
                </div>
                <div className="flex pt-80 md:pt-42 justify-center"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
