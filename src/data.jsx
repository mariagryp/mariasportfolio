//  icons
import { FiGithub, FiMapPin, FiLinkedin } from "react-icons/fi";

// projects images
import Project1 from "./assets/img/projects/p1.png";
import Project2 from "./assets/img/projects/p2.png";
import Project3 from "./assets/img/projects/p3.png";
import Project4 from "./assets/img/projects/p4.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "projects",
    href: "projects",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Walnut Agent",
    category: "JavaScript",
    href: "https://enchanting-khapse-ea70ad.netlify.app/",
  },
  {
    id: "2",
    image: Project2,
    name: "Memory Game",
    category: "web development",
    href: "https://incredible-gaufre-380f74.netlify.app/",
  },
  {
    id: "3",
    image: Project3,
    name: "Game",
    category: "JavaScript",
    href: "https://tiny-heliotrope-425f2a.netlify.app/l7/",
  },
  {
    id: "4",
    image: Project4,
    name: "Walnut Agent",
    category: "Design/Layout",
    href: "https://enchanting-khapse-ea70ad.netlify.app/projects",
  },
  /*   {
    id: "5",
    image: Project5,
    name: "BBQ Kings",
    category: "school project",
    href: "https://johanhakanssn.github.io/Arbetsmetodik-2/",
  }, */
  /*  {
    id: "6",
    image: Project6,
    name: "Pärmar & Poesi",
    category: "school project",
    href: "https://vaantheman.github.io/Parmar-Poesi/",
  }, */
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
  {
    name: "branding",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// contact
export const contact = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/maria-grypishyn/",
    title: "Have a question?",
    subtitle: "Visit my",
    description: "Linkedin",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/mariagryp",
    title: "Wanna see more?",
    subtitle: "Visit my ",
    description: "GitHub.",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Stockholm, Sweden",
  },
];
