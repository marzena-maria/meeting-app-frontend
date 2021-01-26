import { Redirect } from "react-router-dom";
import Offline from "../meetUpImages/offline.jpg";
import Online from "../meetUpImages/online.webp";
import OnlineSetUp from "../meetUpImages/onlineSetUp.png";
import Zoom from "../meetUpImages/zoom.png";

const images = [
  {
    title: "Connecting World",
    button: "Join Now",
    subtitle: "Join Us to explore",
    img: Offline,
  },
  {
    title: "Online events ",
    button: "Show events",
    subtitle: "at your doorstep",
    img: Online,
    handleClick: () => {return <Redirect to={{pathname:"/login"}}/>},
  },
  {
    title: "Events",
    subtitle: "Join Us to know more",
    img: OnlineSetUp,
  },
  {
    title: "",
    subtitle: "",
    img: Zoom,
  },
];
export default images;
