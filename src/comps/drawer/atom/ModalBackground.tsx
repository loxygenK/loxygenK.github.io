import * as React from "react";
import styled from "styled-components";
import { animated, useTransition } from "react-spring";

const ModalBackgroundRoot = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 100;

  backdrop-filter: blur(10px);
`;

const AnimatedModalBackgroundRoot = animated(ModalBackgroundRoot);

export function ModalBackground(props: {
  enabled: boolean;
  onClick: () => void;
}) {
  const transitions = useTransition(props.enabled, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <div onClick={props.onClick}>
      {transitions.map(
        ({ item, key, props }) =>
          item && <AnimatedModalBackgroundRoot key={key} style={props} />
      )}
    </div>
  );
}
