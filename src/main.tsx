import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Root from './routes/root.tsx'
import Day1 from './routes/pages/day_1.tsx'
import Day2 from './routes/pages/day_2.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>
  },
  {
    path: "/day-1",
    element: <Day1/>
  }, 
  {
    path: "/day-2",
    element: <Day2/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
