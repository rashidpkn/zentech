import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/about'
import Home from '../pages/home'
import MainLayout from '../layout/main layout'
import { path } from './path'

export default function Router() {
  return (
    <Routes>
        <Route path={path.home} element={<MainLayout/>}>
            <Route index element={<Home/>} />
            <Route path={path.about} element={<About/>} />
        </Route>
    </Routes>
  )
}
