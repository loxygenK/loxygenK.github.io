import * as React from "react";
import { SkillData } from "../../../../data/types/SkillData";
import styled from "styled-components";
import { SkillListElement } from "../atom/SkilListElement";
import { MultipleRowList } from "../../../common/MultipleRowList";

const Caption = styled.div`
  font-size: 1.2em;
  margin-bottom: 0.75em;
`;

export function SkillList(props: { caption: string; skills: SkillData[] }) {
  return (
    <MultipleRowList>
      <Caption>{props.caption}</Caption>
      {props.skills.map((skill, index) => (
        <SkillListElement
          name={skill.name}
          description={skill.description}
          level={skill.level}
          key={index}
        />
      ))}
    </MultipleRowList>
  );
}
