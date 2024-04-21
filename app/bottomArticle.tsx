import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye, View } from "lucide-react";
import Image from "next/image"

type Props = {
	project: Project;
	imgWidth: number;
	imgHeight: number;
	
};

export const BottomArticle: React.FC<Props> = ({ project, imgWidth = 450, imgHeight = 900 }) => {
	
	return (
    <Link href={`/${project.slug}`}>
      <article className="flex md:p-8 cursor-fancy">
        <div className="justify-center">
          <div className=" gap-2 items-center">
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
        </div>
        <div className="flex justify-center align-middle items-center pl-44">
          <Image
            alt="blog"
            width={imgWidth}
            height={imgHeight}
            src={project.image ? project.image : "favicon.png"}
          />
        </div>
      </article>
    </Link>
  );
};