import React from 'react';
import Profile from '../Profile';
import SocialLink from '../SocialLink';
import * as S from './styled';
import MenuLinks from '../MenuLinks';

const Sidebar = () => (
    <S.SidebarWrapper>
        <Profile />
        <SocialLink />
        <MenuLinks />
    </S.SidebarWrapper>
)

export default Sidebar;