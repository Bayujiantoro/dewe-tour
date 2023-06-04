import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from 'react-router';

const client = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
        <App />
      {/* <Router>

      </Router> */}
    </QueryClientProvider>
  </React.StrictMode>
);


