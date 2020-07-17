import * as React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { Logo } from "../../common/Logo";
import { PageDestination } from "../../data/types/PageDestination";
import { DrawerNavigation } from "./mol/DrawerNavigation";

const DrawerRoot = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  box-sizing: border-box;

  padding: 1em 0;

  width: 10em;

  background-color: #4b4b87;
  height: 100vh;
`;

const AnimatedDrawerRoot = animated(DrawerRoot);

type DrawerProps = {
  isOpen: boolean;
  pages: PageDestination[];
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
    </AnimatedDrawerRoot>
  );
}
