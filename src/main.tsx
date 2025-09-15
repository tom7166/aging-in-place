import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HashRouter } from "react-router-dom";
<BrowserRouter basename="/aging-in-place">
<App />
</BrowserRouter>
import App from"./App";
import ReactDOM from "react-dom/client";
import React from "react";

ReactDOM.createRoot (document.getElementById("root")!).render(
  <React.StrictMode>
<BrowserRouter basename="/aging-in-place">
  <App />
</BrowserRouter>
  </React.StrictMode>
  );
