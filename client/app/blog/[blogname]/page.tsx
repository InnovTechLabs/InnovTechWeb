import React from 'react'

export default function page({params} : {params : {blogname : String}}) {
  return (
    <div>page {params.blogname}</div>
  )
}
