import * as React from "react";
import { SkillData } from "../../../../data/types/SkillData";
import styled from "styled-components";
import { SkillListElement } from "../atom/SkilListElement";

const SkillListRoot = styled.div`
  vertical-align: top;

  @media screen and (min-width: 800px) {
    display: inline-block;
    box-sizing: border-box;

    padding-right: 2em;
    padding-bottom: 3em;
  }

  @media screen and (min-width: 800px) {
    width: 50%;
  }
  @media screen and (min-width: 1200px) {
    width: 33%;
  }
`;

const Caption = styled.div`
  font-size: 1.2em;
  margin-bottom: 0.75em;
`;

export function SkillList(props: { caption: string; skills: SkillData[] }) {
  return (
    <SkillListRoot>
      <Caption>{props.caption}</Caption>
      {props.skills.map((skill, index) => (
        <SkillListElement
          name={skill.name}
          description={skill.description}
          level={skill.level}
          key={index}
        />
      ))}
    </SkillListRoot>
  );
}
