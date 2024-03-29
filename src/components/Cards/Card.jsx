import React from "react";
import { Card } from "@commercetools-frontend/ui-kit";
import PropTypes from "prop-types";

export const CardComponent = ({
  theme,
  type,
  IsExternalLink,
  insetScale,
  isDisabled,
  children,
  className,
  to,
}) => {
  return (
    <Card
      theme={theme}
      type={type}
      IsExternalLink={IsExternalLink}
      insetScale={insetScale}
      isDisabled={isDisabled}
      className={className}
      to={to}
    >
      {children}
    </Card>
  );
};

CardComponent.propTypes = {
  theme: PropTypes.string,
  type: PropTypes.string,
  IsExternalLink: PropTypes.bool,
  insetScale: PropTypes.string,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  to: PropTypes.string,
};
