import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import CustomerPage from './components/CustomerPage';
import CashierPage from './components/CashierPage';
import AdminPage from './components/AdminPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/cashier" element={<CashierPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;
