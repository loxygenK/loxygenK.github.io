import * as React from "react";
import styled from "styled-components";
import { DetailedText } from "../../../common/Formatter";

const WorkListElementRoot = styled.span`
  display: inline-block;
  padding: 0.3em;

  overflow-wrap: break-word;

  background-color: #383863;
`;

const SizedImage = styled.img`
  width: 100%;
  height: 7em;
  object-fit: cover;
  object-position: 50% 15%;
`;

const WorkTitle = styled.div`
  font-size: 1.5em;
  vertical-align: baseline;
  border-bottom: 2px solid #494974;
`;

const UsedTechTag = styled.span`
  display: inline-block;
  padding: 0.2em 0.5em;
  margin: 0 0.3em 0.1em 0;
  background-color: #2f2f4c;
  font-size: 0.5em;
`;

export function WorkListElement(props: {
  imgUrl: string;
  name: string;
  techs: string[];
  description: string;
  tips: string;
}) {
  return (
    <WorkListElementRoot>
      <SizedImage src={props.imgUrl} alt={props.name} />
      <WorkTitle>{props.name}</WorkTitle>
      <div>
        {props.techs.map((str, index) => (
          <UsedTechTag key={index}>{str}</UsedTechTag>
        ))}
      </div>
      <div>{props.description}</div>
      <DetailedText>{props.tips}</DetailedText>
    </WorkListElementRoot>
  );
}
