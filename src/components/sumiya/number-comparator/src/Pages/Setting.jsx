import React from 'react'
import { useTheme } from '../Hooks/useTheme'
import clsx from 'clsx'

function Setting() {
    const {theme,toggleTheme } = useTheme()
  return (
    <div className=' text-xl h-[70vh]'>
        <div className={clsx('flex flex-col items-center justify-center mt-30 p-20 w-[40%] m-[auto] rounded-md', theme? 'bg-[#222222] text-[#EAEAEA]' : 'bg-gray-200' )}>
        <h2 className='font-bold'>Choose Theme</h2>
        <button className='border p-2 border-gray-400 rounded'
                 onClick={ toggleTheme}
        >{theme? 'Light Mode' : 'Dark Mode'}</button>
        </div>
    </div>
  )
}

export default Setting