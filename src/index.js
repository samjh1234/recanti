import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18: use createRoot instead of ReactDOM.render
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);