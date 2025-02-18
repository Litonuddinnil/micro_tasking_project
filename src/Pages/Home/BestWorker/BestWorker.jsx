import { Typewriter } from "react-simple-typewriter";
import useUsers from "../../../hooks/useUsers";
import { useState } from "react";
import { FaStar, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const BestWorker = () => {
  const [users] = useUsers();
  const [showCursor, setShowCursor] = useState(true);

  const workers = users.filter((user) => user.role === "Worker");
  const sortedWorkers = workers.sort((a, b) => b.coins - a.coins);
  const topWorkers = sortedWorkers.slice(0, 6);

  return (
    <div className=" mt-6">
      <h2 className="text-4xl font-bold text-center mb-8">
        <Typewriter
          words={["Top 6 Best Workers"]}
          loop={1}
          cursor={showCursor}
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          onLoopDone={() => setShowCursor(false)}
        />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {topWorkers.map((worker) => (
          <div
            key={worker._id}
            className="relative bg-gradient-to-br from-white to-blue-50 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
          >
            {/* Profile Section */}
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24">
                <img
                  className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
                  src={worker.photoURL || "https://via.placeholder.com/150"}
                  alt={worker.name}
                />
                <div className="absolute bottom-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  {worker.coins} Coins
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-3 text-gray-800">
                {worker.name}
              </h3>

              <p className="text-gray-600 mt-1 text-sm flex items-center gap-2">
                <FaEnvelope className="text-blue-500" />
                {worker.email}
              </p>

              <p className="text-sm text-gray-400 mt-1">Role: {worker.role}</p>
            </div>

            {/* Bottom Section */}
            <div className="mt-4 bg-gray-50 rounded-xl p-3 flex justify-between items-center">
              <div className="flex items-center text-sm text-gray-700 gap-1">
                <FaMapMarkerAlt className="text-red-500" />
                <span>{worker.location || "N/A"}</span>
              </div>

              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < Math.floor(worker.rating || 0)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
            </div>

            {/* Decorative Badge */}
            <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full shadow">
              Top Worker
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestWorker;
