import React, { useState } from "react";

export default function ToDoList({ name, completed, deadline }) {
  const [isChecked, setIsChecked] = useState(completed);

  const Change = () => {
    setIsChecked(!isChecked);
  };

  const formattedDeadline = deadline.toDateString();

  return (
    <ul>
      <li className={isChecked ? "completed" : ""}>
        <div className="task-info">
          <input type="checkbox" checked={isChecked} onChange={Change} />
          {name}
          <span className="task-deadline">{formattedDeadline}</span>
        </div>
        <button>Delete</button>
      </li>
    </ul>
  );
}