import React, { useState, useEffect } from "react";

import { projectsData } from "../../data";
import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    //get projects base on item
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return projects.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  return (
    <section className="section lg:bg-cover lg:bg-center flex flex-col dark:bg-dark dark:text-light text-primary lg:bg-no-repeat lg:py-0 lg:justify-center items-center overflow-auto">
      <div className="container mx-auto">
        <div className="flex flex-col mb-5 lg:flex-row items-center text-center lg:mt-0 justify-center lg:text-left ">
          {/* text */}
          <div className="flex flex-col  lg:items-start">
            <h1 className="pb-1 text-primary dark:text-light text-3xl lg:text-5xl lg:pb-5">
              Projects
            </h1>
            <p className="mb-1 max-w-sm pt-4 pb-4 text-base lg:text-left">
              Here I want to share my school projects that I worked on during my
              studies.
              <p>
                Some of them were deployed, while others remained in my{" "}
                <a
                  className="text-accent font-bold"
                  href="https://github.com/mariagryp"
                >
                  GitHub
                </a>{" "}
              </p>
            </p>
            <div className="flex justify-center lg:justify-start items-center flex-wrap gap-3 max-w-[420px] pb-4">
              <p className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 text-teal-300 bg-tertiary dark:bg-teal-400/10 dark:text-teal-300 ">
                HTML
              </p>
              <p className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 text-teal-300 bg-tertiary dark:bg-teal-400/10 dark:text-teal-300">
                CSS
              </p>
              <p className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 text-teal-300 bg-tertiary dark:bg-teal-400/10 dark:text-teal-300">
                JavaScript
              </p>
              <p className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 text-teal-300 bg-tertiary dark:bg-teal-400/10 dark:text-teal-300">
                React
              </p>
              <p className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 text-teal-300 bg-tertiary dark:bg-teal-400/10 dark:text-teal-300">
                Next.js
              </p>
              <p className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 text-teal-300 bg-tertiary dark:bg-teal-400/10 dark:text-teal-300">
                Tailwind
              </p>
              <p className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 text-teal-300 bg-tertiary dark:bg-teal-400/10 dark:text-teal-300">
                Git
              </p>
              <p className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5  text-teal-300 bg-tertiary dark:bg-teal-400/10 dark:text-teal-300">
                Figma
              </p>
              <p className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 text-teal-300 bg-tertiary dark:bg-teal-400/10 dark:text-teal-300">
                Trello
              </p>
            </div>
          </div>
          {/* projects grid*/}
          <div className="grid gap-2 lg:grid-cols-2 lg:gap-4 w-[560px]">
            {projects.map((item) => {
              return <Project item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
