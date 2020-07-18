import {
  AiFillHeart,
  BsChatDotsFill,
  FaCheckSquare,
  FaRunning,
  GiWaterDrop,
} from "react-icons/all";
import { IconType } from "react-icons";

export type LevelData = {
  caption: string;
  icon: IconType;
};

export const Level: { [key: string]: LevelData } = {
  OnlyInterested: {
    caption: "興味ありあり",
    icon: BsChatDotsFill,
  },
  Running: {
    caption: "学んでいる途中",
    icon: FaRunning,
  },
  Bit: {
    caption: "ちょっとできる",
    icon: GiWaterDrop,
  },
  Intermediate: {
    caption: "それなりに(たぶん)できる",
    icon: FaCheckSquare,
  },
  Favorite: {
    caption: "すきすき",
    icon: AiFillHeart,
  },
};

/*
  | "OnlyInterested"
  | "Running"
  | "A bit"
  | "Intermediate"
  | "Favorite";
*/
