import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <>
        <h1>Error 404</h1>
        <strong>This page does not exist</strong>
        <Link to="/home">Return home</Link>
    </>
  )
}
