import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'

import { Home } from '../components/Home'
import { Contact } from '../components/Contact'
import { Articles } from '../components/Aritcles'
import { Error } from '../components/Error'
import { Person } from '../components/Person'

export const MainRouter = () => {
  return (
    <BrowserRouter >

        <nav>
            <ul>
                <li>
                    <NavLink 
                        to="/home"
                        className={(({ isActive }) => isActive ? "active" : "")}>
                            Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/articles"
                        className={(({ isActive }) => isActive ? "active" : "")}>
                            Articles
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contact"
                        className={(({ isActive }) => isActive ? "active" : "")}>
                            Contact
                    </NavLink>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/person' element={<Person />} />
            <Route path='/person/:name' element={<Person />} />
            <Route path='/person/:name/:lastname' element={<Person />} />
            <Route path='/redirect' element={<Navigate to="/person/edgar/vergara"/>} />
            <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}
