import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'

import { Home } from '../components/Home'
import { Contact } from '../components/Contact'
import { Articles } from '../components/Aritcles'
import { Error } from '../components/Error'

export const MainRouter = () => {
  return (
    <BrowserRouter >
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}
