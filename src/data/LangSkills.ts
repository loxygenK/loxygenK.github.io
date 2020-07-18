import { SkillData } from "./types/SkillData";
import { Level } from "./types/Level";

export const LangSkills: SkillData[] = [
  {
    name: "kotlin",
    description: "ラムダの書き方と拡張関数が大好きです",
    level: Level["Favorite"],
  },
  {
    name: "Python",
    description: "簡単なスクリプトを書くときによく使います",
    level: Level["Favorite"],
  },
  {
    name: "C#",
    description: "Unityのときに使います",
    level: Level["Intermediate"],
  },
  {
    name: "TypeScript",
    description: "Reactのときに使います",
    level: Level["Intermediate"],
  },
  {
    name: "Go",
    description: "勉強したいといいながらしてない",
    level: Level["OnlyInterested"],
  },
  {
    name: "Rust",
    description: "先入観のせいでなかなか手を出せない",
    level: Level["OnlyInterested"],
  },
];

export const FrameworkSkills: SkillData[] = [
  {
    name: "Flutter",
    description: "Android アプリのときに最近良く使います",
    level: Level["Running"],
  },
  {
    name: "Android Native",
    description: "フレームワークではないかもしれない…",
    level: Level["Intermediate"],
  },
  {
    name: "Unity",
    description: "3Dゲーム開発をしたくなると触ります。そんなにはできません。",
    level: Level["Running"],
  },
  {
    name: "React",
    description: "Reactの書き方がとても好きです",
    level: Level["Intermediate"],
  },
];
