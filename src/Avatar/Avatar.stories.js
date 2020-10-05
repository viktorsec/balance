import React from "react";

import { Avatar } from "./Avatar";

export default {
  title: "Design System/Avatar",
  component: Avatar,
};

export const Standard = (args) => <Avatar {...args} />;
Standard.args = {
  size: "large",
  username: "John",
  src: "https://api.adorable.io/avatars/128/johnny@adorable.io.png",
};
