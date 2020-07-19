import * as React from "react";
import { ContactData } from "data/types/ContactData";
import styled from "styled-components";
import { UnstyledAnchor } from "comps/common/UnstyledAnchor";

export const ContactButtonRoot = styled.div<{
  background: string;
}>`
  background-color: ${(props) => props.background};
  color: #ffffff;

  padding: 0.3em 0.7em;
  margin: 0 0.75em;

  @media screen and (max-width: 30em) {
    margin: 0 0 0.5em 0;
  }
`;

export const Icon = styled.span`
  vertical-align: middle;
  margin-right: 0.5em;

  @media screen and (max-width: 60em) and (min-width: 30em) {
    display: block;
    margin-right: 0;
    text-align: center;
    font-size: 1.5em;
  }
`;

export const Caption = styled.span`
  line-height: 1em;

  @media screen and (max-width: 60em) and (min-width: 30em) {
    display: block;
    text-align: center;
  }
`;

export const LinkText = styled.div`
  opacity: 0.6;
  font-size: 0.75em;

  @media screen and (max-width: 60em) and (min-width: 30em) {
    display: none;
  }
`;

export function ContactButton(props: { contact: ContactData }) {
  return (
    <UnstyledAnchor href={props.contact.link} target="_blank">
      <ContactButtonRoot background={props.contact.color}>
        <div>
          <Icon>
            <props.contact.icon />
          </Icon>
          <Caption>{props.contact.caption}</Caption>
        </div>
        <LinkText>{props.contact.link}</LinkText>
      </ContactButtonRoot>
    </UnstyledAnchor>
  );
}
