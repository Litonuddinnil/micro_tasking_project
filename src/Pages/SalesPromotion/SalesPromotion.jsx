import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SalesPromotion = () => {
  const [showDetails, setShowDetails] = useState(false);
 const {user} = useAuth();
 const navigate = useNavigate();
  const handlerWork = () =>{
    if(user){
        navigate("/dashboard/taskList");
    }
    else navigate("/login");
  }
  const handleDetailsToggle = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="  mt-6 py-12 px-6 md:px-16 rounded-lg shadow-md  ">
      <div className="rounded-lg"></div>
      <div className=" text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 animate__animated animate__fadeIn">
          Limited Time Offer: Earn Double Rewards!
        </h2>
        <p className="text-lg mb-6 opacity-90 animate__animated animate__fadeIn animate__delay-1s">
          Complete tasks this week and earn double the rewards! Hurry, time is running out!
        </p>

        <div className="mb-6">
          <button
            onClick={handleDetailsToggle}
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition"
          >
            {showDetails ? 'Hide Details' : 'See More Details'}
          </button>
        </div>

        {showDetails && (
          <div className="bg-white text-blue-600 p-6 rounded-lg shadow-lg mt-6 opacity-90 animate__animated animate__fadeIn animate__delay-2s">
            <h3 className="text-2xl font-semibold mb-4">How It Works:</h3>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>Complete a task during the promotion week.</li>
              <li>Earn double the reward points for each task completed.</li>
              <li>Redeem your reward points for cash or exclusive offers.</li>
              <li>Offer valid only for the first 500 tasks completed.</li>
            </ul>
            <p className="mt-4">
              Don't miss out on this exclusive chance to maximize your earnings!
            </p>
          </div>
        )}

        <div className="mt-6">
          <button onClick={handlerWork} className="bg-accent text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-yellow-400 transition">
            Start Earning Now
          </button> 
        </div>
      </div>
    </div>
  );
};

export default SalesPromotion;
