import * as React from "react";
import { SubTitle, Title } from "../../common/Formatter";
import { WorkListElement } from "./atom/WorkListElement";

export function WorksPage() {
  return (
    <div>
      <Title>やったこと</Title>
      <SubTitle>作ったもの</SubTitle>
      <WorkListElement
        imgUrl={"works/musical-typer.png"}
        name={"musical-typer"}
        techs={["Python"]}
        description={"musical-typer"}
        tips={
          "以下のサイトの著作物を使用しています: http://www.music-note.jp/terms/index.html"
        }
      />
    </div>
  );
}
