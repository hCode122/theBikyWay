import React from 'react'
import ReactDOM from 'react-dom/client'
import Outer from './outer'
import Products from './products'
import './outer.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/theBikyWay",
    element: <Outer></Outer>,
    children: [
      {
        path: "/theBikyWay:name",
        element: <Products></Products>
      }
    ]
  },
  {
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
