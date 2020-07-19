import * as React from "react";
import { WrappedIcon } from "../atom/WrappedIcon";
import {
  BigText,
  DetailedText,
  SubText,
  SubTitle,
} from "comps/common/Formatter";
import styled from "styled-components";

const BasicInfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 1em;
`;

const SubTextBlock = styled(SubText)`
  display: block;
  margin-top: 0.5em;
`;

const DetailTextBlock = styled(DetailedText)`
  display: block;
  margin-top: 0.5em;
`;

export function BasicInfo() {
  return (
    <BasicInfoWrapper>
      <SubTitle>自己紹介</SubTitle>
      <WrappedIcon />
      <BigText>loxygen.k</BigText> or Flisan
      <br />
      <SubTextBlock>
        茨城工業高等専門学校 国際創造工学科 <br />
        情報系／グローバル系 2年
      </SubTextBlock>
      <DetailTextBlock>
        よくそこらにいる高専生です。
        <br />
        <code>{"while(true){be_interested(); be_bored();}"}</code>
        を無限に繰り返しています。
      </DetailTextBlock>
    </BasicInfoWrapper>
  );
}
