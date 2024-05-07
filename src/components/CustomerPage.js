import React, { useState } from 'react';
import jsPDF from 'jspdf'; // Library for generating PDF
import '../css/CustomerPage.css';

function CustomerPage() {
    // State variables to track order items, total amount, and payment method
    const [orderItems, setOrderItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('cash'); // Default payment method

    // Function to add an item to the order
    const addItem = (itemName, price) => {
        // Check if the item already exists in the order
        const itemIndex = orderItems.findIndex((item) => item.itemName === itemName);

        if (itemIndex !== -1) {
            // Item already exists, so increment its quantity
            const updatedOrderItems = [...orderItems];
            updatedOrderItems[itemIndex].quantity += 1;
            setOrderItems(updatedOrderItems);
        } else {
            // Item does not exist, so add it to the order with quantity of 1
            const newItem = { itemName, price, quantity: 1 };
            setOrderItems([...orderItems, newItem]);
        }

        // Update the total amount
        setTotal(total + price);
    };

    // Function to confirm the order
    const confirmOrder = () => {
        alert('Order confirmed!');
        // Additional logic for order confirmation (e.g., sending the order details to a server) can go here.
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
        generateBillPDF();
        resetOrder();
    };

    // Function to handle card payment
    const handleCardPayment = () => {
        // Placeholder for card payment handling (e.g., redirecting to card payment gateway)
        alert(`Redirecting to card payment gateway for a total of $${total.toFixed(2)}`);
        // Simulate successful payment
        generateBillPDF();
        resetOrder();
    };

    // Function to handle UPI payment
    const handleUPIPayment = () => {
        // Placeholder for UPI payment handling (e.g., redirecting to UPI payment gateway)
        alert(`Redirecting to UPI payment gateway for a total of $${total.toFixed(2)}`);
        // Simulate successful payment
        generateBillPDF();
        resetOrder();
    };

    // Function to reset the order
    const resetOrder = () => {
        setOrderItems([]);
        setTotal(0);
        setPaymentMethod('cash');
    };

    // Function to generate a PDF of the bill
    const generateBillPDF = () => {
        const doc = new jsPDF();
        doc.text('Restaurant Bill', 20, 20);
        orderItems.forEach((item, index) => {
            doc.text(`${item.itemName}: ${item.quantity} x $${item.price.toFixed(2)}`, 20, 30 + index * 10);
        });
        doc.text(`Total: $${total.toFixed(2)}`, 20, 30 + orderItems.length * 10);
        doc.save('bill.pdf');
    };

    return (
        <div className="customer-page">
            <h1>Menu</h1>
            <div className="menu">
                <ul>
                    <li onClick={() => addItem('Burger', 5.99)}>Burger - $5.99</li>
                    <li onClick={() => addItem('Pizza', 8.99)}>Pizza - $8.99</li>
                    <li onClick={() => addItem('Salad', 4.99)}>Salad - $4.99</li>
                    <li onClick={() => addItem('Fries', 2.49)}>Fries - $2.49</li>
                </ul>
            </div>
            <div className="order-summary">
                <h2>Order Summary</h2>
                <ul>
                    {orderItems.map((item, index) => (
                        <li key={index}>
                            <span>{item.itemName} x {item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
                <div className="total">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>
            <div className="actions">
                <button onClick={confirmOrder}>Confirm Order</button>
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
                {/* Button for processing payment placed in the payment method section */}
                <button onClick={processPayment}>Make Payment</button>
            </div>
        </div>
    );
}

export default CustomerPage;
