import React from "react";
import { storiesOf } from "@storybook/react";
import Contact, { ContactProps } from "./Contact";

const defaultProps: ContactProps = {
  links: [
    {
      externalLink: "google.com",
      children: "E",
    },
    {
      externalLink: "google.com",
      children: "LI",
    },
    {
      externalLink: "google.com",
      children: "IG",
    },
  ],
};

const RenderedContact: React.FC<Partial<ContactProps>> = ({ ...props }) => (
  <Contact {...defaultProps} {...props} />
);

storiesOf("Contact", module).add("default", () => <RenderedContact />);
