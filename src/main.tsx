import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css' 




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
