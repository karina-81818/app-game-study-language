import React from 'react';
import ReactDOM from 'react-dom/client';
import { ComponentContext } from './Context/MyContext'
import App from './App/App'
import './style/index.scss'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ComponentContext>
    <App />
    </ComponentContext>
  </React.StrictMode>
)
