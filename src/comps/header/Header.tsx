import * as React from "react";
import { BaseColors } from "data/Value";
import styled from "styled-components";
import { Logo } from "comps/common/Logo";
import { PageDestination } from "data/types/PageDestination";
import { Navigator } from "./mol/Navigator";
import { GiHamburgerMenu } from "react-icons/gi";

const HeaderRoot = styled.div`
  background-color: ${BaseColors.blackishGray};
  height: 3em;

  @media screen and (max-width: 700px) {
    text-align: center;
  }
`;

const HideOnSmartphone = styled.span`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const ShowOnSmartphone = styled.span`
  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const Hamburger = styled(GiHamburgerMenu)`
  position: fixed;
  top: 1em;
  right: 1em;
`;

type HeaderProps = {
  navigatesTo: PageDestination[];
  onDrawerOpen: () => void;
};

export function Header(props: HeaderProps): JSX.Element {
  return (
    <HeaderRoot>
      <Logo />
      <HideOnSmartphone>
        <Navigator navigatesTo={props.navigatesTo} />
      </HideOnSmartphone>
      <ShowOnSmartphone>
        <Hamburger onClick={() => props.onDrawerOpen()} />
      </ShowOnSmartphone>
    </HeaderRoot>
  );
}
