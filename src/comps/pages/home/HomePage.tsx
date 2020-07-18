import * as React from "react";
import { LoxygenIcon } from "./atom/LoxygenIcon";
import styled from "styled-components";
import { WelcomeText } from "../../header/atom/WelcomeText";

const Centered = styled.div`
  text-align: center;
`;

export function HomePage() {
  return (
    <div>
      <Centered>
        <LoxygenIcon />
        <WelcomeText />
      </Centered>
    </div>
  );
}
