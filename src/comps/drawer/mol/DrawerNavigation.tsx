import * as React from "react";
import { PageDestination } from "data/types/PageDestination";
import { DrawerNavButton } from "../atom/DrawerNavButton";

type DrawerNavigationProps = {
  pages: PageDestination[];
};

export function DrawerNavigation(props: DrawerNavigationProps) {
  return (
    <>
      {props.pages.map((page, index) => (
        <DrawerNavButton key={index} url={page.url} caption={page.caption} />
      ))}
    </>
  );
}
