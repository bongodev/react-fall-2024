import React from 'react'
// import { Link } from 'react-router'
import { useTheme } from '../../Hooks'
import clsx from 'clsx'

 export function Footer() {
  const {theme} = useTheme()
  return (
        <footer className={clsx('inset-shadow-sm w-[100%] m-[auto] rounded', theme? 'bg-[#1E1E1E] text-[#EAEAEA]' : 'bg-[#f3f3f3]')}>
        <div className="w-full  text-center p-2 sticky bottom-0">
          <p>&copy; {new Date().getFullYear()} Number Comparator. All rights reserved.</p>
          <div>
          {/* <Link to="/home" className="p-2">Home</Link>
          <Link to="/contact" className="p-2">Contact</Link> */}
          </div>
        </div>
          
        </footer>
  )
  
}

export default Footer