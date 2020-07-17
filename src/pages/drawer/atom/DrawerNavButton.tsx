import * as React from "react";
import { PageDestination } from "data/types/PageDestination";
import styled from "styled-components";

const DrawerNavButtonRoot = styled.div`
  background-color: #37376d;
  padding: 0.5em;
`;

export function DrawerNavButton(props: PageDestination) {
  return <DrawerNavButtonRoot>{props.caption}</DrawerNavButtonRoot>;
}
