import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useBuyer from "../../../hooks/useBuyer";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

const FeaturedTasks = () => {
  const [Tasks] = useBuyer();
  const [showCursor, setShowCursor] = useState(true);
  
  const validTasks = Tasks.filter((task)=>task.required_workers >0)
  const FeatureTasks = validTasks.slice(0, 6);

  return (
    <div className="mt-6">
      <Helmet>
        <title>Micro Platform | Featured Tasks</title>
      </Helmet>
      <h2 className="text-xl md:text-4xl font-bold text-center mb-8 text-blue-600">
        <Typewriter
          words={["Featured Tasks"]}
          loop={5}
          cursor={showCursor}
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          onLoopDone={() => setShowCursor(false)}
        />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {FeatureTasks.map((task) => (
          <div
            key={task._id}
            className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 transform hover:-translate-y-2"
          >
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500">
                <img
                  className="w-full h-full object-cover"
                  src={task.task_image_url || "https://via.placeholder.com/150"}
                  alt={task.task_title}
                />
                <div className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  ${task.payable_amount} Payable
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-4 text-center text-gray-800">
                {task.task_title}
              </h3>
            </div>

            <div className="mt-6 bg-gray-50 rounded-lg p-4 flex justify-between items-center">
              <div className="text-sm text-gray-600 font-medium">Deadline:</div>
              <div className="text-sm text-red-500 font-semibold">{task.completion_date}</div>
            </div>

            <Link to={`/dashboard/task-details/${task._id}`} className="block mt-4">
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </Link>

            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
              Featured Task
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTasks;
