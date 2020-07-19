import { SkillData, SkillLevel } from "../types/SkillTypes";

export const LangSkills: SkillData[] = [
  {
    name: "Kotlin",
    description: "ラムダの書き方と拡張関数が大好きです",
    level: SkillLevel["Favorite"],
  },
  {
    name: "Python",
    description: "簡単なスクリプトを書くときによく使います",
    level: SkillLevel["Favorite"],
  },
  {
    name: "Java",
    description:
      "プログラミング始めたてのころにメモ帳でJavaを書いて挫折したことがあります",
    level: SkillLevel["Favorite"],
  },
  {
    name: "TypeScript",
    description: "Reactのときに使います",
    level: SkillLevel["Intermediate"],
  },
  {
    name: "C#",
    description: "Unityのときに使います",
    level: SkillLevel["Bit"],
  },
  {
    name: "CSS",
    description: "Reactのときにstyled-componentで使います",
    level: SkillLevel["Running"],
  },
  {
    name: "Go",
    description: "勉強したいといいながらしてない",
    level: SkillLevel["OnlyInterested"],
  },
  {
    name: "Rust",
    description: "先入観のせいでなかなか手を出せない",
    level: SkillLevel["OnlyInterested"],
  },
];

export const FrameworkSkills: SkillData[] = [
  {
    name: "Android Native",
    description: "フレームワークではないかもしれない…",
    level: SkillLevel["Intermediate"],
  },
  {
    name: "React",
    description: "Reactの書き方がとても好きです",
    level: SkillLevel["Intermediate"],
  },
  {
    name: "Flutter",
    description: "Android アプリのときに最近良く使います",
    level: SkillLevel["Running"],
  },
  {
    name: "Unity",
    description: "3Dゲーム開発をしたくなると触ります。そんなにはできません。",
    level: SkillLevel["Running"],
  },
];

export const MiscSkills: SkillData[] = [
  {
    name: "Git",
    description: "ないとしんどい…",
    level: SkillLevel["Intermediate"],
  },
  {
    name: "Linux",
    description: "ArchLinuxを愛用しています",
    level: SkillLevel["Intermediate"],
  },
  {
    name: "Adobe XD",
    description: "Adobe XDとMacの組み合わせが好きです(個人の感想)",
    level: SkillLevel["Running"],
  },
  {
    name: "GitHub CI",
    description: "このポトフォでも一応走ってます",
    level: SkillLevel["Running"],
  },
  {
    name: "JetBrains",
    description: "補完がおばけで好きです",
    level: SkillLevel["Favorite"],
  },
];
