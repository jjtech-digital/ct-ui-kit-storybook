import React from "react";
import Link from "@commercetools-uikit/link";

const LinkCt = ({ isExternal, to, tone, label }) => {
  return (
    <Link isExternal={isExternal} to={to} tone={tone}>
      {label}
    </Link>
  );
};

export default LinkCt;
