// src/main-test.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Prueba de React</h1>
      <p>Si puedes ver esto, React está funcionando correctamente.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)