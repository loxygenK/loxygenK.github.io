import * as React from "react";
import { SkillData } from "../../../../data/types/SkillData";
import { BigText, SubText } from "../../../common/Formatter";
import { LevelComponent } from "../../../common/types/LevelComponent";
import styled from "styled-components";

export const SkillListElementRoot = styled.div`
  padding: 1em;
  margin-bottom: 0.8em;

  background-color: #2a2a4b;
`;

export function SkillListElement(skill: SkillData) {
  return (
    <SkillListElementRoot>
      <BigText>{skill.name}</BigText>
      <LevelComponent level={skill.level} />
      <SubText>{skill.description}</SubText>
    </SkillListElementRoot>
  );
}
