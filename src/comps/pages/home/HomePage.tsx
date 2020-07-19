import * as React from "react";
import { LoxygenIcon } from "comps/common/icon/LoxygenIcon";
import styled from "styled-components";
import { WelcomeText } from "./atom/WelcomeText";
import { IntrocutionText } from "./atom/IntroductionText";

const Centered = styled.div`
  text-align: center;
`;

export function HomePage() {
  return (
    <div>
      <Centered>
        <LoxygenIcon width="12em" />
        <WelcomeText />
        <IntrocutionText />
      </Centered>
    </div>
  );
}
