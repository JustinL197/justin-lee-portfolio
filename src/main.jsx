import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'

import '@fontsource/roboto/100.css'; // Thin
import '@fontsource/roboto/400.css'; // Regular
import '@fontsource/roboto/700.css'; // Bold

import '@fontsource/outfit/100.css'; // Thin
import '@fontsource/outfit/400.css'; // Regular
import '@fontsource/outfit/700.css'; // Bold

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
