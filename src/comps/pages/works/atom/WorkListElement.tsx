import * as React from "react";
import styled from "styled-components";

const SizedImage = styled.img`
  width: 15em;
  height: 7em;
  object-fit: cover;
  object-position: 50% 15%;
`;

export function WorkListElement(props: {
  imgUrl: string;
  name: string;
  techs: string[];
  description: string;
  tips: string;
}) {
  return (
    <div>
      <SizedImage src={props.imgUrl} alt={props.name} />
      {props.name}
      {props.description}
    </div>
  );
}
