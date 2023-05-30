import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './layouts/Layout.jsx'
import Home from './routes/Home/Home.jsx'
import Timetable from './routes/Timetable/Timetable.jsx'



import App from './App.jsx'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom'
import Contact from './routes/Contact/Contact.jsx'
import Pricing from './routes/Pricing/Pricing.jsx'

const router= createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      { 
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/timetable',
        element:<Timetable/>,
        
      },
      {
        path:'/pricing',
        element:<Pricing/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
   </React.StrictMode>,
)
