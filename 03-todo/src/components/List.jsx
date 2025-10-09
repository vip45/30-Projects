import React from 'react';

const List = ({ tasks , handleStatus , handleDelete}) => {
  return (
    <div className="main-list-container">
      <ul className="ulist">
        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className={task.status ? "true" : ""}>
              <input type="checkbox" checked={task.status} onChange={()=>handleStatus(index)}  />
              <p>{task.name}</p>
              <button onClick={()=>handleDelete(index)} className='ms-auto bg-danger text-bg-dark border-2 rounded-2 border-danger-subtle fw-medium'>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default List;
