import styled from "styled-components";

export const Title = styled.h1`
  font-weight: initial;
  font-size: 2em;

  border-bottom: 3px solid #23233e;

  margin-top: 0;
`;

export const SubTitle = styled(Title)`
  font-size: 1.5em;
  margin-bottom: 1em;
  color: #aaa;
`;

export const BigText = styled.span`
  font-size: 1.5em;
`;

export const SubText = styled.span`
  font-size: 0.8em;
`;

export const DetailedText = styled.span`
  font-size: 0.7em;
  color: #999;
`;
