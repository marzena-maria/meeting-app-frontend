import { Redirect } from "react-router-dom";
import Offline from "../meetUpImages/offline.jpg";
import Online from "../meetUpImages/online.webp";
import OnlineSetUp from "../meetUpImages/onlineSetUp.png";
import Zoom from "../meetUpImages/zoom.png";
import Career from "../meetUpImages/career6.png"
import Contact from "../meetUpImages/contact.jpeg"
import OnlineEvent from "../meetUpImages/onlineEvent.jpeg"

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
    img: OnlineEvent,
    link: '/events/online'
  },
  {
    title: "Join Our Team",
    subtitle: "",
    button:"Apply Now",
    img: Career,
    link:"/careers"
  },
  {
    title: "Have questions?",
    subtitle: "Communicate with Us 24*7",
    button:"Contact Us",
    img: Contact,
    link:"/contact"
  },
];
export default images;
