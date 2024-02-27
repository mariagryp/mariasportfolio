import React from "react";
import { Link } from "react-router-dom";
import Socials from "../../assets/icons/socials";

const About = () => {
  return (
    <section className="section items-center lg:bg-cover lg:bg-center flex flex-col lg:bg-no-repeat py-28 lg:py-0 overflow-hidden justify-center dark:bg-dark">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-24 lg:text-left lg:pt-16">
          <div className="pt-36 lg:pt-0 lg:w-auto flex flex-col justify-center items-center lg:items-start">
            <h2 className="pb-1 pt-8 text-2xl lg:text-5xl lg:pb-5">
              My Skills
            </h2>
            <p className="pt-4 pb-4 max-w-[598px] text-base lg:text-left">
              In the projects I've worked on, I used:
            </p>
            <div className="flex items-center justify-center flex-wrap gap-3 max-w-[460px] mb-12">
              <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                HTML
              </p>
              <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                CSS
              </p>
              <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                JavaScript
              </p>
              <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                React
              </p>
              <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                Next.js
              </p>
              <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                Tailwind
              </p>
              <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                Git
              </p>
              <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Figma
              </p>
            </div>
            {/* <p className="max-w-[598px] text-base lg:text-left">
              My journey as a web developer started a couple of years ago, and
              during this time I have worked on various projects using HTML,
              CSS, JavaScript, React, Next.js, and Tailwind. I have tried using
              other tools for creating web pages as well. You can see my school
              and other projects on my{" "}
              <a className="text-accent" href="https://github.com/mariagryp">
                GitHub
              </a>
              , and some of them can be seen by following this{" "}
              <Link to={"/projects"} className="text-accent">
                link
              </Link>
            </p> */}
          </div>
        </div>
        {/* skills */}
        {/* <div className="flex flex-col justify-center items-center max-w-[598px] container mx-auto gap-1 lg:pt-16 ">
          <h2 className="h2 text-xl lg:text-5xl lg:pb-5 mb-3">My Skills</h2>
          <p className="pb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
            aperiam! Hic, sed!
          </p>
          <div className="flex items-center justify-center flex-wrap gap-3 max-w-[460px] mb-12">
            <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
              HTML
            </p>
            <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
              CSS
            </p>
            <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
              JavaScript
            </p>
            <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
              React
            </p>
            <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
              Next.js
            </p>
            <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
              Tailwind
            </p>
            <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
              Git
            </p>
            <p className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
              Figma
            </p>
          </div>

          {/* social icon */}
        {/* <Socials
              containerStyles="flex gap-x-6 mb-8"
              iconsStyles="text-[28px] text-paragraph"
            /> 
        </div>*/}
      </div>
    </section>
  );
};

export default About;
