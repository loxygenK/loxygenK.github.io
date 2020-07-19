import * as React from "react";
import styled from "styled-components";
import { Contacts } from "../../../../data/content/Contacts";
import { ContactButton } from "../atom/ContactButton";

const ContactButtonsRoot = styled.div`
  margin: 3em;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 30em) {
    margin: 1em 0;
    display: block;
  }
`;

export function ContactButtonList() {
  return (
    <ContactButtonsRoot>
      {Contacts.map((value, index) => (
        <ContactButton contact={value} key={index} />
      ))}
    </ContactButtonsRoot>
  );
}
