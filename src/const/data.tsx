import { RiUserLine, RiUserFill } from "react-icons/ri";
import { FaRegCompass, FaCompass, FaGithub } from "react-icons/fa";
import {
  AiOutlineMessage,
  AiFillMessage,
  AiFillInstagram,
} from "react-icons/ai";
import { GoHome, GoHomeFill } from "react-icons/go";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { DiPython, DiFirebase, DiReact, DiLinux } from "react-icons/di";
import { Project } from "../models/ProjectsModel";

export const NavbarData = [
  {
    icons: <GoHome className="icon" />,
    fillIcon: <GoHomeFill className="icon" />,
    name: "Home",
  },
  {
    icons: <RiUserLine className="icon" />,
    fillIcon: <RiUserFill className="icon" />,
    name: "Profile",
  },
  {
    icons: <FaRegCompass className="icon" />,
    fillIcon: <FaCompass className="icon" />,
    name: "Explore",
  },
  {
    icons: <AiOutlineMessage className="icon" />,
    fillIcon: <AiFillMessage className="icon" />,
    name: "Message",
  },
];

export const SocialMediaData = [
  {
    icon: <FaGithub className="iconSocialMedia" />,
    name: "GitHub",
    id: "sandaRatsima",
    link: "https://github.com/sandaRatsima",
  },
  {
    icon: <TbBrandLinkedinFilled className="iconSocialMedia" />,
    name: "LinkedIn",
    id: "Sanda Ratsima",
    link: "https://www.linkedin.com/in/sanda-ratsima-bb8aa2297/",
  },
  {
    icon: <AiFillInstagram className="iconSocialMedia" />,
    name: "Instagram",
    id: "mahatsangyy",
    link: "https://www.instagram.com/mahatsangyy/",
  },
  {
    icon: <FaXTwitter className="iconSocialMedia" />,
    name: "X",
    id: "mahatsangyy",
    link: "https://x.com/mahatsangyy",
  },
];

export const SkillsNavbarData = [
  {
    icon: <DiPython className="iconSkillNavbar" />,
    name: "Programming language",
  },
  {
    icon: <DiReact className="iconSkillNavbar" />,
    name: "Framework and Tools",
  },
  {
    icon: <DiFirebase className="iconSkillNavbar" />,
    name: "Databases",
  },
  {
    icon: <DiLinux className="iconSkillNavbar" />,
    name: "Operating Systems",
  },
];

export const ProgrammingLanguagesData = [
  {
    image: "/images/java_logo.png",
    name: "Java",
    isCaroussel: false,
  },
  {
    image: "/images/HTML_logo.jpg",
    name: "HTML",
    isCaroussel: true,
  },
  {
    image: "/images/css_logo.png",
    name: "CSS",
    isCaroussel: true,
  },
  {
    image: "/images/JS_logo.png",
    name: "JavaScript",
    isCaroussel: false,
  },
  {
    image: "/images/Php_logo.png",
    name: "PHP",
    isCaroussel: true,
  },
  {
    image: "/images/C++_logo.png",
    name: "C++",
    isCaroussel: false,
  },
  {
    image: "/images/Csharp_logo.png",
    name: "C#",
    isCaroussel: true,
  },
  {
    image: "/images/C_logo.webp",
    name: "C",
    isCaroussel: false,
  },
  {
    image: "/images/ASM_logo.png",
    name: "Assembly",
    isCaroussel: true,
  },
  {
    image: "/images/TS_logo.webp",
    name: "TypeScript",
    isCaroussel: false,
  },
  {
    image: "/images/Python_logo.webp",
    name: "Python",
    isCaroussel: false,
  },
];

export const FrameworksAndToolsData = [
  {
    image: "/images/React_logo.webp",
    name: "React",
    isCaroussel: false,
  },
  {
    image: "/images/Github_logo.webp",
    name: "GitHub",
    isCaroussel: true,
  },
  {
    image: "/images/Vite_logo.jpg",
    name: "Vite",
    isCaroussel: false,
  },
  {
    image: "/images/Android_Studio_logo.webp",
    name: "Android Studio",
    isCaroussel: false,
  },
  {
    image: "/images/Godot_logo.jpeg",
    name: "Godot",
    isCaroussel: false,
  },
  {
    image: "/images/Unity_logo.webp",
    name: "Unity",
    isCaroussel: false,
  },
  {
    image: "/images/Docker_logo.jpeg",
    name: "Docker",
    isCaroussel: true,
  },
  {
    image: "/images/Gitlab_logo.webp",
    name: "GitLab",
    isCaroussel: true,
  },
];

export const DatabasesData = [
  {
    image: "/images/MySQL_logo.jpg",
    name: "MySQL",
    isCaroussel: false,
  },
  {
    image: "/images/OracleDB_logo.png",
    name: "OracleDB",
    isCaroussel: true,
  },
  {
    image: "/images/SQLite_logo.png",
    name: "SQLite",
    isCaroussel: false,
  },
  {
    image: "/images/SparQL_logo.png",
    name: "SparQL",
    isCaroussel: true,
  },
];

export const OperatingSystemsData = [
  {
    image: "/images/Windows_logo.jpg",
    name: "Windows",
    isCaroussel: true,
  },
  {
    image: "/images/Linux_logo.jpg",
    name: "Linux",
    isCaroussel: false,
  },
  {
    image: "/images/Android_logo.webp",
    name: "Android",
    isCaroussel: true,
  },
];

export let ProjectsData: Project[] = [];

export const StatsData = [
  {
    number: 2,
    name: "Years of Study",
  },
  {
    number: 0,
    name: "Projects",
  },
  {
    number: 200,
    name: "GitHub Commits",
  },
];

export const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
