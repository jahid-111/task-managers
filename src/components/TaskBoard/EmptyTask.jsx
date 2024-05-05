// eslint-disable-next-line no-unused-vars
import React from "react";

const EmptyTask = () => {
  return (
    <div className=" w-full rounded-md  bg-red-400 text-stone-800 text-4xl font-semibold text-center">
      <p>No Task Found ...!</p>
      <p className=" my-4">
        {" "}
        <span className=" rounded-xl bg-blue-500 p-4"> Click On </span>Add Task
      </p>
    </div>
  );
};

export default EmptyTask;
