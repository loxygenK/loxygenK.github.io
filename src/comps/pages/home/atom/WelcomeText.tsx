import * as React from "react";
import styled from "styled-components";
import { BigText } from "comps/common/Formatter";

const WelcomeTextRoot = styled.div`
  font-size: 1.2em;
`;

export function WelcomeText() {
  return (
    <WelcomeTextRoot>
      Welcome to <br />
      <BigText>loxygen.k Portfolio</BigText>
    </WelcomeTextRoot>
  );
}
