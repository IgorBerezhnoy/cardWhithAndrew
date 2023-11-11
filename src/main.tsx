import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import './index.css'

// eslint-disable-next-line import/extensions
import { App } from './App.tsx'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
