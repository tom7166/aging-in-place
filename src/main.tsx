import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from"./App";
import ReactDOM from "react-dom/client";
import React from "react";

ReactDOM.createRoot (document.getELementById("root")!).render(
  <React.StrictMode>
<BrowserRouter basename="/aaron-michael-services">
  <App />
</BrowserRouter>
  </React.StrictMode>
  );
