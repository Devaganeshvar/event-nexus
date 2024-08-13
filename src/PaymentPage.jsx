import React, { useState } from 'react';
import './PaymentPage.css';
import Musicposter from "./Musicposter.png";

const PaymentPage = () => {
    const [firstName, setFirstName] = useState('Devaganeshvar');
    const [lastName, setLastName] = useState('VK');
    const [email, setEmail] = useState('devaganeshvar@gmail.com');
    const [isSubscribed, setIsSubscribed] = useState(true);
    const [isEmailUpdates, setIsEmailUpdates] = useState(true);

    const handlePlaceOrder = () => {
        alert('Order placed successfully!');
    };

    return (
        <div className="payment-page">
            <div className="payment-content">
                <div className="billing-info">
                    <h2>Billing Information</h2>
                    <p>Logged in as {email}. <a href="#">Not you?</a></p>
                    <div className="input-group">
                        <label>First name</label>
                        <input 
                            type="text" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                        />
                    </div>
                    <div className="input-group">
                        <label>Last name</label>
                        <input 
                            type="text" 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                        />
                    </div>
                    <div className="input-group">
                        <label>Email address</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="checkbox-group">
                        <label>
                            <input 
                                type="checkbox" 
                                checked={isSubscribed} 
                                onChange={() => setIsSubscribed(!isSubscribed)} 
                            />
                            Keep me updated on more events and news from this event organizer.
                        </label>
                    </div>
                    <div className="checkbox-group">
                        <label>
                            <input 
                                type="checkbox" 
                                checked={isEmailUpdates} 
                                onChange={() => setIsEmailUpdates(!isEmailUpdates)} 
                            />
                            Send me emails about the best events happening nearby or online.
                        </label>
                    </div>
                </div>

                <div className="order-summary">
                    <div className="event-image">
                        <img src={Musicposter} alt="Event" />
                    </div>
                    <h3>Order summary</h3>
                    <p><strong>1 x Delegate</strong></p>
                    <p>Subtotal: <span>₹190.00</span></p>
                    <p>Fees: <span>₹2.12</span></p>
                    <p>Delivery: <span>₹0.00</span></p>
                    <hr />
                    <p><strong>Total: ₹192.12</strong></p>
                    <div className="payment-method">
                        <h4>Pay with</h4>
                        <p>UPI</p>
                    </div>
                    <button onClick={handlePlaceOrder} className="place-order-btn">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
