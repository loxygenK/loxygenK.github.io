import * as React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { Logo } from "../../common/Logo";
import { PageDestination } from "../../data/types/PageDestination";
import { DrawerNavigation } from "./mol/DrawerNavigation";

const DrawerRoot = styled.div`
  background-color: #292942;

  font-size: 0.9em;

  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;

  overflow: scroll;

  box-sizing: border-box;

  padding: 1em 0;
  width: 10em;
  height: 100vh;
`;

const CloseButton = styled.div`
  margin: 0.9em 1em;
  padding: 0.2em 0;

  border-top: 1px solid #43436c;

  font-size: 0.75em;

  user-select: none;
`;

const AnimatedDrawerRoot = animated(DrawerRoot);

type DrawerProps = {
  isOpen: boolean;
  pages: PageDestination[];
  onClosed: () => void;
};

export function Drawer(props: DrawerProps) {
  const { x } = useSpring({
    x: props.isOpen ? 0 : -15,
  });

  return (
    <AnimatedDrawerRoot
      style={{
        left: x.interpolate((o) => `${o}em`),
      }}
    >
      <Logo />
      <DrawerNavigation pages={props.pages} />
      <CloseButton onClick={props.onClosed}>閉じる</CloseButton>
    </AnimatedDrawerRoot>
  );
}
