import React from 'react'
import App from './App.jsx'
import {  Routes, Route, Navigate } from 'react-router'
import Layout from './components/Layout.jsx'
import { About } from './Pages/About.jsx'
import { Contact } from './Pages/Contact.jsx'

import Setting from './Pages/Setting.jsx'

export default function NumberComparatorProject() {
  return (
    <div>
{/* <ThemeProvider> */}
{/* <BrowserRouter> */}

    <Routes>
      <Route path='/' element={ <Layout/>}>
      <Route path='/' element={<App/>} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/setting' element={<Setting/>}/>
      </Route>
    </Routes>
    {/* </BrowserRouter> */}
    {/* </ThemeProvider> */}
    </div>
  )
}

