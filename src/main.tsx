import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div className="min-h-screen bg-[#05050A] flex items-center justify-center text-white">Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>,
)
