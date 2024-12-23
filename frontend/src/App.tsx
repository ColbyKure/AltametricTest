import React from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom'; // Import necessary components

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import InvoicesPage from './pages/InvoicesPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Top Navigation Bar */}
        <nav className="navbar">
          <ul className="nav-list">
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/invoices" className="nav-item">Invoices</Link></li>
            <li><Link to="/login" className="nav-item">Login</Link></li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/invoices" element={<InvoicesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
