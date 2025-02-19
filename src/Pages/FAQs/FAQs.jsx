import React from "react";

const FAQs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold ">FAQs</h1>
        <p className="text-gray-500 text-lg mt-2">Find Your Answers Here</p>
      </div>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            {" "}
            <h2 className="text-xl font-semibold text-blue-600">
              What is the Micro Tasking and Earning Platform?
            </h2>
          </div>
          <div className="collapse-content">
            <p className=" text-gray-500 text-lg mt-2">
              Our platform allows users to complete small tasks to earn money.
              It caters to Workers, Buyers, and Admins with specific
              functionalities for each role.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow  join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            {" "}
            <h2 className="text-xl font-semibold text-blue-600">
              How does a Worker earn rewards?
            </h2>
          </div>
          <div className="collapse-content">
            <p className=" text-gray-500 text-lg mt-2">
              Workers view available tasks, complete them, submit for review,
              and upon approval, earn coins. Coins can be withdrawn as real
              money.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            {" "}
            <h2 className="text-xl font-semibold text-blue-600">
              What are a Buyer’s responsibilities?
            </h2>
          </div>
          <div className="collapse-content">
            <p className=" text-gray-500 text-lg mt-2">
              Buyers create tasks, review submissions, pay Workers, and can
              purchase additional coins to keep tasks running smoothly.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            {" "}
            <h2 className="text-xl font-semibold text-blue-600">
              What is the Admin’s role?
            </h2>
          </div>
          <div className="collapse-content">
            <p className=" text-gray-500 text-lg mt-2">
              Admins oversee platform activities, manage user roles, address
              reports, and ensure the system operates seamlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
