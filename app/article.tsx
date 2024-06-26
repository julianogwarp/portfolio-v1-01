import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import Image from "next/image"


type Props = {
	project: Project;
	imgWidth: number;
	imgHeight: number;
	
};

export const Article: React.FC<Props> = ({ project, imgWidth = 450, imgHeight = 900 }) => {
	console.log('project', project)
	return (
    <Link href={`/projects/${project.slug}`}>
      <article className="md:p-8 sm:p-8 p-4 cursor-fancy">
        <div className="flex justify-between gap-2 items-center">
          <span className="text-sm duration-500 text-sky-400 group-hover:text-sky-400 group-hover:border-zinc-800 drop-shadow-orange">
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
                  new Date(project.date)
                )}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </span>
        </div>
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-700  font-display">
          {project.title}
        </h2>
        <p className="z-20 mt-4 mb-2 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-700 font-sans">
          {project.description}
        </p>
        <div className="flex justify-center align-middle items-center">
          <Image
            alt="blog"
            width={imgWidth}
            height={imgHeight}
            src={"/favicon.png"}
          />
        </div>
      </article>
    </Link>
  );
};
