import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from './Router/Router.jsx'
import ThemeProvider from './Context/ThemeContext/ThemeProvider.jsx'
import AuthProvider from './Context/AuthProvider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={Router}/>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
