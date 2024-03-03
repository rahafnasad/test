import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import UserContextProvider from './component/dashbord/context/userContext.jsx';

axios.defaults.withCredentials = true;
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
      <ToastContainer />
    </UserContextProvider>
  </React.StrictMode>,
)
