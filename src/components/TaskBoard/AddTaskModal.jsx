// eslint-disable-next-line no-unused-vars
import React from "react";

const AddTaskModal = () => {
  return (
    <div className=" bg-green-600 rounded-md w-11/12 sm:w-6/12 mx-auto p-4">
      <h3 className=" text-center text-2xl font-semibold my-2">Add New Task</h3>

      <div>
        <h5 className=" text-xl">Title</h5>
        <input
          className=" bg-slate-300 p-2 py-2 w-full text-gray-900 font-semibold outline-none rounded-[4px] "
          type="text"
        />
      </div>

      <div className="my-2">
        <h5 className=" text-xl">Description</h5>
        <textarea
          className=" bg-slate-300 p-2 text-gray-900 font-semibold outline-none rounded-[4px] w-full h-60"
          name=""
          id=""
        ></textarea>
      </div>

      <div className=" w-full flex justify-start items-center">
        <div className=" w-6/12">
          <h5 className=" text-xl">Tags</h5>
          <input
            className=" bg-slate-300 p-2 w-full text-gray-900 font-semibold outline-none rounded-[4px] "
            type="text"
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
            >
              <option value="volvo">Normal</option>
              <option value="saab">High</option>
              <option value="opel">Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
