import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DataDisplay from './DataDisplay.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataDisplay />
  </StrictMode>,
)
