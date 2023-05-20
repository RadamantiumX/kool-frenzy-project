import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';

//MDB
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import router from './router';
import { RouterProvider } from 'react-router-dom';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>
  </React.StrictMode>,
)
