import React from "react";
import { Link } from "react-router-dom";
//import woman image
import HeroImg from "../assets/hero/maria_1.svg";
//import Socials from "../assets/icons/socials";

const Hero = () => {
  return (
    <section
      className="section items-center lg:bg-cover lg:bg-center flex flex-col lg:bg-no-repeat lg:py-0 overflow-hidden justify-center dark:bg-dark"
    >
      <div className="flex items-center px-7">
        {/* left side */}
        <div className="flex-1 flex flex-col items-center justify-center lg:items-start">
          <h1 className="text-2xl font-bold text-accent pb-3 lg:text-4xl">
            Hey, I'm Maria!
          </h1>
          <h2 className="text-2xl text-primary leading-[40px] md:leading-tight lg:text-4xl lg:leading-[1.2] font-bold mf:tracking-[-2px] text-center lg:text-left dark:text-light pb-5">
            & I'm a Frontend Developer student!
          </h2>
          <div className="max-w-[680px] text-dark dark:text-paragraph text-wrap lg:text-left">
            <p>
              As a highly motivated web developer, I love solving problems and
              constantly strive to expand my skill set to deliver functional
              websites.
            </p>
            <p>
              I am excited to share my passion for creating modern and
              user-friendly websites with you on my personal website.
            </p>
            <br />
            <p>
              I <b>welcome</b> you to take a look around and see what I can
              create!
            </p>
          </div>
          <Link
            to={"/about"}
            className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all mt-5"
          >
            See More...
          </Link>
        </div>
        {/* rigth */}
        <div className="hidden lg:flex flex-1 justify-center items-center h-full">
          <img className="size-80" src={HeroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
