import * as React from "react";
import styled from "styled-components";
import { BigText, DetailedText } from "../../../common/Formatter";

const WelcomeTextRoot = styled.div`
  font-size: 1.2em;
`;

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

export function WelcomeText() {
  return (
    <WelcomeTextRoot>
      Welcome to <br />
      <BigText>loxygen.k Portfolio</BigText>
      <HelpText>
        <ShowInSmartphone>
          右上のボタンから別のページに移動できます
        </ShowInSmartphone>
        <HideInSmartphone>
          上部ヘッダーのボタンから別のページに移動できます
        </HideInSmartphone>
      </HelpText>
    </WelcomeTextRoot>
  );
}
