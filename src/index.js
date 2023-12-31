import React from 'react';
import { SearchProvider } from './contexts/SearchContext';
import { CoordinatesProvider } from './contexts/CoordinatesContext';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CoordinatesProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </CoordinatesProvider>
  </React.StrictMode>
);


