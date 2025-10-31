import React, { useEffect, useState } from "react";
import Search from "../src/components/Search";
import Modal from "../src/components/Modal";
import List from "../src/components/List";

const Home = () => {
  const [openMod, setopenMod] = useState(false);
  const [tasks, settasks] = useState(()=>{
    const savedTask = localStorage.getItem("tasks");
    return savedTask ? JSON.parse(savedTask) : [];
  });

  const addTask = (task) => {
    if (task.trim() !== "") {
      settasks([...tasks, { name: task, status: false , date:Date.now() }]); // store task object
    }
  };
  const handleModal = () => {
    setopenMod(openMod ? false : true);
  };

  const handleStatus = (index) =>{
    const newTask = [...tasks];
    newTask[index].status = !newTask[index].status;
    console.log(newTask[index]);
    settasks(newTask);
  }

  const handleDelete = (index) =>{
    const newTask = tasks.filter((_,i)=>i!==index);
    settasks(newTask);
  }

  useEffect(() => {
    console.log(tasks);
    localStorage.setItem("tasks",JSON.stringify(tasks));  
  }, [tasks]);

  return (
    <>
      <Search />
      <List tasks={tasks} handleStatus={handleStatus} handleDelete={handleDelete}/>

      {openMod && (
        <Modal closeMod={() => setopenMod(false)} addTask={addTask} />
      )}

      <button
        className={`${openMod ? "cross" : ""} add-btn`}
        onClick={handleModal}
      >
        <img src="../src/assets/add.svg" alt="" />
      </button>
    </>
  );
};

export default Home;
  