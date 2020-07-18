import * as React from "react";
import styled from "styled-components";
import { FrameworkSkills, LangSkills } from "../../../../data/LangSkills";
import { SubTitle } from "../../../common/Formatter";
import { SkillList } from "./SkillList";

const SkillWrapper = styled.div`
  display: block;
  margin-top: 2em;
  margin-bottom: 3em;
`;

export function Skills() {
  return (
    <SkillWrapper>
      <SubTitle>使えるもの</SubTitle>
      <SkillList caption={"言語"} skills={LangSkills} />
      <SkillList caption={"フレームワーク"} skills={FrameworkSkills} />
    </SkillWrapper>
  );
}
