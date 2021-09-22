import React from "react";

import { UserSidebar } from "../../components";
import { UserHomeStyle } from "./UserHome.style";

export default function UserHome() {
  return (
    <UserHomeStyle>
      <UserSidebar />
    </UserHomeStyle>
  );
}
