import * as React from "react";
import styled from "styled-components";

const MarginedBox = styled.div`
  margin: 1.5rem;
  font-size: 1.2em;
`;

const BiggerText = styled.span`
  font-size: 1.4em;
`;

export function WelcomeText() {
  return (
    <MarginedBox>
      Welcome to <br />
      <BiggerText>loxygen.k Portfolio</BiggerText>
    </MarginedBox>
  );
}
