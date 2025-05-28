import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import GettingStarted from './pages/GettingStarted.tsx'
import ApiReference from './pages/ApiReference.tsx'
import BestPractices from './pages/BestPractices.tsx'
import Tutorials from './pages/Tutorials.tsx'
import BuildTips from './pages/BuildTips.tsx'
import Publish from './pages/Publish.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/api-reference" element={<ApiReference />} />
        <Route path="/best-practices" element={<BestPractices />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/build-tips" element={<BuildTips />} />
        <Route path="/publish" element={<Publish />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
