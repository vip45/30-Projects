import React from "react";

const List = () => {
  return (
    <div className="list">
      <div >
        <div className="d-flex list-checkbox shadow my-1">
          <input type="checkbox" name="check" className="" />
          <p >This is task</p>
            <button className="bg-danger list-delete-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default List;
