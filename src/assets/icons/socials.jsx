"use client";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const icons = [
  {
    path: "/",
    name: <SiHtml5 />,
  },
  {
    path: "/",
    name: <SiCss3 />,
  },
  {
    path: "/",
    name: <SiJavascript />,
  },
  {
    path: "/",
    name: <SiReact />,
  },
  {
    path: "/",
    name: <SiTailwindcss />,
  },
];

const Socials = ({
  containerStyles = "flex gap-x-6 mx-auto xl:mx-0",
  iconsStyles = "text-foreground text-[22px] hover:text-primary transition-all",
}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <a href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
