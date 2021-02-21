import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"

const PostItem = ({
  slug,
  background,
  color,
  category,
  date,
  timeToRead,
  title,
  description
}) => (
  <S.PostItemLink
    cover
    direction="down"
    bg={"var(--background)"}
    duration={0.6}
    to={slug}
  >
    <S.PostItemWrapper>
      <S.PostItemTag background={background} color={color}>
        {category}
      </S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} • {timeToRead} min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescripstion>{description}</S.PostItemDescripstion>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default PostItem
