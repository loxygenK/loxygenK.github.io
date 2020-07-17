import * as React from "react";
import { PageDestination } from "data/types/PageDestination";
import styled, { css } from "styled-components";
import { Color } from "data/Value";

const NavigateButtonRoot = styled.a<{ border: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 80%;
  color: ${Color.white};
  background: ${Color.mediumGray};
  text-decoration: none;

  padding: 0 1em;
  width: 5em;

  border-right: 2px solid ${Color.blackishGray};

  transition: all 0.25s;

  ${(props) =>
    props.border
      ? css`
          border-bottom: 3px solid #61dafb;
        `
      : css`
          padding-bottom: 3px;
        `}
  :hover {
    background-color: ${Color.whitishGray};
    color: ${Color.blackishGray};
  }
`;

export function NavigateButton(props: PageDestination): JSX.Element {
  const isCurrentPage = window.location.pathname === props.url;

  return (
    <NavigateButtonRoot border={isCurrentPage} href={props.url}>
      {props.caption}
    </NavigateButtonRoot>
  );
}
