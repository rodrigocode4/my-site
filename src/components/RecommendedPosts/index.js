import React from "react"
import propTypes from "prop-types"
import * as S from "./styled"

const RecommendedPosts = ({ previous, next }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        cover
        direction="left"
        bg={"var(--background)"}
        duration={0.6}
        to={previous.fields.slug}
        className="previous"
      >
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
        cover
        direction="right"
        bg={"var(--background)"}
        duration={0.6}
        to={next.fields.slug}
        className="next"
      >
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    })
  }),
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    })
  })
}

export default RecommendedPosts
