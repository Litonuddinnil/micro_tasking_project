import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const UniqueCTA = () => {
    return (
        <section className="relative  py-20 text-center rounded-lg shadow-lg overflow-hidden">
            
            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 animate__animated animate__fadeIn">
                    Unlock Your Earning Potential Today!
                </h2>
                <p className="text-lg md:text-xl mb-6 opacity-90 animate__animated animate__fadeIn animate__delay-1s">
                    Start completing tasks, earning rewards, and joining our community of workers and buyers. It's easy to get started, and your opportunities are endless!
                </p>

                <div className="flex justify-center space-x-6 mt-6">
                    <Link
                        to="/register"
                        className="bg-yellow-500  px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300"
                    >
                        Join Now and Earn
                    </Link>

                    <Link
                        to="/login"
                        className="bg-transparent border-2   px-8 py-4 rounded-lg font-semibold text-lg  first-letter: hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                    >
                        Already Have an Account?
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default UniqueCTA;
