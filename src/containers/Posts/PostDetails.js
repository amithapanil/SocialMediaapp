import React from 'react'
import { useParams } from 'react-router'

function PostDetails() {
    const {id} = useParams();
    return (
        <div>
            {id}
        </div>
    )
}

export default PostDetails
