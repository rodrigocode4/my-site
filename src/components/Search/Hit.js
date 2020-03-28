import React from 'react'
import PostItem from '../PostItem'

const Hit = ({ hit }) => (
    <PostItem 
        title={hit.title}
        description={hit.description}
        background={hit.color}
        category={hit.category}
        date={hit.date}
        slug={hit.fields.slug}
    />
)

export default Hit