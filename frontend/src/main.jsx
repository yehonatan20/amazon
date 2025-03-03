import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {HelmetProvider} from 'react-helmet-async'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import axios from 'axios';
import {StoreProvider} from './store.jsx'

axios.defaults.baseURL='http://localhost:8080';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StoreProvider>
  </StrictMode>,
)
