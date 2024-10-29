
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; 
import {App} from './App';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const rootElement = document.getElementById('root');


  const root = createRoot(rootElement as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
      <ToastContainer position='top-center'/>
    </React.StrictMode>
  );
