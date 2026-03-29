import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TestOne from './components/test.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TestOne name= 'firsttt' age='1' address='third'/>,
     <TestOne name= 'firstt' age='1' address='third'/>,
      <TestOne name= 'first' age='1' address='third'/>
  </StrictMode>,
)
