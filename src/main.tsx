import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import ApiReference from './pages/ApiReference.tsx'
import GettingStarted from './pages/GettingStarted.tsx'
import GitHubIntegration from './pages/GitHubIntegration.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/api-reference" element={<ApiReference />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/github-integration" element={<GitHubIntegration />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
