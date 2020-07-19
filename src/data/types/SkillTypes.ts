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

export type LevelName =
  | "OnlyInterested"
  | "Running"
  | "Bit"
  | "Intermediate"
  | "Favorite";

export const SkillLevel: { [key in LevelName]: LevelData } = {
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

export type SkillData = {
  name: string;
  description: string;
  level: LevelData;
};
