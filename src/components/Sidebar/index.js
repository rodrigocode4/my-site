import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import * as S from "./styled"
import MenuLinks from "../MenuLinks"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SidebarWrapper>
)

export default Sidebar
