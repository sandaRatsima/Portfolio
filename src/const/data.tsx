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
