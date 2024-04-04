import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import UserLogin from './components/userInterface/UserLogin.jsx'
import UserSignUp from './components/userInterface/UserSignUp.jsx'
import Shimmer from './components/shimmer/Shimmer.jsx'

const root = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: 'login',
    element: <UserLogin/>
  },
  {
    path: 'signUp',
    element: <UserSignUp/>
  },
  {
    path: 'shimmer',
    element: <Shimmer/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={root}/>
  </React.StrictMode>
)
