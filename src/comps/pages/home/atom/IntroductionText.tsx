import * as React from "react";
import styled from "styled-components";
import { DetailedText } from "comps/common/Formatter";

const HelpText = styled(DetailedText)`
  display: block;
  margin-top: 1em;
`;

const ShowInSmartphone = styled.span`
  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const HideInSmartphone = styled.span`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export function IntrocutionText() {
  return (
    <HelpText>
      <ShowInSmartphone>
        右上のボタンから別のページに移動できます
      </ShowInSmartphone>
      <HideInSmartphone>
        上部ヘッダーのボタンから別のページに移動できます
      </HideInSmartphone>
    </HelpText>
  );
}
