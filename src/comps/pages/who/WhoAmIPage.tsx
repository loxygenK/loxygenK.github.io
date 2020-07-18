import * as React from "react";
import { Title } from "comps/common/Formatter";
import { BasicInfo } from "./mol/BasicInfo";
import { Skills } from "./mol/Skills";

export function WhoAmIPage() {
  return (
    <div>
      <Title>{"Who's me?"}</Title>
      <BasicInfo />
      <Skills />
    </div>
  );
}
