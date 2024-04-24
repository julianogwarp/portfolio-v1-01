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
export default async function ProjectsPage() {
	const featured = allProjects.find(
    (project) => project.slug === "margin-calculator"
  )!;
	const top2 = allProjects.find((project) => project.slug === "nxr-agro")!;
	const top3 = allProjects.find((project) => project.slug === "x-pos")!;
	const sorted = allProjects
		.filter((p) => p.published)
		.filter(
			(project) =>
				project.slug !== featured.slug &&
				project.slug !== top2.slug &&
				project.slug !== top3.slug,
		)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);
			const scrollToMain = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
      ) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)

        window.scrollTo({
          top: 1000,
          behavior: "smooth",
        });
      };
	return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-22 mx-auto pt-12 space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
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

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full md:p-8 sm:p-8 p-4 cursor-fancy">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                </div>
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-700 group-hover:text-zinc-900 sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 mb-8 leading-8 duration-150 text-zinc-700 group-hover:text-zinc-300 ">
                  {featured.description}
                </p>
                <Image
                  alt="blog"
                  width={300}
                  height={300}
                  src={featured.image ? featured.image : "favicon.png"}
                />
                <div className="absolute bottom-4 pt-8 md:bottom-8">
                  <p className="hidden text-zinc-700 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
