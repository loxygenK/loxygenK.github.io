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
    name: "Java",
    description:
      "プログラミング始めたてのころにメモ帳でJavaを書いて挫折したことがあります",
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
    name: "CSS",
    description: "Reactのときにstyled-componentで使います",
    level: Level["Running"],
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
    name: "Android Native",
    description: "フレームワークではないかもしれない…",
    level: Level["Intermediate"],
  },
  {
    name: "React",
    description: "Reactの書き方がとても好きです",
    level: Level["Intermediate"],
  },
  {
    name: "Flutter",
    description: "Android アプリのときに最近良く使います",
    level: Level["Running"],
  },
  {
    name: "Unity",
    description: "3Dゲーム開発をしたくなると触ります。そんなにはできません。",
    level: Level["Running"],
  },
];

export const MiscSkills: SkillData[] = [
  {
    name: "Git",
    description: "ないとしんどい…",
    level: Level["Intermediate"],
  },
  {
    name: "Linux",
    description: "ArchLinuxを愛用しています",
    level: Level["Intermediate"],
  },
  {
    name: "Adobe XD",
    description: "Adobe XDとMacの組み合わせが好きです(個人の感想)",
    level: Level["Running"],
  },
  {
    name: "GitHub CI",
    description: "このポトフォでも一応走ってます",
    level: Level["Running"],
  },
  {
    name: "JetBrains",
    description: "補完がおばけで好きです",
    level: Level["Favorite"],
  },
];
