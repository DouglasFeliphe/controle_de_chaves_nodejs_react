import React from 'react';
import Routes from './routes';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from './services/queries/queryClient';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { Toast } from './components/Toast';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />;
      <ReactQueryDevtools />
      <Toast />
    </QueryClientProvider>
  );
};

export default App;
