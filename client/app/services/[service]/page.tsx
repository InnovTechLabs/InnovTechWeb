import React from 'react'

export default function Service({params} : {params : {service : string}}) {
  return (
    <>
      <h1>Details about service {params.service}</h1>
    </>
  )
}
