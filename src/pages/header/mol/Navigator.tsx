import * as React from "react";
import { PageDestination } from "data/types/PageDestination";
import { NavigateButton } from "../atom/NavigateButton";
import styled from "styled-components";

const NavigatorRoot = styled.span`
  height: 100%;
  vertical-align: top;

  display: inline-flex;
`;

type NavigatorProps = {
  navigatesTo: PageDestination[];
};

export class Navigator extends React.Component<NavigatorProps> {
  render() {
    return (
      <NavigatorRoot>
        {this.props.navigatesTo.map((value, index) => (
          <NavigateButton key={index} caption={value.caption} url={value.url} />
        ))}
      </NavigatorRoot>
    );
  }
}
