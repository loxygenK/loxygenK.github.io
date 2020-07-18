import * as React from "react";
import { SkillData } from "../../../../data/types/SkillData";
import { SubText } from "../../../common/Formatter";
import { LevelComponent } from "../../../common/types/LevelComponent";
import styled from "styled-components";

export const SkillListElementRoot = styled.div`
  padding-bottom: 0.2em;
  margin-bottom: 0.8em;

  border-bottom: 2px solid #424266;
`;

export function SkillListElement(skill: SkillData) {
  return (
    <SkillListElementRoot>
      {skill.name}
      <LevelComponent level={skill.level} />
      <SubText>{skill.description}</SubText>
    </SkillListElementRoot>
  );
}
