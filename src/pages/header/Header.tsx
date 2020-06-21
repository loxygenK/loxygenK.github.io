import * as React from "react";
import { Color } from "data/Value";
import styled from "styled-components";
import { Logo } from "./atom/Logo";
import { PageDestination } from "../../data/types/PageDestination";
import { Navigator } from "./mol/Navigator";

const HeaderRoot = styled.div`
  background-color: ${Color.blackishGray};
  height: 3em;
`;

type HeaderProps = {
  navigatesTo: PageDestination[];
};

export function Header(props: HeaderProps): JSX.Element {
  return (
    <HeaderRoot>
      <Logo />
      <Navigator navigatesTo={props.navigatesTo} />
    </HeaderRoot>
  );
}
