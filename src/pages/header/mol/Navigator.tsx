import * as React from "react";
import { PageDestination } from "data/types/PageDestination";
import { NavigateButton } from "../atom/NavigateButton";

type NavigatorProps = {
  navigatesTo: PageDestination[];
};

export class Navigator extends React.Component<NavigatorProps> {
  render() {
    return (
      <span style={{ height: "100%", verticalAlign: "top" }}>
        {this.props.navigatesTo.map((value, index) => (
          <NavigateButton key={index} caption={value.caption} url={value.url} />
        ))}
      </span>
    );
  }
}
