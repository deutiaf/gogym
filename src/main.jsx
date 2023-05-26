import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './layouts/Layout.jsx'
import Home from './routes/Home/Home.jsx'
import App from './App.jsx'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom'

const router= createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
   </React.StrictMode>,
)
