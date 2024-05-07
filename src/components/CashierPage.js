import React, { useState } from 'react';
import '../css/CashierPage.css';

function CashierPage() {
    // State variables to track order items, total amount, and payment method
    const [orderItems, setOrderItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('cash'); // Default payment method

    // Function to add an item to the order
    const addItem = (itemName, price) => {
        const newTotal = total + price;
        setTotal(newTotal);
        setOrderItems([...orderItems, { itemName, price }]);
    };

    // Function to process payment based on the selected payment method
    const processPayment = () => {
        switch (paymentMethod) {
            case 'cash':
                handleCashPayment();
                break;
            case 'card':
                handleCardPayment();
                break;
            case 'upi':
                handleUPIPayment();
                break;
            default:
                alert('Invalid payment method selected.');
        }
    };

    // Function to handle cash payment
    const handleCashPayment = () => {
        alert(`Payment successful! Total: $${total.toFixed(2)}\nThank you for your cash payment.`);
        resetOrder();
    };

    // Function to handle card payment
    const handleCardPayment = () => {
        // Placeholder for card payment handling (e.g., redirecting to card payment gateway)
        alert(`Redirecting to card payment gateway for a total of $${total.toFixed(2)}`);
        // Reset order after payment
        resetOrder();
    };

    // Function to handle UPI payment
    const handleUPIPayment = () => {
        // Placeholder for UPI payment handling (e.g., redirecting to UPI payment gateway)
        alert(`Redirecting to UPI payment gateway for a total of $${total.toFixed(2)}`);
        // Reset order after payment
        resetOrder();
    };

    // Function to reset the order
    const resetOrder = () => {
        setOrderItems([]);
        setTotal(0);
        setPaymentMethod('cash'); // Reset payment method to default (cash)
    };

    return (
        <div className="cashier-page">
            <h1>Cashier Page</h1>
            <div className="order-summary">
                <h2>Order Summary</h2>
                <ul>
                    {orderItems.map((item, index) => (
                        <li key={index}>
                            <span>{item.itemName}</span>
                            <span>${item.price.toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
                <div className="total">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>
            <div className="payment-method">
                <h3>Payment Method</h3>
                <div className="payment-options">
                    <label>
                        <input
                            type="radio"
                            value="cash"
                            checked={paymentMethod === 'cash'}
                            onChange={() => setPaymentMethod('cash')}
                        />
                        Cash
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="card"
                            checked={paymentMethod === 'card'}
                            onChange={() => setPaymentMethod('card')}
                        />
                        Card
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="upi"
                            checked={paymentMethod === 'upi'}
                            onChange={() => setPaymentMethod('upi')}
                        />
                        UPI
                    </label>
                </div>
                <button onClick={processPayment}>Process Payment</button>
            </div>
            <div className="menu">
                <h2>Menu</h2>
                <ul>
                    <li onClick={() => addItem('Burger', 5.99)}>Burger - $5.99</li>
                    <li onClick={() => addItem('Pizza', 8.99)}>Pizza - $8.99</li>
                    <li onClick={() => addItem('Salad', 4.99)}>Salad - $4.99</li>
                    <li onClick={() => addItem('Fries', 2.49)}>Fries - $2.49</li>
                </ul>
            </div>
        </div>
    );
}

export default CashierPage;
