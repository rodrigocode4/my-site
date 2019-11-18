import React from 'react';
import Profile from '../Profile';
import SocialLink from '../SocialLink';
import * as S from './styled';

const Sidebar = () => (
    <S.SidebarWrapper>
        <Profile />
        <SocialLink />
    </S.SidebarWrapper>
)

export default Sidebar;