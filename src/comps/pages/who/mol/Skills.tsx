import * as React from "react";
import styled from "styled-components";
import { FrameworkSkills, LangSkills } from "../../../../data/LangSkills";
import { SkillListElement } from "../atom/SkilListElement";
import { SubTitle } from "../../../common/Formatter";

const SkillWrapper = styled.div`
  display: block;
  margin-top: 2em;
  margin-bottom: 3em;
`;

const ContentsHeader = styled.div`
  font-size: 1.2em;
  margin-bottom: 0.75em;
`;

export function Skills() {
  return (
    <SkillWrapper>
      <SubTitle>使えるもの</SubTitle>
      <ContentsHeader>言語</ContentsHeader>
      {LangSkills.map((skill, index) => (
        <SkillListElement
          name={skill.name}
          description={skill.description}
          level={skill.level}
          key={index}
        />
      ))}
      <ContentsHeader>フレームワーク</ContentsHeader>
      {FrameworkSkills.map((skill, index) => (
        <SkillListElement
          name={skill.name}
          description={skill.description}
          level={skill.level}
          key={index}
        />
      ))}
    </SkillWrapper>
  );
}
