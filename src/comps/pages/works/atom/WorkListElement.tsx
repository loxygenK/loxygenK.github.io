import * as React from "react";
import styled from "styled-components";
import { DetailedText, SubText } from "comps/common/Formatter";
import { WorkData } from "data/types/WorkData";
import { UnstyledAnchor } from "comps/common/UnstyledAnchor";

const WorkListElementRoot = styled.span`
  display: inline-block;
  padding: 0.5em;

  overflow-wrap: break-word;

  background-color: #3c3c5f;

  transition: all 0.25s;

  :hover {
    background: #444482;
  }
`;

const SizedImage = styled.img`
  width: 100%;
  height: 7em;
  object-fit: cover;
  object-position: 50% 50%;
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

export function WorkListElement(props: { workData: WorkData }) {
  return (
    <UnstyledAnchor href={props.workData.link} target="_blank">
      <WorkListElementRoot>
        <SizedImage src={props.workData.imageUrl} alt={props.workData.name} />
        <WorkTitle>{props.workData.name}</WorkTitle>
        <div>
          {props.workData.techs.map((str, index) => (
            <UsedTechTag key={index}>{str}</UsedTechTag>
          ))}
        </div>
        <div>
          <SubText>{props.workData.description}</SubText>
        </div>
        <DetailedText>{props.workData.tips}</DetailedText>
      </WorkListElementRoot>
    </UnstyledAnchor>
  );
}
