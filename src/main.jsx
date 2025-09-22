import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './fontawesome-free-6.7.2-web/css/all.min.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Acceuil from './composant/Acceuil'
import {Toaster} from 'react-hot-toast'
import Notfound from './composant/Notfound'

const route=createBrowserRouter(
  [
    {
      path:'/',
      element:<Acceuil/>
    },
    {
      path:'/*',
      element:<Notfound/>
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster/>
    <RouterProvider router={route} />
  </StrictMode>,
)
