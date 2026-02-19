import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Gérer la redirection depuis 404.html pour les SPAs sur GitHub Pages
const redirectPath = sessionStorage.getItem('redirectPath');
if (redirectPath) {
  sessionStorage.removeItem('redirectPath');
  window.history.replaceState(null, '', redirectPath);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
