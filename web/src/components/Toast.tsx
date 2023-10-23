import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toast = () => (
  <ToastContainer
    position='top-right'
    hideProgressBar={true}
    autoClose={4000}
    closeButton={false}
    rtl={false}
    style={{
      fontSize: '16px',
      fontWeight: 600,
      borderRadius: '8px',
    }}
  />
);
