import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Info from './components/info.jsx'
import Education from './components/education.jsx'
import Experience from './components/experience.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Info />
    <Education />
    <Experience />
  </React.StrictMode>,
)
