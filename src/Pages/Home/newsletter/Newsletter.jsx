import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) {
            setMessage('Please enter a valid email address.');
        } else {
            setMessage('Thank you for subscribing! You will receive updates shortly.');
            setEmail('');
        }
    };

    return (
        <div className=" mt-6 py-12 px-6 md:px-16 rounded-lg shadow-md">
            <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4 animate__animated animate__fadeIn">Stay Updated with Our Latest Offers!</h2>
                <p className="text-lg mb-6">
                    Subscribe to our newsletter to receive updates on new tasks, promotions, and more.
                </p>
                
                <form onSubmit={handleSubscribe} className="flex justify-center items-center space-x-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-2 rounded-lg text-black w-64"
                        required
                    />
                    <button type="submit" className="bg-accent text-text px-6 py-2 rounded-lg hover:bg-yellow-400 transition">
                        Subscribe
                    </button>
                </form>

                {message && <p className="mt-4 text-lg font-medium">{message}</p>}
            </div>
        </div>
    );
};

export default Newsletter;
