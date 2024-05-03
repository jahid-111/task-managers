// eslint-disable-next-line no-unused-vars
import React from "react";
import SearchTask from "./SearchTask";
import ActionTask from "./ActionTask";
import ListTask from "./ListTask";

const TaskBoard = () => {
  return (
    <div className=" w9/12 mx-auto">
      <section className="mb-20" id="tasks">
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask></SearchTask>
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <ActionTask></ActionTask>
            <ListTask></ListTask>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskBoard;
