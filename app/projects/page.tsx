import { allProjects } from 'contentlayer/generated';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Card } from '../components/card';
import { Navigation } from '../components/nav';
import { Article } from './article';


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
        project.slug !== top3.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

	return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full md:p-8 sm:p-8 p-4 cursor-fancy">
                <div className="flex items-center justify-between ">
                  <div className="text-sm text-sky-400">
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
                  className="text-zinc-700  sm:text-3xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="z-20 mt-4 mb-2 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-700 font-sans">
                  {featured.description}
                </p>
                <div className="flex justify-center mt-20">
                  <Image
                    alt="blog"
                    width={650}
                    height={900}
                    src={featured.image ? featured.image : "favicon.png"}
                  />
                </div>
                <div className="absolute bottom-4 pt-8 md:bottom-8">
                  <p className="hidden text-zinc-700 hover:text-zinc-300 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
          <div className="flex flex-col w-full gap-8 mx-auto border-t  border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Card key={top2.slug}>
              {/*NEXAR */}
              <Article project={top2} imgWidth={330} imgHeight={400} />
            </Card>
            {/* XBRI */}
            <Card key={top3.slug}>
              <Article project={top3} imgWidth={500} imgHeight={600} />
            </Card>
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} imgWidth={500} imgHeight={600} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} imgWidth={500} imgHeight={600} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} imgWidth={500} imgHeight={600} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
