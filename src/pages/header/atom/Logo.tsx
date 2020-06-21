import * as React from "react";
import styled from "styled-components";
import { Color } from "data/Value";

const LogoRoot = styled.span`
  display: inline-block;
  padding: 0.7em 2em;
  line-height: 0.9em;
  transition: all 0.25s;
  :hover {
    color: ${Color.whitishGray};
    cursor: pointer;
  }
`;

const MainNameDiv = styled.div`
  font-size: 120%;
  border-bottom: #555255 1px solid;
`;

const SubNameDiv = styled.div`
  font-size: 80%;
`;

export function Logo() {
  return (
    <LogoRoot>
      <MainNameDiv>loxygen.k</MainNameDiv>
      <SubNameDiv>flisan</SubNameDiv>
    </LogoRoot>
  );
}
