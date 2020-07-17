import * as React from "react";
import { PageDestination } from "data/types/PageDestination";
import styled from "styled-components";

const DrawerNavButtonRoot = styled.div`
  background-color: #282886;
  padding: 0.5em;
`;

export function DrawerNavButton(page: PageDestination) {
  return <DrawerNavButtonRoot>{page.caption}</DrawerNavButtonRoot>;
}
