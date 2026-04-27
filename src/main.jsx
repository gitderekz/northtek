import React from 'react'
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
</BrowserRouter>,
)
