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

export const StatsData = [
  {
    number: 2,
    name: "Année d'études",
  },
  {
    number: 15,
    name: "Projets",
  },
  {
    number: 200,
    name: "GitHub Commits",
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
    image: "/src/assets/images/java_logo.png",
    name: "Java",
    isCaroussel: false,
  },
  {
    image: "/src/assets/images/HTML_logo.jpg",
    name: "HTML",
    isCaroussel: true,
  },
  {
    image: "/src/assets/images/css_logo.png",
    name: "CSS",
    isCaroussel: true,
  },
  {
    image: "/src/assets/images/JS_logo.png",
    name: "JavaScript",
    isCaroussel: false,
  },
  {
    image: "/src/assets/images/Php_logo.png",
    name: "PHP",
    isCaroussel: true,
  },
  {
    image: "/src/assets/images/C++_logo.png",
    name: "C++",
    isCaroussel: false,
  },
  {
    image: "/src/assets/images/Csharp_logo.png",
    name: "C#",
    isCaroussel: true,
  },
  {
    image: "/src/assets/images/C_logo.webp",
    name: "C",
    isCaroussel: false,
  },
  {
    image: "/src/assets/images/ASM_logo.png",
    name: "Assembly",
    isCaroussel: true,
  },
  {
    image: "/src/assets/images/TS_logo.webp",
    name: "TypeScript",
    isCaroussel: false,
  },
];

export const FrameworksAndToolsData = [
  {
    image: "/src/assets/images/React_logo.webp",
    name: "React",
    isCaroussel: false,
  },
  {
    image: "/src/assets/images/Github_logo.webp",
    name: "GitHub",
    isCaroussel: true,
  },
  {
    image: "/src/assets/images/Vite_logo.jpg",
    name: "Vite",
    isCaroussel: false,
  },
  {
    image: "/src/assets/images/Godot_logo.jpeg",
    name: "Godot",
    isCaroussel: false,
  },
  {
    image: "/src/assets/images/Unity_logo.webp",
    name: "Unity",
    isCaroussel: false,
  },
  {
    image: "/src/assets/images/Docker_logo.jpeg",
    name: "Docker",
    isCaroussel: true,
  },
  {
    image: "/src/assets/images/Gitlab_logo.webp",
    name: "GitLab",
    isCaroussel: true,
  },
];

export const DatabasesData = [
  {
    image: "",
    name: "MySQL",
    isCaroussel: false,
  },
  {
    image: "",
    name: "OracleDB",
    isCaroussel: true,
  },
  {
    image: "",
    name: "SQLite",
    isCaroussel: false,
  },
  {
    image: "",
    name: "GraphDB",
    isCaroussel: true,
  },
];
