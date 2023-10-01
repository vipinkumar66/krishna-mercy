import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BlogsList from './context/BlogsList.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlogsList>
      <App />
    </BlogsList>
  </React.StrictMode>,
)
