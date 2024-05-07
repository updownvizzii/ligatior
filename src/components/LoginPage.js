import React, { useState } from 'react';
import '../css/LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    
    // State for each login card
    const [adminLogin, setAdminLogin] = useState({ username: '', password: '' });
    const [cashierLogin, setCashierLogin] = useState({ username: '', password: '' });
    const [customerLogin, setCustomerLogin] = useState({ username: '', password: '' });

    const handleAdminLogin = () => {
        // Authentication logic for admin
        navigate('/admin');
    };

    const handleCashierLogin = () => {
        // Authentication logic for cashier
        navigate('/cashier');
    };

    const handleCustomerLogin = () => {
        // Authentication logic for customer
        navigate('/customer');
    };

    const handleCustomerRegister = () => {
        // Redirect to customer registration page
        // Implement the registration page
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h3>Admin Login</h3>
                <input
                    type="text"
                    placeholder="Username"
                    value={adminLogin.username}
                    onChange={(e) =>
                        setAdminLogin({ ...adminLogin, username: e.target.value })
                    }
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={adminLogin.password}
                    onChange={(e) =>
                        setAdminLogin({ ...adminLogin, password: e.target.value })
                    }
                />
                <button onClick={handleAdminLogin}>Login</button>
            </div>
            <div className="login-card">
                <h3>Cashier Login</h3>
                <input
                    type="text"
                    placeholder="Username"
                    value={cashierLogin.username}
                    onChange={(e) =>
                        setCashierLogin({ ...cashierLogin, username: e.target.value })
                    }
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={cashierLogin.password}
                    onChange={(e) =>
                        setCashierLogin({ ...cashierLogin, password: e.target.value })
                    }
                />
                <button onClick={handleCashierLogin}>Login</button>
            </div>
            <div className="login-card">
                <h3>Customer Login</h3>
                <input
                    type="text"
                    placeholder="Username"
                    value={customerLogin.username}
                    onChange={(e) =>
                        setCustomerLogin({ ...customerLogin, username: e.target.value })
                    }
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={customerLogin.password}
                    onChange={(e) =>
                        setCustomerLogin({ ...customerLogin, password: e.target.value })
                    }
                />
                <button onClick={handleCustomerLogin}>Login</button>
                <button onClick={handleCustomerRegister}>Register</button>
            </div>
        </div>
    );
};

export default LoginPage;
