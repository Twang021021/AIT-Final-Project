import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import SuccessPage from './SuccessPage.jsx';
import AllReminders from './AllReminders.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/all" element={<AllReminders />} /> {}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
