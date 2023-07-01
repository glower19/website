import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.sass';
import RoutesList from './components/routes/RoutesList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesList />
  </React.StrictMode>
);


