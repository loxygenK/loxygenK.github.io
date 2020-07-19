import * as React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { Logo } from "comps/common/Logo";
import { PageDestination } from "data/types/PageDestination";
import { DrawerNavigation } from "./mol/DrawerNavigation";
import { ModalBackground } from "./atom/ModalBackground";

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

  z-index: 101;
`;

const AnimatedDrawerRoot = animated(DrawerRoot);

type DrawerProps = {
  isOpen: boolean;
  pages: PageDestination[];
  onClosed: () => void;
};

export function Drawer(props: DrawerProps) {
  const { x } = useSpring({
    x: props.isOpen ? 0 : -10,
  });

  return (
    <div>
      <ModalBackground enabled={props.isOpen} onClick={props.onClosed} />
      <AnimatedDrawerRoot
        style={{
          left: x.interpolate((o) => `${o}em`),
        }}
      >
        <Logo />
        <DrawerNavigation pages={props.pages} />
      </AnimatedDrawerRoot>
    </div>
  );
}
