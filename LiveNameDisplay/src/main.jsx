import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LiveNameDisplay from './LiveNameDisplay.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LiveNameDisplay />
  </StrictMode>,
)
