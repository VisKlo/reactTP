import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/Clovis/Exercice/tp4/app'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)