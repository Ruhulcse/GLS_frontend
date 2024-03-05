import React from 'react'
import {  useLocation, useParams } from 'react-router-dom'

function BlogDetails() {
    const location = useLocation()
    const {id} = useParams()

    console.log(location);
    
  return (
    <div>{location.state.info}</div>
  )
}

export default BlogDetails