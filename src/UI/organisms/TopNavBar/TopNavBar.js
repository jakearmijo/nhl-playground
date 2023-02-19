import React from "react";
import { TopNavDiv, TopNavAnchor } from "./TopNavBar.style";

export default function TopNavBar() {
  return (
    <TopNavDiv>
      <TopNavAnchor href="/">
        Home
      </TopNavAnchor>
      <TopNavAnchor href="/profile">Profile</TopNavAnchor>
      <TopNavAnchor href="https://www.nhl.com/">NHL.com</TopNavAnchor>
      <TopNavAnchor href="/about">About This Project</TopNavAnchor>
    </TopNavDiv>
  );
}
