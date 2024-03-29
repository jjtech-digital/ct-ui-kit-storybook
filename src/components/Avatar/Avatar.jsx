import React from "react";
import { Avatar } from "@commercetools-frontend/ui-kit";

const Avatarr = ({ firstName, lastName, size }) => {
  return (
    <div>
      <Avatar
        gravatarHash="20c9c1b252b46ab49d6f7a4cee9c3e68"
        firstName={firstName}
        lastName={lastName}
        size={size}
      />
    </div>
  );
};

export default Avatar;
