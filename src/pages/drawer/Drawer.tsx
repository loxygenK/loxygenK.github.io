import * as React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const DrawerRoot = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 15em;

  background-color: #4b4b87;
  height: 100vh;
`;

const AnimatedDrawerRoot = animated(DrawerRoot);

export function Drawer(props: { isOpen: boolean }) {
  const { x } = useSpring({
    x: props.isOpen ? 0 : -15,
  });

  return (
    <AnimatedDrawerRoot
      style={{
        left: x.interpolate((o) => `${o}em`),
      }}
    >
      Test
    </AnimatedDrawerRoot>
  );
}
