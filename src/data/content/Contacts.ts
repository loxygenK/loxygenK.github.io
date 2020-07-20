import { ContactData } from "data/types/ContactData";
import { FaGithub, FaMailBulk, FaTwitter } from "react-icons/all";

export const Contacts: ContactData[] = [
  {
    caption: "Twitter (loxygenK)",
    color: "#2973a1",
    icon: FaTwitter,
    link: "https://twitter.com/loxygenK",
  },
  {
    caption: "Twitter (Flisan)",
    color: "#29a039",
    icon: FaTwitter,
    link: "https://twitter.com/flisan_loxy",
  },
  {
    caption: "GitHub",
    color: "#4b4b4b",
    icon: FaGithub,
    link: "https://github.com/loxygenK",
  },
  {
    caption: "E-mail",
    color: "#ca4639",
    icon: FaMailBulk,
    link: "mailto:contact@loxygen.dev",
  },
];
