import * as React from "react";
import styled from "styled-components";
import { BaseColors } from "data/Value";

const LogoWrapper = styled.a`
  text-decoration: none;
  color: unset;

  display: inline-block;
  padding: 0.7em 2em;
  line-height: 0.9em;
  transition: all 0.25s;
  text-align: left;
  :hover {
    color: ${BaseColors.whitishGray};
    cursor: pointer;
  }
`;

const MainNameDiv = styled.div`
  font-size: 120%;
  border-bottom: #555255 2px solid;
`;

const SubNameDiv = styled.div`
  font-size: 80%;
`;

export function Logo() {
  return (
    <LogoWrapper href="/">
      <MainNameDiv>loxygen.k</MainNameDiv>
      <SubNameDiv>flisan</SubNameDiv>
    </LogoWrapper>
  );
}
