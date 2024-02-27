import React from "react";
import { Link } from "react-router-dom";
//import images
import Image1 from "../../assets/img/skills/css3.png";
import Image2 from "../../assets/img/skills/figma.png";
import Image3 from "../../assets/img/skills/git.png";
import Image4 from "../../assets/img/skills/html5.png";
import Image5 from "../../assets/img/skills/js.png";
import Image6 from "../../assets/img/skills/reactjs.png";

const About = () => {
  return (
    <section className="section text-primary items-center lg:bg-cover lg:bg-center flex flex-col dark:bg-dark dark:text-light lg:bg-no-repeat lg:py-0 justify-center overflow-auto">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-start gap-x-24 text-center lg:justify-center lg:text-left lg:pt-32 xl:pt-52 pb-8">
          {/* text */}
          <div className="flex flex-col lg:items-start">
            <h1 className="pb-1 pt-8 text-3xl lg:text-5xl lg:pb-5 text-primary dark:text-light">
              My skills
            </h1>
            <p className="mb-12 max-w-sm pt-4 pb-4 text-base lg:text-left">
              My journey as a web developer started a couple of years ago, and
              during this time I have worked on various projects using HTML,
              CSS, JavaScript, React, Next.js, and Tailwind. I have also tried
              using other tools for creating web pages.
              <br />
              <br />
              You can see my projects and work on my{" "}
              <a className="text-accent" href="https://github.com/mariagryp">
                GitHub
              </a>
              , and some of them can be viewed by following this{" "}
              <Link to={"/projects"} className="text-accent">
                link
              </Link>
            </p>
          </div>
          {/* image */}
          <div className="grid grid-cols-3 lg:gap-2">
            <div className="max-w-[250px] lg:max-w-[320px] h-[180px] lg:h-[120px] overflow-hidden">
              <img
                className="object-cover h-[100px] lg:h-[120px] hover:scale-110 transition-all "
                src={Image1}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[180px] lg:h-[120px] overflow-hidden">
              <img
                className="object-cover h-[100px] lg:h-[120px]  hover:scale-110 transition-all "
                src={Image2}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[180px] lg:h-[120px] overflow-hidden">
              <img
                className="object-cover h-[100px] lg:h-[120px]  hover:scale-110 transition-all "
                src={Image3}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[180px] lg:h-[120px] overflow-hidden">
              <img
                className="object-cover h-[100px] lg:h-[120px]  hover:scale-110 transition-all "
                src={Image4}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[180px] lg:h-[120px] overflow-hidden">
              <img
                className="object-cover h-[100px] lg:h-[120px]  hover:scale-110 transition-all "
                src={Image5}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[180px] lg:h-[120px] overflow-hidden">
              <img
                className="object-cover h-[100px] lg:h-[120px]  hover:scale-110 transition-all "
                src={Image6}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
