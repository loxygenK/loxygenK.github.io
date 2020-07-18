import * as React from "react";
import { LoxygenIcon } from "../../common/icon/LoxygenIcon";
import styled from "styled-components";
import { WelcomeText } from "./atom/WelcomeText";

const Centered = styled.div`
  text-align: center;
`;

export function HomePage() {
  return (
    <div>
      <Centered>
        <LoxygenIcon width="12em" />
        <WelcomeText />
      </Centered>
    </div>
  );
}
