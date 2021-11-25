import React from 'react'
import { Route } from 'react-router'
import PostDetails from '../../containers/Posts/PostDetails'

function ProtectedRouter() {
    return (
        <Route path="/post/:id" element={<PostDetails />} />
    )
}

export default ProtectedRouter
