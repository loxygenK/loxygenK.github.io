import * as React from "react";
import { MultipleRowList } from "../../../common/MultipleRowList";
import { WorkListElement } from "../atom/WorkListElement";
import { Works } from "../../../../data/Works";

export function WorkList() {
  return (
    <>
      {Works.map((value, index) => (
        <MultipleRowList key={index}>
          <WorkListElement workData={value} />
        </MultipleRowList>
      ))}
    </>
  );
}
