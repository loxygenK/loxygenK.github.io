import * as React from "react";
import { PageDestination } from "data/types/PageDestination";
import styled, { css } from "styled-components";
import { UndecoratedAnchor } from "comps/common/UndecoratedAnchor";

const DrawerNavButtonRoot = styled.div<{ border: boolean }>`
  background-color: #37376d;
  padding: 0.5em;
  margin: 0 2px 2px 0;
  user-select: none;

  line-height: 2em;

  ${(props) =>
    props.border
      ? css`
          border-left: 3px solid #6262b1;
        `
      : css`
          padding-left: calc(0.5em + 3px);
        `}
`;

export function DrawerNavButton(props: PageDestination) {
  const isCurrentPage = window.location.pathname === props.url;

  return (
    <UndecoratedAnchor href={props.url}>
      <DrawerNavButtonRoot border={isCurrentPage}>
        {props.caption}
      </DrawerNavButtonRoot>
    </UndecoratedAnchor>
  );
}
