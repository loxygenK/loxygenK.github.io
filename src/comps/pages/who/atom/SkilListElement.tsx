import * as React from "react";
import { SkillData } from "../../../../data/types/SkillTypes";
import { BigText, SubText } from "../../../common/Formatter";
import { LevelComponent } from "../../../common/types/LevelComponent";
import styled from "styled-components";

const SkillListElementRoot = styled.div`
  padding: 1em;
  margin-bottom: 0.8em;

  background-color: #2a2a4b;
`;

const SkillTitle = styled(BigText)`
  display: block;
  border-bottom: 3px solid #494974;
`;

export function SkillListElement(skill: SkillData) {
  return (
    <SkillListElementRoot>
      <SkillTitle>{skill.name}</SkillTitle>
      <LevelComponent level={skill.level} />
      <SubText>{skill.description}</SubText>
    </SkillListElementRoot>
  );
}
