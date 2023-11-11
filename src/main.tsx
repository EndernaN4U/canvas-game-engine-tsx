import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import Test from './tests/test.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
)
