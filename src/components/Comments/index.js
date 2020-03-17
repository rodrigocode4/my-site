import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import PropTypes from 'prop-types'

import * as S from './styled'

const Comments = ({url, title}) => {

    const completeURL = `http://localhost:8000${url}`

    return (
        <S.CommentsWrapper>
            <S.CommentsTitle>Comentários</S.CommentsTitle>
            <ReactDisqusComments
                shortname="rodrigocode4"
                identifier={completeURL}
                title={title}
                url={completeURL}/>
        </S.CommentsWrapper>
    )
}

Comments.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default Comments