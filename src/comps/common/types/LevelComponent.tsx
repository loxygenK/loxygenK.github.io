import * as React from "react";
import { LevelData } from "../../../data/types/Level";
import styled from "styled-components";

export const LevelComponentRoot = styled.div`
  font-size: 0.7em;
  color: #999;
`;

export const Icon = styled.span`
  font-size: 0.9em;
  vertical-align: middle;
`;

export function LevelComponent(props: { level: LevelData }) {
  return (
    <LevelComponentRoot>
      <Icon>
        <props.level.icon />
      </Icon>
      {props.level.caption}
    </LevelComponentRoot>
  );
}
