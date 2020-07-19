import { ContactData } from "./types/ContactData";
import { FaGithub, FaTwitter } from "react-icons/all";

export const Contacts: ContactData[] = [
  {
    caption: "Twitter (loxygenK)",
    color: "#1da0f0",
    icon: FaTwitter,
    link: "https://twitter.com/loxygenK",
    textBlack: false,
  },
  {
    caption: "Twitter (Flisan)",
    color: "#3df01d",
    icon: FaTwitter,
    link: "https://twitter.com/flisan_loxy",
    textBlack: false,
  },
  {
    caption: "GitHub",
    color: "#fdfdfd",
    icon: FaGithub,
    link: "https://github.com/loxygenK",
    textBlack: true,
  },
];
