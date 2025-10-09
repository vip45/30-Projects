import React, { useState } from "react";

const Modal = ({ closeMod, addTask }) => {
  const [taskInput, settaskInput] = useState("");

  const handleTask = () => {
    if (taskInput.trim() != "") {
      addTask(taskInput);
      settaskInput("");
      closeMod()
    }
  };

  return (
    <div className="modal-div">
      <h2>New Note</h2>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => settaskInput(e.target.value)}
      />
      <div className="modal-btns">
        <button onClick={closeMod} className="modal-cancel-btn">
          Cancel
        </button>
        <button onClick={handleTask} className="modal-add-btn">
          Add
        </button>
      </div>
    </div>
  );
};

export default Modal;
