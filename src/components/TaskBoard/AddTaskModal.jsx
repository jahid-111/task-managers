// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const AddTaskModal = ({ onSave, taskUpdate, closeToClick }) => {
  const [task, setTasks] = useState(
    taskUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: "",
      priority: [],
      isFavorite: false,
    }
  );

  const [isEdit, setIsEdit] = useState(Object.is(taskUpdate, null));

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "tags") {
      value = value.split(",");
    }
    setTasks({
      ...task,
      [name]: value,
    });
  };
  console.log(task);

  return (
    <>
      <div className=" bg-gray-500 bg-opacity-80 h-full z-10 absolute  top-0 left-0 "></div>

      <htmlForm className=" bg-green-600 rounded-md w-full  sm:w-6/12 mx-auto z-10 absolute top-32 sm:left-1/4 p-4">
        <div className="absolute right-0">
          <button onClick={closeToClick}>
            <FaXmark
              className="  h-5 w-5 me-4 bg-red-400"
              title="Close Modal"
            ></FaXmark>
          </button>
        </div>

        <h3 className=" text-center text-2xl font-semibold my-2">
          {isEdit ? "Add New Task" : "Edit This Task"}
        </h3>

        <div>
          <h5 className=" text-xl">Title</h5>
          <input
            className=" bg-slate-300 p-2 py-2 w-full text-gray-900 font-semibold outline-none rounded-[4px] "
            type="text"
            name="title"
            id="title"
            value={task.title}
            onChange={handleChange}
          />
        </div>

        <div className="my-2">
          <h5 className=" text-xl">Description</h5>
          <textarea
            className=" bg-slate-300 p-2 text-gray-900 font-semibold outline-none rounded-[4px] w-full h-60"
            name="description"
            id="description"
            value={task.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className=" w-full flex justify-start items-center">
          <div className=" w-6/12">
            <h5 className=" text-xl">Tags</h5>
            <input
              className=" bg-slate-300 p-2 w-full text-gray-900 font-semibold outline-none rounded-[4px] "
              type="text"
              name="tags"
              id="tags"
              value={task.tags}
              onChange={handleChange}
            />
          </div>

          <div className=" w-6/12 flex justify-end items-center ">
            <div className=" h-10  mt-6 flex justify-center items-center px-3 rounded-[4px] ">
              <label className="font-semibold " htmlFor="priority">
                Priority :
              </label>

              <select
                className=" h-8 ms-2 w-22 bg-yellow-200 text-gray-900 font-semibold outline-none rounded-[4px] "
                id="priority"
                name="priority"
                value={task.priority}
                onChange={handleChange}
              >
                <option value="Normal">Normal</option>
                <option value="High">High</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={() => onSave(task, isEdit)}
          type="submit"
          className="bg-gray-600 mt-5 py-2 rounded-md font-semibold w-2/12 block mx-auto"
        >
          {isEdit ? "Add to Task" : "Edit This Task"}
        </button>
      </htmlForm>
    </>
  );
};

export default AddTaskModal;
