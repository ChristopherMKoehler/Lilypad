import React from 'react';
import merge from 'lodash/merge';

const TaskIndexItem = (props) => {
  const toggleCompleted = (e) => {
    let updatedTask = merge({}, props.task);
    updatedTask.completed = !updatedTask.completed;
    props.updateTask(updatedTask);
  };

  return (
    <li>
      <input type="checkbox" checked={ props.task.completed } onChange={ toggleCompleted }/>
      { props.task.title }
    </li>
  );
};

export default TaskIndexItem;
