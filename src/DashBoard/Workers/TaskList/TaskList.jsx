import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBuyer from "../../../hooks/useBuyer";
import { Helmet } from "react-helmet";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

const TaskList = () => {
  const [Tasks] = useBuyer();
  const [sortedTasks, setSortedTasks] = useState([]);
  const [sortOrder, setSortOrder] = useState(null); // 'asc' or 'desc'

  useEffect(() => {
    setSortedTasks(Tasks.filter((task) => task.required_workers > 0));
  }, [Tasks]);

  const sortTasks = (order) => {
    const sorted = [...sortedTasks].sort((a, b) => {
      if (order === "asc") return a.payable_amount - b.payable_amount;
      if (order === "desc") return b.payable_amount - a.payable_amount;
      return 0;
    });
    setSortedTasks(sorted);
    setSortOrder(order);
  };

  return (
    <div className="p-8">
      <Helmet>
        <title>Micro Platform | TaskList</title>
      </Helmet>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold">Available Tasks</h2>
        <div className="flex gap-2">
          <button
            onClick={() => sortTasks("asc")}
            className={`btn btn-outline ${sortOrder === "asc" && "btn-active"}`}
          >
            <FaSortAmountUp className="mr-2" /> Ascending Price
          </button>
          <button
            onClick={() => sortTasks("desc")}
            className={`btn btn-outline ${sortOrder === "desc" && "btn-active"}`}
          >
            <FaSortAmountDown className="mr-2" /> Descending Price
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sortedTasks.map((task) => (
          <div
            key={task._id}
            className="border border-gray-300 p-4 rounded-lg shadow-md bg-white h-full flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{task.task_title}</h3>
              <p>Buyer: {task.buyer_name}</p>
              <p>Completion Date: {task.completion_date}</p>
              <p>Payable Amount: ${task.payable_amount}</p>
              <p>Required Workers: {task.required_workers}</p>
            </div>
            <div className="mt-4">
              <Link to={`/dashboard/task-details/${task._id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
