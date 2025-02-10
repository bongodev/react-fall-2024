import clsx from 'clsx'
import React from 'react'
// import { NavLink } from 'react-router'
import { useTheme } from '../../Hooks'

export function Navbar() {
  const {theme} =useTheme()
  return (
    <nav className={clsx('shadow w-[100%] m-[auto] rounded', theme? 'bg-[#1E1E1E] text-[#EAEAEA]' : 'bg-[#f3f3f3]')}>
      <h1 className='text-center p-1 font-bold text-xl'> Number Comparator App</h1>
        {/* <ol className='flex gap-6 p-2 justify-center '>
        <li><NavLink to="/" className={({ isActive}) => clsx(isActive ? "text-orange-400" : " ")}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive}) => clsx(isActive ? "text-orange-400" : " ")}>About</NavLink></li>
        <li ><NavLink to="/contact" className={({ isActive}) => clsx(isActive ? "text-orange-400" : " ")}>Contact</NavLink></li>
        <li><NavLink to="/setting" className={({ isActive}) => clsx(isActive ? "text-orange-400" : " ")}>Setting</NavLink></li>
        </ol> */}
    </nav>
  )
}
