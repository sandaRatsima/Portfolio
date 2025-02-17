import { RiUserLine, RiUserFill } from "react-icons/ri";
import { FaRegCompass, FaCompass } from "react-icons/fa";
import { AiOutlineMessage, AiFillMessage } from "react-icons/ai";
import { GoHome, GoHomeFill } from "react-icons/go";
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
