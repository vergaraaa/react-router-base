import React from 'react'
import { useParams } from 'react-router-dom'

export const Person = () => {

    const { name, lastname} = useParams();

  return (
    <div>
        { !name && <h1>No person to show</h1> }
        { name && <h1>Person page: {name} {lastname}</h1> }
        <p>This is the person page</p>
    </div>
  )
}
