// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const ActionTask = ({ addTaskHandle }) => {
  return (
    <div>
      <div className="mb-14 items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
        <div className="flex items-center space-x-5">
          <button
            onClick={addTaskHandle}
              className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold">
            Add Task
          </button>
          <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionTask;
