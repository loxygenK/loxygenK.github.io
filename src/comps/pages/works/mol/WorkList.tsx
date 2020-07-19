import * as React from "react";
import { ResponsiveWidth } from "../../../common/ResponsiveWidth";
import { WorkListElement } from "../atom/WorkListElement";
import { Works } from "../../../../data/content/Works";

export function WorkList() {
  return (
    <>
      {Works.map((value, index) => (
        <ResponsiveWidth key={index}>
          <WorkListElement workData={value} />
        </ResponsiveWidth>
      ))}
    </>
  );
}
