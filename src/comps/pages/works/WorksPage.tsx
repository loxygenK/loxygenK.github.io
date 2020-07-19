import * as React from "react";
import { SubTitle, Title } from "comps/common/Formatter";
import { WorkList } from "./mol/WorkList";

export function WorksPage() {
  return (
    <div>
      <Title>やったこと</Title>
      <SubTitle>作ったもの</SubTitle>
      <WorkList />
    </div>
  );
}
