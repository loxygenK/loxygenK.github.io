import styled from "styled-components";

export const CircledIcon = styled.img<{ width: string }>`
  width: ${(props) => props.width};
  align-content: center;
  text-align: center;
  border-radius: 12rem;

  border: #263353 5px dashed;
`;
