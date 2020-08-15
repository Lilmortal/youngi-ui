import React from "react";
import { cn, createBem } from "../../../utils";
import styles from "./Contact.module.scss";
import Link, { NextLinkProps } from "../Link";

export interface ContactProps {
  links: Pick<NextLinkProps, "externalLink" | "children">[];
}

const bem = createBem(styles);

const Contact: React.FC<ContactProps> = ({ links }) => (
  <div className={cn(bem())}>
    {links.map((link) => (
      <Link externalLink={link.externalLink} className={bem("link")}>
        {link.children}
      </Link>
    ))}
  </div>
);

export default Contact;
