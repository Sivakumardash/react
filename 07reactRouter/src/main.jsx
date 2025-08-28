import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import './index.css'
import Home from './components/home/home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/user/user.jsx'
const router=createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:
    [
      { path:"",
        element:<Home />
      },
      {
        path:'about',
        element:<About />
      },
       {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'user/:userid', element:<User />
      }
    ]    
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)



/*

 -------------------------------
|           Header              |  <- Has NavLinks: Home, About, Contact
|  [ Home | About | Contact ]  |
 -------------------------------
|                               |
|          <Outlet />          |  <- This part changes depending on the route
|                               |
 -------------------------------
|           Footer              |
 -------------------------------

 How it works step by step

The Layout component always stays (Header + Footer are fixed).

Inside Layout, <Outlet /> is empty by default.

When you click:

Home → React Router matches path: "" → shows <Home /> inside <Outlet />.

About → matches path: "about" → shows <About />.

Contact → matches path: "contact" → shows <Contact />.

Think of <Outlet /> like a TV screen

The TV frame (Layout) always stays.

The channel (Home, About, Contact) changes inside that screen.

*/