import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { NumberComparatorProject } from './NumberComparatorProject.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NumberComparatorProject/>
  </StrictMode>,
)
