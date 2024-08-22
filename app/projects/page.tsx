import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "CodeLingo",
    mockup: "/mockups/mock1.png",
    live: "https://codelingo.netlify.app",
    code: "https://github.com/sudhz/CodeLingo",
  },
];

const Portfolio = () => {
  return (
    <div className="text-center">
      {/*       <p>Open Source Contributions:</p>
      <Link
        className="link link-primary"
        href="https://github.com/danielcranney/profileme-dev/pull/34"
      >
        ProfileMe.dev
      </Link> */}
      <div className="flex flex-wrap items-start mb-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={project.mockup}
              alt={`mockup ${index}`}
              width={1024}
              height={576}
              priority
            />
            <h1 className="text-3xl mb-2">{project.title}</h1>
            <div className="flex gap-2">
              <Link
                href={project.live}
                target="_blank"
                className="btn btn-secondary"
              >
                Live
              </Link>
              <Link
                href={project.code}
                target="_blank"
                className="btn btn-primary"
              >
                Source
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
