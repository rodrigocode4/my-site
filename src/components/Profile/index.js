import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

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
        <div className="profile-wrapper">
            <h1>{author}</h1>
            <h2>{position}</h2>
            <p>{description}</p>
        </div>
    )
}
/* 
const Profile = () => (
    <StaticQuery
        query={graphql`
            query MysiteMetadata {
                site {
                  siteMetadata {
                    author
                    position
                    description
                  }
                }
              }
              
            `
        }
        render={({ site: { siteMetadata: { author, position, description } } }) => (
            <div className="profile-wrapper">
                <h1>{author}</h1>
                <h2>{position}</h2>
                <p>{description}</p>
            </div>
        )}
    />

) */

export default Profile;