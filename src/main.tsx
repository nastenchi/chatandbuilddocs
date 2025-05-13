import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GettingStarted from './pages/GettingStarted.tsx'
// Remove history import and usage since it's not needed with React Router v6+

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/github-integration" element={<div>GitHub Integration Page</div>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
