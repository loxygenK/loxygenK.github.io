import * as React from "react";
import { Title } from "comps/common/Formatter";
import { ContactButtonList } from "./mol/ContactButtonList";

export function ContactPage() {
  return (
    <div>
      <Title>コンタクト</Title>
      ご連絡を取りたい人は以下からお気軽にどうぞ;
      <ContactButtonList />
    </div>
  );
}
