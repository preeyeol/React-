import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThemeToggle from './ThemeToggle.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeToggle />
  </StrictMode>,
)
