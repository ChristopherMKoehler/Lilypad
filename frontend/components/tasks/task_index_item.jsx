import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router';

const TaskIndexItem = (props) => {
  const toggleCompleted = (e) => {
    let updatedTask = merge({}, props.task);
    updatedTask.completed = !updatedTask.completed;
    props.updateTask(updatedTask);
  };

  const redirectToShow = (e) => {
    props.router.push(`home/lists/${props.params.id}/tasks/${props.task.id}`);
  };
  
  return (
    <li onClick={ redirectToShow }>
      <input type="checkbox"
        checked={ props.task.completed }
        className='task-checkbox'
        onChange={ toggleCompleted }/>
      { props.task.title }
    </li>
  );
};

export default withRouter(TaskIndexItem);
