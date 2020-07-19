import { WorkData } from "./types/WorkData";

export const Works: WorkData[] = [
  {
    imageUrl: "works/musical-typer.png",
    name: "musical-typer",
    techs: ["Python", "Pygame"],
    description:
      "歌詞と同じタイミングで流れてくる歌詞をタイプするゲーム。" +
      "設計をすっぽかして作ってしまったせいでとんでもないウンコードになってしまった。",
    tips:
      "以下のサイトの著作物を使用しています: http://www.music-note.jp/terms/index.html",
  },
  {
    imageUrl: "works/trailegger.png",
    name: "trailegger",
    techs: ["Kotlin", "Swing"],
    description:
      "Kotlinで作ったOSUのキーボード版みたいな音ゲー。" +
      "一応設計はしてあるのでmusical-typerよりもマシなはず。",
    tips:
      "以下のサイトの著作物を使用しています: http://www.music-note.jp/terms/index.html",
  },
  {
    imageUrl: "works/portfolio.png",
    name: "ポートフォリオ",
    techs: ["Typescript", "React"],
    description: "このポートフォリオ。React楽しい。",
    tips: "",
  },
];
