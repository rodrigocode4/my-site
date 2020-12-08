import React from 'react'
import PostItem from '../PostItem'

const Hit = ({ hit }) =>  {

    console.log(hit)
    
    return (
        <PostItem 
            title={hit.title}
            description={hit.description}
            background={hit.background}
            category={hit.category}
            date={hit.date}
            timeToRead={hit.timeToRead}
            slug={hit.fields.slug}
        />
        )
        
    }
export default Hit