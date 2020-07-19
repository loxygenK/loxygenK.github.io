import * as React from "react";
import { MultipleRowList } from "../../../common/MultipleRowList";
import { WorkListElement } from "../atom/WorkListElement";

export function WorkList() {
  return (
    <MultipleRowList>
      <WorkListElement
        imgUrl={"works/musical-typer.png"}
        name={"musical-typer"}
        techs={["Python"]}
        description={"musical-typer"}
        tips={
          "以下のサイトの著作物を使用しています: http://www.music-note.jp/terms/index.html"
        }
      />
    </MultipleRowList>
  );
}
