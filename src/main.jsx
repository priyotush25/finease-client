import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import AuthProvider from './Context/AuthProvider/AuthProvider.jsx'
import { PublicRoute } from './Router/PublicRoute.jsx'






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={PublicRoute} />
    </AuthProvider>
  </StrictMode>,
)
