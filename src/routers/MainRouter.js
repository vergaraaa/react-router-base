import React from 'react'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom'

import { Home } from '../components/Home'
import { Contact } from '../components/Contact'
import { Articles } from '../components/Aritcles'
import { Error } from '../components/Error'

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
            <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}
