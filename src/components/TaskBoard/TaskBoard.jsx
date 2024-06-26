// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import SearchTask from "./SearchTask";
import ActionTask from "./ActionTask";
import ListTask from "./ListTask";
import AddTaskModal from "./AddTaskModal";
import EmptyTask from "./EmptyTask";

const defaultTask = {
  id: crypto.randomUUID(),
  title: "Learn React",
  description:
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem ea nihil laudantium doloremq",
  tags: ["web", "reactJS", "javascript"],
  priority: "High",
  isFavorite: false,
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState([defaultTask]);
  const [openModal, setOpenModal] = useState(false);
  const [updateTask, setUpdateTask] = useState(null);

  function addTaskHandle(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((taskId) => {
          if (taskId.id === newTask.id) {
            return newTask;
          }
          return taskId;
        })
      );
    }
    setOpenModal(false);
  }

  function handleEditTask(edited) {
    setUpdateTask(edited);
    setOpenModal(true);
  }

  function closeModalToclick() {
    setOpenModal(false);
    setUpdateTask(null);
  }
  function handleDeleteThis(taskId) {
    const deleteThisTask = tasks.filter((task) => task.id !== taskId);
    setTasks(deleteThisTask);
  }

  function deleteTaskAll() {
    tasks.length = 0;
    setTasks([...tasks]);
  }

  function handleFavorite(taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    console.log(taskIndex);
    const newTask = [...tasks];
    newTask[taskIndex].isFavorite = !newTask[taskIndex].isFavorite;
    setTasks(newTask);
  }

  function handleSearch(searchTerm) {
    const search = tasks.filter((searchInput) =>
      searchInput.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTasks([...search]);
  }

  return (
    <div className="mx-auto w-full">
      {openModal && (
        <AddTaskModal
          onSave={addTaskHandle}
          taskUpdate={updateTask}
          closeToClick={closeModalToclick}
        ></AddTaskModal>
      )}

      <section className="mb-20" id="tasks">
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask OnSearch={handleSearch}></SearchTask>
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <ActionTask
              addTaskHandle={() => setOpenModal(true)}
              deleteTaskAll={deleteTaskAll}
            ></ActionTask>
            {tasks.length > 0 ? (
              <ListTask
                tasks={tasks}
                onEdit={handleEditTask}
                deleteThisTask={handleDeleteThis}
                onFav={handleFavorite}
              ></ListTask>
            ) : (
              <EmptyTask></EmptyTask>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskBoard;
