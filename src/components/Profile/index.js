import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../Avatar';
import * as S from './styled';

const Profile = () => {
  const {
    site: {
      siteMetadata: {
        author, position, description
      }
    }
  } = useStaticQuery(graphql`
    query MysiteMetadata {
        site {
          siteMetadata {
            author
            position
            description
          }
        }
      }
      
    `)

  return (
    <S.ProfileWrapper>
      <Avatar />
      <S.ProfileLink>
        <S.ProfileAuthor>
          {author}
          <S.ProfileProsition>{position}</S.ProfileProsition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <p>{description}</p>
    </S.ProfileWrapper>
  )
}

export default Profile;