import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { store } from './Redux/store.js'
import router from './Router/router.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>

)
