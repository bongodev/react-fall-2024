import React from 'react'

import { Outlet } from 'react-router'

import { Navbar } from './Header/Navbar'
import Footer from './Footer/Footer'
import clsx from 'clsx'
import { useTheme } from '../Hooks/useTheme'


function Layout() {
  const {theme} = useTheme()
  return (
    <div className={clsx(theme? 'bg-[#121212] text-[#EAEAEA]' : 'bg-[#f3f3f3]')}>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout