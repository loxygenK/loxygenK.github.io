import { LoxygenIcon } from "comps/common/icon/LoxygenIcon";
import * as React from "react";
import styled from "styled-components";

export const Wraparounder = styled.span`
  float: left;
  margin-right: 1em;

  @media screen and (max-width: 800px) {
    float: none;
    display: block;
    text-align: center;
  }
`;

export function WrappedIcon() {
  return (
    <Wraparounder>
      <LoxygenIcon width="7em" />
    </Wraparounder>
  );
}
